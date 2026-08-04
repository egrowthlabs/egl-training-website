'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for reveal-on-scroll animations using IntersectionObserver.
 * Returns a ref to attach to the element and a `visible` boolean.
 */
export function useReveal<T extends Element = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}
