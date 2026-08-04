import Image from 'next/image'
import Link from 'next/link'
import { ClaseCategoria, APP_URL } from '@/app/config'

interface Props {
  clases: ClaseCategoria[]
}

export default function ClasesSection({ clases }: Props) {
  const [featured, ...rest] = clases

  return (
    <section
      id="clases"
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ backgroundColor: 'var(--dark)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Contenido on-demand</p>
          <h2 className="section-title text-white mb-4">
            Explora nuestras clases
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base md:text-lg">
            Cada clase diseñada con propósito. Elige tu disciplina y empieza hoy.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured card — full width */}
          {featured && (
            <div className="md:col-span-2 group relative rounded-2xl overflow-hidden h-72 md:h-96 cursor-pointer">
              <Image
                src={featured.imagePath}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Badge */}
              <div
                className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{ backgroundColor: 'var(--primary)', color: 'var(--dark)' }}
              >
                ⭐ Más popular
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-white/60 text-sm">{featured.level}</span>
                  <span className="w-px h-4 bg-white/30" />
                  <span className="text-white/60 text-sm">{featured.duration}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                  {featured.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl">
                  {featured.description}
                </p>
              </div>
            </div>
          )}

          {/* Rest cards */}
          {rest.map(clase => (
            <div
              key={clase.id}
              className="group relative rounded-2xl overflow-hidden h-56 md:h-64 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
            >
              <Image
                src={clase.imagePath}
                alt={clase.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-white/60 text-xs">{clase.level}</span>
                  <span className="w-px h-3 bg-white/30" />
                  <span className="text-white/60 text-xs">{clase.duration}</span>
                </div>
                <h3 className="text-xl font-black text-white mb-1">{clase.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed line-clamp-2">
                  {clase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-lg inline-flex"
          >
            Ver todas las clases
          </Link>
        </div>
      </div>
    </section>
  )
}
