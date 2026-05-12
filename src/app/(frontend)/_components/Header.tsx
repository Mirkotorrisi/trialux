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

const Logo = ({ scrolled }: { scrolled: boolean }) => (
  <svg width="140" height="40" viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-9 w-auto">
    {/* Left Arc - Blue */}
    <path d="M42 40C32 24 42 8 42 8C28 16 28 40 28 40C28 64 42 72 42 72C42 72 32 56 42 40Z" fill="#55ABE4"/>
    {/* Text TRIALUX */}
    <text x="60" y="52" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="38" letterSpacing="-0.02em" fill={scrolled ? "#0A0A0A" : "#FFFFFF"}>TRIALUX</text>
    {/* Right Arcs */}
    <path d="M228 32C236 40 228 48 228 48C242 44 242 36 242 36C242 28 228 32 228 32Z" fill="#F0921E"/>
    <path d="M236 24C248 40 236 56 236 56C252 48 252 32 252 24C252 16 236 24 236 24Z" fill="#EE2430"/>
  </svg>
)

export const Header: React.FC = () => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white shadow-sm border-b border-zinc-100' : 'bg-transparent'}`}>
      <header className="w-full flex items-center justify-between px-6 lg:px-16 h-[72px] md:h-[88px] max-w-[1400px] mx-auto">

        {/* Logo */}
        <Link href="/" className="z-50 relative flex items-center h-full">
           <Logo scrolled={scrolled} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-10 items-center">
          {navLinks.filter(l => l.href !== '/').map((link) => {
            const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/')
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[11px] font-bold uppercase tracking-[0.15em] transition-all no-underline ${
                  isActive
                    ? 'text-[#55ABE4]'
                    : scrolled
                      ? 'text-zinc-500 hover:text-[#0A0A0A]'
                      : 'text-white/80 hover:text-white'
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
            className={`tri-btn header-btn ${
              scrolled
                ? 'tri-btn-primary'
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
          <span className={`block h-[1.5px] w-6 transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-[1px] bg-[#0A0A0A]' : scrolled ? 'bg-[#0A0A0A] -translate-y-[4px]' : 'bg-white -translate-y-[4px]'}`} />
          <span className={`block h-[1.5px] w-6 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : scrolled ? 'bg-[#0A0A0A] opacity-100' : 'bg-white opacity-100'}`} />
          <span className={`block h-[1.5px] w-6 transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-[2px] bg-[#0A0A0A]' : scrolled ? 'bg-[#0A0A0A] translate-y-[4px]' : 'bg-white translate-y-[4px]'}`} />
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
                  className={`text-3xl font-black tracking-tighter no-underline ${isActive ? 'text-[#55ABE4]' : 'text-[#0A0A0A]'}`}
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
