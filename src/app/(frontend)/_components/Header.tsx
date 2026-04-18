import Link from 'next/link'
import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className="h-[70px] flex items-center border-b border-zinc-800 sticky top-0 bg-background/80 backdrop-blur-md z-[100]">
      <div className="container mx-auto px-6 w-full">
        <nav className="flex justify-between items-center w-full">
          <Link href="/" className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
            TRIALUX
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="/" className="text-sm font-medium hover:text-blue-500 transition-colors">
              Home
            </Link>
            <a 
              href="/admin" 
              className="text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
              target="_blank"
            >
              CMS Admin
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
