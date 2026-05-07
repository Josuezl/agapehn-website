import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getRecentVideos } from '@/lib/youtube'

export const metadata: Metadata = {
  title: 'Mensajes',
  description:
    'Escucha los mensajes y sermones del Ministerio Internacional Ágape. Series bíblicas, devocionales y enseñanzas para tu vida.',
}

//  Configuración del canal de YouTube 
const YOUTUBE_CHANNEL = 'https://www.youtube.com/@ministeriointernacionalaga1060'

// Para mostrar el último video en la sección destacada,
// copia el ID del video de la URL de YouTube (la parte después de "v=")
// Ejemplo: https://youtube.com/watch?v=dQw4w9WgXcQ → ID = "dQw4w9WgXcQ"
const FEATURED_VIDEO_ID = 'yJo-iSk4cIQ' // ← Pega aquí el ID del último mensaje


//  Lista curada de sermones 
// Para agregar un video: ve al video en YouTube, copia el ID de la URL
// (la parte después de "v="), y agrégalo aquí con título y pastor.
// El thumbnail se carga automáticamente desde YouTube.
const CURATED_VIDEOS = [
  { id: 'Fe0oPyArinI', title: 'Jesús resucitó', pastor: 'Ps. Armando Medina' },
  { id: 'WrJlD9OIzOM', title: 'Integridad', pastor: 'Ps. Armando Medina' },
  { id: '04vPinRcQQs', title: 'Integridad', pastor: 'Ps. Alejandro Medina' },
  { id: '1Cv2vrNEMR4', title: 'Manifestaciones del reino', pastor: 'Ps. Armando Medina' },
  { id: 'CBPYjwpifr8', title: 'DÚNAMIS', pastor: 'Ps. Armando Medina' },
  { id: 'Pq9uW3_GMU4', title: 'El Poder de la Expectativa', pastor: 'Ps. Armando Medina' },
  { id: '2ZM9PWh09l8', title: 'La paradoja del reino', pastor: 'Ps. Gladis de Medina' },
  { id: 'BqmdtTBptS8', title: 'La paradoja del reino', pastor: 'Ps. Armando Medina' },
  { id: 'G9OLO8BQlB8', title: 'La bendición de ser hermano', pastor: 'Ps. Armando Medina' },
  { id: '-nDR6Wg8SrI', title: 'Agradecidos y bendecidos', pastor: 'Ps. Armando Medina' },
  { id: '3b3uD371-ZI', title: '¿Qué dicen de mí?', pastor: 'Ps. Alejandro Medina' },
  { id: '4nppJq-v8l4', title: 'La Expectativa', pastor: 'Ps. Armando Medina' },
]

