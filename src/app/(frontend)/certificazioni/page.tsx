import { Header } from '../_components/Header'
import { FadeIn } from '../_components/FadeIn'
import { Parallax } from '../_components/Parallax'
import { ArrowUpRight, ShieldCheck, Leaf, HardHat, Scale, Globe, FileCheck } from 'lucide-react'
import '../style.css'

export default function CertificazioniPage() {
  return (
    <div className="bg-white min-h-screen text-[#0A0A0A] font-sans">
      <Header />

      <main className="w-full">

        {/* ── 4.1 INTESTAZIONE PAGINA ────────────────────────── */}
        <section className="relative w-full h-[70vh] md:h-screen min-h-[500px] md:min-h-[640px] flex flex-col justify-end overflow-hidden pb-16 md:pb-32 lg:pb-40">
          <div className="absolute inset-0">
            <Parallax offset={80} className="w-full h-full">
              <img
                src="/images/Trialux 13.jpg"
                alt="Certificazioni Trialux"
                className="w-full h-[120%] object-cover scale-[1.1]"
              />
            </Parallax>
            {/* Top Shadow for Header Visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-transparent h-40" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 to-transparent w-full md:w-[60%]" />
          </div>

          <div className="container-wide relative z-10 w-full">
            <FadeIn delay={0} effect="mask">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[1.5px] bg-[#55ABE4]" />
                <span className="text-[#55ABE4] font-semibold tracking-[0.25em] uppercase text-[10px] md:text-[11px]">Eccellenza e Standard</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.1] mb-4 md:mb-6 max-w-3xl uppercase">
                Qualità e certificazioni.
              </h1>
            </FadeIn>
            <FadeIn delay={200} effect="mask">
              <p className="text-white text-base md:text-xl font-medium max-w-2xl mb-6 md:mb-8 leading-relaxed">
                Operiamo con sistemi di gestione certificati e standard riconosciuti a livello nazionale e internazionale.
              </p>
              <p className="text-white/60 text-xs md:text-base max-w-lg leading-relaxed">
                Per Trialux la qualità non è una dichiarazione d’intenti, è un sistema strutturato e verificato da enti terzi indipendenti. Le nostre certificazioni sono una garanzia concreta per chi decide di affidarci un lavoro.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── 4.2 CERTIFICAZIONI ISO ────────────────────────── */}
        <section className="bg-white py-16 md:py-32">
          <div className="container-wide">
            <div className="max-w-3xl mb-20">
              <FadeIn effect="mask">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-[2px] bg-[#55ABE4]" />
                  <span className="text-[#55ABE4] font-bold tracking-[0.15em] uppercase text-xs">Standard Internazionali</span>
                </div>
                <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black tracking-tight text-[#0A0A0A] leading-[1.15]">
                  Certificazioni ISO.
                </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-100">
              {[
                {
                  code: 'ISO 9001',
                  color: '#55ABE4',
                  icon: <ShieldCheck size={48} />,
                  title: 'Sistema di gestione per la qualità',
                  text: 'La certificazione ISO 9001 attesta che Trialux mantiene un sistema di gestione conforme allo standard internazionale. Significa processi documentati, controllo costante delle attività e miglioramento continuo.'
                },
                {
                  code: 'ISO 14001',
                  color: '#F0921E',
                  icon: <Leaf size={48} />,
                  title: 'Sistema di gestione ambientale',
                  text: 'Dimostriamo il nostro impegno nella gestione responsabile degli impatti ambientali legati alle attività di cantiere. Monitoriamo i consumi, gestiamo i rifiuti e minimizziamo l’impatto sull’ambiente.'
                },
                {
                  code: 'ISO 45001',
                  color: '#EE2430',
                  icon: <HardHat size={48} />,
                  title: 'Salute e sicurezza sul lavoro',
                  text: 'La sicurezza è la nostra priorità. ISO 45001 attesta la gestione dei rischi professionali. Tutto il personale è formato per operare in sicurezza anche in condizioni critiche.'
                }
              ].map((cert, idx) => (
                <FadeIn key={idx} delay={idx * 150} className="group relative overflow-hidden border-r last:border-r-0 border-zinc-100">
                  {/* Hover Color Fill */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-0" 
                    style={{ backgroundColor: cert.color }} 
                  />
                  
                  <div className="relative z-10 p-8 md:p-14 h-full flex flex-col justify-between min-h-[320px] md:min-h-[380px]">
                    <div>
                      <div className="mb-10 flex items-center justify-between">
                        <div 
                          className="transition-all duration-500 group-hover:scale-125 group-hover:!text-white" 
                          style={{ color: cert.color }}
                        >
                          {cert.icon}
                        </div>
                        <div className="text-[11px] font-black tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 group-hover:text-white transition-all">
                          {cert.code}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-black mb-6 leading-tight tracking-tighter group-hover:text-white transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-zinc-500 text-base leading-relaxed group-hover:text-white/90 transition-colors">
                        {cert.text}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4.3 ATTESTATI E RICONOSCIMENTI ────────────────────────── */}
        <section className="section-dark py-16 md:py-32 relative overflow-hidden">
          <div className="container-wide relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-10 h-[2px] bg-[#EE2430]" />
                    <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-xs">Oltre gli standard</span>
                  </div>
                  <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black text-white leading-[1.1] mb-12">
                    Attestati e riconoscimenti.
                  </h2>
                </FadeIn>
                
                <div className="space-y-12">
                  {[
                    {
                      icon: <Scale size={24} className="text-[#EE2430]" />,
                      title: 'Rating di legalità — due stelle',
                      text: 'Rilasciato dall’AGCM, certifica la trasparenza nella gestione aziendale e il rispetto dei requisiti etici, fiscali e normativi. Un vantaggio concreto in tutte le procedure di gara pubblica.'
                    },
                    {
                      icon: <Globe size={24} className="text-[#F0921E]" />,
                      title: 'Attestato di rating di sostenibilità',
                      text: 'Certifica l’integrazione di criteri ESG (ambientali, sociali e di governance) nei processi aziendali, rafforzando il nostro posizionamento nelle gare con requisiti di sostenibilità.'
                    },
                    {
                      icon: <FileCheck size={24} className="text-[#55ABE4]" />,
                      title: 'Iscrizione alla White List',
                      text: 'Trialux è iscritta all’elenco dei fornitori non soggetti a tentativi di infiltrazione mafiosa. Un segnale inequivocabile di trasparenza e correttezza verso la Prefettura e gli enti pubblici.'
                    }
                  ].map((item, idx) => (
                    <FadeIn key={idx} delay={idx * 100} className="flex gap-6">
                      <div className="shrink-0 mt-1">{item.icon}</div>
                      <div>
                        <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight">{item.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed max-w-lg">{item.text}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
              
              <FadeIn delay={300} className="relative aspect-[4/5] overflow-hidden group">
                <img 
                  src="/images/Trialux 20.jpg" 
                  alt="Ufficio Qualità" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-40" />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── 4.4 WHISTLEBLOWING ────────────────────────── */}
        <section className="bg-white py-16 md:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="bg-zinc-50 border border-zinc-100 p-8 md:p-16 relative overflow-hidden group">
                <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
                  <div className="w-16 h-16 bg-[#55ABE4] flex items-center justify-center text-white shrink-0 shadow-lg">
                    <Scale size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="w-10 h-[2px] bg-[#55ABE4]" />
                      <span className="text-[#55ABE4] font-bold tracking-[0.15em] uppercase text-xs">Etica Aziendale</span>
                    </div>
                    <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-black text-[#0A0A0A] leading-[1.1] mb-6">
                      Segnalazione di condotte illecite.
                    </h2>
                    <p className="text-zinc-500 text-base leading-relaxed mb-10 max-w-3xl">
                      In linea con la normativa vigente in materia di whistleblowing (D. Lgs. 24/2023), Trialux ha attivato un canale dedicato per la segnalazione riservata di eventuali condotte illecite o irregolari. Il sistema garantisce la massima riservatezza al segnalante e viene gestito in modo indipendente dalla struttura aziendale.
                    </p>
                    <a
                      href="https://trialux.segnalazioni.eu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 px-10 py-5 bg-[#0A0A0A] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#55ABE4] transition-all duration-500 group-button"
                    >
                      <span>Accedi alla piattaforma</span>
                      <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
