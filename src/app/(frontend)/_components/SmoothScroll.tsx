'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { usePathname } from 'next/navigation'

export const SmoothScroll = () => {
  const pathname = usePathname()
  const lenisRef = useRef<Lenis | null>(null)

  // 1. Inizializzazione di Lenis (una sola volta)
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })

    lenisRef.current = lenis

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // 2. Reset dello scroll al cambio di pagina
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    }
    // Fallback per sicurezza su window
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
