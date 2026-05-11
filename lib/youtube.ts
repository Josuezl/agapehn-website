export interface YouTubeVideo {
  videoId: string
  title: string
  publishedAt: string
  publishedFormatted: string
  thumbnail: string
  url: string
}

const CHANNEL_ID = 'UCMiiQSq1A9LSFl5C2t_dlPw'
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`

const MONTHS_ES = [
  'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic',
]

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return ''
  return `${MONTHS_ES[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`
}

function decodeXmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
}

const STREAMS_URL = 'https://www.youtube.com/@ministeriointernacionalaga1060/streams'

export async function getRecentStreams(count = 4): Promise<YouTubeVideo[]> {
  try {
    const res = await fetch(STREAMS_URL, {
      next: { revalidate: 3600 },
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; bot)' },
    })
    if (!res.ok) return []

    const html = await res.text()

    // Extract unique video IDs from page JSON
    const seen = new Set<string>()
    const ids: string[] = []
    for (const match of html.matchAll(/"videoId":"([^"]{11})"/g)) {
      const id = match[1]
      if (!seen.has(id)) {
        seen.add(id)
        ids.push(id)
      }
      if (ids.length === count) break
    }

    if (ids.length === 0) return []

    // Fetch titles via oEmbed in parallel
    const videos = await Promise.all(
      ids.map(async (videoId) => {
        try {
          const oe = await fetch(
            `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
            { next: { revalidate: 3600 } }
          )
          const data = oe.ok ? await oe.json() : {}
          return {
            videoId,
            title: data.title ?? '',
            publishedAt: '',
            publishedFormatted: '',
            thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
            url: `https://www.youtube.com/watch?v=${videoId}`,
          } as YouTubeVideo
        } catch {
          return null
        }
      })
    )

    return videos.filter(Boolean) as YouTubeVideo[]
  } catch {
    return []
  }
}

export async function getRecentVideos(count = 6): Promise<YouTubeVideo[]> {
  try {
    const res = await fetch(RSS_URL, {
      next: { revalidate: 3600 },
      headers: { Accept: 'application/xml, text/xml, */*' },
    })
    if (!res.ok) return []

    const xml = await res.text()
    const entries = xml.split('<entry>').slice(1)

    const seen = new Set<string>()
    const videos: YouTubeVideo[] = []

    for (const entry of entries) {
      const videoId = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1] ?? ''
      if (!videoId || seen.has(videoId)) continue
      seen.add(videoId)

      const rawTitle = entry.match(/<title>([^<]+)<\/title>/)?.[1] ?? ''
      const published = entry.match(/<published>([^<]+)<\/published>/)?.[1] ?? ''

      videos.push({
        videoId,
        title: decodeXmlEntities(rawTitle),
        publishedAt: published,
        publishedFormatted: formatDate(published),
        thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        url: `https://www.youtube.com/watch?v=${videoId}`,
      })

      if (videos.length === count) break
    }

    return videos
  } catch {
    return []
  }
}
