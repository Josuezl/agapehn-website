import Image from 'next/image'
import type { Metadata } from 'next'
import { getRecentVideos } from '@/lib/youtube'

export const metadata: Metadata = {
  title: 'Ministerio Internacional Ágape | En esta casa, cabemos todos',
  description: 'Una iglesia en Honduras con más de 26 años sirviendo a Dios y la sociedad. Servicios martes y domingos. ¡Bienvenido a casa!',
}

const YOUTUBE_CHANNEL = 'https://www.youtube.com/@ministeriointernacionalaga1060'

const CURATED_VIDEOS = [
  { id: 'Fe0oPyArinI', title: 'Jesús resucitó', pastor: 'Ps. Armando Medina' },
  { id: 'WrJlD9OIzOM', title: 'Integridad', pastor: 'Ps. Armando Medina' },
  { id: '04vPinRcQQs', title: 'Integridad', pastor: 'Ps. Alejandro Medina' },
  { id: '1Cv2vrNEMR4', title: 'Manifestaciones del reino', pastor: 'Ps. Armando Medina' },
  { id: 'CBPYjwpifr8', title: 'DÚNAMIS', pastor: 'Ps. Armando Medina' },
  { id: 'Pq9uW3_GMU4', title: 'El Poder de la Expectativa', pastor: 'Ps. Armando Medina' },
  { id: '2ZM9PWh09l8', title: 'La paradoja del reino', pastor: 'Ps. Gladis de Medina' },
  { id: 'BqmdtTBptS8', title: 'La paradoja del reino', pastor: 'Ps. Armando Medina' },
]

const doctrinas = [
  { title: 'La Biblia', text: 'Creemos que la Biblia es la Palabra de Dios, inspirada, infalible y la autoridad final en fe y conducta.' },
  { title: 'La Trinidad', text: 'Creemos en un solo Dios eterno que existe en tres personas: Padre, Hijo y Espíritu Santo.' },
  { title: 'Salvación', text: 'Creemos que la salvación es por gracia mediante la fe en Jesucristo, quien murió y resucitó por nuestros pecados.' },
  { title: 'El Espíritu Santo', text: 'Creemos en el bautismo del Espíritu Santo y en los dones del Espíritu para el creyente de hoy.' },
  { title: 'La Iglesia', text: 'Creemos que la iglesia es el cuerpo de Cristo, llamada a hacer discípulos en todas las naciones.' },
  { title: 'La Segunda Venida', text: 'Creemos en el regreso literal y glorioso de Jesucristo para establecer su reino eterno.' },
]

const expectations = [
  { title: 'Alabanza y Adoración', description: 'Experimentarás una poderosa alabanza guiada por Agape Worship, con música contemporánea que prepara el corazón.' },
  { title: 'Mensaje de la Palabra', description: 'Un mensaje práctico y edificante, fundamentado en la Biblia, relevante para tu vida diaria.' },
  { title: 'Comunidad y Familia', description: 'Serás recibido como parte de nuestra familia desde el primer momento.' },
  { title: 'Agape Kids', description: 'Tus niños en un ambiente seguro y divertido, aprendiendo la Palabra según su edad.' },
  { title: 'Estacionamiento', description: 'Equipo dedicado a ayudarte desde que llegas. ¡Tu primera impresión es nuestra prioridad!' },
  { title: 'Equipo Info', description: 'Listo para responder todas tus preguntas y orientarte en tu primera visita.' },
]

const mainMinistries = [
  { name: 'Ágape Ora', description: 'Devocional transmitido por Facebook Live los lunes, miércoles y viernes a las 5:00 a.m.', schedule: 'Lun · Mié · Vie — 5:00 a.m.' },
  { name: 'Evangelismo', description: 'Promueve y esparce a todo individuo el mensaje de salvación, paz y justicia de Cristo Jesús.', schedule: 'Salidas semanales' },
  { name: 'Agape Worship', description: 'Guía al pueblo en la alabanza y adoración a Dios. Escucha nuestra música en plataformas digitales.', schedule: 'Servicios dominicales' },
  { name: 'Extensión Ministerial', description: 'Red de hospitalidad. Identifica y da la bienvenida a personas que asisten por primera vez.', schedule: 'Todos los servicios' },
]

const communityMinistries = [
  { name: 'Tribus', description: 'Grupos de amistad para encaminarte hacia la madurez en Cristo.', tag: 'Todas las edades' },
  { name: 'Explosión', description: 'El ministerio juvenil. Domingos a las 11:30 a.m.', tag: 'Jóvenes' },
  { name: 'Agape Kids', description: 'Formamos a los niños en el conocimiento de la Palabra de Dios.', tag: 'Niños' },
  { name: 'Grupos en Casa', description: 'Familias que abren su hogar para compartir el evangelio.', tag: 'Comunidad' },
]

