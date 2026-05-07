'use client'

import { useState } from 'react'

const faqs = [
  { q: '¿Qué ropa debo usar?', a: 'Ven como eres. No hay código de vestimenta. Lo más importante es que estés cómodo y con el corazón abierto para adorar.' },
  { q: '¿Hay lugar para mis hijos?', a: 'Sí. Tenemos Agape Kids para niños de todas las edades, con maestros capacitados y ambientes seguros.' },
  { q: '¿Tengo que ser miembro para participar?', a: 'No. Todos son bienvenidos a participar en los servicios y actividades desde el primer día.' },
  { q: '¿Dónde están ubicados?', a: 'La Era, anillo periférico, entre Monolit y gasolinera Uno, 3 cuadras antes del puente de la San Miguel, Tegucigalpa, Honduras.' },
  { q: '¿Hay estacionamiento disponible?', a: 'Sí, contamos con estacionamiento disponible y un equipo que te ayudará a estacionarte de manera segura.' },
]

export default function VisitaFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white/10 rounded-2xl border border-white/10 overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-white/15 transition-colors"
          >
            <span className="font-heading font-bold text-white text-lg pr-4">{faq.q}</span>
            <span className={`text-2xl text-teal flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          {open === i && (
            <div className="px-6 pb-6 text-white/70 leading-relaxed">{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  )
}
