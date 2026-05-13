import { Header } from '../_components/Header'
import { FadeIn } from '../_components/FadeIn'
import { MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react'
import { Parallax } from '../_components/Parallax'

export default function ContattiPage() {
  return (
    <div className="bg-white min-h-screen text-[#0a0f1a] font-sans">
      <Header />

      <main className="w-full">

        {/* ── 6.1 HERO ────────────────────────────────────────────── */}
        <section className="relative w-full flex flex-col justify-end overflow-hidden pb-16 md:pb-32 lg:pb-40 bg-zinc-950" style={{ height: '100dvh', minHeight: '100dvh' }}>
          <div className="absolute inset-0">
            <Parallax offset={80} className="w-full h-full">
              <img
                src="/images/Trialux 19.jpg"
                alt="Contatti Trialux"
                className="w-full h-[120%] object-cover opacity-60"
              />
            </Parallax>
            {/* Top Shadow for Header Visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/80 via-transparent to-transparent h-40" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/70 to-transparent w-full md:w-[60%]" />
          </div>

          <div className="container-wide relative z-10 w-full">
            <FadeIn delay={0} effect="mask">

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.1] mb-6 max-w-3xl">
                Siamo qui per <br/> connetterti.
              </h1>
            </FadeIn>
            <FadeIn delay={200} effect="mask">
              <p className="text-white text-base md:text-xl font-medium max-w-2xl mb-8 leading-relaxed">
                Pronti a rispondere alle vostre esigenze tecniche con soluzioni concrete e tempestive.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── CONTATTI RAPIDI — dark strip ── */}
        <section className="section-dark py-0 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#55ABE4] via-[#F0921E] to-[#EE2430]" />
          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.07]">
              <FadeIn delay={0}>
                <div className="py-12 px-8 lg:px-12 first:pl-6">
                   <div className="text-[#55ABE4] text-xs font-bold tracking-widest uppercase mb-3">Indirizzo</div>
                   <div className="text-white font-black text-xl mb-1">Via del Tessitore snc</div>
                   <div className="text-zinc-500 text-sm">Biancavilla (CT) — Sicilia</div>
                 </div>
               </FadeIn>
              <FadeIn delay={80}>
                <div className="py-12 px-8 lg:px-12">
                   <div className="text-[#F0921E] text-xs font-bold tracking-widest uppercase mb-3">Telefono</div>
                   <a href="tel:0958144954" className="text-white font-black text-xl hover:text-[#55ABE4] transition-colors block mb-1">
                     095 814 4954
                   </a>
                  <div className="text-zinc-500 text-sm">Lun–Ven, 8:30–17:30</div>
                </div>
              </FadeIn>
              <FadeIn delay={160}>
                <div className="py-12 px-8 lg:px-12">
                   <div className="text-[#EE2430] text-xs font-bold tracking-widest uppercase mb-3">Email principale</div>
                   <a href="mailto:trialuxsrl@gmail.com" className="text-white font-black text-base hover:text-[#55ABE4] transition-colors block mb-1 break-all">
                     trialuxsrl@gmail.com
                   </a>
                  <div className="text-zinc-500 text-sm">Per informazioni generali</div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── 6.2 INFO E FORM ────────────────────────────────── */}
        <section className="bg-white py-16 md:py-32">
          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">

              {/* Recapiti */}
              <div className="lg:col-span-5 lg:pr-16">
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-[2px] bg-[#55ABE4]" />
                    <span className="text-[#55ABE4] font-bold tracking-[0.15em] uppercase text-xs">Informazioni</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0a0f1a] leading-[1.1] mb-8">
                    Dove trovarci.
                  </h2>
                </FadeIn>

                <div className="space-y-10">

                  {/* Sede */}
                  <FadeIn delay={100}>
                    <div className="flex items-start gap-5">
                      <div className="w-11 h-11  bg-zinc-100 flex items-center justify-center shrink-0">
                        <MapPin size={20} className="text-[#0a0f1a]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-black mb-2 text-[#0a0f1a] tracking-wide">Sede operativa</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                          Trialux S.r.l.<br />
                          Via del Tessitore snc,<br />
                          Biancavilla (CT)
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                  {/* Telefono */}
                  <FadeIn delay={150}>
                    <div className="flex items-start gap-5">
                      <div className="w-11 h-11  bg-zinc-100 flex items-center justify-center shrink-0">
                        <Phone size={20} className="text-[#0a0f1a]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-black mb-3 text-[#0a0f1a] tracking-wide">Contatti telefonici</h3>
                        <a href="tel:0958144954" className="text-2xl font-black text-[#55ABE4] hover:text-[#0a0f1a] transition-colors mb-4 block">
                          095 814 4954
                        </a>
                        <div className="space-y-2">
                          {[
                            { ext: '01', name: 'Ufficio Amministrativo' },
                            { ext: '02', name: 'Ufficio Tecnico' },
                            { ext: '03', name: 'Ufficio Fatturazione' },
                            { ext: '04', name: 'Risorse Umane' },
                            { ext: '05', name: 'Ufficio Operativo' },
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-zinc-500 text-sm">
                              <span className="w-7 h-7  bg-zinc-100 flex items-center justify-center text-xs font-black text-[#0a0f1a]">{item.ext}</span>
                              <span className="font-medium">{item.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FadeIn>

                  {/* Email */}
                  <FadeIn delay={200}>
                    <div className="flex items-start gap-5">
                      <div className="w-11 h-11  bg-zinc-100 flex items-center justify-center shrink-0">
                        <Mail size={20} className="text-[#0a0f1a]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-black mb-4 text-[#0a0f1a] tracking-wide">Email</h3>
                        <ul className="space-y-3 list-none p-0 m-0">
                          {[
                            { label: 'Informazioni generali', email: 'trialuxsrl@gmail.com' },
                            { label: 'Amministrazione e fatturazione', email: 'amministrazione@trialuxsrl.it' },
                            { label: 'Ufficio tecnico', email: 'ufficiotecnico@trialuxsrl.it' },
                            { label: 'Risorse umane', email: 'ufficiopersonale@trialuxsrl.it' },
                            { label: 'Istruttoria lavori', email: 'istruttorialavori@trialuxsrl.it' },
                            { label: 'PEC', email: 'trialux@pec.it' },
                          ].map((item, idx) => (
                            <li key={idx} className="border-b border-zinc-100 pb-3">
                              <span className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">{item.label}</span>
                              <a href={`mailto:${item.email}`} className="text-[#0a0f1a] text-sm font-semibold hover:text-[#EE2430] transition-colors">
                                {item.email}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FadeIn>

                  {/* LinkedIn */}
                  <FadeIn delay={250}>
                    <div className="flex items-start gap-5">
                      <div className="w-11 h-11  bg-zinc-100 flex items-center justify-center shrink-0">
                        <Globe size={20} className="text-[#0a0f1a]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-black mb-2 text-[#0a0f1a] tracking-wide">LinkedIn</h3>
                        <p className="text-zinc-500 text-sm mb-3">
                          Seguici per aggiornamenti su cantieri, posizioni aperte e novità aziendali.
                        </p>
                        <a
                          href="https://linkedin.com/company/trialux-srl"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#55ABE4] text-sm font-bold hover:text-[#0a0f1a] transition-colors"
                        >
                          linkedin.com/company/trialux-srl <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-7">
                <FadeIn effect="mask" delay={150} className="sticky top-28">
                  <div className="bg-zinc-50 border border-zinc-100 p-8 lg:p-12 relative">
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="w-10 h-[2px] bg-[#EE2430]" />
                        <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-xs">Scrivici</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-black mb-10 text-[#0a0f1a] tracking-tight">Invia una richiesta</h3>
                      <form className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Nome e cognome *</label>
                          <input
                            type="text"
                            id="name"
                            required
                            className="w-full bg-white border border-zinc-200 px-4 py-3 focus:outline-none focus:border-[#55ABE4] transition-colors text-[#0a0f1a] placeholder:text-zinc-400"
                            placeholder="Mario Rossi"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Azienda / Ente <span className="text-zinc-400 font-normal normal-case">(opzionale)</span></label>
                          <input
                            type="text"
                            id="company"
                            className="w-full bg-white border border-zinc-200 px-4 py-3 focus:outline-none focus:border-[#55ABE4] transition-colors text-[#0a0f1a] placeholder:text-zinc-400"
                            placeholder="Nome azienda"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="email" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Email *</label>
                            <input
                              type="email"
                              id="email"
                              required
                              className="w-full bg-white border border-zinc-200 px-4 py-3 focus:outline-none focus:border-[#000080] transition-colors text-[#0a0f1a] placeholder:text-zinc-400"
                              placeholder="mario@esempio.it"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Telefono <span className="text-zinc-400 font-normal normal-case">(opz.)</span></label>
                            <input
                              type="tel"
                              id="phone"
                              className="w-full bg-white border border-zinc-200 px-4 py-3 focus:outline-none focus:border-[#55ABE4] transition-colors text-[#0a0f1a] placeholder:text-zinc-400"
                              placeholder="+39"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Oggetto *</label>
                          <select
                            id="subject"
                            required
                            className="w-full bg-white border border-zinc-200 px-4 py-3 focus:outline-none focus:border-[#55ABE4] transition-colors text-[#0a0f1a] cursor-pointer appearance-none"
                          >
                            <option value="" disabled>Seleziona l'argomento</option>
                            <option value="commerciale">Richiesta commerciale</option>
                            <option value="tecnica">Informazioni tecniche</option>
                            <option value="candidatura">Candidatura</option>
                            <option value="altro">Altro</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Messaggio *</label>
                          <textarea
                            id="message"
                            required
                            rows={4}
                            className="w-full bg-white border border-zinc-200 px-4 py-3 focus:outline-none focus:border-[#55ABE4] transition-colors text-[#0a0f1a] placeholder:text-zinc-400 resize-none"
                            placeholder="Scrivi qui la tua richiesta..."
                          />
                        </div>
                        <div className="flex items-start gap-3">
                          <input
                            id="privacy"
                            type="checkbox"
                            required
                            className="w-4 h-4 mt-1 border-zinc-300 rounded focus:ring-0 checked:bg-[#55ABE4] cursor-pointer"
                          />
                          <label htmlFor="privacy" className="text-sm text-zinc-500 leading-relaxed">
                            Dichiaro di aver letto l'informativa sulla privacy e acconsento al trattamento dei miei dati personali. *
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#0a0f1a] text-white font-bold hover:bg-[#F0921E] transition-colors group"
                        >
                          <span>Invia messaggio</span>
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </form>
                    </div>
                  </div>
                </FadeIn>
              </div>

            </div>
          </div>
        </section>

        {/* ── MAPPA ── */}
        <section className="w-full h-[400px] bg-zinc-200 relative">
          <FadeIn className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.218525032549!2d14.86178347648354!3d37.643329126388435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313e2bbcd1ab251%3A0xe231ab467812558f!2sVia%20del%20Tessitore%2C%2095033%20Biancavilla%20CT!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Sede Trialux"
              className="w-full h-full"
            />
          </FadeIn>
        </section>

      </main>
    </div>
  )
}
