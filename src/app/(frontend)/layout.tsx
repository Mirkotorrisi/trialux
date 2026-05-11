import React from 'react'
import { Montserrat } from 'next/font/google'
import './style.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

export const metadata = {
  description: 'Un portale moderno realizzato con Payload CMS e Next.js.',
  title: 'Trialux Portale',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="it" className={`${montserrat.variable} font-sans`}>
      <body className="bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
        <main>{children}</main>
      </body>
    </html>
  )
}
