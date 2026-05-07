'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const serviceTimes = [
  {
    day: 'Martes',
    time: '6:30 p.m.',
    description: 'Servicio familiar entre semana',
    icon: '',
  },
  {
    day: 'Domingo',
    time: '8:00 a.m.',
    description: 'Servicio matutino',
    icon: '',
  },
  {
    day: 'Domingo',
    time: '9:40 a.m.',
    description: 'Servicio principal',
    icon: '',
  },
  {
    day: 'Domingo',
    time: '11:30 a.m.',
    description: 'Servicio de jóvenes — Explosión',
    icon: '',
  },
]

const expectations = [
  {
    icon: '',
    title: 'Alabanza y Adoración',
    description:
      'Experimentarás una poderosa alabanza guiada por el equipo de Agape Worship, con música contemporánea que prepara el corazón para recibir la Palabra.',
  },
  {
    icon: '',
    title: 'Mensaje de la Palabra',
    description:
      'Nuestro pastor compartirá un mensaje práctico y edificante, fundamentado en la Biblia, relevante para tu vida diaria.',
  },
  {
    icon: '',
    title: 'Comunidad y Familia',
    description:
      'Serás recibido como parte de nuestra familia desde el primer momento. Tenemos ministerios para cada etapa de la vida.',
  },
  {
    icon: '',
    title: 'Agape Kids',
    description:
      'Tus niños estarán en un ambiente seguro y divertido, aprendiendo la Palabra de Dios de una manera apropiada para su edad.',
  },
  {
    icon: '',
    title: 'Estacionamiento',
    description:
      'Contamos con un equipo de estacionamiento dedicado a ayudarte desde que llegas. ¡Tu primera impresión es nuestra prioridad!',
  },
  {
    icon: '',
    title: 'Equipo Info',
    description:
      'Nuestro equipo de Info está listo para responder todas tus preguntas y orientarte en tu primera visita con una sonrisa.',
  },
]

const faqs = [
  {
    q: '¿Qué ropa debo usar?',
    a: 'Ven como eres. No hay código de vestimenta. Lo más importante es que estés cómodo y con el corazón abierto para adorar.',
  },
  {
    q: '¿Hay lugar para mis hijos?',
    a: 'Sí. Tenemos Agape Kids para niños de todas las edades, con maestros capacitados y ambientes seguros.',
  },
  {
    q: '¿Tengo que ser miembro para participar?',
    a: 'No. Todos son bienvenidos a participar en los servicios y actividades desde el primer día.',
  },
  {
    q: '¿Dónde están ubicados?',
    a: 'La Era, anillo periférico, entre Monolit y gasolinera Uno, 3 cuadras antes del puente de la San Miguel, Tegucigalda, Honduras.',
  },
  {
    q: '¿Hay estacionamiento disponible?',
    a: 'Sí, contamos con estacionamiento disponible y un equipo que te ayudará a estacionarte de manera segura.',
  },
]

export default function VisitaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    mensaje: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=2069&auto=format&fit=crop"
          alt="Planifica tu visita"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deeper/80 to-navy-deeper/70" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <p className="text-teal font-semibold tracking-[0.3em] text-sm uppercase mb-4">
            Te esperamos
          </p>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-4">
            ¡QUÉ BENDICIÓN
            <br />
            TENERTE AQUÍ!
          </h1>
          <p className="text-white/80 text-lg">
            Planifica tu primera visita. No necesitas saber nada de antemano,
            solo ven.
          </p>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">
              Horarios de servicio
            </p>
            <h2 className="section-title text-navy">¿Cuándo nos reunimos?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceTimes.map((s, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-2xl bg-gray-50 border-2 border-gray-100 hover:border-teal/50 hover:bg-teal/5 transition-all group"
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <p className="font-bold text-xl text-navy">{s.day}</p>
                <p className="text-3xl font-extrabold text-teal my-2">
                  {s.time}
                </p>
                <p className="text-gray-500 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">
              Tu primera visita
            </p>
            <h2 className="section-title text-navy mb-4">¿Qué puedes esperar?</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Queremos que tu primera experiencia sea increíble. Aquí te
              contamos lo que vivirás.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expectations.map((item, i) => (
              <div
                key={i}
                className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-heading font-bold text-navy text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">
                Cómo llegar
              </p>
              <h2 className="section-title text-white mb-6">
                Nuestra Ubicación
              </h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-teal"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Dirección</p>
                    <p className="text-white/70 leading-relaxed">
                      La Era, anillo periférico, entre Monolit y gasolinera Uno,
                      3 cuadras antes del puente de la San Miguel, Tegucigalpa,
                      Honduras.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-teal"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Horarios</p>
                    <p className="text-white/70">
                      Martes 6:30 p.m. · Domingos 8:00 a.m., 9:40 a.m.,
                      11:30 a.m.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-video relative rounded-2xl overflow-hidden bg-navy-deeper border border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
                alt="Mapa de ubicación"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-14 h-14 bg-teal rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <p className="font-bold text-lg">Ministerio Ágape</p>
                  <p className="text-white/70 text-sm">Tegucigalpa, Honduras</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block bg-white text-navy text-sm font-bold px-5 py-2 rounded-full hover:bg-teal hover:text-white transition-colors"
                  >
                    Abrir en Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">
              Preguntas frecuentes
            </p>
            <h2 className="section-title text-navy">
              Todo lo que necesitas saber
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-2 border-gray-100 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-heading font-bold text-navy text-lg">
                    {faq.q}
                  </span>
                  <span
                    className={`text-teal transition-transform duration-200 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visita Form */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-10">
            <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">
              Avísanos
            </p>
            <h2 className="section-title text-navy mb-4">
              Déjanos saber que vienes
            </h2>
            <p className="text-gray-600">
              ¡Nos encantaría preparar una bienvenida especial para ti!
            </p>
          </div>

          {submitted ? (
            <div className="text-center bg-white rounded-2xl p-12 shadow-md">
              <div className="text-6xl mb-4"></div>
              <h3 className="font-heading font-bold text-2xl text-navy mb-2">
                ¡Gracias! Te esperamos.
              </h3>
              <p className="text-gray-600 mb-6">
                Nuestro equipo se pondrá en contacto contigo pronto. ¡Que
                bendición tenerte con nosotros!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-teal font-semibold hover:underline"
              >
                Enviar otra respuesta
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-md space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) =>
                      setFormData({ ...formData, telefono: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal focus:outline-none transition-colors"
                    placeholder="+504 0000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    ¿Cuándo planeas venir?
                  </label>
                  <select
                    value={formData.fecha}
                    onChange={(e) =>
                      setFormData({ ...formData, fecha: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Seleccionar...</option>
                    <option>Este martes (6:30 p.m.)</option>
                    <option>Este domingo (8:00 a.m.)</option>
                    <option>Este domingo (9:40 a.m.)</option>
                    <option>Este domingo (11:30 a.m.)</option>
                    <option>Próxima semana</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  ¿Algo que quieras decirnos?
                </label>
                <textarea
                  rows={3}
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal focus:outline-none transition-colors resize-none"
                  placeholder="Es mi primera vez, traigo familia, tengo preguntas..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-navy text-white font-bold rounded-xl hover:bg-teal transition-colors text-lg"
              >
                ¡Nos vemos pronto! →
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
