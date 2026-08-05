import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Política de Privacidad | re_line',
  description: 'Política de privacidad y tratamiento de datos personales de la plataforma re_line inner & out.',
  robots: { index: false, follow: false },
}

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />

      <main
        className="min-h-screen pt-32 pb-24 px-6 md:px-12"
        style={{ backgroundColor: 'var(--light)' }}
      >
        <div className="max-w-3xl mx-auto">

          {/* Back */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm mb-10 transition-colors duration-200"
            style={{ color: 'var(--grey)', fontFamily: 'var(--font-body)' }}
          >
            ← Volver al inicio
          </Link>

          {/* Card */}
          <div
            className="rounded-3xl p-8 md:p-12 space-y-8"
            style={{
              backgroundColor: 'var(--white)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {/* Header */}
            <div style={{ borderBottom: '1px solid rgba(63,63,62,0.08)', paddingBottom: '1.5rem' }}>
              <Image
                src="/images/logo-re-line-dark.png"
                alt="re_line inner & out"
                width={130}
                height={44}
                className="h-10 w-auto object-contain mb-6"
              />
              <h1
                className="text-4xl md:text-5xl mb-2"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--dark)', fontWeight: 300 }}
              >
                Política de Privacidad
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--grey)' }}>
                Última actualización: agosto 2026
              </p>
            </div>

            {/* Sections */}
            <section className="space-y-2">
              <h2
                className="text-xl"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--dark)', fontWeight: 400 }}
              >
                1. Responsable del tratamiento
              </h2>
              <p
                className="leading-relaxed text-sm md:text-base"
                style={{ fontFamily: 'var(--font-body)', color: 'rgba(63,63,62,0.7)' }}
              >
                re_line, con domicilio en México, es el responsable del tratamiento de tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
              </p>
            </section>

            <section className="space-y-2">
              <h2
                className="text-xl"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--dark)', fontWeight: 400 }}
              >
                2. Datos que recopilamos
              </h2>
              <ul
                className="space-y-2 text-sm md:text-base leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', color: 'rgba(63,63,62,0.7)' }}
              >
                {[
                  'Datos de identificación: nombre, correo electrónico, nombre de usuario.',
                  'Datos de uso: clases vistas, sesiones de entrenamiento, progreso y estadísticas.',
                  'Datos de pago: procesados directamente por Stripe. re_line no almacena datos de tarjetas.',
                  'Datos técnicos: dirección IP, tipo de navegador, sistema operativo.',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span style={{ color: 'var(--primary)', marginTop: '0.15rem', flexShrink: 0 }}>✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {[
              {
                num: '3.',
                title: 'Finalidad del tratamiento',
                body: 'Utilizamos tus datos para: (a) gestionar tu cuenta y suscripción, (b) proveer acceso al contenido premium, (c) enviarte comunicaciones relacionadas con el servicio, (d) mejorar la Plataforma mediante análisis de uso.',
              },
              {
                num: '4.',
                title: 'Compartir datos con terceros',
                body: 'No vendemos ni compartimos tus datos personales con terceros, salvo con proveedores de servicios necesarios para operar la Plataforma (Stripe para pagos, AWS para almacenamiento, SendGrid para comunicaciones), quienes están obligados a proteger tu información.',
              },
              {
                num: '5.',
                title: 'Retención de datos',
                body: 'Conservamos tus datos mientras mantengas una cuenta activa. Puedes solicitar la eliminación de tu cuenta y datos personales escribiéndonos a hola@reline.mx.',
              },
              {
                num: '6.',
                title: 'Seguridad',
                body: 'Implementamos medidas técnicas y organizativas para proteger tus datos contra acceso no autorizado, pérdida o alteración. Las contraseñas se almacenan de forma cifrada y los pagos se procesan bajo estándares PCI DSS de Stripe.',
              },
              {
                num: '7.',
                title: 'Tus derechos (ARCO)',
                body: 'Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos personales. Para ejercer estos derechos escríbenos a hola@reline.mx con tu solicitud.',
              },
              {
                num: '8.',
                title: 'Cookies',
                body: 'Utilizamos cookies técnicas necesarias para el funcionamiento de la Plataforma. Puedes configurar tu navegador para rechazarlas, aunque esto puede afectar la funcionalidad del servicio.',
              },
              {
                num: '9.',
                title: 'Modificaciones',
                body: 'Podemos actualizar esta política en cualquier momento. Te notificaremos sobre cambios significativos mediante correo electrónico o un aviso visible en la Plataforma.',
              },
            ].map(s => (
              <section key={s.num} className="space-y-2">
                <h2
                  className="text-xl"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--dark)', fontWeight: 400 }}
                >
                  {s.num} {s.title}
                </h2>
                <p
                  className="leading-relaxed text-sm md:text-base"
                  style={{ fontFamily: 'var(--font-body)', color: 'rgba(63,63,62,0.7)' }}
                >
                  {s.body}
                </p>
              </section>
            ))}

            {/* Contact */}
            <section className="space-y-2">
              <h2
                className="text-xl"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--dark)', fontWeight: 400 }}
              >
                10. Contacto
              </h2>
              <p
                className="leading-relaxed text-sm md:text-base"
                style={{ fontFamily: 'var(--font-body)', color: 'rgba(63,63,62,0.7)' }}
              >
                Para dudas sobre esta política o el tratamiento de tus datos escríbenos a{' '}
                <a
                  href="mailto:hola@reline.mx"
                  style={{ color: 'var(--primary)', textDecoration: 'underline' }}
                >
                  hola@reline.mx
                </a>.
              </p>
            </section>

            {/* Footer link */}
            <div style={{ borderTop: '1px solid rgba(63,63,62,0.08)', paddingTop: '1.5rem' }}>
              <Link
                href="/terminos"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--primary)' }}
              >
                Ver Términos y Condiciones →
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
