import type { Metadata } from 'next'
import './globals.css'
import { SEO, CONTACT, SLOGAN, GEO_KEYWORDS } from './config'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  metadataBase: new URL(SEO.siteUrl),
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: SEO.siteUrl,
    title: SEO.title,
    description: SEO.description,
    siteName: 're_line',
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: `re_line inner & out — ${SLOGAN}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
  },
  other: {
    'geo.region': 'MX-NLE',
    'geo.placename': 'Monterrey, Nuevo León, México',
    'geo.position': `${CONTACT.geo.lat};${CONTACT.geo.lng}`,
    'ICBM': `${CONTACT.geo.lat}, ${CONTACT.geo.lng}`,
    'content-language': 'es-MX',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 're_line',
  alternateName: 're_line inner & out',
  slogan: SLOGAN,
  description:
    'Plataforma de entrenamiento online con clases on-demand de cardio consciente, fuerza funcional y movilidad. Método creado por Betzabeth Anayanci de Luna Esquivel, Lic. en Ciencias del Ejercicio.',
  url: 'https://reline.mx',
  logo: 'https://reline.mx/images/logo-re-line-dark.png',
  image: 'https://reline.mx/images/reline_betzy_entrenamiento-planche-terraza.jpeg',
  telephone: '+528186836749',
  founder: {
    '@type': 'Person',
    name: 'Betzabeth Anayanci de Luna Esquivel',
    jobTitle: 'Lic. en Ciencias del Ejercicio · Fundadora de re_line',
    sameAs: ['https://www.instagram.com/reline.method'],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Monterrey',
    addressRegion: 'Nuevo León',
    addressCountry: 'MX',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.6866,
    longitude: -100.3161,
  },
  sameAs: ['https://www.instagram.com/reline.method'],
  priceRange: '$$',
}

// FAQPage schema — GEO: definiciones de marca para motores generativos
const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: GEO_KEYWORDS.map((kw) => ({
    '@type': 'Question',
    name: `¿Qué es ${kw.term} en re_line?`,
    acceptedAnswer: {
      '@type': 'Answer',
      text: kw.definition,
    },
  })),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-MX">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
