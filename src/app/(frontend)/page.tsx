import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import { Header } from './_components/Header'
import { FadeIn } from './_components/FadeIn'
import { DecorativePattern } from './_components/DecorativeArcs'
import './style.css'
import { ArrowRight, ArrowUpRight, CheckCircle2, Target, Users, Zap, Award } from 'lucide-react'
import { Parallax } from './_components/Parallax'

export default async function HomePage() {
  const payload = await getPayload({ config })

  return (
    <div className="bg-white min-h-screen text-[#0a0f1a]">
      <Header />

      <main className="w-full relative">

        {/* ── 1.1 HERO ────────────────────────────────────────────────── */}
        <section className="relative w-full h-[80vh] md:h-screen min-h-[500px] md:min-h-[640px] flex flex-col justify-end overflow-hidden pb-16 md:pb-32 lg:pb-40">
          <div className="absolute inset-0">
            <Parallax offset={80} className="w-full h-full">
              <img
                src="/images/Trialux 1.jpg"
                alt="Cantiere Trialux"
                className="w-full h-[120%] object-cover scale-[1.1] transition-transform duration-[10s] ease-out"
                style={{ transformOrigin: 'center bottom' }}
              />
            </Parallax>
            {/* Top Shadow for Header Visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/80 via-transparent to-transparent h-40" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/70 to-transparent w-full md:w-[60%]" />
          </div>

          <div className="container-wide relative z-10">
            <FadeIn delay={0} effect="mask">

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.1] mb-6 max-w-3xl">
                L’energia che muove <br className="hidden md:block" /> il territorio.
              </h1>
            </FadeIn>
            <FadeIn delay={200} effect="mask">
              <p className="text-white/70 text-base md:text-xl mb-10 max-w-2xl leading-relaxed">
                Trialux realizza e mantiene reti elettriche di media e bassa tensione per enti pubblici e privati. Competenza tecnica, affidabilità e rispetto delle scadenze.
              </p>
            </FadeIn>
            <FadeIn delay={350}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/servizi" className="tri-btn bg-[#F0921E] text-white border-[#F0921E] hover:bg-[#d8831a]">
                  <span>Scopri i nostri servizi</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/contatti" className="tri-btn tri-btn-outline">
                  <span>Contattaci</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── 1.2 CHI SIAMO ───────────────────────────────────────────── */}
        <section className="bg-white pt-16 md:pt-32 pb-12 md:pb-20 relative z-10">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 lg:pr-16">
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-[2px] bg-[#F0921E]" />
                    <span className="text-[#F0921E] font-bold tracking-[0.15em] uppercase text-xs">Chi siamo</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#0a0f1a] leading-[1.1] mb-6">
                    Un’azienda costruita <br />
                    sulla competenza.
                  </h2>
                </FadeIn>
                <FadeIn delay={200} effect="mask">
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                    Fondata nel 2021 da Salvatore Salamone, Trialux è cresciuta rapidamente fino a diventare un riferimento nel settore dell’impiantistica elettrica in Sicilia. Oggi operiamo con oltre 100 professionisti qualificati, serviamo i principali operatori del settore energetico — tra cui E-Distribuzione — e lavoriamo ogni giorno per garantire reti sicure ed efficienti.
                  </p>
                  <Link href="/chi-siamo" className="tri-btn tri-btn-outline-dark">
                    <span>La nostra storia</span>
                    <ArrowRight size={16} />
                  </Link>
                </FadeIn>
              </div>
              <FadeIn className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden group">
                  <Parallax offset={40} className="w-full h-full">
                    <img 
                      src="/images/Trialux 2.jpg" 
                      alt="Trialux Team" 
                      className="w-full h-[115%] object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                  </Parallax>
                </div>
              </FadeIn>
            </div>

            {/* Metrics integrated below the double section */}
            <div className="mt-12 md:mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 border border-zinc-200">
                {[
                  { icon: <Target className="text-[#55ABE4]" size={24}/>, num: '2021', label: 'Anno di fondazione' },
                  { icon: <Users className="text-[#F0921E]" size={24}/>, num: '+100', label: 'Professionisti in organico' },
                  { icon: <Zap className="text-[#EE2430]" size={24}/>, num: 'MT/BT', label: 'Media e bassa tensione' },
                  { icon: <Award className="text-[#55ABE4]" size={24}/>, num: '3 ISO', label: 'Certificazioni ISO' },
                ].map((stat, idx) => (
                  <FadeIn key={idx} delay={idx * 80}>
                    <div className="p-8 md:p-10 flex flex-col items-center text-center gap-4">
                      <div className="mb-2">{stat.icon}</div>
                      <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a0f1a] leading-none tracking-tighter">{stat.num}</div>
                      <div className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-widest font-bold max-w-[140px] mx-auto">{stat.label}</div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* ── 1.4 SEZIONE SERVIZI (Premium Industrial Cards) ─────────── */}
        <section className="bg-white py-16 md:py-32">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
              <div className="max-w-2xl">
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-[2px] bg-[#EE2430]" />
                    <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-xs">Cosa facciamo</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#0a0f1a] leading-[1.1]">
                    Soluzioni per l'energia.
                  </h2>
                </FadeIn>
              </div>

              <div className="w-full md:w-auto flex justify-start md:justify-end">
                <FadeIn delay={200}>
                  <Link
                    href="/servizi"
                    className="group inline-flex items-center gap-4 px-8 py-4 border-[1px] border-zinc-200 hover:border-[#0a0f1a] text-[#0a0f1a] font-bold uppercase tracking-widest text-xs transition-all duration-500 hover:bg-[#0a0f1a] hover:text-white"
                  >
                    <span>Tutti i servizi</span>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </FadeIn>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {[
                { title: 'Cavi MT/BT', desc: 'Sotterranei e aerei', img: '/images/Trialux 22.jpg' },
                { title: 'Cabine Elettriche', desc: 'Manutenzione e posa', img: '/images/Trialux 23.jpg' },
                { title: 'Opere Murarie', desc: 'Scavi e movimento terra', img: '/images/Trialux 24.jpg' },
              ].map((s, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <Link href="/servizi" className="group relative block aspect-[4/5] overflow-hidden bg-[#0a0f1a]">
                    <img 
                      src={s.img} 
                      alt={s.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-90" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/40 to-transparent" />
                    
                    <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
                      <div>
                        <h3 className="text-2xl font-black text-white mb-2 tracking-tighter leading-none group-hover:text-[#F0921E] transition-colors">{s.title}</h3>
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">{s.desc}</p>
                      </div>
                      <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#F0921E] group-hover:border-[#F0921E] transition-all transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── 1.5 SEZIONE CERTIFICAZIONI (Dark) ────────────────────────── */}
        <section className="section-dark py-16 md:py-32 border-y border-white/5 relative overflow-hidden">
          <DecorativePattern />
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-10 h-[2px] bg-[#F0921E]" />
                    <span className="text-[#F0921E] font-bold tracking-[0.15em] uppercase text-xs">Qualità certificata</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8">
                    Garantiamo l’eccellenza operativa.
                  </h2>
                </FadeIn>
                <FadeIn delay={200} effect="mask">
                  <p className="text-white/50 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                    Operiamo con sistemi di gestione certificati ISO 9001, 14001 e 45001. Siamo iscritti alla White List e titolari del Rating di Legalità a due stelle.
                  </p>
                  <Link href="/certificazioni" className="tri-btn tri-btn-outline px-8 py-4 text-[11px]">Vedi certificazioni</Link>
                </FadeIn>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'White List'].map(item => (
                  <div key={item} className="bg-white/5 border border-white/10 p-6 flex items-center gap-5 hover:bg-white/10 transition-all group">
                    <div className="w-10 h-10 rounded-full bg-[#F0921E]/10 flex items-center justify-center shrink-0 group-hover:bg-[#F0921E] transition-colors">
                      <CheckCircle2 size={18} className="text-[#F0921E] group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-black text-[13px] tracking-tight uppercase text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 1.6 PARTNER & SPONSOR (Balanced Grid Layout) ──────────── */}
        <section className="bg-zinc-50 py-16 md:py-32 border-b border-zinc-100">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              
              {/* Left Column: Heading & Intro */}
              <div className="lg:col-span-5">
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-10 h-[2px] bg-[#EE2430]" />
                    <span className="text-[#EE2430] font-bold tracking-[0.2em] uppercase text-[11px]">Il nostro network</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0a0f1a] leading-[1.1] mb-8">
                    Partner & Sponsor.
                  </h2>
                </FadeIn>
                <FadeIn delay={200} effect="mask">
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-md">
                    Collaboriamo con le principali realtà dell’energia e sosteniamo il territorio attraverso partnership solide, fondate sulla condivisione di valori e obiettivi di crescita.
                  </p>
                </FadeIn>
              </div>

              {/* Right Column: Balanced Sub-Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Group: Cliente Principale */}
                <FadeIn delay={100} className="flex flex-col">
                  <span className="text-zinc-400 text-[9px] font-bold uppercase tracking-[0.3em] mb-6 block border-b border-zinc-200 pb-2">Cliente principale</span>
                  <div className="flex-grow bg-white border border-zinc-200 flex items-center justify-center p-8 shadow-sm transition-all duration-500 min-h-[160px] group overflow-hidden">
                    <span className="font-black text-lg tracking-tighter text-[#0a0f1a] transition-transform duration-500 group-hover:scale-110">E-DISTRIBUZIONE</span>
                  </div>
                </FadeIn>

                {/* Group: Sponsorizzazioni */}
                <FadeIn delay={200} className="flex flex-col">
                  <span className="text-zinc-400 text-[9px] font-bold uppercase tracking-[0.3em] mb-6 block border-b border-zinc-200 pb-2">Sponsorizzazioni</span>
                  <div className="flex-grow flex flex-col gap-4">
                    <div className="bg-white border border-zinc-200 flex items-center justify-center p-4 shadow-sm h-full min-h-[72px] group overflow-hidden">
                      <span className="font-black text-[10px] tracking-tight text-[#0a0f1a] transition-transform duration-500 group-hover:scale-110">CATANIA FC</span>
                    </div>
                    <div className="bg-white border border-zinc-200 flex items-center justify-center p-4 shadow-sm h-full min-h-[72px] group overflow-hidden">
                      <span className="font-black text-[10px] tracking-tight text-[#0a0f1a] transition-transform duration-500 group-hover:scale-110">BIANCAVILLA ACADEMY</span>
                    </div>
                  </div>
                </FadeIn>

              </div>

            </div>
          </div>
        </section>

        {/* ── 1.7 FINAL CTA (Ignition Hover Banner) ────────────────────── */}
        <section className="relative py-20 lg:py-28 overflow-hidden group cursor-pointer bg-[#0a0f1a]">
          {/* Base Image Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/Trialux 1.jpg" 
              alt="Power Projects" 
              className="w-full h-full object-cover opacity-30 transition-transform duration-[2s] group-hover:scale-110"
            />
          </div>

          {/* "Ignition" Gradient Overlay (Hidden by default) */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#F0921E] to-[#EE2430] opacity-0 group-hover:opacity-90 transition-opacity duration-700" />
          
          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 z-0 opacity-5 mix-blend-overlay" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="container-wide relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Text Side */}
              <div className="lg:col-span-8">
                <FadeIn effect="mask">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-[0.95] mb-4">
                    Insieme, diamo energia <br />
                    <span className="text-white/50 group-hover:text-white transition-colors duration-500">ai vostri progetti.</span>
                  </h2>
                </FadeIn>
              </div>

              {/* Action Side */}
              <div className="lg:col-span-4 flex lg:justify-end">
                <FadeIn delay={200}>
                  <Link href="/contatti" className="group relative px-8 py-5 md:px-12 md:py-7 bg-white text-[#0a0f1a] font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-[#0a0f1a] hover:text-white transition-all duration-500 flex items-center justify-between gap-6 shadow-2xl overflow-hidden min-w-[240px] md:min-w-[280px]">
                    <span className="relative z-10">Contattaci ora</span>
                    <ArrowUpRight size={22} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Hover highlight line */}
          <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
        </section>

      </main>
    </div>
  )
}