const hondurasChurches = [
  { pastors: 'Armando y Gladis de Medina', city: 'Tegucigalpa', region: 'Francisco Morazán', isMain: true },
  { pastors: 'Jorge y Alicia de Zúniga', city: 'Santa Elena', region: 'Olancho' },
  { pastors: 'Juan y Sayda de Guerrero', city: 'San Manuel', region: 'Cortés' },
  { pastors: 'Antonio y Luz de Lanza', city: 'Valle de Ángeles', region: 'Francisco Morazán' },
  { pastors: 'Reniery y Verónica de Coello', city: 'Danlí y El Ocotal', region: 'El Paraíso' },
  { pastors: 'Mario y Karina de Rodas', city: 'La Paz', region: 'La Paz' },
  { pastors: 'Migdaleder y Nohemí de Rodríguez', city: 'San Pedro Sula / Tomalá', region: 'Cortés / Lempira' },
  { pastors: 'Ronald y Gloria de Villatoro', city: 'Comayagua', region: 'Comayagua' },
  { pastors: 'Alejandro y Gabriela de Medina', city: 'Tegucigalpa', region: 'Francisco Morazán', note: 'Pastores Jóvenes — Explosión' },
]

const internationalChurches = [
  { pastors: 'Walter y Yanci de Artiga', city: 'San Salvador', region: 'El Salvador' },
  { pastors: 'Maribel Colindres', city: 'Ciudad de Panamá', region: 'Panamá' },
]

