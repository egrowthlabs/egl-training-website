import Image from 'next/image'
import { APP_URL } from '@/app/config'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/reline_betzy_entrenamiento-planche-terraza.jpeg"
          alt="Betzy entrenamiento planche terraza re_line"
          fill
          priority
          className="object-cover animate-hero-zoom"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">

          {/* H1 */}
          <h1
            className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6"
            style={{ animation: 'fadeIn 0.7s ease 0.1s both' }}
          >
            Entrena con{' '}
            <span style={{ color: 'var(--primary)' }}>propósito.</span>
            <br />
            Vive con fuerza.
          </h1>

          {/* Description */}
          <p
            className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            style={{ animation: 'fadeIn 0.7s ease 0.2s both' }}
          >
            Clases on-demand de cardio consciente, fuerza funcional y movilidad.
            Diseñadas por Betzy, disponibles cuando tú quieras.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 mb-14"
            style={{ animation: 'fadeIn 0.7s ease 0.3s both' }}
          >
            <a href="#planes" className="btn-primary-lg">
              Empezar ahora
            </a>
            <a href="#clases" className="btn-ghost-lg">
              Ver clases →
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex items-center gap-6 md:gap-10"
            style={{ animation: 'fadeIn 0.7s ease 0.4s both' }}
          >
            <div className="text-center">
              <p className="text-3xl font-black text-white">50+</p>
              <p className="text-white/60 text-sm">Clases</p>
            </div>
            <div className="w-px h-10 bg-white/25" />
            <div className="text-center">
              <p className="text-3xl font-black text-white">1</p>
              <p className="text-white/60 text-sm">Coach</p>
            </div>
            <div className="w-px h-10 bg-white/25" />
            <div className="text-center">
              <p className="text-3xl font-black text-white">100%</p>
              <p className="text-white/60 text-sm">Online</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-10 z-10 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-white/40 text-xs tracking-widest rotate-90 origin-center mb-3">
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}
