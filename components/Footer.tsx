import Image from 'next/image'
import Link from 'next/link'
import { CONTACT, APP_URL, SLOGAN } from '@/app/config'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8 mb-12">

          {/* Col 1: Brand */}
          <div>
          <Image
            src="/images/logo-re-line-ligth.png"
            alt="re_line inner & out"
            width={150}
            height={50}
            className="h-12 w-auto object-contain mb-3"
          />
          <p className="text-white/50 text-sm leading-relaxed mb-1">
            inner &amp; out
          </p>
          <p className="text-xs tracking-[0.15em] italic mb-5" style={{ color: 'var(--primary)' }}>
            {SLOGAN}
          </p>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram re_line"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-200"
            >
              {/* Instagram SVG icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <span className="text-sm">{CONTACT.instagram}</span>
            </a>
          </div>

          {/* Col 2: Platform */}
          <div>
            <p className="font-bold text-white text-sm tracking-widest uppercase mb-5 opacity-60">
              Plataforma
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Clases', href: '#clases' },
                { label: 'Planes', href: '#planes' },
                { label: 'Entrar', href: `${APP_URL}/login` },
                { label: 'Registrarse', href: `${APP_URL}/register` },
              ].map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <p className="font-bold text-white text-sm tracking-widest uppercase mb-5 opacity-60">
              Empresa
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Betzy', href: '#coaches' },
                { label: 'Metodología', href: '#metodologia' },
                { label: 'Contacto', href: `mailto:${CONTACT.email}` },
              ].map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div>
            <p className="font-bold text-white text-sm tracking-widest uppercase mb-5 opacity-60">
              Legal
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Términos de uso', href: '/terminos' },
                { label: 'Privacidad', href: '/privacidad' },
              ].map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-white/30 text-xs">
            © 2026 re_line · Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
