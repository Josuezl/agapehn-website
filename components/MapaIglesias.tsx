'use client'

import { useState } from 'react'

type Church = {
  pastors: string
  city: string
  region: string
  x: number
  y: number
  isMain?: boolean
  note?: string
}

const churches: Church[] = [
  { pastors: 'Armando y Gladis de Medina',       city: 'Tegucigalpa',          region: 'Francisco Morazán', x: 196, y: 202, isMain: true },
  { pastors: 'Alejandro y Gabriela de Medina',   city: 'Tegucigalpa',          region: 'Francisco Morazán', x: 216, y: 190, note: 'Pastores Jóvenes — Explosión' },
  { pastors: 'Antonio y Luz de Lanza',           city: 'Valle de Ángeles',     region: 'Francisco Morazán', x: 230, y: 200 },
  { pastors: 'Ronald y Gloria de Villatoro',     city: 'Comayagua',            region: 'Comayagua',         x: 164, y: 163 },
  { pastors: 'Mario y Karina de Rodas',          city: 'La Paz',               region: 'La Paz',            x: 158, y: 179 },
  { pastors: 'Reniery y Verónica de Coello',     city: 'Danlí / El Ocotal',    region: 'El Paraíso',        x: 268, y: 206 },
  { pastors: 'Jorge y Alicia de Zúniga',         city: 'Santa Elena',          region: 'Olancho',           x: 234, y: 126 },
  { pastors: 'Juan y Sayda de Guerrero',         city: 'San Manuel',           region: 'Cortés',            x: 146, y: 74 },
  { pastors: 'Migdaleder y Nohemí de Rodríguez', city: 'San Pedro Sula / Tomalá', region: 'Cortés / Lempira', x: 120, y: 56 },
]

const PATH = 'M 0,20 C 40,8 80,2 120,4 C 160,-2 200,2 240,0 C 280,-2 320,2 360,0 C 400,-2 440,3 480,6 C 520,8 562,14 600,24 L 598,110 C 588,132 574,155 556,176 C 538,197 518,218 496,238 C 472,258 448,272 420,281 C 394,290 364,295 334,297 L 290,298 L 248,294 C 230,292 216,291 202,294 C 186,299 170,308 155,304 C 140,297 126,280 110,262 C 90,240 70,212 50,182 C 32,154 16,124 5,94 L 0,62 Z'

export default function MapaIglesias() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="relative w-full max-w-3xl mx-auto select-none">
      <svg viewBox="0 0 600 310" className="w-full">
        <defs>
          <filter id="pin-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Honduras */}
        <path d={PATH} fill="rgba(255,255,255,0.06)" stroke="rgba(56,189,248,0.35)" strokeWidth="1.5" />

        {churches.map((c, i) => {
          const isActive = active === i
          return (
            <g key={i} onClick={() => setActive(isActive ? null : i)} style={{ cursor: 'pointer' }}>
              {c.isMain && (
                <circle cx={c.x} cy={c.y} r="10" fill="none" stroke="rgba(56,189,248,0.5)" strokeWidth="1.5">
                  <animate attributeName="r" values="7;15;7" dur="2.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite"/>
                </circle>
              )}
              <circle
                cx={c.x} cy={c.y}
                r={c.isMain ? 6 : c.note ? 5 : 4}
                fill={c.isMain ? '#38bdf8' : c.note ? '#a78bfa' : 'white'}
                stroke={isActive ? 'white' : 'rgba(255,255,255,0.3)'}
                strokeWidth={isActive ? 2 : 1}
                filter={isActive ? 'url(#pin-glow)' : undefined}
              />
            </g>
          )
        })}
      </svg>

      {/* Tooltip */}
      {active !== null && (() => {
        const c = churches[active]
        const above = c.y / 310 > 0.58
        return (
          <div
            className="absolute z-20 pointer-events-none w-52 bg-navy-deeper border border-white/20 rounded-xl p-4 shadow-2xl"
            style={{
              left: `clamp(2%, calc(${(c.x / 600) * 100}% - 6rem), 62%)`,
              top: above
                ? `calc(${(c.y / 310) * 100}% - 120px)`
                : `calc(${(c.y / 310) * 100}% + 18px)`,
            }}
          >
            {c.isMain && <span className="inline-block bg-teal text-white text-xs font-bold px-2 py-0.5 rounded-full mb-2">Iglesia Madre</span>}
            {c.note && <span className="inline-block bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded-full mb-2">{c.note}</span>}
            <p className="font-bold text-white text-sm leading-snug">{c.pastors}</p>
            <p className="text-teal text-xs mt-1">{c.city}</p>
            <p className="text-white/50 text-xs">{c.region}</p>
          </div>
        )
      })()}

      {/* Leyenda */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-5 justify-center text-xs text-white/60">
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-teal inline-block"/><span>Iglesia Madre</span></span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-400 inline-block"/><span>Pastores Jóvenes</span></span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-white inline-block"/><span>Iglesia REMA</span></span>
        <span className="text-white/40 hidden sm:inline">— Toca un punto para ver detalles</span>
      </div>
    </div>
  )
}
