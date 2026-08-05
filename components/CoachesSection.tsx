'use client'

import Image from 'next/image'
import { COACHES, BETZY_CREDENTIALS } from '@/app/config'
import { useReveal } from '@/hooks/useReveal'

export default function CoachesSection() {
  const betzy = COACHES[0]
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="py-24 md:py-32" style={{ background: 'var(--dark)' }} id="coaches">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.55)' }}>Tu coach</p>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            Conoce a Betzy
          </h2>
        </div>

        {/* Coach — layout de 2 columnas */}
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal ${visible ? 'visible' : ''}`}
        >
          {/* Foto */}
          <div className="relative h-[520px] md:h-[640px] rounded-3xl overflow-hidden order-1">
            <Image
              src={betzy.imagePath}
              alt="Betzabeth Anayanci de Luna Esquivel — fundadora de re_line"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient overlay bottom */}
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(26,26,26,0.6) 0%, transparent 60%)'
            }} />
            <div className="absolute bottom-6 left-6">
              <span
                className="inline-block text-xs font-bold px-4 py-2 rounded-full"
                style={{
                  background: '#ffffff',
                  color: '#1a1a1a',
                }}
              >
                Fundadora de re_line
              </span>
            </div>
          </div>

          {/* Texto */}
          <div className="order-2 space-y-7">
            <div>
              <h3
                className="text-4xl md:text-5xl font-black tracking-tight mb-2"
                style={{ color: 'var(--white)' }}
              >
                Betzabeth
              </h3>
              <p className="text-sm font-semibold" style={{ color: '#8ecece' }}>
                {betzy.specialty}
              </p>
            </div>

            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              {betzy.bio}
            </p>

            {/* Credentials */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Formación profesional
              </p>
              <div className="flex flex-wrap gap-2">
                {BETZY_CREDENTIALS.map((c) => (
                <span
                  key={c.label}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{
                    background: 'rgba(142,206,206,0.15)',
                    border: '1px solid rgba(142,206,206,0.4)',
                    color: 'rgba(255,255,255,0.9)',
                  }}
                >
                  <span style={{ color: '#8ecece', fontSize: '0.65rem', fontWeight: 800 }}>{c.year}</span>
                  {c.label}
                </span>
              ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-t border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              {[
                { num: '+10', label: 'Años de experiencia' },
                { num: '50+', label: 'Clases on-demand' },
                { num: '6', label: 'Certificaciones' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="block text-3xl font-black" style={{ color: 'var(--primary)' }}>
                    {stat.num}
                  </span>
                  <span className="block text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Social */}
            <a
              href="https://www.instagram.com/reline.method"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 transition-all duration-300 group"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="w-5 h-5 group-hover:text-[var(--primary)] transition-colors"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <span className="text-sm font-medium group-hover:text-[var(--primary)] transition-colors">
                @reline.method
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
