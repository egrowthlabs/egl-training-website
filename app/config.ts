// ═══════════════════════════════════════════════════════════════
// re_line — Configuración centralizada del sitio
// Basada en arquitectura oncologiaquirurgica.mx
// ═══════════════════════════════════════════════════════════════

export interface Plan {
  id: string
  name: string
  price: number
  period: string
  periodLabel: string
  savings?: string
  features: string[]
  highlighted: boolean
  badge?: string
  stripeLink: string
}

export interface Coach {
  name: string
  specialty: string
  bio: string
  imagePath: string
}

export interface ClaseCategoria {
  id: string
  title: string
  description: string
  duration: string
  level: string
  imagePath: string
  featured?: boolean
}

export interface Testimonio {
  initial: string
  name: string
  since: string
  text: string
  featured?: boolean
}

export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  siteUrl: string
  ogImage: string
}

export interface ContactConfig {
  whatsapp: string
  whatsappDisplay: string
  instagram: string
  instagramUrl: string
  email: string
  city: string
  state: string
  country: string
  geo: { lat: string; lng: string }
}

// ─── SEO ────────────────────────────────────────────────────────
export const SEO: SEOConfig = {
  title: 're_line inner & out | Entrena con propósito. Vive con fuerza.',
  description:
    'Plataforma de entrenamiento online con clases on-demand de cardio consciente, fuerza funcional y movilidad. Diseñadas por Betzy en Monterrey, México.',
  keywords: [
    'clases online fitness',
    'entrenamiento en casa',
    'cardio consciente',
    'fuerza funcional',
    'movilidad',
    'clases on demand México',
    'Betzy reline',
    'reline Monterrey',
    'workout online México',
    'suscripción fitness',
    'inner and out',
    're_line inner out',
  ],
  siteUrl: 'https://reline.mx',
  ogImage: '/images/reline_betzy_entrenamiento-planche-terraza.jpeg',
}

// ─── LOGOS ───────────────────────────────────────────────────────
export const LOGOS = {
  light: '/images/logo-re-line-ligth.png', // Para fondos oscuros (navbar, hero, footer)
  dark:  '/images/logo-re-line-dark.png',  // Para fondos claros (secciones blancas)
}

// ─── CONTACTO ────────────────────────────────────────────────────
export const CONTACT: ContactConfig = {
  whatsapp: '528186836749',
  whatsappDisplay: '+52 81 8683 6749',
  instagram: '@reline.method',
  instagramUrl: 'https://www.instagram.com/reline.method',
  email: 'hola@reline.mx',
  city: 'Monterrey',
  state: 'Nuevo León',
  country: 'México',
  geo: { lat: '25.6866', lng: '-100.3161' },
}

// ─── APP ─────────────────────────────────────────────────────────
export const APP_URL = 'https://app.reline.mx'

// ─── PLANES ──────────────────────────────────────────────────────
export const PLANES: Plan[] = [
  {
    id: 'mensual',
    name: 'Mensual',
    price: 299,
    period: '/mes',
    periodLabel: 'mes',
    features: [
      'Acceso completo a todas las clases',
      'Nuevas clases cada semana',
      'Acceso desde cualquier dispositivo',
      'Cancela cuando quieras',
    ],
    highlighted: false,
    stripeLink: `${APP_URL}/register?plan=mensual`,
  },
  {
    id: 'trimestral',
    name: 'Trimestral',
    price: 749,
    period: '/3 meses',
    periodLabel: '3 meses',
    savings: 'Ahorras $148 MXN',
    features: [
      'Todo lo del plan mensual',
      'Acceso prioritario a contenido nuevo',
      'Soporte personalizado por WhatsApp',
      'Badge de comunidad VIP',
    ],
    highlighted: true,
    badge: 'Más popular',
    stripeLink: `${APP_URL}/register?plan=trimestral`,
  },
  {
    id: 'anual',
    name: 'Anual',
    price: 2499,
    period: '/año',
    periodLabel: 'año',
    savings: 'Ahorras $1,089 MXN',
    features: [
      'Todo lo del plan trimestral',
      '2 sesiones de asesoría personal',
      'Plan de entrenamiento personalizado',
      'Acceso de por vida a clases archivadas',
    ],
    highlighted: false,
    stripeLink: `${APP_URL}/register?plan=anual`,
  },
]

