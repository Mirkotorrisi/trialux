import { Header } from '../_components/Header'
import { FadeIn } from '../_components/FadeIn'
import { Parallax } from '../_components/Parallax'
import { DecorativePattern } from '../_components/DecorativeArcs'
import Link from 'next/link'
import { ArrowRight, Award, Users, Target, ShieldCheck, FileText, Download, Infinity, TrendingUp } from 'lucide-react'
import { InteractiveOrgChart } from '../_components/OrgChart'
import Image from 'next/image'

export default function ChiSiamoPage() {
  return (
    <div className="bg-white min-h-screen text-[#152238]">
      <Header />

      <main className="w-full relative">

        {/* ── 1. HERO (Intestazione pagina) ────────────────────────── */}
        <section className="relative w-full flex flex-col justify-end pb-16 md:pb-32 lg:pb-40" style={{ height: '100dvh', minHeight: '100dvh' }}>
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
                poster="/images/chisiamoverticale-optimized-poster.webp"
                className="absolute inset-0 w-full h-[120%] object-cover pointer-events-none select-none block md:hidden"
                style={{ transformOrigin: 'center bottom' }}
              >
                <source src="/videos/chisiamoverticale-optimized.mp4" type="video/mp4" />
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
                poster="/images/chisiamo-optimized-poster.webp"
                className="absolute inset-0 w-full h-[120%] object-cover pointer-events-none select-none hidden md:block"
                style={{ transformOrigin: 'center bottom' }}
              >
                <source src="/videos/chisiamo-optimized.mp4" type="video/mp4" />
                Il tuo browser non supporta il tag video.
              </video>
            </Parallax>
            {/* Top Shadow for Header Visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#152238]/80 via-transparent to-transparent h-40" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#152238] via-[#152238]/40 to-transparent" />

          </div>

          <div className="container-wide relative z-10">
            <FadeIn delay={0} effect="mask">

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.1] mb-6 max-w-3xl">
                Chi siamo.
              </h1>
            </FadeIn>
            <FadeIn delay={200} effect="mask">
              <p className="text-white/70 text-base md:text-xl mb-10 max-w-2xl leading-relaxed">
                Un progetto imprenditoriale nato in Sicilia, cresciuto con determinazione.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── 2. LA STORIA ────────────────────────────────────────────── */}
        <section className="bg-white py-16 md:py-32 relative z-10">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 lg:pr-16">
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-[2px] bg-[#55ABE4]" />
                    <span className="text-[#55ABE4] font-bold tracking-[0.15em] uppercase text-xs">La storia</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#152238] leading-[1.1] mb-8">
                    La nostra storia.
                  </h2>
                </FadeIn>
                <FadeIn delay={200} effect="mask">
                  <div className="space-y-6 text-zinc-500 text-sm md:text-base leading-relaxed mb-10 max-w-2xl">
                    <p>
                      Trialux S.r.l. nasce nel 2021 per volontà dell’imprenditore Salvatore Salamone, con un obiettivo chiaro: portare nel settore dell’impiantistica elettrica un modello operativo fondato su qualità, affidabilità e attenzione al territorio.
                    </p>
                    <p>
                      In pochi anni l’azienda ha costruito una struttura solida, assemblando un team di professionisti altamente qualificati e dotandosi di tecnologie e attrezzature all’avanguardia. La crescita è stata costante e misurabile: aumento del fatturato, nuove commesse affidate da enti pubblici e privati, incremento continuo dell’organico.
                    </p>
                    <p>
                      Oggi Trialux è un punto di riferimento riconosciuto nel settore della realizzazione e manutenzione di linee elettriche di media e bassa tensione, con all’attivo cantieri distribuiti sul territorio regionale e una presenza consolidata nelle gare pubbliche.
                    </p>
                  </div>
                </FadeIn>
              </div>
              <FadeIn className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden group">
                  <Image 
                    src="/images/Trialux 9.webp" 
                    alt="Eccellenza Tecnica" 
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── 3. IL MARCHIO (Section Dark) ────────────────────────── */}
        <section className="section-dark py-16 md:py-32 border-y border-white/5 relative overflow-hidden">
          <DecorativePattern />
          <div className="container-wide relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <FadeIn className="flex items-center justify-center">
                <img src="/images/trialux_logo_negativo.svg" alt="Trialux" className="w-full max-w-[450px] h-auto drop-shadow-2xl" />
              </FadeIn>
              <div>
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-10 h-[2px] bg-[#EE2430]" />
                    <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-xs">Il marchio</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8">
                    Il nostro marchio.
                  </h2>
                </FadeIn>
                <FadeIn delay={200} effect="mask">
                  <p className="text-white/50 text-base leading-relaxed mb-6">
                    Il logo di Trialux nasce da un’idea semplice e significativa: tre foglie, tre persone, un’unica direzione. Ideato insieme ai tre figli di Salvatore Salamone, il simbolo racconta il carattere familiare e generazionale dell’azienda, senza rinunciare alla proiezione verso il futuro.
                  </p>
                  <p className="text-white/50 text-base leading-relaxed mb-6">
                    Le tre foglie rappresentano i valori che guidano ogni decisione:
                  </p>
                  <div className="mb-12 flex flex-col gap-10">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-white/50 text-base leading-relaxed m-0">
                        <strong className="text-white text-lg mr-2">Unità:</strong> 
                        perché il lavoro di squadra è la nostra prima risorsa.
                      </p>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Infinity className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-white/50 text-base leading-relaxed m-0">
                        <strong className="text-white text-lg mr-2">Continuità:</strong> 
                        perché costruiamo relazioni e infrastrutture pensando al lungo periodo.
                      </p>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-white/50 text-base leading-relaxed m-0">
                        <strong className="text-white text-lg mr-2">Crescita:</strong> 
                        perché non ci accontentiamo mai del risultato raggiunto.
                      </p>
                    </div>
                  </div>
                  <div className="border-l-4 border-[#EE2430] pl-6">
                    <p className="text-xl font-bold text-white italic">"Un marchio che non è solo estetica, ma identità."</p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. ORGANIGRAMMA (La nostra struttura) ────────────────────── */}
        <section className="bg-white py-16 md:py-32 border-t border-zinc-100">
          <div className="container-wide">
            <div className="max-w-3xl mb-24">
              <FadeIn effect="mask">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-[2px] bg-[#EE2430]" />
                  <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-xs">Organizzazione</span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#152238] leading-[1.1] mb-6">
                  La nostra struttura.
                </h2>
              </FadeIn>
              <FadeIn delay={200} effect="mask">
                <p className="text-zinc-500 text-base leading-relaxed">
                  Trialux è organizzata con una struttura chiara, che garantisce presidio su ogni area operativa: dalla direzione tecnica alla gestione dei cantieri, dall’amministrazione alle risorse umane. Ogni funzione ha un responsabile definito e ruoli precisi, perché la chiarezza interna si traduce in affidabilità verso i clienti e le stazioni appaltanti.
                </p>
              </FadeIn>
            </div>
            
            <FadeIn delay={100}>
              <InteractiveOrgChart />
            </FadeIn>
          </div>
        </section>

        {/* ── 4b. POLITICA AZIENDALE (Certificazioni e Politiche) ───────── */}
        <section className="bg-zinc-50 py-16 md:py-32 border-t border-zinc-100 relative">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              
              {/* Header (Left side on desktop) */}
              <div className="lg:col-span-4">
                <FadeIn effect="mask">
                  <div className="sticky top-32">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-[2px] bg-[#EE2430]" />
                      <span className="font-bold uppercase tracking-[0.15em] text-xs text-[#EE2430]">Trasparenza</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight text-[#152238] mb-6">Politica Aziendale.</h3>
                    <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                      Operiamo nel pieno rispetto dei più alti standard qualitativi, ambientali ed etici. Crediamo nella trasparenza come valore fondante e mettiamo a disposizione i nostri documenti ufficiali di politica aziendale e codice etico.
                    </p>
                  </div>
                </FadeIn>
              </div>

              {/* Downloadable Document (Right side on desktop) */}
              <div className="lg:col-span-8 flex items-center">
                <FadeIn delay={100} className="w-full">
                  <div className="bg-white p-8 md:p-10 border border-zinc-100 hover:border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group w-full">
                    <div className="flex-1">
                      <div className="w-12 h-12 bg-zinc-50 flex items-center justify-center mb-6 group-hover:bg-[#55ABE4]/10 transition-all duration-300">
                        <FileText className="text-[#55ABE4] group-hover:scale-110 transition-transform duration-300" size={24} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-400 mb-2 block">POL-SGI-01</span>
                      <h4 className="text-xl font-black text-[#152238] mb-3 leading-snug">Politica Aziendale Integrata</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed max-w-xl">
                        Il documento ufficiale che definisce la Politica Integrata per la Qualità, Sicurezza sul Lavoro e Tutela Ambientale di Trialux S.r.l. (ISO 9001, ISO 45001, ISO 14001).
                      </p>
                    </div>
                    <div className="w-full md:w-auto shrink-0">
                      <a 
                        href="/documents/ALL1-%20POLITICA.pdf" 
                        download
                        className="tri-btn tri-btn-outline-dark w-full md:w-auto justify-between text-xs"
                      >
                        <span>Scarica PDF</span>
                        <Download size={14} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </FadeIn>
              </div>

            </div>
          </div>
        </section>

        {/* ── 5. I NUMERI ────────────────────────────────────────── */}
        <section className="section-data-light py-16 md:py-24 relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#55ABE4] via-[#F0921E] to-[#EE2430]" />
          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px] relative z-10">

            {/* Header row — titolo sx, descrizione dx */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
              <FadeIn effect="mask">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-[2px] bg-[#55ABE4]" />
                  <span className="text-[#55ABE4] font-bold tracking-[0.15em] uppercase text-xs">I nostri numeri</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-[#152238] tracking-tight leading-[1.1]">
                  Trialux in numeri.
                </h2>
              </FadeIn>
              <FadeIn delay={200} effect="mask" className="max-w-md">
                <p className="text-zinc-600 text-sm leading-relaxed">
                  La crescita di un&apos;azienda si misura nei risultati. Dal 2021 a oggi, ogni indicatore racconta una storia di sviluppo solido e progressivo.
                </p>
              </FadeIn>
            </div>

            {/* Metrics grid — 4 colonne con divisori */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200 border border-zinc-200">
              {[
                { icon: <Target className="text-[#55ABE4]" size={24}/>, num: '2021', label: 'Anno di fondazione' },
                { icon: <Users className="text-[#F0921E]" size={24}/>, num: '+100', label: 'Dipendenti in forza' },
                { icon: <Award className="text-[#55ABE4]" size={24}/>, num: '3 ISO', label: 'Certificazioni ottenute' },
              ].map((stat, idx) => (
                <FadeIn key={idx} delay={idx * 80}>
                  <div className="p-8 md:p-10 flex flex-col items-center text-center gap-4 bg-white">
                    <div className="mb-2">{stat.icon}</div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#152238] leading-none tracking-tighter">{stat.num}</div>
                    <div className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-widest font-bold max-w-[140px] mx-auto">{stat.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Closing note */}
            <FadeIn delay={300} className="max-w-4xl mx-auto pt-12 mt-12 border-t border-zinc-200">
              <p className="text-zinc-500 text-sm text-center leading-relaxed italic">
                Il team è composto da figure tecniche specializzate nelle principali operazioni su impianti elettrici: capisquadra, tirafili, giuntisti, cabinisti, operatori lavori sotto tensione e operatori di mezzi speciali. Tutto il personale dispone delle certificazioni di sicurezza richieste per operare in ambienti ad alto rischio.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── 6. SPONSORIZZAZIONI (Il territorio che sosteniamo) ────────── */}
        <section className="bg-white py-16 md:py-32">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-[2px] bg-[#EE2430]" />
                    <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-xs">Impegno Sociale</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#152238] leading-[1.1] mb-8">
                    Il territorio che sosteniamo.
                  </h2>
                </FadeIn>
                <FadeIn delay={200} effect="mask">
                  <p className="text-zinc-500 text-base leading-relaxed mb-8">
                    Trialux crede nel valore del radicamento locale. Per questo sosteniamo due realtà sportive del territorio siciliano: il <strong className="text-[#152238]">Catania Football Club S.r.l.</strong> e la <strong className="text-[#152238]">SSD Biancavilla Calcio Academy</strong>. 
                  </p>
                  <p className="text-zinc-500 text-base leading-relaxed">
                    Un modo concreto di restituire alla comunità parte di ciò che l’azienda riceve ogni giorno lavorando su questo territorio.
                  </p>
                </FadeIn>
              </div>
              <FadeIn delay={200} className="flex flex-col sm:flex-row items-center justify-center w-full gap-8">
                {/* Catania Football Club Logo Slot */}
                <div className="flex items-center justify-center group w-full sm:w-1/2">
                  <Image src="/images/Logo_CATANIA_FC.svg" alt="Catania Football Club" width={240} height={100} className="object-contain transition-transform duration-500 group-hover:scale-110" />
                </div>

                <div className="w-full h-[1px] sm:w-[1px] sm:h-24 bg-zinc-200 shrink-0"></div>

                {/* SSD Biancavilla Calcio Logo Slot */}
                <div className="flex items-center justify-center group w-full sm:w-1/2">
                  <Image src="/images/biancavillalogo.svg" alt="SSD Biancavilla Calcio" width={240} height={100} className="object-contain transition-transform duration-500 group-hover:scale-110" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
