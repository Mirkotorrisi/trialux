'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Chi siamo', href: '/chi-siamo' },
  { name: 'Servizi', href: '/servizi' },
  { name: 'Qualità', href: '/certificazioni' },
  { name: 'Career', href: '/career' },
  { name: 'News', href: '/news' },
]

const Logo = ({ isSolid }: { isSolid: boolean }) => (
  <img 
    src={isSolid ? "/images/logo-black.png" : "/images/logo-white.png"} 
    alt="Trialux" 
    className="h-13 md:h-18 w-auto transition-all duration-300"
  />
)

interface HeaderProps {
  forceSolid?: boolean
}

export const Header: React.FC<HeaderProps> = ({ forceSolid = false }) => {
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

  const isSolid = scrolled || forceSolid || isMobileMenuOpen

  return (
    <div className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isSolid 
        ? 'bg-white border-b border-zinc-100' 
        : 'bg-transparent'
    }`}>
      <header className="w-full flex items-center justify-between px-6 lg:px-16 h-[80px] md:h-[100px] max-w-[1450px] mx-auto">

        {/* Logo */}
        <Link href="/" className="z-50 relative flex items-center h-full">
           <Logo isSolid={isSolid} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-11 items-center">
          {navLinks.filter(l => l.href !== '/').map((link) => {
            const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/')
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[12px] font-bold uppercase tracking-[0.18em] transition-all no-underline ${
                  isActive
                    ? 'text-[#F0921E]'
                    : isSolid
                      ? 'text-zinc-600 hover:text-[#0a0f1a]'
                      : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA - Unified Square Button */}
        <div className="hidden lg:block">
          <Link
            href="/contatti"
            className={`tri-btn px-8 py-4 text-[11px] ${
              isSolid
                ? 'bg-[#F0921E] text-white border-[#F0921E] hover:bg-[#d8831a]'
                : 'tri-btn-outline'
            }`}
          >
            Contattaci
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="group lg:hidden z-50 relative w-10 h-10 flex flex-col justify-center items-center bg-transparent border-none focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span className={`block h-[1.5px] w-6 transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-[1px] bg-[#0a0f1a]' : isSolid ? 'bg-[#0a0f1a] -translate-y-[4px]' : 'bg-white -translate-y-[4px]'}`} />
          <span className={`block h-[1.5px] w-6 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : isSolid ? 'bg-[#0a0f1a] opacity-100' : 'bg-white opacity-100'}`} />
          <span className={`block h-[1.5px] w-6 transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-[2px] bg-[#0a0f1a]' : isSolid ? 'bg-[#0a0f1a] translate-y-[4px]' : 'bg-white translate-y-[4px]'}`} />
        </button>
      </header>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 bg-white z-40 lg:hidden flex flex-col px-8 pt-32 pb-10 overflow-y-auto">
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/')
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-3xl font-black tracking-tighter no-underline ${isActive ? 'text-[#F0921E]' : 'text-[#0a0f1a]'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          <div className="mt-auto pt-10">
            <Link
              href="/contatti"
              className="tri-btn tri-btn-dark w-full py-5 text-sm"
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
