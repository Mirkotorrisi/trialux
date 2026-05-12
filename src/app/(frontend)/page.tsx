import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import { Header } from './_components/Header'
import { FadeIn } from './_components/FadeIn'
import './style.css'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default async function HomePage() {
  const payload = await getPayload({ config })

  return (
    <div className="bg-white min-h-screen text-[#0A0A0A]">
      <Header />

      <main className="w-full relative">

        {/* ── 1.1 HERO ────────────────────────────────────────────────── */}
        <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-end overflow-hidden pb-24 md:pb-32 lg:pb-40">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
              alt="Cantiere Trialux"
              className="w-full h-full object-cover scale-[1.04] transition-transform duration-[10s] ease-out"
              style={{ transformOrigin: 'center bottom' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/70 to-transparent w-full md:w-[60%]" />
          </div>

          <div className="container-wide relative z-10">
            <FadeIn delay={0} effect="mask">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[1.5px] bg-[#55ABE4]" />
                <span className="text-[#55ABE4] font-bold tracking-[0.25em] uppercase text-[10px]">Trialux S.r.l.</span>
              </div>
              <h1 className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-black tracking-[-0.01em] text-white leading-[1.1] mb-4 max-w-3xl">
                L’energia che muove il territorio.
              </h1>
            </FadeIn>
            <FadeIn delay={200} effect="mask">
              <p className="text-white/70 text-base md:text-lg mb-10 max-w-2xl leading-relaxed">
                Trialux realizza e mantiene reti elettriche di media e bassa tensione per enti pubblici e privati. Competenza tecnica, affidabilità e rispetto delle scadenze.
              </p>
            </FadeIn>
            <FadeIn delay={350}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/servizi" className="tri-btn tri-btn-primary">
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
        <section className="bg-white py-20 md:py-32 relative z-10">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 lg:pr-16">
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-[2px] bg-[#55ABE4]" />
                    <span className="text-[#55ABE4] font-bold tracking-[0.15em] uppercase text-xs">Chi siamo</span>
                  </div>
                  <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black tracking-tight text-[#0A0A0A] leading-[1.15] mb-4">
                    Un’azienda costruita sulla competenza.
                  </h2>
                </FadeIn>
                <FadeIn delay={150}>
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                    Fondata nel 2021 da Salvatore Salamone, Trialux è cresciuta rapidamente fino a diventare un riferimento nel settore dell’impiantistica elettrica in Sicilia. Oggi operiamo con oltre 100 professionisti qualificati, serviamo i principali operatori del settore energetico — tra cui E-Distribuzione — e lavoriamo ogni giorno per garantire reti sicure ed efficienti.
                  </p>
                  <Link href="/chi-siamo" className="tri-btn tri-btn-outline-dark">
                    <span>La nostra storia</span>
                    <ArrowRight size={16} />
                  </Link>
                </FadeIn>
              </div>
              <FadeIn delay={200} className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069" 
                    alt="Trialux Team" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── 1.3 NUMERI CHIAVE (Identica a Chi Siamo) ────────────────── */}
        <section className="section-dark py-0 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#55ABE4] via-[#F0921E] to-[#EE2430]" />
          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.07]">
              {[
                { num: '2021', label: 'Anno di fondazione', color: '#55ABE4' },
                { num: '+100', label: 'Professionisti in organico', color: '#F0921E' },
                { num: 'MT/BT', label: 'Media e bassa tensione', color: '#EE2430' },
                { num: '3 ISO', label: 'Certificazioni ISO', color: 'white' },
              ].map((stat, idx) => (
                <FadeIn key={idx} delay={idx * 80}>
                  <div className="py-14 px-8 lg:px-10 first:pl-6">
                    <div className="text-[clamp(1.8rem,2.8vw,2.8rem)] font-black mb-2 tracking-tight leading-none" style={{ color: stat.color }}>
                      {stat.num}
                    </div>
                    <div className="text-zinc-500 text-xs font-medium uppercase tracking-widest leading-tight mt-3">
                      {stat.label}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── 1.4 SEZIONE SERVIZI (Premium Industrial Cards) ─────────── */}
        <section className="bg-white py-20 md:py-32">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
              <FadeIn effect="mask">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-[2px] bg-[#EE2430]" />
                  <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-xs">Cosa facciamo</span>
                </div>
                <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black tracking-tight text-[#0A0A0A] leading-[1.1]">
                  Soluzioni per l'energia.
                </h2>
              </FadeIn>
              <Link href="/servizi" className="tri-btn tri-btn-outline-dark">Tutti i servizi</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {[
                { title: 'Cavi MT/BT', desc: 'Sotterranei e aerei', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070' },
                { title: 'Cabine Elettriche', desc: 'Manutenzione e posa', img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070' },
                { title: 'Opere Murarie', desc: 'Scavi e movimento terra', img: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070' },
              ].map((s, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <Link href="/servizi" className="group relative block aspect-[4/5] overflow-hidden bg-[#0A0A0A]">
                    <img 
                      src={s.img} 
                      alt={s.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-90" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                    
                    <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
                      <div>
                        <h3 className="text-2xl font-black text-white mb-2 tracking-tighter leading-none group-hover:text-[#55ABE4] transition-colors">{s.title}</h3>
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">{s.desc}</p>
                      </div>
                      <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#55ABE4] group-hover:border-[#55ABE4] transition-all transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
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
        <section className="section-dark py-20 md:py-32 border-y border-white/5">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-10 h-[2px] bg-[#55ABE4]" />
                    <span className="text-[#55ABE4] font-bold tracking-[0.15em] uppercase text-xs">Qualità certificata</span>
                  </div>
                  <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black text-white leading-[1.1] mb-8">
                    Garantiamo l’eccellenza operativa.
                  </h2>
                  <p className="text-white/50 text-base leading-relaxed mb-10 max-w-xl">
                    Operiamo con sistemi di gestione certificati ISO 9001, 14001 e 45001. Siamo iscritti alla White List e titolari del Rating di Legalità a due stelle.
                  </p>
                  <Link href="/certificazioni" className="tri-btn tri-btn-outline">Vedi certificazioni</Link>
                </FadeIn>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'White List'].map(item => (
                  <div key={item} className="bg-white/5 border border-white/10 p-6 flex items-center gap-5 hover:bg-white/10 transition-all group">
                    <div className="w-10 h-10 rounded-full bg-[#55ABE4]/10 flex items-center justify-center shrink-0 group-hover:bg-[#55ABE4] transition-colors">
                      <CheckCircle2 size={18} className="text-[#55ABE4] group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-black text-[13px] tracking-tight uppercase text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 1.6 PARTNER & SPONSOR (Balanced Grid Layout) ──────────── */}
        <section className="bg-zinc-50 py-20 md:py-32 border-b border-zinc-100">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              
              {/* Left Column: Heading & Intro */}
              <div className="lg:col-span-5">
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-10 h-[2px] bg-[#EE2430]" />
                    <span className="text-[#EE2430] font-bold tracking-[0.2em] uppercase text-[11px]">Il nostro network</span>
                  </div>
                  <h2 className="text-[clamp(2.2rem,3.2vw,3.2rem)] font-black text-[#0A0A0A] leading-[1.1] mb-8">
                    Partner & Sponsor.
                  </h2>
                  <p className="text-zinc-500 text-base leading-relaxed max-w-md">
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
                    <span className="font-black text-lg tracking-tighter text-[#0A0A0A] transition-transform duration-500 group-hover:scale-110">E-DISTRIBUZIONE</span>
                  </div>
                </FadeIn>

                {/* Group: Sponsorizzazioni */}
                <FadeIn delay={200} className="flex flex-col">
                  <span className="text-zinc-400 text-[9px] font-bold uppercase tracking-[0.3em] mb-6 block border-b border-zinc-200 pb-2">Sponsorizzazioni</span>
                  <div className="flex-grow flex flex-col gap-4">
                    <div className="bg-white border border-zinc-200 flex items-center justify-center p-4 shadow-sm h-full min-h-[72px] group overflow-hidden">
                      <span className="font-black text-[10px] tracking-tight text-[#0A0A0A] transition-transform duration-500 group-hover:scale-110">CATANIA FC</span>
                    </div>
                    <div className="bg-white border border-zinc-200 flex items-center justify-center p-4 shadow-sm h-full min-h-[72px] group overflow-hidden">
                      <span className="font-black text-[10px] tracking-tight text-[#0A0A0A] transition-transform duration-500 group-hover:scale-110">BIANCAVILLA ACADEMY</span>
                    </div>
                  </div>
                </FadeIn>

              </div>

            </div>
          </div>
        </section>

        {/* ── 1.7 LAVORA CON NOI ──────────────────────────────────────── */}
        <section className="bg-white py-20 md:py-32">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-[2px] bg-[#55ABE4]" />
                    <span className="text-[#55ABE4] font-bold tracking-[0.15em] uppercase text-xs">Lavora con noi</span>
                  </div>
                  <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black leading-[1.1] mb-8">Costruiamo il futuro.</h2>
                  <p className="text-zinc-500 text-base leading-relaxed mb-10 max-w-xl">
                    Stiamo crescendo e cerchiamo professionisti appassionati. Se hai esperienza nel settore elettrico, c’è posto per te in Trialux.
                  </p>
                  <Link href="/lavora-con-noi" className="tri-btn tri-btn-outline-dark">Vedi posizioni aperte</Link>
                </FadeIn>
              </div>
              <div className="aspect-video overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069" 
                  alt="Team" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
