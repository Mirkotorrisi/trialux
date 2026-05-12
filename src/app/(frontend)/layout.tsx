import React from 'react'
import { Inter } from 'next/font/google'
import './style.css'
import { Footer } from './_components/Footer'

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
      <body className="bg-white text-[#0A0A0A] selection:bg-[#55ABE4] selection:text-white antialiased">
        {children}
        <Footer />
      </body>
    </html>
  )
}
