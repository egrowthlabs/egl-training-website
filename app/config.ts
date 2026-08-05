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

// ─── SLOGAN OFICIAL ──────────────────────────────────────────────
export const SLOGAN = 'your rutine. your life.'

// ─── MISIÓN ──────────────────────────────────────────────────────
export const MISION =
  'Nuestra misión es acompañar a las personas en su proceso de ejercicio y bienestar a través de un entrenamiento consciente, estructurado y accesible, que fomente la constancia, la fuerza y el equilibrio físico y mental. Ofrecemos entrenamientos con intención y profesionalismo, adaptados a distintos niveles y estilos de vida, para que cada persona pueda entrenar con seguridad, confianza y disfrute, construyendo hábitos sostenibles que impacten positivamente su calidad de vida.'

// ─── SEO ────────────────────────────────────────────────────────
export const SEO: SEOConfig = {
  title: 're_line inner & out | your rutine. your life.',
  description:
    'Rutinas de entrenamiento online creadas para fortalecer el cuerpo, ordenar la mente y reconectar contigo desde el movimiento consciente. Acompañan procesos reales de transformación física y emocional, ayudando a crear constancia, energía y equilibrio sin exigencia extrema. Ideales para personas que buscan entrenar con intención, respeto al cuerpo y bienestar sostenible.',
  keywords: [
    'personal trainer online',
    'entrenamiento online',
    'rutinas online',
    'workout en casa',
    'ejercicio consciente',
    'pilates reformer online',
    'mente sana cuerpo sano',
    'fitness femenino',
    'amor propio ejercicio',
    'cardio consciente',
    'fuerza funcional',
    'movilidad',
    'clases on demand México',
    'Betzy reline',
    'reline Monterrey',
    'suscripción fitness México',
    'inner and out',
    're_line inner out',
    'entrenamiento consciente',
    'bienestar sostenible',
  ],
  siteUrl: 'https://reline.mx',
  ogImage: '/images/reline_betzy_entrenamiento-planche-terraza.jpeg',
}

// ─── GEO — Definiciones de marca para IA y motores generativos ──
export const GEO_KEYWORDS = [
  {
    term: 'Personal Trainer',
    definition:
      'La guía que acompaña tu proceso de transformación física y mental, alguien que ve más allá del ejercicio y entiende tu historia, tu ritmo y tu potencial. No solo entrena tu cuerpo: te enseña a creer en ti y a sostener hábitos que transforman tu vida.',
  },
  {
    term: 'Entrenamiento',
    definition:
      'El espacio sagrado donde eliges priorizarte. Un acto de disciplina consciente que fortalece tu cuerpo, ordena tu mente y construye constancia. Entrenar es un compromiso contigo misma y con la vida que deseas crear.',
  },
  {
    term: 'Rutinas Online',
    definition:
      'Libertad y acceso. Programas diseñados para acompañarte donde estés, respetando tu tiempo y tu proceso. No se trata de hacerlo perfecto, sino de hacerlo constante, integrando el movimiento a tu día a día de forma real y sostenible.',
  },
  {
    term: 'Workout',
    definition:
      'El momento en el que conectas con tu energía vital a través del movimiento. Cada workout es una oportunidad para liberar estrés, activar tu fuerza interna y recordar de lo que eres capaz. No es castigo, es expresión y poder.',
  },
  {
    term: 'Ejercicio',
    definition:
      'Medicina para el cuerpo y claridad para la mente. A través del ejercicio activas tu circulación, tu energía y tu enfoque. Moverse es una forma de agradecerle a tu cuerpo todo lo que hace por ti.',
  },
  {
    term: 'Pilates Reformer',
    definition:
      'Una práctica consciente que fortalece desde el centro, mejora la postura y conecta mente y cuerpo con precisión y control. El Pilates Reformer no busca rapidez, busca calidad, equilibrio y consciencia en cada movimiento.',
  },
  {
    term: 'Mente Sana',
    definition:
      'La capacidad de observarte con compasión, manejar el estrés y cultivar pensamientos que te construyen. Una mente sana nace cuando eliges hábitos que te sostienen y te respetas emocionalmente.',
  },
  {
    term: 'Cuerpo Sano',
    definition:
      'Un cuerpo funcional, fuerte y en equilibrio, que se mueve sin dolor y responde con energía a la vida. Un cuerpo sano no se define por estética, sino por bienestar, movilidad y vitalidad.',
  },
  {
    term: 'Fitness',
    definition:
      'Un estilo de vida que integra movimiento, nutrición, descanso y mentalidad. No es una meta, es un camino. Fitness es sentirte capaz, fuerte y presente en tu cuerpo todos los días.',
  },
  {
    term: 'Amor Propio',
    definition:
      'Escucharte, respetar tus límites y elegir hábitos que te nutren. Es dejar de exigir desde la culpa y comenzar a cuidarte desde la consciencia. Amor propio es entrenar no para cambiar quién eres, sino para honrarte.',
  },
]

