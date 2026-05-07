import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ministerios',
  description:
    'Conoce todos los ministerios del Ministerio Internacional Ágape. Tribus, Explosión, Agape Kids, Grupos en Casa, Worship y más.',
}

const mainMinistries = [
  {
    icon: '',
    name: 'Ágape Ora',
    description:
      'Devocional transmitido por Facebook Live los lunes, miércoles y viernes a las 5:00 a.m. Comienza tu día en la presencia de Dios.',
    schedule: 'Lun · Mié · Vie — 5:00 a.m.',
    image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=600&h=400&fit=crop',
    color: 'border-teal/40',
    badge: 'bg-teal text-white',
  },
  {
    icon: '',
    name: 'Evangelismo',
    description:
      'Su principal característica es que promueve y esparce a todo individuo el mensaje de salvación, paz y justicia de Cristo Jesús.',
    schedule: 'Salidas semanales',
    image: 'https://images.unsplash.com/photo-1537638902516-a1f28d64b4e2?q=80&w=600&h=400&fit=crop',
    color: 'border-brand-orange/40',
    badge: 'bg-brand-orange text-white',
  },
  {
    icon: '',
    name: 'Agape Worship',
    description:
      'Guía al pueblo en la alabanza y la adoración a Dios. Puedes escuchar nuestra música en las diversas plataformas digitales.',
    schedule: 'Servicios dominicales',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bdb3?q=80&w=600&h=400&fit=crop',
    color: 'border-brand-purple/40',
    badge: 'bg-brand-purple text-white',
  },
  {
    icon: '',
    name: 'Extensión Ministerial',
    description:
      'Es una red extensiva de hospitalidad. Su objetivo es identificar y dar la bienvenida a las personas que asisten por primera vez.',
    schedule: 'Todos los servicios',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&h=400&fit=crop',
    color: 'border-teal/40',
    badge: 'bg-teal text-white',
  },
  {
    icon: '',
    name: 'Intercesión y Oración',
    description:
      'Atiende las peticiones de oración de la iglesia, con el objetivo de presentarlas delante de Dios y orar por ellas con fe.',
    schedule: 'Reuniones semanales',
    image: 'https://images.unsplash.com/photo-1471897488350-3b7e10d90e2c?q=80&w=600&h=400&fit=crop',
    color: 'border-navy/30',
    badge: 'bg-navy text-white',
  },
  {
    icon: '',
    name: 'Estacionamiento',
    description:
      'Su deseo es brindar una amigable bienvenida a las personas desde su llegada a la iglesia, guiándoles al estacionamiento.',
    schedule: 'Todos los servicios',
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=600&h=400&fit=crop',
    color: 'border-gray-300',
    badge: 'bg-brand-gray text-white',
  },
]

const communityMinistries = [
  {
    icon: '',
    name: 'Tribus',
    description:
      'Grupos de amistad que tienen como objetivo, a través de creatividad y temas bíblicos, encaminarte hacia la madurez en Cristo.',
    tag: 'Todas las edades',
  },
  {
    icon: '',
    name: 'Explosión',
    description:
      'El ministerio juvenil de nuestra iglesia. Si eres joven, nuestro espacio es el domingo a las 11:00 a.m. ¡Ven y sé parte!',
    tag: 'Jóvenes',
  },
  {
    icon: '',
    name: 'Agape Kids',
    description:
      'Aquí se educa y se forma a los niños y niñas en el conocimiento de la Palabra de Dios, a través de enseñanzas según su edad.',
    tag: 'Niños',
  },
  {
    icon: 'ℹ',
    name: 'Info',
    description:
      'Su objetivo es tener una sonrisa amigable y ser quienes respondan a las preguntas de los miembros de la iglesia.',
    tag: 'Información',
  },
  {
    icon: '',
    name: 'Ágape Alimentos',
    description:
      'Este es un lugar de abastecimiento, para que nuestro cuerpo también reciba una atención de calidad y amor.',
    tag: 'Servicio',
  },
  {
    icon: '',
    name: 'Grupos en Casa',
    description:
      'Es un espacio donde una familia abre las puertas de su hogar hacia la comunidad y comparte el evangelio.',
    tag: 'Comunidad',
  },
]

const extraMinistries = [
  {
    name: 'Cultura del Reino',
    description: 'Enseñanzas transformadoras sobre el reino de Dios.',
    icon: '',
  },
  {
    name: 'Ágape Coffee',
    description: 'Comunidad y conversación alrededor del café.',
    icon: '',
  },
  {
    name: 'Agape Worship Music',
    description: 'Música original en plataformas digitales.',
    icon: '',
  },
  {
    name: 'REMA',
    description: 'Red Ministerial Ágape — 11 iglesias conectadas.',
    icon: '',
  },
]

export default function MinisteriosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1471897488350-3b7e10d90e2c?q=80&w=2069&auto=format&fit=crop"
          alt="Nuestros ministerios"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deeper/80 to-navy-deeper/75" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <p className="text-teal font-semibold tracking-[0.3em] text-sm uppercase mb-4">
            Sirve, Conecta, Crece
          </p>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-4">
            MINISTERIOS
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Nuestros ministerios son la columna vertebral de la Casa. Sin el
            apoyo de servidores excepcionales, no podríamos ser la iglesia que
            hoy somos.
          </p>
        </div>
      </section>

      {/* Main Ministries */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">
              Ministerios principales
            </p>
            <h2 className="section-title text-navy">Sirviendo cada semana</h2>
          </div>

          <div className="space-y-10">
            {mainMinistries.map((m, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-sm border-2 ${m.color}`}
              >
                <div className="lg:w-2/5 relative aspect-video w-full">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:w-3/5 p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{m.icon}</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${m.badge}`}>
                      {m.schedule}
                    </span>
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-navy mb-3">
                    {m.name}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Ministries */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">
              Conéctate
            </p>
            <h2 className="section-title text-navy mb-4">
              Encuentra tu comunidad
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Hay un espacio para cada persona en Ágape, sin importar tu edad o
              etapa de vida.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityMinistries.map((m, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-4xl">{m.icon}</span>
                  <span className="text-xs font-bold text-teal bg-teal/10 px-3 py-1 rounded-full">
                    {m.tag}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-navy text-xl mb-3">
                  {m.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra ministries */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">
              También somos
            </p>
            <h2 className="section-title text-white">Más de Ágape</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {extraMinistries.map((m, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/20 rounded-2xl p-7 hover:bg-white/20 transition-colors text-center"
              >
                <span className="text-5xl mb-4 block">{m.icon}</span>
                <h3 className="font-heading font-bold text-white text-xl mb-2">
                  {m.name}
                </h3>
                <p className="text-white/60 text-sm">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal">
        <div className="container-custom text-center">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-navy mb-4">
            ¿Quieres servir en Ágape?
          </h2>
          <p className="text-navy/80 text-lg mb-8 max-w-xl mx-auto">
            Si tienes el corazón para servir, hay un lugar para ti. Conecta con
            nosotros y descubre cómo puedes contribuir.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center px-10 py-4 bg-navy text-white font-bold rounded-full hover:bg-navy-dark transition-all hover:scale-105 text-lg"
          >
            Quiero servir →
          </Link>
        </div>
      </section>
    </>
  )
}
