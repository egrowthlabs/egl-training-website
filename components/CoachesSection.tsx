'use client'

import Image from 'next/image'
import { COACHES } from '@/app/config'
import { useReveal } from '@/hooks/useReveal'

export default function CoachesSection() {
  const betzy = COACHES[0]
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="py-24 md:py-32" style={{ background: 'var(--dark)' }} id="coaches">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label">Tu coach</p>
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
              alt={`Betzy — coach fundadora de re_line`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient overlay bottom */}
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(26,26,26,0.6) 0%, transparent 60%)'
            }} />
            {/* Badge sobre la foto */}
            <div className="absolute bottom-6 left-6">
              <span
                className="inline-block text-xs font-bold px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(95,179,179,0.15)',
                  border: '1px solid rgba(95,179,179,0.4)',
                  color: 'var(--primary)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                Fundadora de re_line
              </span>
            </div>
          </div>

          {/* Texto */}
          <div className="order-2 space-y-8">
            <div>
              <h3
                className="text-5xl md:text-6xl font-black tracking-tight mb-3"
                style={{ color: 'var(--white)' }}
              >
                {betzy.name}
              </h3>
              <p className="text-base font-semibold" style={{ color: 'var(--primary)' }}>
                {betzy.specialty}
              </p>
            </div>

            <p
              className="text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              {betzy.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-t border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              {[
                { num: '+5', label: 'Años de experiencia' },
                { num: '50+', label: 'Clases on-demand' },
                { num: '100%', label: 'Resultados reales' },
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
