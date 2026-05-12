import { Header } from '../_components/Header'
import { FadeIn } from '../_components/FadeIn'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'

export default function CertificazioniPage() {
  return (
    <div className="bg-white min-h-screen text-[#0A0A0A] font-sans">
      <Header />

      <main className="w-full">

        {/* ── HERO ── */}
        <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-end overflow-hidden pb-16 md:pb-24 lg:pb-32">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop"
              alt="Certificazioni Trialux"
              className="w-full h-full object-cover scale-[1.04] transition-transform duration-[10s] ease-out"
              style={{ transformOrigin: 'center bottom' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 to-transparent" style={{ width: '60%' }} />
          </div>
          <div className="absolute top-[-10%] right-[-8%] w-[55vw] h-[120%]  border border-white/[0.04] pointer-events-none" />
          <div className="absolute top-[5%] right-[-15%] w-[45vw] h-[110%]  border border-[#55ABE4]/[0.08] pointer-events-none" />

          <div className="container-wide relative z-10 max-w-[1400px] w-full">
            <FadeIn delay={0} effect="mask">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[1.5px] bg-[#55ABE4]" />
                <span className="text-[#55ABE4] font-semibold tracking-[0.25em] uppercase text-[11px]">Qualità e certificazioni</span>
              </div>
              <h1 className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-black tracking-[-0.01em] text-white leading-[1.1] mb-3 max-w-2xl">
                Standard riconosciuti a livello internazionale.
              </h1>
            </FadeIn>
            <FadeIn delay={200} effect="mask">
              <p className="text-white/60 text-sm md:text-base max-w-lg leading-relaxed">
                Per Trialux la qualità non è una dichiarazione d'intenti: è un sistema strutturato e verificato da enti terzi indipendenti.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── ISO STRIP — dark, divisioni orizzontali ── */}
        <section className="section-dark py-0 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#55ABE4] via-[#F0921E] to-[#EE2430]" />
          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.07]">
              {[
                { code: 'ISO 9001', label: 'Sistema di gestione per la qualità', color: '#55ABE4' },
                { code: 'ISO 14001', label: 'Sistema di gestione ambientale', color: '#F0921E' },
                { code: 'ISO 45001', label: 'Salute e sicurezza sul lavoro', color: '#EE2430' },
              ].map((cert, idx) => (
                <FadeIn key={idx} delay={idx * 80}>
                  <div className="py-14 px-8 lg:px-12 first:pl-6">
                    <div className="text-[clamp(2rem,3vw,2.8rem)] font-black mb-2 tracking-tight leading-none" style={{ color: cert.color }}>
                      {cert.code}
                    </div>
                    <div className="text-zinc-500 text-xs font-medium uppercase tracking-widest leading-tight mt-3 max-w-[200px]">
                      {cert.label}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── ISO DEEP — offset photo + detail ── */}
        <section className="bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-stretch">

              {/* Text col */}
              <div className="lg:col-span-7 lg:pr-16 flex flex-col justify-center">
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-[2px] bg-[#55ABE4]" />
                    <span className="text-[#55ABE4] font-bold tracking-[0.15em] uppercase text-xs">Il nostro impegno, certificato</span>
                  </div>
                  <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black tracking-tight text-[#0A0A0A] leading-[1.15] mb-3">
                    Qualità verificata ogni anno.
                  </h2>
                </FadeIn>
                <FadeIn delay={150}>
                  <div className="space-y-8 mb-10">
                    {[
                      {
                        code: 'ISO 9001',
                        color: '#55ABE4',
                        text: 'La certificazione ISO 9001 attesta che Trialux ha implementato e mantiene un sistema di gestione per la qualità conforme allo standard internazionale. Questo significa processi documentati, controllo costante delle attività operative e un approccio sistematico al miglioramento continuo.',
                      },
                      {
                        code: 'ISO 14001',
                        color: '#F0921E',
                        text: 'Con la certificazione ISO 14001, Trialux dimostra il proprio impegno nella gestione responsabile degli impatti ambientali legati alle attività di cantiere. Monitoriamo i consumi, gestiamo correttamente i rifiuti e adottiamo procedure operative che minimizzano l\'impatto sull\'ambiente.',
                      },
                      {
                        code: 'ISO 45001',
                        color: '#EE2430',
                        text: 'La sicurezza dei lavoratori è la nostra priorità assoluta. La certificazione ISO 45001 attesta che Trialux ha adottato un sistema strutturato per l\'identificazione e la gestione dei rischi professionali. Tutto il personale è formato e certificato.',
                      },
                    ].map((cert, idx) => (
                      <div key={idx} className="flex gap-6 group">
                        <div className="w-1  shrink-0 mt-1" style={{ background: cert.color, minHeight: 60 }} />
                        <div>
                          <div className="text-sm font-black mb-2 tracking-widest" style={{ color: cert.color }}>{cert.code}</div>
                          <p className="text-zinc-500 text-sm md:text-base leading-relaxed">{cert.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

              {/* Image col */}
              <FadeIn delay={200} className="lg:col-span-5 h-full">
                <div className="relative h-full min-h-[400px]">
                  <div className="absolute -top-6 -right-6 w-40 h-40  border border-[#55ABE4]/20 pointer-events-none" />
                  <div className="h-full overflow-hidden  shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
                      alt="Ufficio Trialux"
                      className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-105"
                    />
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* ── ATTESTATI — dark image split ── */}
        <section className="section-dark py-0 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image half */}
            <div className="relative h-[300px] lg:h-auto overflow-hidden order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop"
                alt="Legalità Trialux"
                className="w-full h-full object-cover opacity-60 transition-transform duration-[3s] hover:scale-105"
              />
              <svg className="absolute right-0 inset-y-0 h-full w-auto opacity-20" viewBox="0 0 100 200" fill="none">
                <path d="M100 100 Q100 0 20 0" stroke="#EE2430" strokeWidth="8" fill="none"/>
              </svg>
            </div>
            {/* Text half */}
            <div className="section-dark flex flex-col justify-center px-10 lg:px-16 py-16 lg:py-24 order-1 lg:order-2">
              <FadeIn effect="mask">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-10 h-[2px] bg-[#EE2430]" />
                  <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-xs">Attestati e riconoscimenti</span>
                </div>
                <h2 className="text-[clamp(1.8rem,2.8vw,2.8rem)] font-black tracking-tight text-white leading-[1] mb-8">
                  Il valore della legalità.
                </h2>
              </FadeIn>
              <FadeIn delay={150}>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Rating di Legalità — Due stelle',
                      desc: 'Riconoscimento dell\'AGCM che certifica la trasparenza nella gestione aziendale e il rispetto dei requisiti etici, fiscali e normativi.',
                    },
                    {
                      title: 'Rating di Sostenibilità',
                      desc: 'Certifica l\'integrazione di criteri ESG nei processi aziendali. Rafforza il posizionamento nelle gare con criteri di selezione legati alla sostenibilità.',
                    },
                    {
                      title: 'Iscrizione alla White List',
                      desc: 'Trialux è iscritta alla White List della Prefettura, l\'elenco dei fornitori non soggetti a tentativi di infiltrazione mafiosa. Requisito essenziale per gli appalti pubblici.',
                    },
                  ].map((att, idx) => (
                    <div key={idx} className="flex gap-4">
                      <CheckCircle2 size={18} className="text-[#EE2430] shrink-0 mt-1" />
                      <div>
                        <h3 className="font-black text-white mb-1">{att.title}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">{att.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── WHISTLEBLOWING — dark block ── */}
        <section className="bg-white py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
            <FadeIn>
              <div className="section-dark  p-10 lg:p-16 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <svg className="absolute right-[-5%] top-[-10%] h-[120%] w-auto opacity-5" viewBox="0 0 200 400" fill="none">
                    <path d="M200 200 Q200 0 50 0" stroke="white" strokeWidth="60" fill="none"/>
                    <path d="M190 200 Q190 390 40 400" stroke="#F0921E" strokeWidth="30" fill="none"/>
                  </svg>
                </div>
                <div className="flex flex-col lg:flex-row gap-10 items-start relative z-10">
                  <div className="w-16 h-16  bg-[#EE2430] flex items-center justify-center text-3xl shrink-0">
                    ⚖️
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="w-10 h-[2px] bg-[#EE2430]" />
                      <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-sm">Whistleblowing</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white tracking-tight leading-[1.1]">
                      Segnalazione condotte illecite.
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-3xl">
                      In linea con la normativa vigente in materia di whistleblowing (D. Lgs. 24/2023), Trialux ha attivato un canale dedicato per la segnalazione riservata di eventuali condotte illecite o irregolari. Il sistema garantisce la massima riservatezza al segnalante.
                    </p>
                    <a
                      href="https://trialux.segnalazioni.eu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0A0A0A] font-bold  hover:bg-[#EE2430] hover:text-white transition-colors group"
                    >
                      <span>Accedi alla piattaforma</span>
                      <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
    </div>
  )
}
