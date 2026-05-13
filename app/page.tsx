import Image from 'next/image'
import type { Metadata } from 'next'
import { getRecentStreams, getRecentUploads } from '@/lib/youtube'
import HeroParallax from '@/components/HeroParallax'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Ministerio Internacional Ágape | En esta casa, cabemos todos',
  description: 'Una iglesia en Honduras sirviendo a Dios y la sociedad por muchos años. Servicios martes y domingos. ¡Bienvenido a casa!',
}

const YOUTUBE_CHANNEL = 'https://www.youtube.com/@ministeriointernacionalaga1060/videos'


const doctrinas = [
  { title: 'La Biblia', text: 'Creemos que la Biblia es la Palabra de Dios, inspirada, infalible y la autoridad final en fe y conducta.' },
  { title: 'La Trinidad', text: 'Creemos en un solo Dios eterno que existe en tres personas: Padre, Hijo y Espíritu Santo.' },
  { title: 'La Salvación', text: 'Creemos que la salvación es por gracia mediante la fe en Jesucristo, quien murió y resucitó por nuestros pecados.' },
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
  { title: 'Info', description: 'Listo para responder todas tus preguntas y orientarte en tu primera visita.' },
]

const currentEvent = {
  label: 'Conferencia',
  title: 'Incondicional 2026',
  description: 'Una conferencia que marcará generaciones. Pastores internacionales reunidos para ministrar en un mismo lugar. ¡Ven y sé parte de algo histórico!',
  date: 'Viernes 12 & Sábado 13 de junio · Salón de la Fuerza Aérea de Honduras',
  image: '/Eventos/684082738_18349904152300744_797280196455391124_n.jpg',
  formUrl: 'https://forms.gle/13QRrAeG1F3z9wkg7',
}

const mainMinistries = [
  { name: 'Ágape Ora', description: 'Devocional transmitido por Facebook Live los lunes, miércoles y viernes a las 5:00 a.m.', schedule: 'Lun · Mié · Vie — 5:00 a.m.' },
  { name: 'Evangelismo', description: 'Promueve y esparce a todo individuo el mensaje de salvación, paz y justicia de Cristo Jesús.', schedule: 'Salidas semanales' },
  { name: 'Agape Worship', description: 'Guía al pueblo en la alabanza y adoración a Dios. Escucha nuestra música en plataformas digitales.', schedule: 'Servicios dominicales' },
  { name: 'Extensión Ministerial', description: 'Red de hospitalidad. Identifica y da la bienvenida a personas que asisten por primera vez.', schedule: 'Todos los servicios' },
]

const communityMinistries = [
  { name: 'Tribus', description: 'Grupos de amistad para encaminarte hacia la madurez en Cristo.', tag: 'Todas las edades', logo: '/Logos/Tribus.png' },
  { name: 'Explosión', description: 'El ministerio juvenil. Domingos a las 11:30 a.m.', tag: 'Jóvenes', logo: '/Logos/Explosion.png' },
  { name: 'Agape Kids', description: 'Formamos a los niños en el conocimiento de la Palabra de Dios.', tag: 'Niños', logo: '/Logos/Agape Kids.png' },
  { name: 'Grupos en Casa', description: 'Familias que abren su hogar para compartir el evangelio.', tag: 'Comunidad', logo: '/Logos/Grupos en casa .png' },
  { name: 'Agape Worship', description: 'Guía al pueblo en la alabanza y adoración a Dios. Escucha nuestra música en plataformas digitales.', tag: 'Música', logo: '/Logos/Agape Worship.png' },
  { name: 'Ágape Ora', description: 'Devocional transmitido por Facebook Live los lunes, miércoles y viernes a las 5:00 a.m.', tag: 'Oración', logo: '/Logos/Agape Ora.png' },
]

const hondurasChurches = [
  { pastors: 'Armando y Gladis de Medina', city: 'Tegucigalpa', region: 'Francisco Morazán', isMain: true },
  { pastors: 'Alejandro y Gabriela de Medina', city: 'Tegucigalpa', region: 'Francisco Morazán', note: 'Pastores de Jóvenes — Explosión Honduras' },
  { pastors: 'Jorge y Alicia de Zúniga', city: 'Santa Elena', region: 'Olancho' },
  { pastors: 'Juan y Sayda de Guerrero', city: 'San Manuel', region: 'Cortés' },
  { pastors: 'Antonio y Luz de Lanza', city: 'Valle de Ángeles', region: 'Francisco Morazán' },
  { pastors: 'Reniery y Verónica de Coello', city: 'Danlí y El Ocotal', region: 'El Paraíso' },
  { pastors: 'Mario y Karina de Rodas', city: 'La Paz', region: 'La Paz' },
  { pastors: 'Migdaleder y Nohemí de Rodríguez', city: 'San Pedro Sula / Tomalá', region: 'Cortés / Lempira' },
  { pastors: 'Ronald y Gloria de Villatoro', city: 'Comayagua', region: 'Comayagua' },
]

const internationalChurches = [
  { pastors: 'Walter y Yanci de Artiga', city: 'San Salvador', region: 'El Salvador' },
  { pastors: 'Maribel Colindres', city: 'Ciudad de Panamá', region: 'Panamá' },
]

