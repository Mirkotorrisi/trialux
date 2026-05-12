import { Header } from '../_components/Header'
import { FadeIn } from '../_components/FadeIn'
import { Parallax } from '../_components/Parallax'
import Link from 'next/link'
import { ArrowRight, Award, Users, Target, ShieldCheck } from 'lucide-react'
import { InteractiveOrgChart } from '../_components/OrgChart'
import '../style.css'

export default function ChiSiamoPage() {
  return (
    <div className="bg-white min-h-screen text-[#0A0A0A]">
      <Header />

      <main className="w-full relative">

        {/* ── 1. HERO (Intestazione pagina) ────────────────────────── */}
        <section className="relative w-full h-[80vh] md:h-screen min-h-[500px] md:min-h-[640px] flex flex-col justify-end overflow-hidden pb-16 md:pb-32 lg:pb-40">
          <div className="absolute inset-0">
            <Parallax offset={80} className="w-full h-full">
              <img
                src="/images/Trialux 4.jpg"
                alt="Cantiere Trialux"
                className="w-full h-[120%] object-cover scale-[1.1]"
              />
            </Parallax>
            {/* Top Shadow for Header Visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/80 via-transparent to-transparent h-40" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/70 to-transparent w-full md:w-[60%]" />
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
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#0A0A0A] leading-[1.1] mb-8">
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
                  <img 
                    src="/images/Trialux 5.jpg" 
                    alt="Eccellenza Tecnica" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── 3. IL MARCHIO (Section Dark) ────────────────────────── */}
        <section className="section-dark py-16 md:py-32 border-y border-white/5 relative overflow-hidden">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <FadeIn className="aspect-square bg-zinc-900/50 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                <div className="relative z-10 w-full px-12">
                   <div className="flex items-center justify-center">
                     <img src="/images/logo-white.png" alt="Trialux" className="w-full max-w-[450px] h-auto drop-shadow-2xl" />
                   </div>
                </div>
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
                  <p className="text-white/50 text-base leading-relaxed mb-10">
                    Le tre foglie rappresentano i valori che guidano ogni decisione: <strong className="text-white">unità</strong>, perché il lavoro di squadra è la nostra prima risorsa; <strong className="text-white">crescita</strong>, perché non ci accontentiamo mai del risultato raggiunto; <strong className="text-white">continuità</strong>, perché costruiamo relazioni e infrastrutture pensando al lungo periodo.
                  </p>
                  <div className="border-l-4 border-[#EE2430] pl-6">
                    <p className="text-xl font-bold text-white italic">"Un marchio che non è solo estetica, ma identità."</p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. ORGANIGRAMMA (La nostra struttura) ────────────────────── */}
        <section className="bg-white py-16 md:py-32 border-t border-zinc-100 overflow-hidden">
          <div className="container-wide">
            <div className="max-w-3xl mb-24">
              <FadeIn effect="mask">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-[2px] bg-[#EE2430]" />
                  <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-xs">Organizzazione</span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#0A0A0A] leading-[1.1] mb-6">
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

        {/* ── 5. I NUMERI ────────────────────────────────────────── */}
        <section className="section-data-light py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#55ABE4] via-[#F0921E] to-[#EE2430]" />
          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px] relative z-10">

            {/* Header row — titolo sx, descrizione dx */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
              <FadeIn effect="mask">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-[2px] bg-[#55ABE4]" />
                  <span className="text-[#55ABE4] font-bold tracking-[0.15em] uppercase text-xs">Performance</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-[#0A0A0A] tracking-tight leading-[1.1]">
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
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-zinc-200 border border-zinc-200">
              {[
                { icon: <Target className="text-[#55ABE4]" size={24}/>, num: '2021', label: 'Anno di fondazione' },
                { icon: <Users className="text-[#F0921E]" size={24}/>, num: '+100', label: 'Dipendenti in forza' },
                { icon: <ShieldCheck className="text-[#EE2430]" size={24}/>, num: 'E-Distribuzione', label: 'Cliente principale' },
                { icon: <Award className="text-[#55ABE4]" size={24}/>, num: '3 ISO', label: 'Certificazioni ottenute' },
              ].map((stat, idx) => (
                <FadeIn key={idx} delay={idx * 80}>
                  <div className="p-8 md:p-10 flex flex-col gap-4">
                    <div>{stat.icon}</div>
                    <div className="text-4xl font-black text-[#0A0A0A] leading-none tracking-tighter">{stat.num}</div>
                    <div className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">{stat.label}</div>
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
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0A0A0A] leading-[1.1] mb-8">
                    Il territorio che sosteniamo.
                  </h2>
                </FadeIn>
                <FadeIn delay={200} effect="mask">
                  <p className="text-zinc-500 text-base leading-relaxed mb-8">
                    Trialux crede nel valore del radicamento locale. Per questo sosteniamo due realtà sportive del territorio siciliano: il <strong className="text-[#0A0A0A]">Catania Football Club S.r.l.</strong> e la <strong className="text-[#0A0A0A]">SSD Biancavilla Calcio Academy</strong>. 
                  </p>
                  <p className="text-zinc-500 text-base leading-relaxed mb-10">
                    Un modo concreto di restituire alla comunità parte di ciò che l’azienda riceve ogni giorno lavorando su questo territorio.
                  </p>
                  <div className="flex gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder per loghi sponsor se necessari in futuro */}
                    <span className="text-xs font-bold tracking-widest uppercase">Catania Football Club</span>
                    <span className="text-xs font-bold tracking-widest uppercase">SSD Biancavilla Calcio</span>
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={200} className="aspect-video overflow-hidden group">
                <img 
                  src="/images/Trialux 25.jpg" 
                  alt="Supporto al Territorio" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </FadeIn>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
