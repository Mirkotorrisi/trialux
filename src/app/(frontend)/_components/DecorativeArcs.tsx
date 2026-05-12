'use client'

import React from 'react'

interface ArcProps {
  className?: string
  color?: string
  opacity?: number
  size?: number
  rotation?: number
}

/**
 * Recreates the "Half Moon" (Mezza Luna) from the Trialux logo.
 * Extreme curvature, very fat belly, razor-sharp tips.
 */
export const DecorativeArc: React.FC<ArcProps> = ({ 
  className = "", 
  color = "#55ABE4", 
  opacity = 0.05, 
  size = 500,
  rotation = 0
}) => {
  return (
    <div 
      className={`absolute pointer-events-none select-none ${className}`}
      style={{ 
        width: size, 
        height: size, 
        opacity,
        transform: `rotate(${rotation}deg)`,
        zIndex: 0
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        {/* Extreme Crescent Shape: Very wide middle, extremely sharp tips */}
        <path 
          d="M 90,0 
             C 10,0 10,100 90,100 
             C 50,85 50,15 90,0 Z" 
          fill={color} 
        />
        {/* Secondary thinner arc for layering effect */}
        <path 
          d="M 100,20 
             C 70,20 70,80 100,80 
             C 85,70 85,30 100,20 Z" 
          fill={color} 
          opacity="0.3"
        />
      </svg>
    </div>
  )
}

export const DecorativePattern: React.FC = () => {
  return (
    <>
      {/* All Blue "In Tono" Pattern */}
      <DecorativeArc 
        className="-top-32 -right-32 md:-top-64 md:-right-64" 
        size={900} 
        rotation={15} 
        color="#55ABE4" 
        opacity={0.04} 
      />
      <DecorativeArc 
        className="-bottom-48 -left-48 md:-bottom-96 md:-left-96" 
        size={1200} 
        rotation={195} 
        color="#55ABE4" 
        opacity={0.03} 
      />
    </>
  )
}
