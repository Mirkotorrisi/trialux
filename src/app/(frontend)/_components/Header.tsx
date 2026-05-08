'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Chi siamo', href: '/chi-siamo' },
  { name: 'Servizi', href: '/servizi' },
  { name: 'Qualità e certificazioni', href: '/certificazioni' },
  { name: 'Lavora con noi', href: '/lavora-con-noi' },
  { name: 'News / Blog', href: '/news' },
  { name: 'Contatti', href: '/contatti' },
]

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="h-[70px] flex items-center border-b border-zinc-800 sticky top-0 bg-background/80 backdrop-blur-md z-[100]">
      <div className="container mx-auto px-6 w-full">
        <nav className="flex justify-between items-center w-full">
          <Link href="/" className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent z-50 relative">
            TRIALUX
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-zinc-300 hover:text-white z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-background/95 backdrop-blur-md z-40 lg:hidden flex flex-col p-6 overflow-y-auto border-t border-zinc-800">
          <div className="flex flex-col gap-6 mt-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-zinc-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
