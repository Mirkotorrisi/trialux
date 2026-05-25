'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

interface ParallaxProps {
  children: React.ReactNode
  offset?: number
  className?: string
}

export const Parallax = ({ children, offset = 50, className = '' }: ParallaxProps) => {
  const ref = useRef(null)

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div className="relative h-full w-full">
        {children}
      </div>
    </div>
  )
}