export default async function MensajesPage() {
  const [liveVideos, hasVideo] = await Promise.all([
    getRecentVideos(8),
    Promise.resolve(FEATURED_VIDEO_ID.trim() !== ''),
  ])

  const recentVideos = CURATED_VIDEOS.map((v) => ({
    videoId: v.id,
    title: v.title,
    pastor: v.pastor,
    thumbnail: `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`,
    url: `https://www.youtube.com/watch?v=${v.id}`,
  }))

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1438232992991-995b7058bdb3?q=80&w=2073&auto=format&fit=crop"
          alt="Mensajes"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deeper/85 to-navy-deeper/75" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-teal font-semibold tracking-[0.3em] text-sm uppercase mb-4">
            Biblioteca de mensajes
          </p>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl">
            MENSAJES
          </h1>
          <p className="text-white/70 mt-4 text-lg max-w-xl mx-auto">
            Escucha la Palabra de Dios que transforma vidas.
          </p>
        </div>
      </section>

      {/*  SERMÓN DESTACADO  */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-10 bg-teal rounded-full" />
            <p className="text-teal font-bold text-sm uppercase tracking-widest">
              Mensaje más reciente
            </p>
          </div>

          {hasVideo ? (
            /*  Video a ancho completo cuando hay ID configurado  */
            <div className="bg-gray-50 rounded-3xl overflow-hidden">
              <div className="relative aspect-video bg-navy-deeper">
                <iframe
                  src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}?rel=0&modestbranding=1`}
                  title="Sermón destacado — Ministerio Internacional Ágape"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-500 text-sm">
                  Reproduce el mensaje directamente o ábrelo en YouTube.
                </p>
                <a
                  href={`https://www.youtube.com/watch?v=${FEATURED_VIDEO_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all hover:scale-105 text-sm whitespace-nowrap"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Ver en YouTube →
                </a>
              </div>
            </div>
          ) : (
            /*  Placeholder cuando no hay video configurado  */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-gray-50 rounded-3xl overflow-hidden">
              <div className="relative aspect-video bg-navy-deeper">
                <a
                  href={YOUTUBE_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block absolute inset-0"
                  aria-label="Ver en YouTube"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=1200&h=675&fit=crop"
                    alt="Sermón destacado"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/50 transition-colors flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <span className="text-white text-sm font-semibold bg-black/50 px-4 py-1 rounded-full">
                        Ver en YouTube
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="p-8 lg:p-10">
                <p className="text-teal text-sm font-bold uppercase tracking-wider mb-3">
                  Últimos mensajes
                </p>
                <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-navy mb-4 leading-tight">
                  Mira todos nuestros mensajes en YouTube
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Encuentra sermones, series bíblicas y devocionales del
                  Ministerio Internacional Ágape en nuestro canal de YouTube.
                </p>
                <a
                  href={YOUTUBE_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Ir al canal →
                </a>
              </div>
            </div>
          )}
        </div>
      </section>


      {/*  ÚLTIMOS MENSAJES (RSS en vivo)  */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-2">
                En vivo y recientes
              </p>
              <h2 className="section-title text-navy">Últimos mensajes</h2>
            </div>
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex text-navy font-semibold hover:text-teal transition-colors"
            >
              Ver canal →
            </a>
          </div>

          {liveVideos.length === 0 && (
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div>
                <p className="font-heading font-bold text-navy text-lg">Ver todos los mensajes en YouTube →</p>
                <p className="text-gray-500 text-sm">@ministeriointernacionalaga1060</p>
              </div>
            </a>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {liveVideos.map((v) => (
              <a
                key={v.videoId}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl overflow-hidden shadow-md card-hover block group bg-navy-deeper"
              >
                <div className="relative aspect-video">
                  <Image
                    src={v.thumbnail}
                    alt={v.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-heading font-bold text-base leading-snug line-clamp-2">
                      {v.title}
                    </p>
                    <p className="text-white/60 text-xs mt-1">{v.publishedFormatted}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/*  SERIE DE MENSAJES  */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-2">
                Biblioteca
              </p>
              <h2 className="section-title text-navy">Serie de mensajes</h2>
            </div>
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex text-navy font-semibold hover:text-teal transition-colors"
            >
              Ver todos →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recentVideos.map((video) => (
              <a
                key={video.videoId}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover group block"
              >
                <div className="relative aspect-video bg-navy-deeper">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/40 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-5 h-5 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1">
                    <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    YouTube
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-navy text-lg leading-snug mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-500">{video.pastor}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-colors text-lg shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Ver todos los mensajes en YouTube
            </a>
          </div>
        </div>
      </section>

      {/*  ÁGAPE ORA  */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">
                Devocional diario
              </p>
              <h2 className="section-title text-white mb-5">Ágape Ora</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Cada lunes, miércoles y viernes a las 5:00 a.m. transmitimos
                nuestro devocional por Facebook Live. Comienza tu día en la
                presencia de Dios.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="bg-white/10 rounded-xl px-4 py-3 text-center">
                  <p className="font-bold text-teal">Lun · Mié · Vie</p>
                  <p className="text-white/70 text-sm">5:00 a.m.</p>
                </div>
                <div className="bg-white/10 rounded-xl px-4 py-3">
                  <p className="font-bold text-white">Facebook Live</p>
                  <p className="text-white/50 text-xs">
                    @MinisterioInternacionalÁgape
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.facebook.com/MinisterioInternacionalAgape"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Ver en Facebook
                </a>
                <a
                  href={YOUTUBE_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Canal YouTube
                </a>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=800&auto=format&fit=crop"
                alt="Ágape Ora"
                fill
                className="object-cover opacity-70"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
