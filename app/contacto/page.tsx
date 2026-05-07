'use client'

import Image from 'next/image'
import { useState } from 'react'

const reasons = [
  'Información general',
  'Primera visita',
  'Petición de oración',
  'Ministerios y voluntariado',
  'Grupos en casa',
  'REMA / Plantar iglesia',
  'Otro',
]

const socialLinks = [
  {
    name: 'Facebook',
    handle: '@MinisterioInternacionalÁgape',
    href: 'https://facebook.com/MinisterioInternacionalAgape',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    name: 'Instagram',
    handle: '@MinisterioInternacionalÁgape',
    href: 'https://instagram.com/MinisterioInternacionalAgape',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    color: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:opacity-90',
  },
  {
    name: 'YouTube',
    handle: '@MinisterioInternacionalÁgape',
    href: 'https://youtube.com/@MinisterioInternacionalAgape',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    color: 'bg-red-600 hover:bg-red-700',
  },
]

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    motivo: '',
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
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=2073&auto=format&fit=crop"
          alt="Contacto"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deeper/85 to-navy-deeper/80" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-teal font-semibold tracking-[0.3em] text-sm uppercase mb-4">
            Estamos aquí para ti
          </p>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl">
            CONTACTO
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">
                  Información
                </p>
                <h2 className="section-title text-navy mb-6">
                  Hablemos
                </h2>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-navy">Dirección</p>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">
                    La Era, anillo periférico, entre Monolit y gasolinera Uno, 3
                    cuadras antes del puente de la San Miguel, Tegucigalpa, Honduras.
                  </p>
                </div>
              </div>

              {/* Schedule */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-navy">Horarios</p>
                  <div className="text-gray-600 text-sm mt-1 space-y-1">
                    <p><span className="font-semibold text-navy">Martes</span> — 6:30 p.m.</p>
                    <p><span className="font-semibold text-navy">Domingo</span> — 8:00 a.m.</p>
                    <p><span className="font-semibold text-navy">Domingo</span> — 9:40 a.m.</p>
                    <p><span className="font-semibold text-navy">Domingo</span> — 11:30 a.m. (jóvenes)</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="font-bold text-navy mb-4">Redes Sociales</p>
                <div className="space-y-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-4 py-3 text-white rounded-xl transition-all hover:scale-105 ${s.color}`}
                    >
                      {s.icon}
                      <div>
                        <p className="font-bold text-sm">{s.name}</p>
                        <p className="text-white/80 text-xs">{s.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Frases */}
              <div className="bg-navy rounded-2xl p-6 text-white">
                <p className="text-teal font-bold text-sm uppercase tracking-widest mb-3">
                  Recuerda
                </p>
                <p className="text-white/80 italic text-lg leading-relaxed">
                  &ldquo;En esta casa, cabemos todos. Dios es bueno. Dios es
                  fiel.&rdquo;
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex items-center justify-center text-center bg-gray-50 rounded-3xl p-12">
                  <div>
                    <div className="text-7xl mb-4"></div>
                    <h3 className="font-heading font-bold text-3xl text-navy mb-3">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-sm mx-auto">
                      Gracias por contactarnos. Nuestro equipo se pondrá en
                      contacto contigo muy pronto. ¡Dios te bendiga!
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-teal font-semibold hover:underline"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-gray-50 rounded-3xl p-8 md:p-10 space-y-6"
                >
                  <div>
                    <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-1">
                      Formulario
                    </p>
                    <h3 className="font-heading font-bold text-2xl text-navy">
                      Envíanos un mensaje
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-teal focus:outline-none transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-teal focus:outline-none transition-colors"
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
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-teal focus:outline-none transition-colors"
                        placeholder="+504 0000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Motivo de contacto
                      </label>
                      <select
                        value={formData.motivo}
                        onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-teal focus:outline-none transition-colors"
                      >
                        <option value="">Seleccionar...</option>
                        {reasons.map((r) => (
                          <option key={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-teal focus:outline-none transition-colors resize-none"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-navy text-white font-bold rounded-xl hover:bg-teal transition-colors text-lg"
                  >
                    Enviar mensaje →
                  </button>
                  <p className="text-center text-gray-500 text-xs">
                    Al enviar, aceptas que nos comuniquemos contigo por los medios
                    proporcionados.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
            alt="Tegucigalpa, Honduras"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="font-bold text-xl">Ministerio Internacional Ágape</p>
              <p className="text-white/70 mt-1">La Era, Tegucigalpa, Honduras</p>
              <a
                href="https://maps.google.com/?q=Tegucigalpa+Honduras"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-white text-navy font-bold px-6 py-2 rounded-full hover:bg-teal hover:text-white transition-colors"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
