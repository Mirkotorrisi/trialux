'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface ParallaxProps {
  children: React.ReactNode
  offset?: number
  className?: string
}

export const Parallax = ({ children, offset = 50, className = '' }: ParallaxProps) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, willChange: 'transform' }} className="relative h-full w-full">
        {children}
      </motion.div>
    </div>
  )
}
