import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | re_line',
  description: 'Términos y condiciones de uso de la plataforma re_line inner & out.',
  robots: { index: false, follow: false },
}

export default function TerminosPage() {
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
                Términos y Condiciones
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--grey)' }}>
                Última actualización: agosto 2026
              </p>
            </div>

            {/* Sections */}
            {[
              {
                num: '1.',
                title: 'Aceptación de los términos',
                body: 'Al acceder y usar la plataforma re_line (en adelante "la Plataforma"), con dominio reline.mx, aceptas los presentes Términos y Condiciones. Si no estás de acuerdo, te pedimos no usar la Plataforma.',
              },
              {
                num: '2.',
                title: 'Descripción del servicio',
                body: 're_line es una plataforma de video on demand (VOD) de fitness que ofrece clases de cardio consciente, fuerza estructurada, resistencia funcional y pilates reformer. El acceso al contenido premium requiere una suscripción activa.',
              },
              {
                num: '3.',
                title: 'Cuenta de usuario',
                body: 'Para usar la Plataforma debes crear una cuenta con información verídica. Eres responsable de mantener la confidencialidad de tu contraseña y de todas las actividades que ocurran bajo tu cuenta.',
              },
              {
                num: '4.',
                title: 'Suscripciones y pagos',
                body: 'Las suscripciones se cobran de forma mensual, trimestral o anual según el plan elegido. Los pagos se procesan a través de Stripe. Al activar tu suscripción aceptas que se renueve automáticamente al final de cada período hasta que la canceles. Los precios pueden cambiar con previo aviso de 30 días.',
              },
              {
                num: '5.',
                title: 'Período de prueba',
                body: 'Ofrecemos 7 días de prueba gratuita al activar tu primera suscripción. Al finalizar el período de prueba se cobrará el primer pago automáticamente. Puedes cancelar antes de que termine la prueba sin cargo alguno.',
              },
              {
                num: '6.',
                title: 'Cancelaciones y reembolsos',
                body: 'Puedes cancelar tu suscripción en cualquier momento desde la sección "Mi Suscripción" en la Plataforma. Tu acceso continuará hasta el final del período pagado. No ofrecemos reembolsos por períodos parciales, salvo en casos donde la ley aplicable lo exija.',
              },
              {
                num: '7.',
                title: 'Uso aceptable',
                body: 'El contenido de la Plataforma es para uso personal. Queda prohibido compartir tu cuenta, reproducir, distribuir, modificar o crear obras derivadas del contenido sin autorización expresa.',
              },
              {
                num: '8.',
                title: 'Limitación de responsabilidad',
                body: 're_line proporciona contenido de fitness con fines informativos. Consulta a un profesional de salud antes de iniciar cualquier programa de ejercicio. No somos responsables por lesiones derivadas del uso del contenido.',
              },
              {
                num: '9.',
                title: 'Modificaciones',
                body: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Te notificaremos mediante correo electrónico con al menos 15 días de anticipación ante cambios materiales.',
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
                Para cualquier duda escríbenos a{' '}
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
                href="/privacidad"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--primary)' }}
              >
                Ver Política de Privacidad →
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
