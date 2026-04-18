import React from 'react'
import './style.css'

export const metadata = {
  description: 'Un portale moderno realizzato con Payload CMS e Next.js.',
  title: 'Trialux Portale',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="it">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
