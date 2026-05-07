'use client'

import { useState } from 'react'

const reasons = [
  'Información general', 'Primera visita', 'Petición de oración',
  'Ministerios y voluntariado', 'Grupos en casa', 'REMA / Plantar iglesia', 'Otro',
]

export default function ContactoForm() {
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', motivo: '', mensaje: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-teal/20 border border-teal/30 rounded-3xl p-12 text-center">
        <div className="text-6xl mb-4"></div>
        <h3 className="font-heading font-extrabold text-2xl text-white mb-3">¡Gracias por escribirnos!</h3>
        <p className="text-white/70">Nos pondremos en contacto contigo pronto. ¡Dios te bendiga!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 rounded-3xl p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-white/90 mb-2">Nombre completo *</label>
          <input
            type="text" required
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal bg-white/10 text-white placeholder:text-white/40"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-white/90 mb-2">Correo electrónico *</label>
          <input
            type="email" required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal bg-white/10 text-white placeholder:text-white/40"
            placeholder="tu@correo.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-white/90 mb-2">Teléfono</label>
          <input
            type="tel"
            value={formData.telefono}
            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal bg-white/10 text-white placeholder:text-white/40"
            placeholder="+504 0000-0000"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-white/90 mb-2">Motivo</label>
          <select
            value={formData.motivo}
            onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal bg-white/10 text-white placeholder:text-white/40"
          >
            <option value="">Selecciona un motivo</option>
            {reasons.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-white/90 mb-2">Mensaje *</label>
        <textarea
          required rows={4}
          value={formData.mensaje}
          onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal bg-white resize-none"
          placeholder="¿En qué podemos ayudarte?"
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 bg-teal text-white font-bold rounded-full hover:bg-teal-dark transition-all hover:scale-105 text-lg"
      >
        Enviar mensaje →
      </button>
    </form>
  )
}
