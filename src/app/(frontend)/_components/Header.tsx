'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Chi siamo', href: '/chi-siamo' },
  { name: 'Servizi', href: '/servizi' },
  { name: 'Qualità', href: '/certificazioni' },
  { name: 'Carriere', href: '/lavora-con-noi' },
  { name: 'News', href: '/news' },
]

export const Header: React.FC = () => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white border-b border-zinc-200' : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent'}`}>
      <header className="w-full flex items-center justify-between px-6 lg:px-12 h-[70px] md:h-[90px]">
        <Link href="/" className="text-xl md:text-2xl lg:text-3xl font-black tracking-tighter z-50 relative flex items-center">
          <span className={scrolled ? "text-[#1A1A1A]" : "text-white"}>TRIALUX</span>
          <span className="w-3 h-3 bg-[#55ABE4] inline-block ml-1"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 md:p-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/')
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`relative text-sm font-bold uppercase tracking-widest transition-all hover:-translate-y-[2px] no-underline ${
                  isActive 
                    ? 'text-[#55ABE4]' 
                    : scrolled 
                      ? 'text-zinc-600 hover:text-[#55ABE4]' 
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#55ABE4]"></span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link href="/contatti" className={`px-6 py-3 md:px-10 md:py-5 font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center no-underline ${scrolled ? 'bg-[#1A1A1A] text-white hover:bg-[#55ABE4]' : 'bg-white text-[#1A1A1A] hover:bg-[#55ABE4] hover:text-white'}`}>
            Contattaci
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="group lg:hidden z-50 relative w-8 h-8 flex justify-center items-center bg-transparent border-none appearance-none outline-none p-0 m-0 shadow-none focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span className={`absolute block h-[2px] w-8 rounded-full transition-transform duration-300 ease-out origin-center ${isMobileMenuOpen ? 'translate-y-0 rotate-45 bg-[#1A1A1A]' : scrolled ? 'bg-[#1A1A1A] -translate-y-[8px] group-hover:-translate-y-[10px]' : 'bg-white -translate-y-[8px] group-hover:-translate-y-[10px]'}`} />
          <span className={`absolute block h-[2px] w-8 rounded-full transition-opacity duration-300 ease-out ${isMobileMenuOpen ? 'opacity-0 bg-[#1A1A1A]' : scrolled ? 'bg-[#1A1A1A] opacity-100' : 'bg-white opacity-100'}`} />
          <span className={`absolute block h-[2px] w-8 rounded-full transition-transform duration-300 ease-out origin-center ${isMobileMenuOpen ? 'translate-y-0 -rotate-45 bg-[#1A1A1A]' : scrolled ? 'bg-[#1A1A1A] translate-y-[8px] group-hover:translate-y-[10px]' : 'bg-white translate-y-[8px] group-hover:translate-y-[10px]'}`} />
        </button>
      </header>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 bg-white z-40 lg:hidden flex flex-col p-6 pt-32 overflow-y-auto">
          <div className="flex flex-col gap-8 items-start">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/')
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`text-xl md:text-2xl lg:text-3xl font-black transition-colors uppercase tracking-tighter no-underline ${isActive ? 'text-[#55ABE4]' : 'text-[#1A1A1A] hover:text-[#55ABE4]'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            })}
            <div className="w-full h-px bg-zinc-200 my-4" />
            <Link 
              href="/contatti" 
              className="px-8 py-5 bg-[#1A1A1A] hover:bg-[#55ABE4] transition-colors text-white font-bold uppercase tracking-widest text-sm w-full text-center no-underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contattaci
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
