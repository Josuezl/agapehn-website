import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nuestras Iglesias — REMA',
  description:
    'Conoce la Red Ministerial Ágape (REMA) — 11 iglesias en Honduras, El Salvador y Panamá, unidas bajo el mismo propósito.',
}

const hondurasChurches = [
  {
    pastors: 'Armando y Gladis de Medina',
    city: 'Tegucigalpa',
    region: 'Francisco Morazán',
    note: 'Iglesia Madre',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop&facepad=3',
    isMain: true,
  },
  {
    pastors: 'Jorge y Alicia de Zúniga',
    city: 'Santa Elena',
    region: 'Olancho',
    image: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=400&h=400&fit=crop',
  },
  {
    pastors: 'Juan y Sayda de Guerrero',
    city: 'San Manuel',
    region: 'Cortés',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop',
  },
  {
    pastors: 'Antonio y Luz de Lanza',
    city: 'Valle de Ángeles',
    region: 'Francisco Morazán',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop',
  },
  {
    pastors: 'Reniery y Verónica de Coello',
    city: 'Danlí y El Ocotal',
    region: 'El Paraíso',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=400&fit=crop',
  },
  {
    pastors: 'Mario y Karina de Rodas',
    city: 'La Paz',
    region: 'La Paz',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=400&fit=crop',
  },
  {
    pastors: 'Migdaleder y Nohemí de Rodríguez',
    city: 'San Pedro Sula / Tomalá',
    region: 'Cortés / Lempira',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&h=400&fit=crop',
  },
  {
    pastors: 'Ronald y Gloria de Villatoro',
    city: 'Comayagua',
    region: 'Comayagua',
    image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=400&h=400&fit=crop',
  },
  {
    pastors: 'Alejandro y Gabriela de Medina',
    city: 'Tegucigalpa',
    region: 'Francisco Morazán',
    note: 'Pastores Jóvenes — Explosión',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=400&fit=crop',
  },
]

const internationalChurches = [
  {
    pastors: 'Walter y Yanci de Artiga',
    city: 'San Salvador',
    region: 'El Salvador',
    flag: '',
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=400&h=400&fit=crop',
  },
  {
    pastors: 'Maribel Colindres',
    city: 'Ciudad de Panamá',
    region: 'Panamá',
    flag: '',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&h=400&fit=crop',
  },
]

export default function IglesiasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1438232992991-995b7058bdb3?q=80&w=2070&auto=format&fit=crop"
          alt="Nuestras iglesias"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deeper/85 to-navy-deeper/80" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-16 bg-teal" />
            <span className="text-teal font-bold tracking-widest text-sm uppercase">
              Red Ministerial Ágape
            </span>
            <div className="h-px w-16 bg-teal" />
          </div>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6">
            REMA
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            11 iglesias, 3 países, 1 propósito: hacer discípulos y expandir el
            reino de Dios.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="text-center">
              <p className="font-extrabold text-5xl text-teal">11</p>
              <p className="text-white/70 text-sm mt-1">Iglesias</p>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <p className="font-extrabold text-5xl text-teal">3</p>
              <p className="text-white/70 text-sm mt-1">Países</p>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <p className="font-extrabold text-5xl text-teal">2022</p>
              <p className="text-white/70 text-sm mt-1">Fundación REMA</p>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <p className="font-extrabold text-5xl text-teal">26+</p>
              <p className="text-white/70 text-sm mt-1">Años</p>
            </div>
          </div>
        </div>
      </section>

      {/* REMA Explanation */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl text-center">
          <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">
            ¿Qué es REMA?
          </p>
          <h2 className="section-title text-navy mb-6">
            Unidos bajo un mismo propósito
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            En el año 2022, se inició{' '}
            <strong className="text-navy">REMA (Red Ministerial Ágape)</strong>,
            que es la unión pastoral de todas las iglesias Ágape. Somos una
            iglesia que cree firmemente en la asignación que Jesús nos dio
            cuando dijo en su Palabra que fuéramos por el mundo e hiciéramos
            discípulos.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            A lo largo de 26 años, hemos preparado hombres y mujeres con el
            carácter para asumir la asignación que Dios nos ha delegado,
            resultando en la apertura de once iglesias: nueve a lo largo del
            territorio nacional y dos en territorio internacional.
          </p>
        </div>
      </section>

      {/* Honduras Churches */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-3xl"></span>
            <div>
              <p className="text-teal font-semibold tracking-widest text-sm uppercase">
                Honduras
              </p>
              <h2 className="font-heading font-bold text-3xl text-navy">
                9 iglesias nacionales
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hondurasChurches.map((church, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl overflow-hidden shadow-md card-hover ${
                  church.isMain ? 'ring-2 ring-teal' : ''
                }`}
              >
                <div className="relative h-48">
                  <Image
                    src={church.image}
                    alt={church.pastors}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  {church.isMain && (
                    <div className="absolute top-3 right-3 bg-teal text-white text-xs font-bold px-3 py-1 rounded-full">
                      Iglesia Madre
                    </div>
                  )}
                  {church.note && !church.isMain && (
                    <div className="absolute top-3 right-3 bg-brand-purple text-white text-xs font-bold px-3 py-1 rounded-full">
                      {church.note}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-navy text-lg leading-snug mb-1">
                    {church.pastors}
                  </h3>
                  <p className="text-teal font-semibold text-sm">
                    {church.city}
                  </p>
                  <p className="text-gray-500 text-sm">{church.region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Churches */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-3xl"></span>
            <div>
              <p className="text-teal font-semibold tracking-widest text-sm uppercase">
                Internacional
              </p>
              <h2 className="font-heading font-bold text-3xl text-white">
                2 iglesias internacionales
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {internationalChurches.map((church, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-colors"
              >
                <div className="relative h-52">
                  <Image
                    src={church.image}
                    alt={church.pastors}
                    fill
                    className="object-cover object-top opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute top-3 left-3 text-3xl">{church.flag}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-white text-xl mb-1">
                    {church.pastors}
                  </h3>
                  <p className="text-teal font-semibold">{church.city}</p>
                  <p className="text-white/60 text-sm">{church.region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-teal">
        <div className="container-custom text-center">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-navy mb-4">
            Transforma tu ciudad para Cristo
          </h2>
          <p className="text-navy/80 text-lg mb-8 max-w-xl mx-auto">
            Si sientes el llamado a plantar una iglesia o unirte a REMA,
            queremos escucharte.
          </p>
          <a
            href="mailto:info@agapehn.org"
            className="inline-flex items-center px-10 py-4 bg-navy text-white font-bold rounded-full hover:bg-navy-dark transition-all hover:scale-105 text-lg"
          >
            Contáctanos →
          </a>
        </div>
      </section>
    </>
  )
}
