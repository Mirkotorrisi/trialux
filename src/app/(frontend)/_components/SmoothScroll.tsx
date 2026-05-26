'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { usePathname } from 'next/navigation'

export const SmoothScroll = () => {
  const pathname = usePathname()
  const lenisRef = useRef<Lenis | null>(null)

  // 1. Inizializzazione di Lenis e gestione hashchange (stessa pagina)
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

    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const scrollTarget = decodeURIComponent(hash)
        const element = document.querySelector(scrollTarget)
        if (element) {
          const offsetValue = window.innerWidth >= 768 ? -100 : -80
          lenis.scrollTo(scrollTarget, { 
            immediate: false, 
            offset: offsetValue 
          })
        }
      }
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  // 2. Reset dello scroll al cambio di pagina o scroll all'ancora (cambio pagina)
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const scrollTarget = decodeURIComponent(hash)
      const attemptScroll = () => {
        const element = document.querySelector(scrollTarget)
        if (element) {
          const offsetValue = window.innerWidth >= 768 ? -100 : -80
          if (lenisRef.current) {
            lenisRef.current.scrollTo(scrollTarget, { 
              immediate: true,
              offset: offsetValue
            })
          } else {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            window.scrollTo({
              top: elementPosition + offsetValue,
              behavior: 'auto'
            })
          }
          return true
        }
        return false
      }

      // Prova subito a scorrere
      if (!attemptScroll()) {
        // Se l'elemento non è ancora nel DOM, riprova per un massimo di 3 secondi
        let attempts = 0
        const intervalId = setInterval(() => {
          if (attemptScroll() || attempts >= 30) {
            clearInterval(intervalId)
          }
          attempts++
        }, 100)
        return () => clearInterval(intervalId)
      }
    } else {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true })
      }
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}
