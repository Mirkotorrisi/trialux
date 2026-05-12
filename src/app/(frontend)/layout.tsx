import React from 'react'
import { Inter } from 'next/font/google'
import './style.css'
import { Footer } from './_components/Footer'
import { SmoothScroll } from './_components/SmoothScroll'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  description: 'Realizzazione e manutenzione reti elettriche di media e bassa tensione.',
  title: 'Trialux S.r.l.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="it" className={`${inter.variable}`}>
      <body className="bg-white text-[#0a0f1a] selection:bg-[#F0921E] selection:text-white antialiased">
        <SmoothScroll />
        {children}
        <Footer />
      </body>
    </html>
  )
}
