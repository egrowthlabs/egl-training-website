'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

const BULLETS = [
  {
    icon: '✦',
    title: 'Técnica antes que intensidad',
    text: 'Correcta ejecución y progresión en cada movimiento.',
  },
  {
    icon: '✦',
    title: 'Estructura y consciencia corporal',
    text: 'Rutinas organizadas por niveles, objetivos y necesidades reales.',
  },
  {
    icon: '✦',
    title: 'Sin extremos, sin presión',
    text: 'Respetando tu ritmo y celebrando cada avance del proceso.',
  },
  {
    icon: '✦',
    title: 'Acompañada en cada etapa',
    text: 'No entrenas sola — hay guía, intención y recursos en todo momento.',
  },
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
            <span style={{ color: 'var(--primary-dark)' }}>Un espacio de bienestar real.</span>
          </h2>

          {/* Párrafo principal */}
          <p
            className="text-base md:text-lg leading-relaxed mb-6"
            style={{ color: 'rgba(26,26,26,0.7)' }}
          >
            Aquí no se trata de solo entrenar, sino de construir constancia, fuerza y una relación
            más sana con tu cuerpo. El contenido está basado en un método claro y profesional, con
            rutinas organizadas por niveles, objetivos y necesidades reales, pensadas para adaptarse
            a distintos estilos de vida.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed mb-10"
            style={{ color: 'rgba(26,26,26,0.7)' }}
          >
            Cada programa combina técnica, funcionalidad y conciencia corporal, priorizando la
            correcta ejecución, progresión y el equilibrio tanto físico como mental.
          </p>

          <ul className="flex flex-col gap-5">
            {BULLETS.map(b => (
              <li key={b.title} className="flex items-start gap-4">
                <span
                  className="text-xl leading-none mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--primary-dark)' }}
                >
                  {b.icon}
                </span>
                <span>
                  <span
                    className="block font-semibold text-base md:text-lg"
                    style={{ color: 'var(--dark)' }}
                  >
                    {b.title}
                  </span>
                  <span
                    className="block text-sm md:text-base leading-snug mt-0.5"
                    style={{ color: 'rgba(26,26,26,0.6)' }}
                  >
                    {b.text}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Images */}
        <div className="relative h-[300px] sm:h-[380px] md:h-[480px] lg:h-[580px]">
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
          {/* Secondary floating image — hidden on mobile to avoid overflow */}
          <div
            className="hidden md:block absolute -bottom-6 -left-6 w-48 h-60 rounded-xl overflow-hidden shadow-xl border-4"
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
          {/* Quote overlay — hidden on mobile to avoid overflow */}
          <div
            className="hidden md:block absolute -top-4 -right-4 max-w-[180px] rounded-2xl p-4 shadow-xl"
            style={{
              background: 'var(--dark)',
              border: '1px solid rgba(95,179,179,0.25)',
            }}
          >
            <p className="text-xs italic leading-snug" style={{ color: 'rgba(255,255,255,0.75)' }}>
              &ldquo;El ejercicio se convierte en una herramienta de bienestar, fortaleza y crecimiento personal.&rdquo;
            </p>
            <p className="text-xs font-bold mt-2" style={{ color: 'var(--primary)' }}>— Betzy</p>
          </div>
        </div>
      </div>
    </section>
  )
}
