'use client'

import { Header } from '../_components/Header'
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react'
import { FadeIn } from '../_components/FadeIn'

export default function ContattiPage() {
  return (
    <div className="bg-white min-h-screen text-[#1A1A1A] selection:bg-[#F0921E]/20 font-sans">
      <Header />
      
      <main className="w-full relative overflow-hidden">
        {/* Architectural Hero */}
        <section className="relative w-full h-[80vh] min-h-[400px] md:min-h-[300px] md:min-h-[400px] flex items-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img src="https://images.unsplash.com/photo-1557425955-df376b5903c8?q=80&w=2070&auto=format&fit=crop" alt="Contatti" className="w-full h-full object-cover scale-105 grayscale opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-transparent w-full md:w-[80%]" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col justify-center h-full pt-32">
            <FadeIn delay={0}>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-[#F0921E]"></span>
                <span className="text-white font-bold tracking-widest uppercase text-sm">Contatti</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[80px] font-black tracking-tighter mb-6 max-w-5xl text-white leading-[0.95]">
                Siamo a disposizione per <br className="hidden md:block" /> ogni <span className="text-[#F0921E]">richiesta.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl lg:text-2xl text-zinc-300 max-w-3xl font-medium leading-tight">
                Seleziona il reparto di interesse o compila il form per comunicare con il nostro team tecnico o commerciale.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 md:py-12 md:py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-8 md:p-12 md:gap-8 lg:gap-12 lg:gap-24">
              
              {/* Informazioni di contatto (Sinistra) */}
              <div className="lg:col-span-5 space-y-16">
                
                <FadeIn delay={0}>
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-[#1A1A1A] mb-8 tracking-tighter flex items-center gap-4">
                      <MapPin className="text-[#EE2430]" size={32} /> Le nostre sedi
                    </h3>
                    <div className="space-y-8 pl-12 border-l-2 border-zinc-200">
                      <div>
                        <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Sede Legale e Operativa</div>
                        <div className="text-lg md:text-xl lg:text-2xl font-black text-[#1A1A1A] tracking-tighter">Via C. Colombo 3/B</div>
                        <div className="text-sm md:text-base lg:text-lg text-zinc-600 font-medium mt-1">95033 Biancavilla (CT)</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Deposito</div>
                        <div className="text-lg md:text-xl lg:text-2xl font-black text-[#1A1A1A] tracking-tighter">C.da S. Giovanni S.N.</div>
                        <div className="text-sm md:text-base lg:text-lg text-zinc-600 font-medium mt-1">95033 Biancavilla (CT)</div>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={150}>
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-[#1A1A1A] mb-8 tracking-tighter flex items-center gap-4">
                      <Phone className="text-[#55ABE4]" size={32} /> Recapiti e Orari
                    </h3>
                    <div className="grid grid-cols-2 gap-8 pl-12 border-l-2 border-zinc-200">
                      <div>
                        <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Centralino</div>
                        <div className="text-lg md:text-xl lg:text-2xl font-black tracking-tighter">095 8900010</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Orari</div>
                        <div className="text-lg md:text-xl lg:text-2xl font-black tracking-tighter text-[#1A1A1A]">08:30 - 18:30</div>
                        <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest mt-1">LUN - VEN</div>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={300}>
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-[#1A1A1A] mb-8 tracking-tighter flex items-center gap-4">
                      <Mail className="text-[#EE2430]" size={32} /> Recapiti Email
                    </h3>
                    <div className="space-y-4 pl-12 border-l-2 border-zinc-200">
                      <a href="mailto:info@trialux.it" className="flex flex-col group py-3 border-b border-zinc-100">
                        <span className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-1">Generale</span>
                        <span className="font-black text-base md:text-lg lg:text-xl text-[#1A1A1A] group-hover:text-[#EE2430] transition-colors tracking-tighter">info@trialux.it</span>
                      </a>
                      <a href="mailto:amministrazione@trialux.it" className="flex flex-col group py-3 border-b border-zinc-100">
                        <span className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-1">Amministrazione</span>
                        <span className="font-black text-base md:text-lg lg:text-xl text-[#1A1A1A] group-hover:text-[#EE2430] transition-colors tracking-tighter">amministrazione@trialux.it</span>
                      </a>
                      <a href="mailto:tecnico@trialux.it" className="flex flex-col group py-3 border-b border-zinc-100">
                        <span className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-1">Ufficio Tecnico</span>
                        <span className="font-black text-base md:text-lg lg:text-xl text-[#1A1A1A] group-hover:text-[#EE2430] transition-colors tracking-tighter">tecnico@trialux.it</span>
                      </a>
                      <a href="mailto:trialux@pec.it" className="flex flex-col group pt-3">
                        <span className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-1">PEC (Posta Certificata)</span>
                        <span className="font-black text-base md:text-lg lg:text-xl text-[#1A1A1A] group-hover:text-[#EE2430] transition-colors tracking-tighter">trialux@pec.it</span>
                      </a>
                    </div>
                  </div>
                </FadeIn>

              </div>

              {/* Form di contatto (Destra) */}
              <div className="lg:col-span-7">
                <FadeIn delay={200}>
                  <div className="bg-zinc-50 p-6 md:p-6 md:p-8 md:p-8 md:p-12 border border-zinc-200">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-6 tracking-tighter">Modulo di Contatto</h3>
                    <p className="text-zinc-600 font-medium mb-6 lg:mb-12 text-sm md:text-base lg:text-lg ">Compila il modulo sottostante per inoltrare la tua richiesta al dipartimento corretto.</p>
                    
                    <form className="space-y-8">
                      <div className="grid sm:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label htmlFor="nome" className="text-xs font-bold text-zinc-500 tracking-widest uppercase">Nome e Cognome *</label>
                          <input type="text" id="nome" className="w-full bg-white border border-zinc-300 px-6 py-4 text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-zinc-900 transition-all font-medium" required />
                        </div>
                        <div className="space-y-3">
                          <label htmlFor="azienda" className="text-xs font-bold text-zinc-500 tracking-widest uppercase">Azienda</label>
                          <input type="text" id="azienda" className="w-full bg-white border border-zinc-300 px-6 py-4 text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-zinc-900 transition-all font-medium" />
                        </div>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label htmlFor="email" className="text-xs font-bold text-zinc-500 tracking-widest uppercase">Email *</label>
                          <input type="email" id="email" className="w-full bg-white border border-zinc-300 px-6 py-4 text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-zinc-900 transition-all font-medium" required />
                        </div>
                        <div className="space-y-3">
                          <label htmlFor="telefono" className="text-xs font-bold text-zinc-500 tracking-widest uppercase">Telefono *</label>
                          <input type="tel" id="telefono" className="w-full bg-white border border-zinc-300 px-6 py-4 text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-zinc-900 transition-all font-medium" required />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label htmlFor="motivo" className="text-xs font-bold text-zinc-500 tracking-widest uppercase">Dipartimento / Motivo *</label>
                        <select id="motivo" className="w-full bg-white border border-zinc-300 px-6 py-4 text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-zinc-900 transition-all font-medium appearance-none cursor-pointer" required>
                          <option value="">Seleziona un'opzione</option>
                          <option value="commerciale">Ufficio Commerciale</option>
                          <option value="tecnico">Ufficio Tecnico / Assistenza</option>
                          <option value="amministrazione">Ufficio Amministrazione</option>
                          <option value="lavoro">Risorse Umane</option>
                          <option value="altro">Altro</option>
                        </select>
                      </div>

                      <div className="space-y-3">
                        <label htmlFor="messaggio" className="text-xs font-bold text-zinc-500 tracking-widest uppercase">Messaggio *</label>
                        <textarea id="messaggio" rows={6} className="w-full bg-white border border-zinc-300 px-6 py-4 text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-zinc-900 transition-all resize-none font-medium" required></textarea>
                      </div>

                      <div className="flex items-start gap-4 pt-4 border-t border-zinc-200">
                        <input type="checkbox" id="privacy" className="mt-1 w-5 h-5 border-zinc-300 text-[#1A1A1A] focus:ring-zinc-900 cursor-pointer" required />
                        <label htmlFor="privacy" className="text-sm text-zinc-600 leading-relaxed font-medium">
                          Ho letto l'informativa sulla privacy e acconsento al trattamento dei miei dati personali ai sensi del Regolamento UE 2016/679 (GDPR). *
                        </label>
                      </div>

                      <div className="pt-8 flex">
                        <button type="submit" className="inline-flex items-center justify-center gap-4 px-8 py-4 md:px-12 md:py-5 bg-[#F0921E] text-[#1A1A1A] font-bold text-sm md:text-base lg:text-lg hover:bg-[#e67e22] hover:text-white transition-colors duration-300 active:translate-y-1">
                          <span>Invia Richiesta</span>
                          <Send size={20} />
                        </button>
                      </div>
                    </form>
                  </div>
                </FadeIn>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
