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

        {/* ── 1.1 HERO (Stacking Base) ──────────────────────────────────── */}
        <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-end overflow-hidden pb-16 md:pb-24 lg:pb-32">
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
                <span className="text-[#55ABE4] font-bold tracking-[0.2em] uppercase text-[10px]">Trialux S.r.l.</span>
              </div>
              <h1 className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-black tracking-[-0.01em] text-white leading-[1.1] mb-3 max-w-3xl">
                L'energia che muove il territorio.
              </h1>
            </FadeIn>
            <FadeIn delay={200} effect="mask">
              <p className="text-white/60 text-sm md:text-base mb-8 max-w-lg leading-relaxed">
                Realizziamo e manteniamo reti elettriche di media e bassa tensione con competenza tecnica, affidabilità e rispetto delle scadenze.
              </p>
            </FadeIn>
            <FadeIn delay={350}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/servizi" className="tri-btn tri-btn-primary">
                  <span>I nostri servizi</span>
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
        <section className="bg-white py-16 md:py-24 lg:py-32 relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 lg:pr-16">
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-[2px] bg-[#55ABE4]" />
                    <span className="text-[#55ABE4] font-bold tracking-[0.15em] uppercase text-xs">Chi siamo</span>
                  </div>
                  <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black tracking-tight text-[#0A0A0A] leading-[1.15] mb-3">
                    Un'azienda costruita sulla competenza.
                  </h2>
                </FadeIn>
                <FadeIn delay={150}>
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                    Fondata nel 2021, Trialux è diventata un riferimento nell'impiantistica elettrica in Sicilia. Operiamo con oltre 100 professionisti qualificati per garantire reti sicure ed efficienti.
                  </p>
                  <Link href="/chi-siamo" className="tri-btn tri-btn-outline-dark">
                    <span>Scopri la nostra storia</span>
                    <ArrowRight size={16} />
                  </Link>
                </FadeIn>
              </div>
              <FadeIn delay={200} className="lg:col-span-5 h-full">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop"
                    alt="Squadra Trialux"
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── 1.3 SERVIZI (No numbers) ─────────────────────────────────── */}
        <section className="bg-zinc-50 py-16 md:py-24 lg:py-32">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
              <FadeIn effect="mask">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-[2px] bg-[#EE2430]" />
                  <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-xs">I nostri servizi</span>
                </div>
                <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black tracking-tight text-[#0A0A0A] leading-[1.1]">
                  Soluzioni per l'energia.
                </h2>
              </FadeIn>
              <FadeIn delay={150}>
                <Link href="/servizi" className="tri-btn tri-btn-outline-dark">
                  <span>Tutti i servizi</span>
                </Link>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Cavi MT/BT', desc: 'Sotterranei e aerei', img: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058' },
                { title: 'Cabine Elettriche', desc: 'Installazione e ammodernamento', img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070' },
                { title: 'Opere Murarie', desc: 'Scavi e movimento terra', img: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070' },
              ].map((s, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <Link href="/servizi" className="group block relative aspect-square overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-xl font-black text-white mb-2">{s.title}</h3>
                      <p className="text-white/60 text-sm">{s.desc}</p>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── 1.4 STACKING SECTIONS ────────────────────────────────────── */}
        
        {/* E-DISTRIBUZIONE */}
        <section className="stack-section section-dark">
          <div className="container-wide">
            <div className="max-w-3xl">
              <FadeIn effect="mask">
                <span className="text-[#EE2430] text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">Cliente principale</span>
                <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-white tracking-tighter leading-[1] mb-6">
                  E-Distribuzione.
                </h2>
              </FadeIn>
              <FadeIn delay={150}>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  La fiducia del principale distributore di energia nazionale testimonia la nostra eccellenza operativa e affidabilità tecnica ogni giorno sul campo.
                </p>
                <img src="/logo-white.png" alt="E-Distribuzione Logo" className="h-12 w-auto opacity-50 grayscale hover:grayscale-0 transition-all cursor-default" />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* LAVORA CON NOI */}
        <section className="stack-section" style={{ background: '#ffffff', color: '#0A0A0A' }}>
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <FadeIn effect="mask">
                  <span className="text-[#55ABE4] text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">Carriere</span>
                  <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-[#0A0A0A] tracking-tighter leading-[1] mb-6">
                    Entra nel team.
                  </h2>
                </FadeIn>
                <FadeIn delay={150}>
                  <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                    Siamo sempre alla ricerca di nuovi talenti per costruire insieme le infrastrutture energetiche del futuro.
                  </p>
                  <Link href="/lavora-con-noi" className="tri-btn tri-btn-dark">
                    <span>Posizioni aperte</span>
                    <ArrowRight size={16} />
                  </Link>
                </FadeIn>
              </div>
              <div className="order-1 lg:order-2 aspect-video overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069" alt="Team Work" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
