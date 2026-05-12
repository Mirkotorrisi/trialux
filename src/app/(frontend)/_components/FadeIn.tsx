'use client'

import React, { useEffect, useRef, useState } from 'react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  effect?: 'fade' | 'mask' | 'scale'
  className?: string
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, direction = 'up', effect = 'fade', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Use rootMargin to trigger slightly before the element enters view
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay)
            if (domRef.current) observer.unobserve(domRef.current)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    )
    
    const currentRef = domRef.current
    if (currentRef) observer.observe(currentRef)
    
    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [delay])

  if (effect === 'mask') {
    return (
      <div
        ref={domRef}
        className={`overflow-hidden ${className}`}
      >
        <div
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
            opacity: isVisible ? 1 : 0,
            transition: `transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.9s ease`,
          }}
        >
          {children}
        </div>
      </div>
    )
  }

  if (effect === 'scale') {
    return (
      <div
        ref={domRef}
        className={className}
        style={{
          transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(20px)',
          opacity: isVisible ? 1 : 0,
          transition: `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease`,
        }}
      >
        {children}
      </div>
    )
  }

  // Default fade + direction
  let translateInit = 'translateY(32px)'
  if (direction === 'down') translateInit = 'translateY(-32px)'
  if (direction === 'left') translateInit = 'translateX(32px)'
  if (direction === 'right') translateInit = 'translateX(-32px)'
  if (direction === 'none') translateInit = 'translateY(0)'

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        transform: isVisible ? 'translate(0, 0)' : translateInit,
        opacity: isVisible ? 1 : 0,
        transition: `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease`,
      }}
    >
      {children}
    </div>
  )
}
