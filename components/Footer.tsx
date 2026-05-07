import Link from 'next/link'
import Logo from './Logo'

const quickLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/visita', label: 'Planifica tu Visita' },
  { href: '/mensajes', label: 'Mensajes' },
  { href: '/ministerios', label: 'Ministerios' },
  { href: '/iglesias', label: 'Nuestras Iglesias' },
  { href: '/contacto', label: 'Contacto' },
]

const ministryLinks = [
  { href: '/ministerios', label: 'Tribus' },
  { href: '/ministerios', label: 'Explosión (Jóvenes)' },
  { href: '/ministerios', label: 'Agape Kids' },
  { href: '/ministerios', label: 'Grupos en Casa' },
  { href: '/ministerios', label: 'Agape Worship' },
  { href: '/ministerios', label: 'Ágape Ora' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-deeper text-white">
      {/* Top Banner */}
      <div className="bg-teal py-4">
        <div className="container-custom text-center">
          <p className="text-navy font-bold text-lg tracking-wide">
            EN ESTA CASA, CABEMOS TODOS
          </p>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Logo + Address */}
          <div className="lg:col-span-1">
            <Logo className="h-10 w-auto text-white mb-4" />
            <p className="text-teal font-semibold text-sm mb-1">
              Ministerio Internacional
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              La Era, anillo periférico, entre Monolit y gasolinera Uno, 3
              cuadras antes del puente de la San Miguel.
            </p>
            <div className="space-y-1 text-sm text-white/70">
              <p>
                <span className="text-teal font-medium">Martes</span> 6:30 p.m.
              </p>
              <p>
                <span className="text-teal font-medium">Domingo</span> 8:00 a.m.
              </p>
              <p>
                <span className="text-teal font-medium">Domingo</span> 9:40 a.m.
              </p>
              <p>
                <span className="text-teal font-medium">Domingo</span> 11:30 a.m.{' '}
                <span className="text-white/40">(jóvenes)</span>
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Navegación
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-teal transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Ministries */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Ministerios
            </h3>
            <ul className="space-y-2">
              {ministryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-teal transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Social + REMA */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Síguenos
            </h3>
            <div className="flex gap-3 mb-8">
              {/* Facebook */}
              <a
                href="https://facebook.com/MinisterioInternacionalAgape"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/MinisterioInternacionalAgape"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com/@MinisterioInternacionalAgape"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-teal font-bold text-xs uppercase tracking-wider mb-1">
                REMA
              </p>
              <p className="text-white/70 text-sm">Red Ministerial Ágape</p>
              <p className="text-white/50 text-xs mt-1">
                11 iglesias en Honduras, El Salvador y Panamá
              </p>
              <Link
                href="/iglesias"
                className="inline-block mt-3 text-teal text-xs font-semibold hover:underline"
              >
                Ver todas las iglesias →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            © 2026 Ministerio Internacional Ágape. Todos los derechos
            reservados.
          </p>
          <p className="text-white/40 text-sm italic">
            &ldquo;Dios es bueno. Dios es fiel.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  )
}
