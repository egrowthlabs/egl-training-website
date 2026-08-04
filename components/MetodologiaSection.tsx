'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

const BULLETS = [
  { icon: '✦', text: 'Técnica antes que intensidad' },
  { icon: '✦', text: 'Progresión estructurada' },
  { icon: '✦', text: 'Comunidad que te impulsa' },
]

export default function MetodologiaSection() {
  const { ref: sectionRef, visible } = useReveal<HTMLDivElement>()

  return (
    <section
      id="metodologia"
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ backgroundColor: 'var(--light)' }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left: Text */}
        <div
          ref={sectionRef}
          className={`reveal ${visible ? 'visible' : ''}`}
        >
          <p className="section-label mb-4">Nuestra metodología</p>
          <h2
            className="section-title mb-6 leading-tight"
            style={{ color: 'var(--dark)' }}
          >
            Más que ejercicio.
            <br />
            <span style={{ color: 'var(--primary-dark)' }}>Un estilo de vida.</span>
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-10"
            style={{ color: 'rgba(26,26,26,0.7)' }}
          >
            El método re_line integra ciencia del movimiento con consciencia corporal.
            Cada clase está diseñada para que progreses de forma segura, disfrutes el
            proceso y construyas un cuerpo fuerte de adentro hacia afuera.
          </p>

          <ul className="flex flex-col gap-5">
            {BULLETS.map(b => (
              <li key={b.text} className="flex items-start gap-4">
                <span
                  className="text-xl leading-none mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--primary-dark)' }}
                >
                  {b.icon}
                </span>
                <span
                  className="font-semibold text-base md:text-lg"
                  style={{ color: 'var(--dark)' }}
                >
                  {b.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Images */}
        <div className="relative h-[480px] md:h-[580px]">
          {/* Main large image */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/reline_betzy_sentadilla-profunda-ventana.jpeg"
              alt="Betzy sentadilla profunda ventana re_line metodología"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Secondary floating image */}
          <div
            className="absolute -bottom-6 -left-6 w-48 h-60 rounded-xl overflow-hidden shadow-xl border-4"
            style={{ borderColor: 'var(--light)' }}
          >
            <Image
              src="/images/reline_betzy_correccion-lunge-terraza.jpeg"
              alt="Betzy corrección lunge terraza re_line coaching"
              fill
              className="object-cover"
              sizes="192px"
            />
          </div>
          {/* Decorative teal dot */}
          <div
            className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-30"
            style={{ backgroundColor: 'var(--primary)' }}
          />
        </div>
      </div>
    </section>
  )
}
