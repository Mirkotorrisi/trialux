'use client'

import React, { useEffect, useState } from 'react'

interface ParallaxImagesProps {
  images: {
    src: string
    alt: string
    className: string
    speed: number
  }[]
}

export const ParallaxImages: React.FC<ParallaxImagesProps> = ({ images }) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative h-[500px] lg:h-[700px] w-full">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute overflow-hidden shadow-2xl transition-transform duration-100 ease-out ${img.className}`}
          style={{
            transform: `translateY(${scrollY * img.speed * 0.1}px)`,
            willChange: 'transform',
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      ))}
    </div>
  )
}
