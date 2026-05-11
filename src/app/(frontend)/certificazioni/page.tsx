import { Header } from '../_components/Header'
import { ShieldCheck, CheckCircle2, Award, Star, FileText, AlertTriangle, ArrowRight } from 'lucide-react'
import { FadeIn } from '../_components/FadeIn'

export default function CertificazioniPage() {
  return (
    <div className="bg-white min-h-screen text-[#1A1A1A] selection:bg-emerald-500/20 font-sans">
      <Header />
      
      <main className="w-full relative overflow-hidden">
        {/* Architectural Hero */}
        <section className="relative w-full h-[80vh] min-h-[400px] md:min-h-[300px] md:min-h-[400px] flex items-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" alt="Qualità e Certificazioni" className="w-full h-full object-cover scale-105 grayscale opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-transparent w-full md:w-[80%]" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col justify-center h-full pt-32">
            <FadeIn delay={0}>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-[#EE2430]"></span>
                <span className="text-white font-bold tracking-widest uppercase text-sm">Qualità e Certificazioni</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[80px] font-black tracking-tighter mb-6 max-w-5xl text-white leading-[0.95]">
                La qualità è un <br /> <span className="text-[#EE2430]">fatto certificato.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl lg:text-2xl text-zinc-300 max-w-3xl font-medium leading-tight">
                Operiamo con sistemi di gestione certificati a livello internazionale. Le nostre certificazioni rappresentano una garanzia concreta.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Certificazioni ISO - Sharp B2B Style */}
        <section className="py-16 md:py-12 md:py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="max-w-4xl mb-8 lg:mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-[2px] bg-[#EE2430]"></span>
                  <span className="text-[#1A1A1A] font-bold tracking-widest uppercase text-sm">Sistemi di Gestione ISO</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tighter">Standard internazionali applicati ad ogni cantiere.</h2>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200 mb-8 lg:mb-16 lg:mb-32">
              <FadeIn delay={100} className="h-full">
                <div className="bg-white p-6 md:p-6 md:p-8 hover:bg-zinc-50 transition-colors group flex flex-col h-full border-r border-b border-zinc-200">
                  <div className="flex items-center gap-6 border-b-2 border-[#1A1A1A] pb-8 mb-8">
                    <CheckCircle2 size={40} className="shrink-0 text-[#1A1A1A]" />
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A1A1A] tracking-tighter">ISO 9001</h3>
                  </div>
                  <div className="text-sm text-[#EE2430] font-bold uppercase tracking-widest mb-4">Qualità</div>
                  <p className="text-sm md:text-base lg:text-lg text-zinc-600 font-medium leading-relaxed">
                    Sistema di gestione per la qualità conforme allo standard internazionale. Processi documentati e approccio sistematico al miglioramento continuo.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={200} className="h-full">
                <div className="bg-white p-6 md:p-6 md:p-8 hover:bg-zinc-50 transition-colors group flex flex-col h-full border-r border-b border-zinc-200">
                  <div className="flex items-center gap-6 border-b-2 border-[#1A1A1A] pb-8 mb-8">
                    <CheckCircle2 size={40} className="shrink-0 text-[#1A1A1A]" />
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A1A1A] tracking-tighter">ISO 14001</h3>
                  </div>
                  <div className="text-sm text-[#EE2430] font-bold uppercase tracking-widest mb-4">Ambiente</div>
                  <p className="text-sm md:text-base lg:text-lg text-zinc-600 font-medium leading-relaxed">
                    Impegno nella gestione responsabile degli impatti ambientali. Monitoraggio dei consumi e procedure operative sostenibili.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={300} className="h-full">
                <div className="bg-white p-6 md:p-6 md:p-8 hover:bg-zinc-50 transition-colors group flex flex-col h-full border-r border-b border-zinc-200">
                  <div className="flex items-center gap-6 border-b-2 border-[#1A1A1A] pb-8 mb-8">
                    <CheckCircle2 size={40} className="shrink-0 text-[#1A1A1A]" />
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A1A1A] tracking-tighter">ISO 45001</h3>
                  </div>
                  <div className="text-sm text-[#EE2430] font-bold uppercase tracking-widest mb-4">Sicurezza</div>
                  <p className="text-sm md:text-base lg:text-lg text-zinc-600 font-medium leading-relaxed">
                    Sistema strutturato per l’identificazione e gestione dei rischi professionali. Massima priorità alla salute dei lavoratori.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Attestati */}
            <div className="grid lg:grid-cols-2 gap-8 md:p-12">
              <FadeIn delay={0}>
                <div className="bg-[#1A1A1A] text-white p-6 md:p-6 md:p-8 lg:p-8 md:p-12 h-full flex flex-col justify-center border-l-4 border-[#F0921E]">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-8 flex items-center gap-4 tracking-tighter">
                    Rating di legalità
                    <span className="text-[#F0921E] flex gap-1"><Star size={24} fill="currentColor" /><Star size={24} fill="currentColor" /></span>
                  </h3>
                  <p className="text-zinc-400 font-medium leading-relaxed text-base md:text-lg lg:text-xl max-w-lg">
                    Rilasciato dall’AGCM con punteggio di due stelle. Certifica la trasparenza nella gestione aziendale e il rispetto dei requisiti etici, fiscali e normativi. Un vantaggio concreto per gli appalti pubblici.
                  </p>
                </div>
              </FadeIn>
              
              <div className="flex flex-col gap-8 h-full justify-center">
                <FadeIn delay={150}>
                  <div className="border-b-2 border-zinc-200 pb-8">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-[#1A1A1A] mb-4 tracking-tighter flex items-center gap-3">
                      <FileText className="text-[#EE2430]" size={32} /> Rating di Sostenibilità
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl text-zinc-600 font-medium leading-relaxed">
                      Integrazione di criteri ESG nei processi aziendali. Un requisito sempre più determinante nelle grandi gare.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={300}>
                  <div className="pb-8">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-[#1A1A1A] mb-4 tracking-tighter flex items-center gap-3">
                      <ShieldCheck className="text-[#55ABE4]" size={32} /> White List Prefettura
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl text-zinc-600 font-medium leading-relaxed">
                      Iscrizione all'elenco dei fornitori non soggetti a tentativi di infiltrazione mafiosa.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>

          </div>
        </section>

        {/* Whistleblowing */}
        <section className="py-16 md:py-12 md:py-20 bg-zinc-100 border-t border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="bg-white p-8 lg:p-8 md:p-12 border border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-6 md:p-6 md:p-8">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4 mb-6">
                    <AlertTriangle size={24} className="text-[#EE2430]" />
                    <span className="text-[#EE2430] font-bold tracking-widest uppercase text-sm">Whistleblowing</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A1A1A] mb-6 tracking-tighter">Piattaforma di Segnalazione</h2>
                  <p className="text-zinc-600 text-base md:text-lg lg:text-xl font-medium leading-relaxed">
                    In linea con la normativa vigente (D. Lgs. 24/2023), Trialux ha attivato un canale per la segnalazione riservata di illeciti, gestito in modo indipendente e confidenziale.
                  </p>
                </div>
                <div className="shrink-0">
                  <a href="https://trialux.segnalazioni.eu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 px-6 py-3 md:px-10 md:py-5 bg-[#EE2430] text-white font-bold text-sm md:text-base lg:text-lg hover:bg-red-800 transition-colors">
                    <span>Accedi alla piattaforma</span>
                    <ArrowRight size={24} />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
    </div>
  )
}
