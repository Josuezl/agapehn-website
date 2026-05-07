export interface YouTubeVideo {
  videoId: string
  title: string
  publishedAt: string
  publishedFormatted: string
  thumbnail: string
  url: string
}

const CHANNEL_ID = 'UCg16e-vM_wlk2Jk9ix5mHLQ'
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

export async function getRecentVideos(count = 6): Promise<YouTubeVideo[]> {
  try {
    const res = await fetch(RSS_URL, {
      cache: 'no-store',
      headers: { Accept: 'application/xml, text/xml, */*' },
    })
    if (!res.ok) return []

    const xml = await res.text()
    const entries = xml.split('<entry>').slice(1)

    return entries.slice(0, count).map((entry) => {
      const videoId = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1] ?? ''
      const rawTitle = entry.match(/<title>([^<]+)<\/title>/)?.[1] ?? ''
      const published = entry.match(/<published>([^<]+)<\/published>/)?.[1] ?? ''

      return {
        videoId,
        title: decodeXmlEntities(rawTitle),
        publishedAt: published,
        publishedFormatted: formatDate(published),
        thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        url: `https://www.youtube.com/watch?v=${videoId}`,
      }
    })
  } catch {
    return []
  }
}
