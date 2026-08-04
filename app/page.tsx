import { CLASES_FALLBACK, ClaseCategoria } from './config'
import Hero from '@/components/Hero'
import RibbonSection from '@/components/RibbonSection'
import MetodologiaSection from '@/components/MetodologiaSection'
import ClasesSection from '@/components/ClasesSection'
import CoachesSection from '@/components/CoachesSection'
import GaleriaSection from '@/components/GaleriaSection'
import TestimoniosSection from '@/components/TestimoniosSection'
import PlanesSection from '@/components/PlanesSection'
import CtaSection from '@/components/CtaSection'

async function getClases(): Promise<ClaseCategoria[]> {
  try {
    const res = await fetch('https://app.reline.mx/api/workouts', {
      next: { revalidate: 3600 },
    })
    if (!res.ok) throw new Error('API error')
    const data = await res.json()
    return data
  } catch {
    return CLASES_FALLBACK
  }
}

export default async function HomePage() {
  const clases = await getClases()

  return (
    <>
      <Hero />
      <RibbonSection />
      <MetodologiaSection />
      <ClasesSection clases={clases} />
      <CoachesSection />
      <GaleriaSection />
      <TestimoniosSection />
      <PlanesSection />
      <CtaSection />
    </>
  )
}