// ─── COACHES ─────────────────────────────────────────────────────
export const COACHES: Coach[] = [
  {
    name: 'Betzy',
    specialty: 'Cardio Consciente · Fuerza · Movilidad',
    bio: 'Creadora del método re_line. Coach certificada con +5 años transformando cuerpos y mentes. Sus clases conectan el movimiento con el bienestar mental para resultados reales y duraderos.',
    imagePath: '/images/reline_betzy_entrenamiento-planche-terraza.jpeg',
  },
]

// ─── CLASES (fallback si la API no responde) ─────────────────────
export const CLASES_FALLBACK: ClaseCategoria[] = [
  {
    id: 'cardio-consciente',
    title: 'Cardio Consciente',
    description:
      'Entrena el sistema cardiovascular con movimientos que conectan cuerpo y mente. Sin impacto agresivo, máximos resultados.',
    duration: '30–50 min',
    level: 'Todos los niveles',
    imagePath: '/images/reline_betzy_planche-terraza-panoramica.jpeg',
    featured: true,
  },
  {
    id: 'fuerza-funcional',
    title: 'Fuerza Funcional',
    description:
      'Mancuernas, bandas y peso corporal para construir fuerza real. Tu cuerpo como máquina.',
    duration: '40–60 min',
    level: 'Intermedio–Avanzado',
    imagePath: '/images/reline_betzy_mancuernas-vista-ciudad.jpeg',
  },
  {
    id: 'resistencia-bandas',
    title: 'Resistencia con Bandas',
    description:
      'Activa y tonifica con el equipo más versátil. Ideal para entrenar en casa o en el gym.',
    duration: '30–45 min',
    level: 'Principiante–Intermedio',
    imagePath: '/images/reline_betzy_banda-resistencia-cardio.jpeg',
  },
  {
    id: 'movilidad-control',
    title: 'Movilidad y Control',
    description:
      'Flexibilidad, rango de movimiento y consciencia corporal. El complemento perfecto.',
    duration: '20–40 min',
    level: 'Todos los niveles',
    imagePath: '/images/reline_betzy_sentadilla-lateral-terraza.jpeg',
  },
]

// ─── TESTIMONIOS ──────────────────────────────────────────────────
export const TESTIMONIOS: Testimonio[] = [
  {
    initial: 'S',
    name: 'Sofía R.',
    since: 'enero 2026',
    text: 'Llevo 3 meses con re_line y por primera vez en mi vida siento que el ejercicio no es un castigo. Las clases son increíbles y las coaches te motivan de verdad.',
  },
  {
    initial: 'M',
    name: 'Mariana T.',
    since: 'marzo 2026',
    text: 'Antes iba al gym sin dirección. Ahora tengo un plan, progreso cada semana y me siento más fuerte que nunca. re_line cambió completamente cómo veo el entrenamiento.',
    featured: true,
  },
  {
    initial: 'V',
    name: 'Valentina C.',
    since: 'febrero 2026',
    text: 'La flexibilidad de hacerlo desde casa es lo mejor. Entreno en mi sala, a la hora que quiero. Los resultados hablan solos — bajé 8 kg en 4 meses.',
  },
]

// ─── GALERÍA ─────────────────────────────────────────────────────
export const GALERIA_IMAGES = [
  { src: '/images/reline_betzy_conjunto-deportivo-gris-retrato.jpeg', alt: 'Betzy ropa deportiva gris re_line conjunto premium' },
  { src: '/images/reline_betzy_lunge-conjunto-deportivo-gris.jpeg',   alt: 'Betzy lunge ejercicio con conjunto deportivo gris re_line' },
  { src: '/images/reline_betzy_conjunto-blanco-coral-retrato.jpeg',   alt: 'Betzy conjunto deportivo blanco coral re_line' },
  { src: '/images/reline_betzy_corriendo-conjunto-deportivo-gris.jpeg', alt: 'Betzy corriendo con conjunto deportivo gris re_line' },
  { src: '/images/reline_betzy_conjunto-gris-pose-dinamica.jpeg',     alt: 'Betzy pose dinámica conjunto deportivo gris re_line' },
]