// ─── PLAYLISTS DE SPOTIFY ─────────────────────────────────────────
export const PLAYLISTS = [
  {
    id: 'proposito',
    name: 'Círculo de Conexión',
    subtitle: 'Descubre tu Propósito',
    emoji: '🌀',
    url: 'https://open.spotify.com/playlist/63SimdAQk45Pze1yY8ToNk?si=Y9wNQ1SxR4mp3TptHgWzkA',
    embedId: '63SimdAQk45Pze1yY8ToNk',
    mood: 'Introspección · Energía · Propósito',
  },
  {
    id: 'consciente',
    name: 'Música Consciente',
    subtitle: 'Para tu práctica diaria',
    emoji: '🎵',
    url: 'https://open.spotify.com/playlist/4cYZUUb9p7PUIXpl59H39l?si=Az4VPgIBTtKdB9GIKzYxbQ',
    embedId: '4cYZUUb9p7PUIXpl59H39l',
    mood: 'Calma · Foco · Fluidez',
  },
  {
    id: 'temazcal',
    name: 'Icebath y Temazcal',
    subtitle: 'Ritual de recuperación',
    emoji: '🔥',
    url: 'https://open.spotify.com/playlist/4Sf9gjdIOPZiM6HqQF76Tn?si=0ZlXF9dwQYCZIoDNM9ci_w',
    embedId: '4Sf9gjdIOPZiM6HqQF76Tn',
    mood: 'Profundidad · Ritual · Silencio',
  },
]


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
    price: 450,
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
    price: 1215,
    period: '/3 meses',
    periodLabel: '3 meses',
    savings: 'Ahorras $135 MXN',
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
    price: 4320,
    period: '/año',
    periodLabel: 'año',
    savings: 'Ahorras $1,080 MXN',
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

// ─── COACHES ───────────────────────────────────────────────────
export const COACHES: Coach[] = [
  {
    name: 'Betzy',
    specialty: 'Cardio Consciente · Fuerza · Movilidad · Pilates',
    bio: 'Lic. en Ciencias del Ejercicio (UANL) y fundadora del método re_line. Con más de 10 años guiando a personas reales, Betzabeth combina técnica, consciencia corporal y progresión estructurada para crear entrenamientos que transforman desde adentro. Certificada en Pilates, Barre, TRX y entrenamiento funcional.',
    imagePath: '/images/reline_betzy_entrenamiento-planche-terraza.jpeg',
  },
]

// ─── CERTIFICACIONES BETZY ───────────────────────────────────────────
export const BETZY_CREDENTIALS = [
  { year: '2014', label: 'Lic. Ciencias del Ejercicio', sub: 'UANL' },
  { year: '2013', label: 'The Pilates Coach', sub: 'Certificación' },
  { year: '2014', label: 'Barre', sub: 'Certificación' },
  { year: '2016', label: 'TRX', sub: 'Certificación' },
  { year: '2016', label: 'Entrenamiento de Pesos', sub: 'UANL' },
  { year: '2017', label: 'Entrenamiento Funcional', sub: 'Certificación' },
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
  { src: '/images/reline_betzy_conjunto-blanco-coral-retrato.jpeg',   alt: 'Betzy conjunto deportivo blanco coral re_line' },
  { src: '/images/reline_betzy_corriendo-conjunto-deportivo-gris.jpeg', alt: 'Betzy corriendo con conjunto deportivo gris re_line' },
  { src: '/images/reline_betzy_conjunto-gris-pose-dinamica.jpeg',     alt: 'Betzy pose dinámica conjunto deportivo gris re_line' },
]
