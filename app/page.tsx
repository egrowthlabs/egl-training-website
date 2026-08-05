import { CLASES_FALLBACK, ClaseCategoria } from './config'
import Hero from '@/components/Hero'
import RibbonSection from '@/components/RibbonSection'
import MisionSection from '@/components/MisionSection'
import MetodologiaSection from '@/components/MetodologiaSection'
import ClasesSection from '@/components/ClasesSection'
import CoachesSection from '@/components/CoachesSection'
import GaleriaSection from '@/components/GaleriaSection'
import TestimoniosSection from '@/components/TestimoniosSection'
import PlanesSection from '@/components/PlanesSection'
import PlaylistsSection from '@/components/PlaylistsSection'
import CtaSection from '@/components/CtaSection'

// URL base del backend — configurable via variable de entorno
// En producción: BACKEND_API_URL en el servidor (no expuesto al browser)
// En dev: configura .env.local con BACKEND_API_URL=https://localhost:7168
const API_BASE = process.env.BACKEND_API_URL ?? 'https://api.reline.mx'

// Shape que devuelve el backend en GET /api/workouts/public
interface WorkoutDto {
  id: number
  title: string
  description?: string
  category: string
  level: string
  thumbnailUrl?: string
  durationMinutes?: number
  isFree: boolean
}

interface PagedResult<T> {
  items: T[]
  totalCount: number
  pageNumber: number
  pageSize: number
}

// Mapeo de categorías del backend al label en español
const CATEGORY_LABELS: Record<string, string> = {
  CardioConsciente:     'Cardio Consciente',
  FuerzaEstructurada:   'Fuerza Estructurada',
  ResistenciaFuncional: 'Resistencia Funcional',
  PilatesReformer:      'Pilates Reformer',
}

function mapWorkoutToClase(w: WorkoutDto): ClaseCategoria {
  return {
    id:          String(w.id),
    title:       w.title,
    description: w.description ?? '',
    duration:    w.durationMinutes ? `${w.durationMinutes} min` : '—',
    level:       w.level,
    imagePath:   w.thumbnailUrl ?? '/images/reline_betzy_entrenamiento-planche-terraza.jpeg',
    featured:    w.isFree,
    // Translate category enum → Spanish label for display
    ...(w.category && { title: CATEGORY_LABELS[w.category] ?? w.title }),
  }
}

async function getClases(): Promise<ClaseCategoria[]> {
  try {
    const res = await fetch(`${API_BASE}/api/workouts/public?pageSize=8`, {
      next: { revalidate: 3600 }, // ISR: revalidar cada hora
    })
    if (!res.ok) throw new Error(`API ${res.status}`)
    const data: PagedResult<WorkoutDto> = await res.json()
    if (!Array.isArray(data.items) || data.items.length === 0) return CLASES_FALLBACK
    return data.items.map(mapWorkoutToClase)
  } catch {
    // API no disponible → mostrar datos de fallback
    return CLASES_FALLBACK
  }
}

export default async function HomePage() {
  const clases = await getClases()

  return (
    <>
      <Hero />
      <RibbonSection />
      <MisionSection />
      <MetodologiaSection />
      <ClasesSection clases={clases} />
      <CoachesSection />
      <GaleriaSection />
      <TestimoniosSection />
      <PlanesSection />
      <PlaylistsSection />
      <CtaSection />
    </>
  )
}

