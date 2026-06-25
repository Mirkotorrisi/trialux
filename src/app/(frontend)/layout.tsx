import React from 'react'
import './style.css'
import { Footer } from './_components/Footer'
import { SmoothScroll } from './_components/SmoothScroll'
import { InitialLoader } from './_components/InitialLoader'

import { Suspense } from 'react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Realizzazione e manutenzione reti elettriche di media e bassa tensione.',
  title: 'Trialux S.r.l.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-transparent.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-white.png', type: 'image/png', sizes: '48x48' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
  },
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
      <body className="bg-white text-[#152238] selection:bg-[#F0921E] selection:text-white antialiased font-sans">
        <Suspense fallback={null}>
          <InitialLoader />
        </Suspense>
        <SmoothScroll />
        {children}
        <Footer />
      </body>

    </html>
  )
}
