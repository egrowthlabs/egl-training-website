'use client'

import { MISION } from '@/app/config'
import { useReveal } from '@/hooks/useReveal'

const PILARES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Consciente',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    label: 'Estructurado',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    label: 'Accesible',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    label: 'Sostenible',
  },
]

export default function MisionSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section
      id="mision"
      className="py-20 md:py-28 px-6 md:px-12 overflow-hidden"
      style={{ backgroundColor: 'var(--dark)', position: 'relative' }}
    >
      {/* Decorative background elements */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          transform: 'translate(-30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          transform: 'translate(30%, 30%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Label + heading */}
        <div
          ref={ref}
          className={`text-center mb-14 reveal ${visible ? 'visible' : ''}`}
        >
          <p className="section-label mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>Nuestra misión</p>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-0 leading-tight"
            style={{ color: 'var(--white)' }}
          >
            Entrenar con intención.{' '}
            <span style={{ color: '#8ecece' }}>Vivir con equilibrio.</span>
          </h2>
        </div>

        {/* Mission text — quotation style */}
        <div
          className={`relative mb-16 reveal ${visible ? 'visible' : ''}`}
          style={{ animationDelay: '0.1s' }}
        >
          {/* Vertical accent line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
            style={{ background: 'linear-gradient(to bottom, var(--primary), transparent)' }}
          />
          <blockquote className="pl-5 md:pl-8">
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.72)' }}
            >
              {MISION}
            </p>
          </blockquote>
        </div>

        {/* Pilares — 4 pills */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 reveal ${visible ? 'visible' : ''}`}
          style={{ animationDelay: '0.2s' }}
        >
          {PILARES.map((p) => (
            <div
              key={p.label}
              className="flex flex-col items-center gap-3 py-6 px-4 rounded-2xl transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <span style={{ color: '#8ecece' }} className="[&_svg]:w-7 [&_svg]:h-7">{p.icon}</span>
              <span
                className="text-sm font-bold tracking-widest uppercase"
                style={{ color: 'rgba(255,255,255,0.9)' }}
              >
                {p.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
