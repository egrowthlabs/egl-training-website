'use client'

import Image from 'next/image'
import { GALERIA_IMAGES } from '@/app/config'

export default function GaleriaSection() {
  // Duplicate track for seamless infinite loop
  const track = [...GALERIA_IMAGES, ...GALERIA_IMAGES]

  return (
    <section
      className="py-24 overflow-hidden"
      style={{ backgroundColor: 'var(--dark)' }}
    >
      {/* Header */}
      <div className="text-center mb-12 px-6">
        <p className="section-label mb-3" style={{ color: 'rgba(255,255,255,0.55)' }}>Galería</p>
        <h2 className="section-title text-white">
          El movimiento en acción
        </h2>
      </div>

      {/* Marquee track */}
      <div className="relative">
        <div
          className="flex gap-5 animate-gallery"
          style={{ width: 'max-content' }}
        >
          {track.map((img, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 overflow-hidden"
              style={{
                width: '280px',
                height: '380px',
                borderRadius: '16px',
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
                sizes="280px"
              />
            </div>
          ))}
        </div>

        {/* Edge fade gradients */}
        <div
          className="absolute top-0 left-0 bottom-0 w-24 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to right, var(--dark), transparent)' }}
        />
        <div
          className="absolute top-0 right-0 bottom-0 w-24 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to left, var(--dark), transparent)' }}
        />
      </div>
    </section>
  )
}
