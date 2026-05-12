import { Header } from '../_components/Header'
import { FadeIn } from '../_components/FadeIn'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { InteractiveOrgChart } from '../_components/OrgChart'
import '../style.css'

export default function ChiSiamoPage() {
  return (
    <div className="bg-white min-h-screen text-[#0A0A0A]">
      <Header />

      <main className="w-full relative">

        {/* ── 1. HERO ────────────────────────────────────────────────── */}
        <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-end overflow-hidden pb-24 md:pb-32 lg:pb-40">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
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
                Un progetto imprenditoriale <br />nato in Sicilia.
              </h1>
            </FadeIn>
            <FadeIn delay={200} effect="mask">
              <p className="text-white/70 text-base md:text-lg mb-10 max-w-2xl leading-relaxed">
                Cresciuto con determinazione, fondato sulla competenza e sulla passione per l'eccellenza tecnica.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── 2. NUMERI CHIAVE (Identica alla Home) ───────────────────── */}
        <section className="section-dark py-0 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#55ABE4] via-[#F0921E] to-[#EE2430]" />
          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.07]">
              {[
                { num: '2021', label: 'Anno di fondazione', color: '#55ABE4' },
                { num: '51', label: 'Dipendenti totali', color: '#F0921E' },
                { num: '39', label: 'Personale operativo', color: '#EE2430' },
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

        {/* ── 3. LA STORIA ────────────────────────────────────────────── */}
        <section className="bg-white py-20 md:py-32 relative z-10">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 lg:pr-16">
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-[2px] bg-[#55ABE4]" />
                    <span className="text-[#55ABE4] font-bold tracking-[0.15em] uppercase text-xs">La nostra storia</span>
                  </div>
                  <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black tracking-tight text-[#0A0A0A] leading-[1.15] mb-6">
                    Dal 2021, sul campo.
                  </h2>
                </FadeIn>
                <FadeIn delay={150}>
                  <div className="space-y-6 text-zinc-500 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
                    <p>
                      Trialux S.r.l. nasce nel 2021 per volontà dell'imprenditore Salvatore Salamone, con un obiettivo chiaro: portare nel settore dell'impiantistica elettrica un modello operativo fondato su qualità, affidabilità e attenzione al territorio.
                    </p>
                    <p>
                      In pochi anni l'azienda ha costruito una struttura solida, assemblando un team di professionisti altamente qualificati e dotandosi di tecnologie e attrezzature all'avanguardia.
                    </p>
                    <p>
                      Oggi Trialux è un punto di riferimento riconosciuto nel settore della realizzazione e manutenzione di linee elettriche di media e bassa tensione.
                    </p>
                  </div>
                  <Link href="/certificazioni" className="tri-btn tri-btn-outline-dark">
                    <span>Le nostre certificazioni</span>
                    <ArrowRight size={16} />
                  </Link>
                </FadeIn>
              </div>
              <FadeIn delay={200} className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070" 
                    alt="Trialux Team" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── 4. BRAND IDENTITY (Section Dark) ────────────────────────── */}
        <section className="section-dark py-20 md:py-32 border-y border-white/5">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <FadeIn delay={100} className="aspect-square bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" 
                  alt="Identity" 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="relative z-10 w-full px-12">
                   <svg width="100%" viewBox="0 0 400 300" fill="none" className="drop-shadow-2xl">
                    <path d="M80 150 Q50 80 80 20 Q20 60 20 150 Q20 240 80 280 Q50 220 80 150Z" fill="#55ABE4" opacity="1"/>
                    <path d="M290 110 Q320 148 290 188 Q340 170 340 148 Q340 126 290 110Z" fill="#F0921E" opacity="1"/>
                    <path d="M318 90 Q360 148 318 208 Q370 185 372 148 Q372 110 318 90Z" fill="#EE2430" opacity="1"/>
                    <text x="110" y="165" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="56" fill="white" letterSpacing="-2">TRIALUX</text>
                  </svg>
                </div>
              </FadeIn>
              <div>
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-10 h-[2px] bg-[#EE2430]" />
                    <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-xs">Il nostro marchio</span>
                  </div>
                  <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black text-white leading-[1.1] mb-8">
                    Identità condivisa.
                  </h2>
                  <p className="text-white/50 text-base leading-relaxed mb-10">
                    Il logo di Trialux nasce da un'idea semplice e significativa. Ideato insieme ai tre figli di Salvatore Salamone, il simbolo racconta il carattere familiare e generazionale dell'azienda, senza rinunciare alla proiezione verso il futuro.
                  </p>
                  <blockquote className="border-l-4 border-[#EE2430] pl-6 text-xl font-bold text-white italic">
                    "Un marchio che non è solo estetica, ma identità."
                  </blockquote>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. IL NOSTRO TEAM (Editorial Layout) ────────────────────── */}
        <section className="bg-white py-20 md:py-32 border-t border-zinc-100 overflow-hidden">
          <div className="container-wide">
            <div className="max-w-3xl mb-24">
              <FadeIn effect="mask">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-[2px] bg-[#EE2430]" />
                  <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-xs">Organizzazione</span>
                </div>
                <h2 className="text-[clamp(2.2rem,3vw,3.2rem)] font-black tracking-tight text-[#0A0A0A] leading-[1.1] mb-6">
                  Le persone dietro Trialux.
                </h2>
                <p className="text-zinc-500 text-base leading-relaxed">
                  L'assetto organizzativo di Trialux è progettato per garantire il massimo presidio tecnico su ogni commessa, grazie a un team di professionisti con ruoli e responsabilità chiaramente definiti.
                </p>
              </FadeIn>
            </div>
            
            <FadeIn delay={100}>
              <InteractiveOrgChart />
            </FadeIn>
          </div>
        </section>

        {/* ── 6. IL TEAM (Visual Split - Dark) ────────────────────────── */}
        <section className="section-dark py-0 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-[400px] lg:h-auto overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071"
                alt="Squadra Trialux"
                className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center px-10 lg:px-20 py-20 lg:py-32 relative z-10">
              <FadeIn effect="mask">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-10 h-[2px] bg-[#EE2430]" />
                  <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-xs">Il team operativo</span>
                </div>
                <h2 className="text-[clamp(1.8rem,2.8vw,2.8rem)] font-black tracking-tight text-white leading-[1.1] mb-8">
                  51 professionisti, <br />ogni giorno sul campo.
                </h2>
                <p className="text-white/50 text-base leading-relaxed mb-10 max-w-md">
                  Il team è composto da figure tecniche specializzate: capisquadra, tirafili, giuntisti, cabinisti e operatori lavori sotto tensione qualificati.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {[
                    { num: '39', label: 'Operativi', color: '#F0921E' },
                    { num: '5', label: 'Ufficio', color: '#55ABE4' },
                    { num: '7', label: 'CQ/Sicur.', color: '#EE2430' },
                  ].map((s, i) => (
                    <div key={i}>
                      <div className="text-4xl font-black mb-1" style={{ color: s.color }}>{s.num}</div>
                      <div className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">{s.label}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── 7. LAVORA CON NOI (Aligned with Home) ───────────────────── */}
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
                    Stiamo crescendo e cerchiamo professionisti appassionati. Se hai esperienza nel settore elettrico, c’è posto per te in Trialux. Entra a far parte di una realtà solida e dinamica.
                  </p>
                  <Link href="/lavora-con-noi" className="tri-btn tri-btn-outline-dark">
                    <span>Vedi posizioni aperte</span>
                    <ArrowRight size={16} />
                  </Link>
                </FadeIn>
              </div>
              <div className="aspect-video overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069" 
                  alt="Lavora con Trialux" 
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
