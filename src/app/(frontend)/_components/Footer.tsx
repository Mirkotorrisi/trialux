'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

export const Footer = () => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#070707] text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Arcs */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full border border-white/[0.03] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full border border-[#55ABE4]/[0.05] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-1">
            <div className="inline-block mb-8">
               <svg width="140" height="40" viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-9 w-auto">
                <path d="M42 40C32 24 42 8 42 8C28 16 28 40 28 40C28 64 42 72 42 72C42 72 32 56 42 40Z" fill="#55ABE4"/>
                <text x="60" y="52" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="38" letterSpacing="-0.02em" fill="#FFFFFF">TRIALUX</text>
                <path d="M228 32C236 40 228 48 228 48C242 44 242 36 242 36C242 28 228 32 228 32Z" fill="#F0921E"/>
                <path d="M236 24C248 40 236 56 236 56C252 48 252 32 252 24C252 16 236 24 236 24Z" fill="#EE2430"/>
              </svg>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mb-8">
              Realizziamo e manteniamo reti elettriche di media e bassa tensione con competenza tecnica e innovazione costante.
            </p>
            <div className="flex gap-4">
              <Link href="https://linkedin.com/company/trialux-srl" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-[#55ABE4]">Azienda</h4>
            <ul className="space-y-4 list-none p-0">
              {['Chi siamo', 'Servizi', 'Qualità', 'Carriere', 'News', 'Contatti'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-zinc-400 text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-[#55ABE4]">Servizi</h4>
            <ul className="space-y-4 list-none p-0">
              {[
                'Cavi MT/BT sotterranei',
                'Linee aeree MT/BT',
                'Cabine secondarie',
                'Gruppi elettrogeni',
                'Opere murarie',
                'Movimento terra'
              ].map((item) => (
                <li key={item} className="text-zinc-400 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-[#55ABE4]">Contatti</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin size={20} className="text-zinc-500 shrink-0" />
                <span className="text-zinc-400 text-sm">Via del Tessitore snc,<br />Biancavilla (CT)</span>
              </div>
              <div className="flex gap-4">
                <Phone size={20} className="text-zinc-500 shrink-0" />
                <a href="tel:0958144954" className="text-zinc-400 text-sm hover:text-white transition-colors">095 814 4954</a>
              </div>
              <div className="flex gap-4">
                <Mail size={20} className="text-zinc-500 shrink-0" />
                <a href="mailto:trialuxsrl@gmail.com" className="text-zinc-400 text-sm hover:text-white transition-colors">trialuxsrl@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Trialux S.r.l. — P.IVA 05886610875
          </p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="text-zinc-600 text-[10px] uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</Link>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-zinc-400 text-[10px] uppercase tracking-widest hover:text-[#55ABE4] transition-colors group"
            >
              Back to top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
