'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

interface ParallaxImagesProps {
  images: {
    src: string
    alt: string
    className: string
    speed: number
  }[]
}

export const ParallaxImages: React.FC<ParallaxImagesProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  return (
    <div ref={containerRef} className="relative h-[500px] lg:h-[700px] w-full overflow-hidden">
      {images.map((img, idx) => {
        // Calculate vertical translation based on speed.
        // We transform the scroll progress (from 0 to 1) into a translation offset.
        const y = useTransform(scrollYProgress, [0, 1], [-img.speed * 120, img.speed * 120])
        
        return (
          <motion.div
            key={idx}
            className={`absolute overflow-hidden shadow-2xl ${img.className}`}
            style={{
              y,
              willChange: 'transform',
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        )
      })}
    </div>
  )
}
