'use client'
import React, { useState, useEffect, useRef } from 'react'
import { LoaderSymbol } from './LoaderSymbol'
import { DecorativePattern } from './DecorativeArcs'

export const InitialLoader = () => {
  const [show, setShow] = useState(true)
  const [phase, setPhase] = useState<'visible' | 'fading_out'>('visible')
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Initial load handler
    const hideLoader = () => {
      setPhase('fading_out')
      hideTimeoutRef.current = setTimeout(() => setShow(false), 500)
    }

    const timer = setTimeout(() => {
      if (document.readyState === 'complete') {
        hideLoader()
      } else {
        window.addEventListener('load', hideLoader)
      }
    }, 600)

    // Navigation handlers
    const handleStartNavigation = () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
      setShow(true)
      setPhase('visible')
    }

    const handleStopNavigation = () => {
      setPhase('fading_out')
      hideTimeoutRef.current = setTimeout(() => setShow(false), 500)
    }

    window.addEventListener('START_PAGE_LOADING', handleStartNavigation)
    window.addEventListener('STOP_PAGE_LOADING', handleStopNavigation)

    return () => {
      clearTimeout(timer)
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
      window.removeEventListener('load', hideLoader)
      window.removeEventListener('START_PAGE_LOADING', handleStartNavigation)
      window.removeEventListener('STOP_PAGE_LOADING', handleStopNavigation)
    }
  }, [])

  if (!show) return null

  return (
    <div 
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#152238] transition-opacity duration-500 ease-in-out overflow-hidden ${phase === 'fading_out' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="absolute inset-0 z-0">
        <DecorativePattern />
      </div>
      <div className="relative w-20 md:w-28 h-auto z-10 animate-spin" style={{ animationDuration: '2s', animationTimingFunction: 'linear' }}>
        <LoaderSymbol />
      </div>
    </div>
  )
}
