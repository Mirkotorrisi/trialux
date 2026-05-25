'use client'

import { Header } from '../_components/Header'
import { FadeIn } from '../_components/FadeIn'
import { DecorativePattern } from '../_components/DecorativeArcs'
import { Parallax } from '../_components/Parallax'
import Link from 'next/link'
import { ArrowUpRight, ShieldCheck, Leaf, HardHat, Scale, Globe, FileCheck, Download } from 'lucide-react'
import Image from 'next/image'

export default function CertificazioniPage() {
  return (
    <div className="bg-white min-h-screen text-[#0a0f1a] font-sans">
      <Header />

      <main className="w-full">

        {/* ── 4.1 INTESTAZIONE PAGINA ────────────────────────── */}
        <section className="relative w-full flex flex-col justify-end overflow-hidden pb-16 md:pb-32 lg:pb-40" style={{ height: '100dvh', minHeight: '100dvh' }}>
          <div className="absolute inset-0">
            <Parallax offset={80} className="w-full h-full">
              {/* Mobile Vertical Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                poster="/images/certificazioni_verticale-optimized-poster.jpg"
                className="absolute inset-0 w-full h-[120%] object-cover pointer-events-none select-none block md:hidden"
                style={{ transformOrigin: 'center bottom' }}
              >
                <source src="/videos/certificazioni_verticale-optimized.mp4" type="video/mp4" />
                Il tuo browser non supporta il tag video.
              </video>
              {/* Desktop Horizontal Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                poster="/images/certificazioni-optimized-poster.jpg"
                className="absolute inset-0 w-full h-[120%] object-cover pointer-events-none select-none hidden md:block"
                style={{ transformOrigin: 'center bottom' }}
              >
                <source src="/videos/certificazioni-optimized.mp4" type="video/mp4" />
                Il tuo browser non supporta il tag video.
              </video>
            </Parallax>
            {/* Top Shadow for Header Visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/80 via-transparent to-transparent h-40" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/70 to-transparent w-full md:w-[60%]" />
          </div>

          <div className="container-wide relative z-10 w-full">
            <FadeIn delay={0} effect="mask">

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.1] mb-4 md:mb-6 max-w-3xl">
                Qualità e certificazioni.
              </h1>
            </FadeIn>
            <FadeIn delay={200} effect="mask">
              <p className="text-white/70 text-base md:text-xl max-w-2xl leading-relaxed">
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
                  <span className="w-10 h-[2px] bg-[#F0921E]" />
                  <span className="text-[#F0921E] font-bold tracking-[0.15em] uppercase text-xs">Standard Internazionali</span>
                </div>
                <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black tracking-tight text-[#0a0f1a] leading-[1.15]">
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
                  text: 'La certificazione ISO 9001 attesta che Trialux mantiene un sistema di gestione conforme allo standard internazionale. Significa processi documentati, controllo costante delle attività e miglioramento continuo.',
                  fileUrl: '#'
                },
                {
                  code: 'ISO 14001',
                  color: '#F0921E',
                  icon: <Leaf size={48} />,
                  title: 'Sistema di gestione ambientale',
                  text: 'Dimostriamo il nostro impegno nella gestione responsabile degli impatti ambientali legati alle attività di cantiere. Monitoriamo i consumi, gestiamo i rifiuti e minimizziamo l’impatto sull’ambiente.',
                  fileUrl: '#'
                },
                {
                  code: 'ISO 45001',
                  color: '#EE2430',
                  icon: <HardHat size={48} />,
                  title: 'Salute e sicurezza sul lavoro',
                  text: 'La sicurezza è la nostra priorità. ISO 45001 attesta la gestione dei rischi professionali. Tutto il personale è formato per operare in sicurezza anche in condizioni critiche.',
                  fileUrl: '#'
                }
              ].map((cert, idx) => (
                <FadeIn key={idx} delay={idx * 150} className="group relative overflow-hidden border-r last:border-r-0 border-zinc-100">
                  {/* Hover Color Fill */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-0" 
                    style={{ backgroundColor: cert.color }} 
                  />
                  
                  <div className="relative z-10 p-8 md:p-14 h-full flex flex-col justify-between min-h-[380px] md:min-h-[460px]">
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
                      <p className="text-zinc-500 text-base leading-relaxed group-hover:text-white/90 transition-colors mb-8">
                        {cert.text}
                      </p>
                    </div>

                    <div>
                      <a 
                        href={cert.fileUrl}
                        download
                        onClick={(e) => {
                          if (cert.fileUrl === '#') {
                            e.preventDefault();
                            alert('Il file di certificazione sarà disponibile a breve.');
                          }
                        }}
                        className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest py-4 px-6 border border-zinc-200 text-[#0a0f1a] transition-all duration-300 group-hover:text-white group-hover:border-white/30 hover:!bg-white hover:!text-[#0a0f1a]"
                      >
                        <Download size={16} />
                        <span>Scarica certificato</span>
                      </a>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4.3 ATTESTATI E RICONOSCIMENTI ────────────────────────── */}
        <section className="section-dark py-16 md:py-32 relative overflow-hidden">
          <DecorativePattern />
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#55ABE4] via-[#F0921E] to-[#EE2430]" />
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
                        <h3 className="text-lg font-black text-white mb-2 tracking-tight">{item.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed max-w-lg">{item.text}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
              
              <FadeIn delay={300} className="relative aspect-[4/5] overflow-hidden group shadow-2xl">
                <Parallax offset={40} className="w-full h-full">
                  <Image 
                    src="/images/Trialux 58 copia.jpg" 
                    alt="Ufficio Qualità" 
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="!w-full !h-[120%] object-cover object-center transition-transform duration-1000 group-hover:scale-105" 
                    style={{ top: '-10%', position: 'absolute' }}
                  />
                </Parallax>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-transparent opacity-40" />
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
                  <div className="w-16 h-16 bg-[#F0921E] flex items-center justify-center text-white shrink-0 shadow-lg">
                    <Scale size={32} />
                  </div>
                  <div className="flex-1">
                    <FadeIn effect="mask">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="w-10 h-[2px] bg-[#F0921E]" />
                        <span className="text-[#F0921E] font-bold tracking-[0.15em] uppercase text-xs">Etica Aziendale</span>
                      </div>
                      <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-black text-[#0a0f1a] leading-[1.1] mb-6">
                        Segnalazione di condotte illecite.
                      </h2>
                    </FadeIn>
                    <FadeIn delay={200} effect="mask">
                      <p className="text-zinc-500 text-base leading-relaxed mb-10 max-w-3xl">
                        In linea con la normativa vigente in materia di whistleblowing (D. Lgs. 24/2023), Trialux ha attivato un canale dedicato per la segnalazione riservata di eventuali condotte illecite o irregolari. Il sistema garantisce la massima riservatezza al segnalante e viene gestito in modo indipendente dalla struttura aziendale.
                      </p>
                      <a
                        href="https://trialux.segnalazioni.eu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 px-10 py-5 bg-[#0a0f1a] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#F0921E] transition-all duration-500 group-button"
                      >
                        <span>Accedi alla piattaforma</span>
                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── FINAL CTA (Ignition Hover Banner) ────────────────────── */}
        <section className="relative py-20 lg:py-28 overflow-hidden group cursor-pointer bg-[#0a0f1a]">
          {/* Base Image Background */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/Trialux 135.jpg" 
              alt="Quality Background" 
              fill
              sizes="100vw"
              className="object-cover opacity-30 transition-transform duration-[2s] group-hover:scale-110"
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
                    Insieme, garantiamo <br />
                    <span className="text-white/50 group-hover:text-white transition-colors duration-500">l’eccellenza certificata.</span>
                  </h2>
                </FadeIn>
              </div>

              {/* Action Side */}
              <div className="lg:col-span-4 flex lg:justify-end">
                <FadeIn delay={200}>
                  <Link href="/contatti" className="group relative px-8 py-5 md:px-12 md:py-7 bg-white text-[#0a0f1a] font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-[#0a0f1a] hover:text-white transition-all duration-500 flex items-center justify-between gap-6 shadow-2xl overflow-hidden min-w-[240px] md:min-w-[280px]">
                    <span className="relative z-10">Contattaci</span>
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
