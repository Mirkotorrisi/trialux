import { Header } from '../_components/Header'
import { FadeIn } from '../_components/FadeIn'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ChiSiamoPage() {
  return (
    <div className="bg-white min-h-screen text-[#0A0A0A] font-sans">
      <Header />

      <main className="w-full">

        {/* ── HERO ── full-bleed, anchored bottom */}
        <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-end overflow-hidden pb-16 md:pb-24 lg:pb-32">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
              alt="Cantiere Trialux"
              className="w-full h-full object-cover scale-[1.04] transition-transform duration-[10s] ease-out"
              style={{ transformOrigin: 'center bottom' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 to-transparent" style={{ width: '60%' }} />
          </div>
          {/* Arc decorations */}
          <div className="absolute top-[-10%] right-[-8%] w-[55vw] h-[120%]  border border-white/[0.04] pointer-events-none" />
          <div className="absolute top-[5%] right-[-15%] w-[45vw] h-[110%]  border border-[#55ABE4]/[0.08] pointer-events-none" />

          <div className="container-wide relative z-10 max-w-[1400px] w-full">
            <FadeIn delay={0} effect="mask">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[1.5px] bg-[#55ABE4]" />
                <span className="text-[#55ABE4] font-semibold tracking-[0.25em] uppercase text-[11px]">Chi siamo</span>
              </div>
              <h1 className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-black tracking-[-0.01em] text-white leading-[1.1] mb-3 max-w-2xl">
                Un progetto imprenditoriale nato in Sicilia.
              </h1>
            </FadeIn>
            <FadeIn delay={200} effect="mask">
              <p className="text-white/60 text-sm md:text-base max-w-lg leading-relaxed">
                Cresciuto con determinazione, fondato sulla competenza.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── NUMERI STRIP — dark, full-bleed ── */}
        <section className="section-dark py-0 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#55ABE4] via-[#F0921E] to-[#EE2430]" />
          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.07]">
              {[
                { num: '2021', label: 'Anno di fondazione', color: '#55ABE4' },
                { num: '51', label: 'Dipendenti totali', color: '#F0921E' },
                { num: '39', label: 'Personale operativo', color: '#EE2430' },
                { num: '3 ISO', label: 'Certificazioni internazionali', color: 'white' },
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

        {/* ── LA STORIA — offset photo + massive type ── */}
        <section className="bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-stretch">

              {/* Text col */}
              <div className="lg:col-span-7 lg:pr-16 flex flex-col justify-center">
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-[2px] bg-[#55ABE4]" />
                    <span className="text-[#55ABE4] font-bold tracking-[0.15em] uppercase text-xs">La nostra storia</span>
                  </div>
                  <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black tracking-tight text-[#0A0A0A] leading-[1.15] mb-3">
                    Dal 2021, sul campo.
                  </h2>
                </FadeIn>
                <FadeIn delay={150}>
                  <div className="space-y-5 text-zinc-500 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                    <p>
                      Trialux S.r.l. nasce nel 2021 per volontà dell'imprenditore Salvatore Salamone, con un obiettivo chiaro: portare nel settore dell'impiantistica elettrica un modello operativo fondato su qualità, affidabilità e attenzione al territorio.
                    </p>
                    <p>
                      In pochi anni l'azienda ha costruito una struttura solida, assemblando un team di professionisti altamente qualificati e dotandosi di tecnologie e attrezzature all'avanguardia. La crescita è stata costante e misurabile: aumento del fatturato, nuove commesse affidate da enti pubblici e privati, incremento continuo dell'organico.
                    </p>
                    <p>
                      Oggi Trialux è un punto di riferimento riconosciuto nel settore della realizzazione e manutenzione di linee elettriche di media e bassa tensione, con all'attivo cantieri distribuiti sul territorio regionale e una presenza consolidata nelle gare pubbliche.
                    </p>
                  </div>
                  <Link href="/certificazioni" className="inline-flex items-center gap-3 text-sm font-bold text-[#0A0A0A] group border-b border-[#55ABE4] pb-1 hover:text-[#55ABE4] transition-colors w-fit">
                    Le nostre certificazioni
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </FadeIn>
              </div>

              {/* Image col — bleeds top/bottom */}
              <FadeIn delay={200} className="lg:col-span-5 h-full">
                <div className="relative h-full min-h-[400px]">
                  <div className="absolute -top-6 -right-6 w-40 h-40  border border-[#55ABE4]/20 pointer-events-none" />
                  <div className="absolute -bottom-6 right-12 w-20 h-20  border border-[#EE2430]/15 pointer-events-none" />
                  <div className="h-full overflow-hidden  shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                      alt="Cantiere Trialux"
                      className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-105"
                    />
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* ── BRAND — dark full-bleed, SVG logo large ── */}
        <section className="section-dark py-14 md:py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg className="absolute right-0 top-0 h-full w-auto opacity-[0.04]" viewBox="0 0 400 600" fill="none">
              <path d="M400 300 Q400 0 100 0" stroke="white" strokeWidth="80" fill="none"/>
              <path d="M380 300 Q380 380 150 600" stroke="#EE2430" strokeWidth="40" fill="none"/>
            </svg>
          </div>
          <div className="absolute top-0 left-0 w-1 h-full bg-[#EE2430]" />

          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">

              {/* SVG brand display */}
              <FadeIn delay={100} className="lg:col-span-5">
                <div className=" overflow-hidden bg-zinc-900 aspect-square flex items-center justify-center relative border border-white/[0.06]">
                  <svg width="80%" viewBox="0 0 400 300" fill="none" className="relative z-10">
                    <path d="M80 150 Q50 80 80 20 Q20 60 20 150 Q20 240 80 280 Q50 220 80 150Z" fill="#55ABE4" opacity="0.9"/>
                    <path d="M290 110 Q320 148 290 188 Q340 170 340 148 Q340 126 290 110Z" fill="#F0921E" opacity="0.9"/>
                    <path d="M318 90 Q360 148 318 208 Q370 185 372 148 Q372 110 318 90Z" fill="#EE2430" opacity="0.9"/>
                    <text x="110" y="165" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="56" fill="white" letterSpacing="-2">TRIALUX</text>
                  </svg>
                </div>
              </FadeIn>

              {/* Text */}
              <div className="lg:col-span-7 lg:pl-16">
                <FadeIn effect="mask">
                  <span className="text-[#EE2430] text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Il nostro marchio</span>
                  <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black text-white tracking-tight leading-[1.15] mb-3">
                    Identità condivisa.
                  </h2>
                </FadeIn>
                <FadeIn delay={150}>
                  <div className="space-y-5 text-zinc-400 text-base leading-relaxed mb-10">
                    <p>
                      Il logo di Trialux nasce da un'idea semplice e significativa. Ideato insieme ai tre figli di Salvatore Salamone, il simbolo racconta il carattere familiare e generazionale dell'azienda, senza rinunciare alla proiezione verso il futuro.
                    </p>
                    <p>
                      Le forme rappresentano i valori che guidano ogni decisione: unità, perché il lavoro di squadra è la nostra prima risorsa; crescita, perché non ci accontentiamo mai del risultato raggiunto; continuità, perché costruiamo relazioni e infrastrutture pensando al lungo periodo.
                    </p>
                  </div>
                  <blockquote className="border-l-4 border-[#EE2430] pl-6 text-xl font-bold text-white italic">
                    "Un marchio che non è solo estetica, ma identità."
                  </blockquote>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* ── ORGANIGRAMMA — white, asymmetric ── */}
        <section className="bg-white py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Label + title */}
              <div className="lg:col-span-4">
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-[2px] bg-[#EE2430]" />
                    <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-xs">La struttura</span>
                  </div>
                  <h2 className="text-[clamp(1.8rem,2.8vw,2.8rem)] font-black tracking-tight text-[#0A0A0A] leading-[1] mb-6">
                    Un'organizzazione chiara, per risultati certi.
                  </h2>
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                    Trialux è organizzata con una struttura chiara, che garantisce presidio su ogni area operativa: dalla direzione tecnica alla gestione dei cantieri, dall'amministrazione alle risorse umane.
                  </p>
                </FadeIn>
              </div>

              {/* Org chart */}
              <div className="lg:col-span-8 lg:pl-8">
                {/* Top level */}
                <FadeIn delay={100}>
                  <div className="flex justify-center mb-0">
                    <div className="section-dark text-white p-8  w-full max-w-sm text-center shadow-xl relative">
                      <div className="text-[#55ABE4] text-xs font-bold tracking-widest uppercase mb-3">Amministratore Unico</div>
                      <div className="text-2xl font-black">Salvatore Salamone</div>
                      <div className="absolute -bottom-8 left-1/2 w-0.5 h-8 bg-zinc-300 -translate-x-1/2" />
                    </div>
                  </div>
                </FadeIn>

                {/* Connector */}
                <div className="relative mb-0 mt-8">
                  <div className="absolute top-0 left-1/6 right-1/6 h-0.5 bg-zinc-200" />
                  <div className="flex justify-between max-w-3xl mx-auto">
                    <div className="w-0.5 h-8 bg-zinc-200" />
                    <div className="w-0.5 h-8 bg-zinc-200" />
                    <div className="w-0.5 h-8 bg-zinc-200" />
                  </div>
                </div>

                {/* Level 2 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { role: 'Direzione Generale', name: 'Simone Salamone', color: '#55ABE4' },
                    { role: 'Direzione Tecnica', name: 'Pietro Salamone', color: '#F0921E' },
                    { role: 'Gestione Personale', name: 'Antonino Salamone', color: '#EE2430' },
                  ].map((person, idx) => (
                    <FadeIn key={idx} delay={200 + idx * 100}>
                      <div className="bg-white border-2 border-zinc-100 hover:shadow-xl  p-6 transition-all duration-300" style={{ borderTopColor: person.color, borderTopWidth: 3 }}>
                        <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: person.color }}>{person.role}</div>
                        <div className="text-lg font-black text-[#0A0A0A]">{person.name}</div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TEAM — dark image strip ── */}
        <section className="section-dark py-0 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image half */}
            <div className="relative h-[300px] lg:h-[500px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
                alt="Squadra Trialux"
                className="w-full h-full object-cover opacity-70 transition-transform duration-[3s] hover:scale-105"
              />
              <svg className="absolute right-0 inset-y-0 h-full w-auto opacity-20" viewBox="0 0 100 200" fill="none">
                <path d="M100 100 Q100 0 20 0" stroke="#55ABE4" strokeWidth="8" fill="none"/>
                <path d="M90 100 Q90 180 10 200" stroke="#EE2430" strokeWidth="4" fill="none"/>
              </svg>
            </div>
            {/* Text half */}
            <div className="section-dark flex flex-col justify-center px-10 lg:px-16 py-16 lg:py-24">
              <FadeIn effect="mask">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-10 h-[2px] bg-[#55ABE4]" />
                  <span className="text-[#55ABE4] font-bold tracking-[0.15em] uppercase text-xs">Il team</span>
                </div>
                <h2 className="text-[clamp(1.8rem,2.8vw,2.8rem)] font-black tracking-tight text-white leading-[1] mb-8">
                  51 professionisti, ogni giorno sul campo.
                </h2>
              </FadeIn>
              <FadeIn delay={150}>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-sm">
                  Il team è composto da figure tecniche specializzate: capisquadra, tirafili, giuntisti, cabinisti, operatori lavori sotto tensione e operatori di mezzi speciali. Tutto il personale dispone delle certificazioni di sicurezza richieste per operare in ambienti ad alto rischio.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { num: '39', label: 'Personale operativo', color: '#F0921E' },
                    { num: '5', label: 'Ufficio', color: '#55ABE4' },
                    { num: '7', label: 'CQ/Sicurezza', color: '#EE2430' },
                  ].map((s, i) => (
                    <div key={i}>
                      <div className="text-3xl font-black mb-1" style={{ color: s.color }}>{s.num}</div>
                      <div className="text-zinc-500 text-xs uppercase tracking-wide font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── SPONSORIZZAZIONI — wide headline dark ── */}
        <section className="section-dark py-14 md:py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg className="absolute right-0 top-0 h-full w-auto opacity-[0.04]" viewBox="0 0 400 600" fill="none">
              <path d="M400 300 Q400 0 100 0" stroke="white" strokeWidth="80" fill="none"/>
            </svg>
          </div>
          <div className="absolute top-0 left-0 w-1 h-full bg-[#F0921E]" />

          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <FadeIn effect="mask">
                  <span className="text-[#F0921E] text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Sponsorizzazioni</span>
                  <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black text-white tracking-tight leading-[1.2]">
                    Il territorio che sosteniamo.
                  </h2>
                </FadeIn>
                <FadeIn delay={150}>
                  <p className="text-zinc-400 text-base leading-relaxed mt-8">
                    Trialux crede nel valore del radicamento locale. Per questo sosteniamo due realtà sportive del territorio siciliano: il Catania Football Club S.r.l. e la SSD Biancavilla Calcio Academy.
                  </p>
                </FadeIn>
              </div>
              <FadeIn delay={200}>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { initial: 'C', name: 'Catania FC', color: '#EE2430' },
                    { initial: 'B', name: 'Biancavilla Academy', color: '#55ABE4' },
                  ].map((sponsor, idx) => (
                    <div key={idx} className="aspect-square bg-zinc-900 border border-white/[0.06]  flex flex-col items-center justify-center p-8 hover:border-white/20 hover:-translate-y-1 transition-all group">
                      <div className="w-20 h-20  flex items-center justify-center text-white font-black text-3xl mb-4 transition-transform group-hover:scale-110"
                        style={{ background: sponsor.color }}>
                        {sponsor.initial}
                      </div>
                      <span className="font-black text-white text-center tracking-tight leading-tight">{sponsor.name}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── CTA LAVORA CON NOI ── */}
        <section className="relative h-[50vh] min-h-[380px] flex flex-col justify-end overflow-hidden pb-16 md:pb-24 lg:pb-32">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069&auto=format&fit=crop"
              alt="Lavora con Trialux"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 section-dark/70" />
          </div>
          <div className="container mx-auto px-6 lg:px-16 relative z-10 max-w-[1400px]">
            <FadeIn effect="mask">
              <span className="text-[#55ABE4] text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Entra nel team</span>
              <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black text-white tracking-tight leading-[1] mb-8">
                Costruiamo insieme il futuro.
              </h2>
              <Link href="/lavora-con-noi" className="tri-btn bg-white text-[#0A0A0A] hover:bg-[#55ABE4] hover:text-white transition-colors inline-flex group">
                <span>Posizioni aperte</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>
        </section>

      </main>
    </div>
  )
}
