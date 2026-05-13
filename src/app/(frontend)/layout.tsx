import React from 'react'
import './style.css'
import { Footer } from './_components/Footer'
import { SmoothScroll } from './_components/SmoothScroll'

export const metadata = {
  description: 'Realizzazione e manutenzione reti elettriche di media e bassa tensione.',
  title: 'Trialux S.r.l.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-[#0a0f1a] selection:bg-[#F0921E] selection:text-white antialiased font-sans">
        <SmoothScroll />
        {children}
        <Footer />
      </body>
    </html>
  )
}
