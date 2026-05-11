import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import { Header } from './_components/Header'
import { FadeIn } from './_components/FadeIn'
import './style.css'
import { ArrowRight } from 'lucide-react'

export default async function HomePage() {
  const payload = await getPayload({ config })

  return (
    <div className="bg-white min-h-screen text-[#1A1A1A] selection:bg-[#55ABE4]/30 font-sans">
      <Header />
      
      <main className="w-full relative">
        
        {/* 1.1 Architectural Hero Video (B2B Style) */}
        <section className="relative w-full h-screen min-h-[300px] md:min-h-[400px] md:min-h-[700px] flex items-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover scale-105"
              poster="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
            >
              <source src="https://player.vimeo.com/external/409028882.sd.mp4?s=d0db5f5539eb87e8f541f6e2f1f58a3ee2de6e89&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            </video>
            
            {/* Absolute guarantee of readability: solid heavy gradient on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent w-full md:w-[80%]" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col justify-center h-full pt-32">
            <FadeIn delay={0}>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-[#55ABE4]"></span>
                <span className="text-white font-bold tracking-widest uppercase text-sm">Trialux S.r.l.</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-black tracking-tighter mb-8 max-w-5xl text-white leading-[0.95]">
                L’energia che <br /> muove il territorio.
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-base md:text-lg lg:text-xl text-zinc-300 mb-6 lg:mb-12 max-w-2xl font-medium leading-relaxed">
                Costruiamo e gestiamo reti elettriche di media e bassa tensione per enti pubblici, grandi industrie e gestori di rete. Massima affidabilità, esecuzione a regola d'arte.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link href="/servizi" className="group inline-flex justify-center items-center gap-4 px-6 py-3 md:px-10 md:py-5 bg-[#55ABE4] text-white font-bold text-sm md:text-base lg:text-lg hover:bg-[#2980b9] transition-all w-full sm:w-auto">
                  <span>Esplora i Servizi</span>
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contatti" className="group inline-flex justify-center items-center gap-4 px-6 py-3 md:px-10 md:py-5 bg-transparent border-2 border-white text-white font-bold text-sm md:text-base lg:text-lg hover:bg-white hover:text-[#1A1A1A] transition-all w-full sm:w-auto">
                  <span>Contatta Ufficio Tecnico</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 1.2 Chi Siamo (Engineering Split) */}
        <section className="bg-zinc-50 py-16 md:py-12 md:py-20 relative overflow-hidden border-b border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-stretch gap-8 md:p-12">
              
              <div className="lg:w-1/2 flex flex-col justify-center">
                <FadeIn>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="w-12 h-[2px] bg-[#F0921E]"></span>
                    <span className="text-[#1A1A1A] font-bold tracking-widest uppercase text-sm">L'Azienda</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 tracking-tighter leading-tight text-[#1A1A1A]">
                    Un'impresa costruita sulla competenza tecnica.
                  </h2>
                </FadeIn>
                <FadeIn delay={200}>
                  <p className="text-zinc-600 text-base md:text-lg lg:text-xl mb-6 lg:mb-12 leading-relaxed font-medium">
                    Fondata nel 2021, Trialux è cresciuta esponenzialmente diventando un riferimento istituzionale nel settore dell’impiantistica elettrica industriale e di rete nel Sud Italia. Operiamo con oltre 100 professionisti qualificati, mezzi di proprietà e rigorosi protocolli di sicurezza.
                  </p>
                  <Link href="/chi-siamo" className="inline-flex items-center gap-3 text-sm md:text-base lg:text-lg font-bold text-[#55ABE4] group w-fit hover:text-[#2980b9] transition-colors">
                    Leggi la nostra storia aziendale <ArrowRight size={20} className="group-hover:translate-x-2 transition-all" />
                  </Link>
                </FadeIn>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <FadeIn direction="left" delay={300} className="h-full">
                  <div className="relative h-full min-h-[300px] md:min-h-[400px] w-full bg-zinc-200 overflow-hidden group">
                    <img 
                      src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop" 
                      alt="Operatività Trialux" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" 
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* 1.3 Photographic Services Grid (B2B Precision) */}
        <section className="bg-white py-16 md:py-12 md:py-20">
          <div className="container mx-auto px-6 lg:px-12 mb-10 lg:mb-20">
            <FadeIn>
              <div className="flex flex-col lg:flex-row justify-between items-end gap-8 border-b-2 border-[#1A1A1A] pb-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-12 h-[2px] bg-[#EE2430]"></span>
                    <span className="text-[#1A1A1A] font-bold tracking-widest uppercase text-sm">Competenze Core</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tighter max-w-3xl leading-tight">
                    Infrastrutture elettriche chiavi in mano.
                  </h2>
                </div>
                <Link href="/servizi" className="inline-flex items-center gap-3 text-sm md:text-base lg:text-lg font-bold text-[#1A1A1A] hover:text-[#55ABE4] transition-colors shrink-0">
                  Tutti i servizi <ArrowRight size={20} />
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-200 bg-zinc-200">
              {[
                { title: 'Cavi MT/BT', desc: 'Fornitura e posa di cavi sotterranei.', img: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop' },
                { title: 'Linee Aeree', desc: 'Trasmissione su palo e traliccio.', img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop' },
                { title: 'Cabine Elettriche', desc: 'Installazione e trasformazione.', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop' }
              ].map((srv, idx) => (
                <FadeIn key={idx} delay={idx * 150} className="h-full">
                  <Link href="/servizi" className="group relative bg-white block h-full flex flex-col border-r border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img src={srv.img} alt={srv.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-black text-[#1A1A1A] mb-4">{srv.title}</h3>
                      <p className="text-zinc-600 font-medium">{srv.desc}</p>
                      <div className="mt-8 text-[#55ABE4] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight size={24} />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 1.4 Immersive Numbers / E-Distribuzione (Corporate) */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#1A1A1A] py-16 md:py-12 md:py-20">
          <div className="absolute inset-0 w-full h-full">
            <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" alt="Cantiere" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-[#1A1A1A]/80" />
          </div>
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <FadeIn>
              <div className="max-w-4xl mb-6 lg:mb-12 lg:mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-12 h-[2px] bg-[#EE2430]"></span>
                  <span className="text-white font-bold tracking-widest uppercase text-sm">Affidabilità Istituzionale</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tighter">
                  Siamo partner esecutivi di <span className="text-[#55ABE4]">E-Distribuzione</span>. Gestiamo cantieri complessi e operiamo su infrastrutture critiche per il Paese.
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
              <FadeIn delay={100} className="bg-[#1A1A1A] p-6 md:p-6 md:p-8 hover:bg-[#1A1A1A] transition-colors">
                <div className="text-3xl md:text-4xl lg:text-6xl font-black text-[#55ABE4] mb-6">100+</div>
                <div className="text-base md:text-lg lg:text-xl font-bold text-white mb-2">Risorse interne</div>
                <p className="text-zinc-500 font-medium">Personale specializzato, costantemente formato.</p>
              </FadeIn>
              <FadeIn delay={200} className="bg-[#1A1A1A] p-6 md:p-6 md:p-8 hover:bg-[#1A1A1A] transition-colors">
                <div className="text-3xl md:text-4xl lg:text-6xl font-black text-[#EE2430] mb-6">3</div>
                <div className="text-base md:text-lg lg:text-xl font-bold text-white mb-2">Sistemi ISO</div>
                <p className="text-zinc-500 font-medium">Qualità, Ambiente e Sicurezza certificati.</p>
              </FadeIn>
              <FadeIn delay={300} className="bg-[#1A1A1A] p-6 md:p-6 md:p-8 hover:bg-[#1A1A1A] transition-colors">
                <div className="text-3xl md:text-4xl lg:text-6xl font-black text-[#F0921E] mb-6">★★</div>
                <div className="text-base md:text-lg lg:text-xl font-bold text-white mb-2">Rating AGCM</div>
                <p className="text-zinc-500 font-medium">Rating di legalità e assoluta trasparenza.</p>
              </FadeIn>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
