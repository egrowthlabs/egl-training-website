import { TESTIMONIOS } from '@/app/config'

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-base">★</span>
      ))}
    </div>
  )
}

export default function TestimoniosSection() {
  return (
    <section
      id="testimonios"
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ backgroundColor: 'var(--light)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Testimonios</p>
          <h2
            className="section-title mb-4"
            style={{ color: 'var(--dark)' }}
          >
            Lo que dicen quienes ya empezaron
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {TESTIMONIOS.map(t => {
            const isFeatured = t.featured === true
            return (
              <div
                key={t.name}
                className="relative rounded-2xl p-7 transition-transform duration-300"
                style={{
                  backgroundColor: isFeatured ? '#1a1a1a' : 'var(--white)',
                  transform: isFeatured ? 'translateY(-16px)' : 'none',
                  boxShadow: isFeatured
                    ? '0 20px 60px rgba(0,0,0,0.35)'
                    : '0 4px 24px rgba(0,0,0,0.08)',
                }}
              >
                {/* Stars */}
                <Stars />

                {/* Quote */}
                <p
                  className="text-sm md:text-base leading-relaxed mb-6"
                  style={{ color: isFeatured ? 'rgba(247,245,242,0.85)' : 'rgba(26,26,26,0.75)' }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--dark)',
                    }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p
                      className="font-bold text-sm"
                      style={{ color: isFeatured ? 'var(--white)' : 'var(--dark)' }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: isFeatured ? 'rgba(255,255,255,0.5)' : 'rgba(26,26,26,0.45)' }}
                    >
                      Miembro desde {t.since}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
