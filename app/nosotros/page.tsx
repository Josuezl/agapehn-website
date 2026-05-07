import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Conoce la historia, visión y pastores del Ministerio Internacional Ágape. Fundado en 1999 por los pastores Armando y Gladis de Medina.',
}

const doctrines = [
  {
    verse: 'Mateo 28:19',
    text: 'Dios es eterno y existe en tres personas: Padre, Hijo y Espíritu Santo.',
  },
  {
    verse: 'Juan 1:1',
    text: 'Jesús es Dios. Reconocemos su plena divinidad y humanidad.',
  },
  {
    verse: 'Efesios 1:7',
    text: 'La sangre de Jesús perdona nuestros pecados y nos da redención.',
  },
  {
    verse: '1 Pedro 1:3',
    text: 'Jesús resucitó de entre los muertos y ascendió al cielo.',
  },
  {
    verse: '2 Corintios 5:1',
    text: 'El cielo y el infierno existen como destinos eternos reales.',
  },
  {
    verse: '2 Timoteo 3:16',
    text: 'La Biblia es la Palabra inspirada por Dios, infalible y suficiente.',
  },
  {
    verse: '1 Corintios 12:4',
    text: 'El Espíritu Santo reparte dones espirituales tal y como Él desea.',
  },
  {
    verse: 'Romanos 3:24',
    text: 'Somos salvos por gracia, por el sacrificio de Jesús, no por obras.',
  },
  {
    verse: 'Santiago 5:7–8',
    text: 'Jesús vendrá por segunda vez en gloria y majestad.',
  },
]

const pastors = [
  {
    name: 'Armando y Gladis de Medina',
    role: 'Pastores Fundadores',
    bio: 'Fundaron el Ministerio Internacional Ágape el 5 de marzo de 1999. Han liderado la iglesia con amor, perseverancia y visión durante más de 26 años, impactando Honduras y las naciones.',
    image:
      'https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=400&h=400&fit=crop',
  },
  {
    name: 'Alejandro y Gabriela de Medina',
    role: 'Pastores de Jóvenes — Explosión',
    bio: 'Lideran el ministerio juvenil Explosión con pasión y creatividad, guiando a la siguiente generación hacia un encuentro genuino con Cristo.',
    image:
      'https://images.unsplash.com/photo-1537638902516-a1f28d64b4e2?q=80&w=400&h=400&fit=crop',
  },
]

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1438232992991-995b7058bdb3?q=80&w=2070&auto=format&fit=crop"
          alt="Nuestra congregación"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deeper/80 to-navy-deeper/70" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-teal font-semibold tracking-[0.3em] text-sm uppercase mb-4">
            Ministerio Internacional Ágape
          </p>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl">
            NOSOTROS
          </h1>
        </div>
      </section>

      {/* Historia */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">
                Nuestra Historia
              </p>
              <h2 className="section-title text-navy mb-6">
                Más de 26 años sirviendo a Dios
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Ágape nació el{' '}
                <strong className="text-navy">5 de marzo de 1999</strong>, bajo
                la dirección de Dios y de los pastores{' '}
                <strong className="text-navy">
                  Armando Medina y Gladis Henry de Medina
                </strong>
                . La iglesia inició con cuatro adultos y cuatro niños, y aunque
                ningún inicio es fácil, hemos servido y predicado con la misma
                pasión y amor a lo largo de los años.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Nuestros pastores son un ejemplo de amor, compromiso,
                perseverancia, servicio y sabiduría para toda nuestra
                congregación. Su labor pastoral los llevó a tomar acciones
                innovadoras que bendicen a la nación.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Hoy, el Ministerio Internacional Ágape cuenta con once iglesias
                en Honduras, El Salvador y Panamá, unidas bajo la Red
                Ministerial Ágape (REMA), fundada en 2022.
              </p>
              <div className="flex gap-8">
                <div className="text-center">
                  <p className="font-extrabold text-4xl text-navy">1999</p>
                  <p className="text-gray-500 text-sm mt-1">Fundación</p>
                </div>
                <div className="w-px bg-gray-200" />
                <div className="text-center">
                  <p className="font-extrabold text-4xl text-navy">11</p>
                  <p className="text-gray-500 text-sm mt-1">Iglesias</p>
                </div>
                <div className="w-px bg-gray-200" />
                <div className="text-center">
                  <p className="font-extrabold text-4xl text-navy">3</p>
                  <p className="text-gray-500 text-sm mt-1">Países</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1471897488350-3b7e10d90e2c?q=80&w=800&auto=format&fit=crop"
                  alt="Historia de Ágape"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-teal text-white p-5 rounded-2xl shadow-xl hidden md:flex flex-col items-center">
                <p className="font-bold text-3xl">26+</p>
                <p className="text-sm font-medium">años</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pastores */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">
              Liderazgo
            </p>
            <h2 className="section-title text-navy">Nuestros Pastores</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pastors.map((pastor, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md card-hover"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={pastor.image}
                    alt={pastor.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-teal text-xs font-bold uppercase tracking-wider">
                      {pastor.role}
                    </p>
                    <h3 className="font-heading font-bold text-xl">
                      {pastor.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{pastor.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/iglesias" className="btn-outline">
              Ver todos los pastores
            </Link>
          </div>
        </div>
      </section>

      {/* Visión */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">
              Visión
            </p>
            <h2 className="section-title text-white mb-6">Nuestra Visión</h2>
          </div>
          <blockquote className="text-white/80 text-xl md:text-2xl italic text-center leading-relaxed bg-white/5 rounded-2xl p-10 border border-white/10">
            &ldquo;Somos una iglesia que cree firmemente en la asignación que
            Jesús nos dio cuando dijo en su Palabra que fuéramos por el mundo e
            hiciéramos discípulos. A lo largo de 26 años, nos hemos encargado
            de expandir el mensaje del Señor, preparando hombres y mujeres con
            el carácter para asumir la asignación que Dios nos ha delegado.&rdquo;
          </blockquote>
          <div className="text-center mt-10">
            <Link href="/iglesias" className="btn-primary">
              Conoce REMA
            </Link>
          </div>
        </div>
      </section>

      {/* Doctrinas */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">
              Lo que creemos
            </p>
            <h2 className="section-title text-navy mb-4">
              Doctrinas Básicas de Nuestra Fe
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Nuestra fe está fundamentada en las verdades eternas de la Palabra
              de Dios.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {doctrines.map((doctrine, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border-2 border-gray-100 hover:border-teal/40 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal/10 text-teal rounded-lg flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-navy font-semibold leading-snug mb-2">
                      {doctrine.text}
                    </p>
                    <p className="text-teal text-xs font-bold">
                      {doctrine.verse}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal">
        <div className="container-custom text-center">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-navy mb-4">
            ¡Bienvenido a casa!
          </h2>
          <p className="text-navy/80 text-lg mb-8 max-w-xl mx-auto">
            Estamos esperándote con los brazos abiertos. Planifica tu primera
            visita hoy.
          </p>
          <Link
            href="/visita"
            className="inline-flex items-center px-10 py-4 bg-navy text-white font-bold rounded-full hover:bg-navy-dark transition-all hover:scale-105 text-lg"
          >
            Planifica tu visita
          </Link>
        </div>
      </section>
    </>
  )
}
