'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { APP_URL } from '@/app/config'

const NAV_LINKS = [
  { label: 'Clases', href: '#clases' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Betzy', href: '#coaches' },
  { label: 'Planes', href: '#planes' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(26,26,26,0.92)] backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center"
          aria-label="re_line"
        >
          <Image
            src="/images/logo-re-line-ligth.png"
            alt="re_line inner & out"
            width={220}
            height={54}
            className="h-10 md:h-16 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('#planes')}
            className="px-5 py-2 rounded-full border border-white/40 text-white text-sm font-semibold hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            Ver planes
          </button>
          <Link
            href={`${APP_URL}/login`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            Entrar →
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menú"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: 'rgba(26,26,26,0.97)' }}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left min-h-[44px] flex items-center py-2 text-white/80 hover:text-white font-medium border-b border-white/10 text-sm"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('#planes')}
              className="w-full py-3 rounded-full border border-white/40 text-white text-sm font-semibold"
            >
              Ver planes
            </button>
            <Link
              href={`${APP_URL}/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full text-sm font-bold text-center text-white"
              style={{ backgroundColor: 'var(--primary)' }}
            >
              Entrar →
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