export default async function HomePage() {
  const [liveVideos, uploadedVideos] = await Promise.all([
    getRecentStreams(4),
    getRecentUploads(8),
  ])

  return (
    <>
      {/*
          INICIO
       */}
      <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-navy-deeper">
        <HeroParallax />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deeper/80 via-navy-deeper/60 to-navy-deeper/90" />
        <div className="relative z-10 text-white text-center px-4 max-w-4xl mx-auto">
          <p className="text-teal font-semibold tracking-[0.3em] text-sm uppercase mb-4">
            Ministerio Internacional Ágape
          </p>
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight mb-6">
            EN ESTA CASA,<br />
            <span className="text-teal">CABEMOS</span> TODOS
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Más que un nombre, amor de Dios. Bienvenido a tu nueva familia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#visita" className="btn-primary text-base px-10 py-4">Planifica tu visita</a>
            <a href="#evento" className="btn-secondary text-base px-10 py-4">Eventos</a>
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
                Por muchos años hemos preparado hombres y mujeres con el carácter para asumir la asignación
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
            <div className="bg-white/5 rounded-3xl overflow-hidden border border-white/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/Pastores /Armando y Gladis de Medina.jpeg"
                  alt="Armando y Gladis de Medina"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 35%' }}
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-teal font-semibold text-xs uppercase tracking-widest mb-1">Pastores Principales</p>
                <h3 className="font-heading font-bold text-white text-xl">Armando y Gladis de Medina</h3>
              </div>
            </div>
            <div className="bg-white/5 rounded-3xl overflow-hidden border border-white/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/Pastores /Alejandro y Gabriela de Medina.jpeg"
                  alt="Alejandro y Gabriela de Medina"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-teal font-semibold text-xs uppercase tracking-widest mb-1">Pastores de Jóvenes</p>
                <h3 className="font-heading font-bold text-white text-xl">Alejandro y Gabriela de Medina</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
          EVENTO ACTUAL
       */}
      <section id="evento" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-teal font-bold text-xs uppercase tracking-[0.25em] mb-3">Próximo evento</p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-navy">
              Regístrate a nuestro próximo evento
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl border border-gray-100 min-h-[480px]">
            {/* Imagen izquierda */}
            <div className="relative min-h-[360px] lg:min-h-full">
              <Image
                src={currentEvent.image}
                alt={currentEvent.title}
                fill
                className="object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
            {/* Contenido derecha */}
            <div className="bg-white p-10 lg:p-14 flex flex-col justify-center">
              <p className="text-teal font-bold text-xs uppercase tracking-[0.25em] mb-4">{currentEvent.label}</p>
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-navy mb-4 leading-tight">
                {currentEvent.title}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-5">{currentEvent.description}</p>
              {currentEvent.date && (
                <p className="text-gray-400 text-sm mb-8">{currentEvent.date}</p>
              )}
              <a
                href={currentEvent.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start px-8 py-3.5 bg-navy text-white font-bold rounded-full hover:bg-navy-dark transition-colors text-base"
              >
                Registrarme →
              </a>
            </div>
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
              { day: 'Martes', time: '6:30 p.m.', description: 'Servicio principal' },
              { day: 'Domingo', time: '8:00 a.m.', description: 'Servicio principal' },
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
            <div className="h-72 rounded-2xl overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=14.094626079408233,-87.15844262391437&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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

          {/* Últimos mensajes RSS — solo aparece cuando YouTube responde */}
          {liveVideos.length > 0 && (
            <div className="mb-16">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-2">YouTube</p>
                  <h3 className="font-heading font-bold text-3xl text-white">Últimas Transmisiones en Vivo</h3>
                </div>
                <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex text-white font-semibold hover:text-teal transition-colors">Ver canal →</a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {liveVideos.map((v) => (
                  <a key={v.videoId} href={v.url} target="_blank" rel="noopener noreferrer"
                    className="bg-white/10 rounded-2xl overflow-hidden border border-white/10 card-hover group block">
                    <div className="relative aspect-video bg-navy-deeper">
                      <Image src={v.thumbnail} alt={v.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/40 transition-colors flex items-center justify-center">
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-heading font-bold text-white text-base leading-snug mb-1 line-clamp-2">{v.title}</h4>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Últimos videos subidos */}
          {uploadedVideos.length > 0 && (
          <div>
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-2">Biblioteca</p>
                <h3 className="font-heading font-bold text-3xl text-white">Serie de mensajes</h3>
              </div>
              <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex text-white font-semibold hover:text-teal transition-colors">Ver todos →</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:grid-rows-2">
              {uploadedVideos.map((video) => (
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
          )}
        </div>
      </section>

      {/*
          GALERÍA
       */}
      <section id="galeria" className="py-24 bg-navy overflow-hidden">
        <div className="container-custom mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <h2 className="font-heading font-bold text-3xl text-white tracking-widest uppercase">Comunidad</h2>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/iglesia.agape/" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/iglesiaagapehn/" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href="https://www.youtube.com/@ministeriointernacionalaga1060/videos" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://music.youtube.com/channel/UCEHvWs5wI4YK1RedypElejA" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #ff0000, #cc0000)' }}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6zm-2 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-4 marquee-track">
            {[
              '/Galeria/670006689_18347547898300744_2600397831908301211_n.webp',
              '/Galeria/670031362_18347547925300744_4340054733633536037_n.webp',
              '/Galeria/670173993_18347547889300744_1472173998521907962_n.webp',
              '/Galeria/670251575_18347547943300744_5294784561633067079_n.webp',
              '/Galeria/670896857_18347547880300744_3049388764733608875_n.webp',
              '/Galeria/670967646_18348548050300744_4947433310239521045_n.jpg',
              '/Galeria/671163505_18348548077300744_5440251320696034708_n.jpg',
              '/Galeria/671671349_18348548059300744_1469850876894586601_n.jpg',
              '/Galeria/671720403_18348548086300744_2309556841587108125_n.jpg',
              '/Galeria/671746001_18347547916300744_9058520349076793908_n.webp',
              '/Galeria/671791497_18347547907300744_2459326282646518875_n.webp',
              '/Galeria/671806460_18348548068300744_3847200827424337973_n.jpg',
              '/Galeria/671811932_18348548041300744_4748475861855964881_n.jpg',
              '/Galeria/671828859_18348548038300744_2618948186441987813_n.jpg',
              '/Galeria/670006689_18347547898300744_2600397831908301211_n.webp',
              '/Galeria/670031362_18347547925300744_4340054733633536037_n.webp',
              '/Galeria/670173993_18347547889300744_1472173998521907962_n.webp',
              '/Galeria/670251575_18347547943300744_5294784561633067079_n.webp',
              '/Galeria/670896857_18347547880300744_3049388764733608875_n.webp',
              '/Galeria/670967646_18348548050300744_4947433310239521045_n.jpg',
              '/Galeria/671163505_18348548077300744_5440251320696034708_n.jpg',
              '/Galeria/671671349_18348548059300744_1469850876894586601_n.jpg',
              '/Galeria/671720403_18348548086300744_2309556841587108125_n.jpg',
              '/Galeria/671746001_18347547916300744_9058520349076793908_n.webp',
              '/Galeria/671791497_18347547907300744_2459326282646518875_n.webp',
              '/Galeria/671806460_18348548068300744_3847200827424337973_n.jpg',
              '/Galeria/671811932_18348548041300744_4748475861855964881_n.jpg',
              '/Galeria/671828859_18348548038300744_2618948186441987813_n.jpg',
            ].map((src, i) => (
              <a key={i} href="https://www.instagram.com/iglesiaagapehn/" target="_blank" rel="noopener noreferrer"
                className="relative w-72 h-72 rounded-2xl overflow-hidden flex-shrink-0 group block">
                <Image src={src} alt="Ágape comunidad" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </div>
              </a>
            ))}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityMinistries.map((m, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-2xl transition-shadow border border-white/10 flex flex-col items-center text-center">
                <div className="my-4 h-32 flex items-center justify-center">
                  {m.logo ? (
                    <Image src={m.logo} alt={m.name} width={128} height={128} className="h-32 object-contain" style={{ width: 'auto' }} />
                  ) : (
                    <p className="font-heading font-bold text-white text-2xl">{m.name}</p>
                  )}
                </div>
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
            <h3 className="font-heading font-bold text-2xl text-white">Honduras <span className="text-white/50 font-normal">(9 iglesias)</span></h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {hondurasChurches.map((c, i) => (
              <div key={i} className={`bg-white/10 border rounded-2xl p-5 hover:bg-white/15 transition-colors ${c.isMain ? 'border-teal' : 'border-white/20'}`}>
                {c.isMain && <span className="inline-block bg-teal text-white text-xs font-bold px-2 py-0.5 rounded-full mb-2">Iglesia Central</span>}
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
            <h3 className="font-heading font-bold text-2xl text-white">Internacional <span className="text-white/50 font-normal">(2 iglesias)</span></h3>
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

      {/* Donar */}
      <section id="donar" className="py-24 bg-navy-deeper relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Imagen 1.jpg"
            alt="Comunidad Ágape"
            fill
            className="object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deeper/60 to-navy-deeper/90" />
        </div>
        <div className="container-custom relative z-10 max-w-3xl text-center">
          <p className="text-teal font-bold text-xs uppercase tracking-[0.25em] mb-4">Generosidad</p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-6">
            ¡Gracias por tu generosidad!
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Tus contribuciones no solo respaldan las operaciones de la iglesia, sino que además
            nos permiten mantenernos firmes en las comunidades, a través de ayuda social,
            contribuciones a familias y brigadas de salud. Gracias por respaldar la labor
            evangelizadora, dentro y fuera de nuestra nación.
          </p>
          <a
            href="https://www.paypal.com/paypalme/agapehn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-4 bg-teal text-navy font-bold rounded-full hover:bg-teal/90 transition-colors text-lg shadow-lg"
          >
            Donar ahora
          </a>
        </div>
      </section>

    </>
  )
}
