import Image from 'next/image'
import { APP_URL } from '@/app/config'

export default function CtaSection() {
  return (
    <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/reline_betzy_mancuernas-vista-ciudad.jpeg"
          alt="Betzy mancuernas vista ciudad re_line"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          &ldquo;Tu mejor versión
          <br />
          <span style={{ color: '#8ecece' }}>empieza hoy.&rdquo;</span>
        </h2>
        <p className="text-white/70 text-base md:text-lg mb-10 leading-relaxed">
          Únete a cientos de personas que ya decidieron entrenar con propósito.
          Sin excusas, sin horarios fijos, solo resultados.
        </p>
        <a
          href={`${APP_URL}/register`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-lg"
        >
          Quiero empezar →
        </a>
      </div>
    </section>
  )
}