export default async function HomePage() {
  const [liveVideos] = await Promise.all([getRecentVideos(8)])
  const curatedVideos = CURATED_VIDEOS.map((v) => ({
    videoId: v.id, title: v.title, pastor: v.pastor,
    thumbnail: `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`,
    url: `https://www.youtube.com/watch?v=${v.id}`,
  }))

  return (
    <>
      {/* 
          INICIO
       */}
      <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/Easy Worship Background - Rustic.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deeper/80 via-navy-deeper/60 to-navy-deeper/90" />
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <p className="text-teal font-semibold tracking-[0.3em] text-sm md:text-base uppercase mb-4">
            Ministerio Internacional Ágape
          </p>
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6">
            EN ESTA CASA,<br />
            <span className="text-teal">CABEMOS</span> TODOS
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Más de 26 años sirviendo a Honduras y las naciones. Bienvenido a tu nueva familia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#visita" className="btn-primary text-base px-10 py-4">Planifica tu visita</a>
            <a href="#mensajes" className="btn-secondary text-base px-10 py-4">Ver mensajes</a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Horarios bar */}
      <section className="bg-navy py-6">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <p className="text-teal font-bold text-sm uppercase tracking-widest hidden md:block">Horarios</p>
            <div className="hidden md:block w-px h-6 bg-white/20" />
            {[
              { day: 'Martes', time: '6:30 p.m.' },
              { day: 'Domingo', time: '8:00 a.m.' },
              { day: 'Domingo', time: '9:40 a.m.' },
              { day: 'Domingo', time: '11:30 a.m.', note: 'Jóvenes' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-white">
                <span className="font-bold">{s.day}</span>
                <span className="text-white/60">{s.time}</span>
                {s.note && <span className="text-xs text-teal bg-teal/20 px-2 py-0.5 rounded-full">{s.note}</span>}
                {i < 3 && <span className="ml-4 hidden sm:block w-px h-4 bg-white/20" />}
              </div>
            ))}
            <div className="hidden md:block w-px h-6 bg-white/20" />
            <a href="#visita" className="text-teal font-semibold text-sm hover:underline hidden md:block">¿Cómo llegar? →</a>
          </div>
        </div>
      </section>

      {/* 
          NOSOTROS
       */}
      <section id="nosotros" className="py-24 bg-navy-deeper">
        <div className="container-custom">
          {/* Historia */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/Imagen 1.jpg" alt="Comunidad Ágape" fill className="object-cover object-top" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-teal text-white p-5 rounded-2xl shadow-xl hidden md:block">
                <p className="font-bold text-3xl">26+</p>
                <p className="text-sm font-medium">años de historia</p>
              </div>
            </div>
            <div>
              <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">Nuestra historia</p>
              <h2 className="section-title text-white mb-6">Una iglesia con propósito</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                El Ministerio Internacional Ágape fue fundado el 5 de marzo de 1999, bajo la visión de los pastores
                Armando y Gladis de Medina. Desde sus inicios, la iglesia se ha caracterizado por ser un lugar de
                amor, transformación y servicio.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Durante más de 26 años hemos preparado hombres y mujeres con el carácter para asumir la asignación
                que Dios nos ha delegado, resultando en la apertura de once iglesias en Honduras, El Salvador y Panamá.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                En 2022 nació <strong className="text-white">REMA (Red Ministerial Ágape)</strong>, uniendo pastoralmente
                todas las iglesias bajo un mismo propósito: hacer discípulos y expandir el reino de Dios.
              </p>
            </div>
          </div>

          {/* Doctrinas */}
          <div className="text-center mb-12">
            <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">Lo que creemos</p>
            <h2 className="section-title text-white">Nuestras doctrinas</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {doctrinas.map((d, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 transition-shadow">
                <h3 className="font-heading font-bold text-white text-lg mb-2">{d.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>

          {/* Pastores */}
          <div className="text-center mb-12">
            <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">Liderazgo</p>
            <h2 className="section-title text-white">Nuestros pastores</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { name: 'Pastor Armando Medina', role: 'Pastor Principal', image: '/Pastor.png' },
              { name: 'Pastora Gladis de Medina', role: 'Pastora Principal', image: '/Pastora.png' },
            ].map((p, i) => (
              <div key={i} className="text-center bg-white/5 rounded-3xl p-8">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-teal/30">
                  <Image src={p.image} alt={p.name} fill className="object-cover object-top" />
                </div>
                <h3 className="font-heading font-bold text-white text-xl">{p.name}</h3>
                <p className="text-teal font-semibold text-sm mt-1">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
          VISITA
       */}
      <section id="visita" className="py-24 bg-navy">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">Te esperamos</p>
            <h2 className="section-title text-white mb-4">Planifica tu visita</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">En esta casa cabemos todos. Tu primera visita es especial para nosotros.</p>
          </div>

          {/* Horarios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              { day: 'Martes', time: '6:30 p.m.', description: 'Servicio familiar entre semana' },
              { day: 'Domingo', time: '8:00 a.m.', description: 'Servicio matutino' },
              { day: 'Domingo', time: '9:40 a.m.', description: 'Servicio principal' },
              { day: 'Domingo', time: '11:30 a.m.', description: 'Servicio de jóvenes — Explosión' },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6 text-center border border-white/10">
                <p className="font-heading font-bold text-white text-xl">{s.day}</p>
                <p className="text-teal font-bold text-2xl my-1">{s.time}</p>
                <p className="text-white/60 text-sm">{s.description}</p>
              </div>
            ))}
          </div>

          {/* Qué esperar */}
          <div className="text-center mb-10">
            <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">Qué esperar</p>
            <h3 className="font-heading font-bold text-3xl text-white">Tu primera vez en Ágape</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {expectations.map((e, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6 border border-white/10">
                <h4 className="font-heading font-bold text-white text-lg mb-2">{e.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{e.description}</p>
              </div>
            ))}
          </div>

          {/* Ubicación */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">Ubicación</p>
              <h3 className="font-heading font-bold text-3xl text-white mb-4">¿Cómo llegar?</h3>
              <div className="space-y-3 text-white/70">
                <p className="flex items-start gap-3">
                  <span className="text-xl mt-0.5"></span>
                  <span>La Era, anillo periférico, entre Monolit y gasolinera Uno, 3 cuadras antes del puente de la San Miguel, Tegucigalpa, Honduras.</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xl"></span>
                  <span>Estacionamiento disponible</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xl"></span>
                  <span>Acceso para personas con movilidad reducida</span>
                </p>
              </div>
            </div>
            <div className="h-72 bg-white/10 rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="text-center text-white/40">
                <p className="text-4xl mb-2"></p>
                <p className="font-semibold">Mapa de ubicación</p>
                <p className="text-sm">Tegucigalpa, Honduras</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
          MENSAJES
       */}
      <section id="mensajes" className="py-24 bg-navy-deeper">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">Biblioteca</p>
            <h2 className="section-title text-white">Mensajes</h2>
          </div>

          {/* Últimos mensajes RSS */}
          {liveVideos.length > 0 && (
            <div className="mb-16">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-2">En vivo y recientes</p>
                  <h3 className="font-heading font-bold text-3xl text-white">Últimos mensajes</h3>
                </div>
                <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex text-white font-semibold hover:text-teal transition-colors">Ver canal →</a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {liveVideos.map((v) => (
                  <a key={v.videoId} href={v.url} target="_blank" rel="noopener noreferrer"
                    className="rounded-2xl overflow-hidden shadow-md card-hover block group bg-navy-deeper">
                    <div className="relative aspect-video">
                      <Image src={v.thumbnail} alt={v.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                        <p className="font-heading font-bold text-sm leading-snug line-clamp-2">{v.title}</p>
                        <p className="text-white/60 text-xs mt-1">{v.publishedFormatted}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Serie de mensajes curada */}
          <div>
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-2">Biblioteca</p>
                <h3 className="font-heading font-bold text-3xl text-white">Serie de mensajes</h3>
              </div>
              <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex text-white font-semibold hover:text-teal transition-colors">Ver todos →</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {curatedVideos.map((video) => (
                <a key={video.videoId} href={video.url} target="_blank" rel="noopener noreferrer"
                  className="bg-white/10 rounded-2xl overflow-hidden border border-white/10 card-hover group block">
                  <div className="relative aspect-video bg-navy-deeper">
                    <Image src={video.thumbnail} alt={video.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/40 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-heading font-bold text-white text-base leading-snug mb-1 line-clamp-2">{video.title}</h4>
                    <p className="text-sm text-white/60">{video.pastor}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="text-center mt-10">
              <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-colors text-lg shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                Ver todos los mensajes en YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 
          MINISTERIOS
       */}
      <section id="ministerios" className="py-24 bg-navy">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">Conéctate</p>
            <h3 className="font-heading font-bold text-3xl text-white">Encuentra tu comunidad</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityMinistries.map((m, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-2xl transition-shadow border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-teal bg-teal/20 px-3 py-1 rounded-full">{m.tag}</span>
                </div>
                <h4 className="font-heading font-bold text-white text-lg mb-2">{m.name}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
          IGLESIAS
       */}
      <section id="iglesias" className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-teal -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-teal translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-teal" />
              <span className="text-teal font-bold text-sm uppercase tracking-widest">REMA</span>
              <div className="h-px w-12 bg-teal" />
            </div>
            <h2 className="section-title text-white mb-4">Red Ministerial Ágape</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">11 iglesias, 3 países, 1 propósito: hacer discípulos y expandir el reino de Dios.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {[{ n: '11', l: 'Iglesias' }, { n: '3', l: 'Países' }, { n: '2022', l: 'Fundación REMA' }, { n: '26+', l: 'Años' }].map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-extrabold text-5xl text-teal">{s.n}</p>
                <p className="text-white/70 text-sm mt-1">{s.l}</p>
              </div>
            ))}
          </div>

          {/* Honduras */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl"></span>
            <h3 className="font-heading font-bold text-2xl text-white">Honduras — 9 iglesias</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {hondurasChurches.map((c, i) => (
              <div key={i} className={`bg-white/10 border rounded-2xl p-5 hover:bg-white/15 transition-colors ${c.isMain ? 'border-teal' : 'border-white/20'}`}>
                {c.isMain && <span className="inline-block bg-teal text-white text-xs font-bold px-2 py-0.5 rounded-full mb-2">Iglesia Madre</span>}
                {c.note && !c.isMain && <span className="inline-block bg-brand-purple text-white text-xs font-bold px-2 py-0.5 rounded-full mb-2">{c.note}</span>}
                <h4 className="font-heading font-bold text-white text-base leading-snug">{c.pastors}</h4>
                <p className="text-teal text-sm mt-1">{c.city}</p>
                <p className="text-white/50 text-xs">{c.region}</p>
              </div>
            ))}
          </div>

          {/* Internacional */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl"></span>
            <h3 className="font-heading font-bold text-2xl text-white">Internacional — 2 iglesias</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            {internationalChurches.map((c, i) => (
              <div key={i} className="bg-white/10 border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-colors">
                
                <h4 className="font-heading font-bold text-white text-lg mt-2">{c.pastors}</h4>
                <p className="text-teal text-sm">{c.city}</p>
                <p className="text-white/50 text-xs">{c.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salvación CTA */}
      <section className="py-24 bg-gradient-to-br from-navy-dark to-navy-deeper relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=2044&auto=format&fit=crop" alt="Oración" fill className="object-cover opacity-10" />
        </div>
        <div className="container-custom relative z-10 max-w-3xl text-center">
          <div className="w-16 h-1 bg-teal mx-auto mb-8 rounded-full" />
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-6">Recibe a Jesús en tu corazón</h2>
          <blockquote className="text-white/80 text-lg md:text-xl italic leading-relaxed mb-10 bg-white/5 rounded-2xl p-8 border border-white/10">
            &ldquo;Padre Celestial, en este día entrego mi vida a ti, ya no quiero ser esclavo del mundo, sino un hijo(a) lavado(a) por tu preciosa sangre. Reconozco que he fallado, pero hoy te recibo y te acepto como mi Salvador, amén.&rdquo;
          </blockquote>
          <p className="text-white/40 text-sm">&ldquo;Dios es bueno. Dios es fiel.&rdquo;</p>
        </div>
      </section>

    </>
  )
}
