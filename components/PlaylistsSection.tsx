'use client'

import { PLAYLISTS } from '@/app/config'
import { useReveal } from '@/hooks/useReveal'

export default function PlaylistsSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section
      id="playlists"
      className="py-20 md:py-28 px-6 md:px-12 overflow-hidden"
      style={{ backgroundColor: 'var(--light)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-14 reveal ${visible ? 'visible' : ''}`}
        >
          <p className="section-label mb-3">Sonido &amp; energía</p>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight leading-tight"
            style={{ color: 'var(--dark)' }}
          >
            La música que mueve{' '}
            <span style={{ color: 'var(--primary)' }}>tu práctica.</span>
          </h2>
          <p
            className="mt-4 text-base md:text-lg max-w-xl leading-relaxed"
            style={{ color: 'rgba(26,26,26,0.6)' }}
          >
            Playlists curadas por Betzy para acompañar cada etapa de tu entrenamiento y bienestar.
          </p>
        </div>

        {/* Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 reveal ${visible ? 'visible' : ''}`}
          style={{ animationDelay: '0.12s' }}
        >
          {PLAYLISTS.map((pl) => (
            <a
              key={pl.id}
              href={pl.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: 'var(--white)',
                border: '1px solid rgba(26,26,26,0.08)',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
              }}
              aria-label={`Escuchar playlist ${pl.name} en Spotify`}
            >
              {/* Spotify embed */}
              <div className="w-full" style={{ lineHeight: 0 }}>
                <iframe
                  title={`Spotify playlist ${pl.name}`}
                  src={`https://open.spotify.com/embed/playlist/${pl.embedId}?utm_source=generator&theme=0`}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ display: 'block' }}
                />
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col gap-2 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-0.5"
                      style={{ color: 'var(--primary)' }}
                    >
                      {pl.subtitle}
                    </p>
                    <h3
                      className="text-lg font-black tracking-tight"
                      style={{ color: 'var(--dark)' }}
                    >
                      {pl.name}
                    </h3>
                  </div>
                  {/* Spotify logo */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-shrink-0 mt-0.5 opacity-40 group-hover:opacity-70 transition-opacity"
                    fill="currentColor"
                    style={{ color: '#1DB954' }}
                  >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </div>

                {/* Mood tags */}
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: 'rgba(26,26,26,0.5)' }}
                >
                  {pl.mood}
                </p>

                {/* CTA */}
                <div
                  className="mt-auto pt-3 flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all duration-200"
                  style={{ color: 'var(--primary)' }}
                >
                  <span>Escuchar en Spotify</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
