'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  effect?: 'fade' | 'mask' | 'scale'
  className?: string
  duration?: number
  distance?: number
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  effect = 'fade', 
  className = '',
  duration = 0.8,
  distance = 40
}) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: { x: 0, y: 0 }
  }

  const initial = { ...directions[direction], opacity: 0 }

  const animate = { x: 0, y: 0, opacity: 1 }

  if (effect === 'scale') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: distance }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-5%", amount: 0.1 }}
        transition={{
          duration: duration,
          delay: delay / 1000,
          ease: [0.16, 1, 0.3, 1]
        }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  if (effect === 'mask') {
    return (
      <div className={`overflow-hidden ${className}`}>
        <motion.div
          initial={{ y: distance, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-5%", amount: 0.1 }}
          transition={{
            duration: duration,
            delay: delay / 1000,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          {children}
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-5%", amount: 0.1 }}
      transition={{
        duration: duration,
        delay: delay / 1000,
        ease: [0.16, 1, 0.16, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
