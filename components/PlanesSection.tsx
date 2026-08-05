import Link from 'next/link'
import { PLANES } from '@/app/config'

export default function PlanesSection() {
  return (
    <section
      id="planes"
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ backgroundColor: 'var(--dark)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3" style={{ color: 'rgba(255,255,255,0.55)' }}>Precios</p>
          <h2 className="section-title text-white mb-4">
            Elige tu plan
          </h2>
          <p className="text-white/60 max-w-lg mx-auto text-base md:text-lg">
            Sin compromisos. Sin excusas. Solo resultados.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {PLANES.map(plan => {
            const isHL = plan.highlighted
            return (
              <div
                key={plan.id}
                className="relative rounded-2xl p-8 flex flex-col transition-all duration-300"
                style={{
                  backgroundColor: isHL ? 'var(--dark-teal)' : 'rgba(255,255,255,0.05)',
                  border: isHL ? '2px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                  transform: isHL ? 'translateY(-12px)' : 'none',
                  boxShadow: isHL ? '0 24px 64px rgba(95,179,179,0.2)' : 'none',
                }}
              >
                {/* Popular badge */}
                {isHL && plan.badge && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase"
                    style={{ backgroundColor: '#ffffff', color: '#1a1a1a' }}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Plan name & price */}
                <div className="mb-8">
                  <h3
                    className="font-black text-xl mb-4"
                    style={{ color: isHL ? 'var(--white)' : 'var(--light)' }}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-4xl md:text-5xl font-black"
                      style={{ color: isHL ? '#8ecece' : 'var(--white)' }}
                    >
                      ${plan.price.toLocaleString()}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: isHL ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.45)' }}
                    >
                      MXN{plan.period}
                    </span>
                  </div>
                  {plan.savings && (
                    <p
                      className="mt-2 text-xs font-semibold"
                      style={{ color: '#8ecece' }}
                    >
                      {plan.savings}
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className="font-bold text-base mt-0.5 flex-shrink-0"
                        style={{ color: 'var(--primary)' }}
                      >
                        ✓
                      </span>
                      <span
                        className="text-sm leading-relaxed"
                        style={{
                          color: isHL ? 'rgba(255,255,255,0.8)' : 'rgba(247,245,242,0.65)',
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={plan.stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-300"
                  style={
                    isHL
                      ? {
                          backgroundColor: '#ffffff',
                          color: '#1a1a1a',
                        }
                      : {
                          border: '2px solid rgba(255,255,255,0.3)',
                          color: 'var(--white)',
                          backgroundColor: 'transparent',
                        }
                  }
                >
                  Empezar con {plan.name.toLowerCase()}
                </Link>
              </div>
            )
          })}
        </div>

        {/* Security note */}
        <p className="text-center text-white/40 text-sm mt-10">
          💳 Pagos seguros con Stripe · Sin contratos · Cancela cuando quieras
        </p>
      </div>
    </section>
  )
}
