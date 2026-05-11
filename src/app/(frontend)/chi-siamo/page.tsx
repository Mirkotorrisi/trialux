import { Header } from '../_components/Header'
import { Target, Eye, ArrowRight } from 'lucide-react'
import { FadeIn } from '../_components/FadeIn'
import Link from 'next/link'

export default function ChiSiamoPage() {
  return (
    <div className="bg-white min-h-screen text-[#1A1A1A] selection:bg-blue-500/20 font-sans">
      <Header />
      
      <main className="w-full relative overflow-hidden">
        {/* Architectural Hero */}
        <section className="relative w-full h-[80vh] min-h-[400px] md:min-h-[300px] md:min-h-[400px] flex items-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Chi siamo" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-transparent w-full md:w-[80%]" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col justify-center h-full pt-32">
            <FadeIn delay={0}>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-[#F0921E]"></span>
                <span className="text-white font-bold tracking-widest uppercase text-sm">Chi Siamo</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[80px] font-black tracking-tighter mb-6 max-w-5xl text-white leading-[0.95]">
                Il valore delle <span className="text-[#EE2430]">reti</span>,<br /> la forza delle persone.
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl lg:text-2xl text-zinc-300 max-w-3xl font-medium leading-tight">
                Dalla fondazione a oggi, Trialux è cresciuta investendo su due pilastri: la competenza tecnica e l'affidabilità.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* La nostra storia - B2B Split */}
        <section className="bg-white py-16 md:py-12 md:py-20 border-b border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-stretch border border-zinc-200">
              
              <div className="lg:w-1/2 p-8 md:p-8 md:p-12 bg-white flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-zinc-200">
                <FadeIn>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 tracking-tighter leading-tight text-[#1A1A1A]">
                    Dalle origini alla leadership regionale.
                  </h2>
                </FadeIn>
                <FadeIn delay={200}>
                  <div className="space-y-6 text-base md:text-lg lg:text-xl text-zinc-600 font-medium leading-relaxed">
                    <p>
                      Nata nel 2021 dall'intuizione di Salvatore Salamone, Trialux ha iniziato il suo percorso come ditta esecutrice in ambito elettrico. Fin dai primi cantieri, ci siamo distinti per una precisione esecutiva non comune e per il rispetto assoluto delle tempistiche.
                    </p>
                    <p>
                      Queste caratteristiche ci hanno permesso di conquistare rapidamente la fiducia dei principali operatori di rete nazionali, portandoci in pochi anni a strutturarci come una delle realtà più solide e attrezzate del Sud Italia.
                    </p>
                  </div>
                </FadeIn>
              </div>
              
              <div className="lg:w-1/2 w-full min-h-[300px] md:min-h-[400px] relative bg-zinc-100 overflow-hidden">
                <FadeIn direction="left" delay={300} className="h-full w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                    alt="Operatore Trialux" 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" 
                  />
                </FadeIn>
              </div>
              
            </div>
          </div>
        </section>

        {/* Mission e Vision - Sharp Blocks */}
        <section className="py-16 md:py-12 md:py-20 bg-zinc-50">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
              <FadeIn delay={0} className="h-full">
                <div className="bg-white p-8 lg:p-8 md:p-12 relative overflow-hidden group h-full">
                  <div className="w-16 h-16 bg-[#55ABE4] text-white flex items-center justify-center mb-6 lg:mb-12">
                    <Target size={32} />
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A1A1A] mb-8 tracking-tighter">La nostra Mission</h3>
                  <p className="text-base md:text-lg lg:text-xl text-zinc-600 font-medium leading-relaxed">
                    Costruire e manutenere infrastrutture elettriche sicure, efficienti e durevoli. Forniamo un servizio "chiavi in mano" garantendo massimi standard di qualità e totale tutela della salute dei nostri lavoratori.
                  </p>
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-50 -translate-y-16 translate-x-16 rotate-45 border-b border-zinc-200" />
                </div>
              </FadeIn>
              
              <FadeIn delay={200} className="h-full">
                <div className="bg-[#1A1A1A] text-white p-8 lg:p-8 md:p-12 relative overflow-hidden group h-full">
                  <div className="w-16 h-16 bg-[#F0921E] text-[#1A1A1A] flex items-center justify-center mb-6 lg:mb-12">
                    <Eye size={32} />
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-8 tracking-tighter">La nostra Vision</h3>
                  <p className="text-base md:text-lg lg:text-xl text-zinc-400 font-medium leading-relaxed">
                    Essere il punto di riferimento in Italia per la modernizzazione della rete di distribuzione elettrica. Contribuiamo alla transizione energetica, lavorando oggi per l'energia di domani.
                  </p>
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A1A1A] -translate-y-16 translate-x-16 rotate-45 border-b border-zinc-800" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
