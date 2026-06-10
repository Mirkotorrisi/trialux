import { Header } from '../_components/Header'
import { FadeIn } from '../_components/FadeIn'
import { MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react'
import { Parallax } from '../_components/Parallax'
import Image from 'next/image'
import { ContactForm } from './ContactForm'

export default function ContattiPage() {
  return (
    <div className="bg-white min-h-screen text-[#152238] font-sans">
      <Header />

      <main className="w-full">
        {/* ── 6.1 HERO ────────────────────────────────────────────── */}
        <section
          className="relative w-full flex flex-col justify-end overflow-hidden pb-16 md:pb-32 lg:pb-40 bg-zinc-950"
          style={{ height: '100dvh', minHeight: '100dvh' }}
        >
          <div className="absolute inset-0">
            <Parallax offset={80} className="w-full h-full">
              <Image
                src="/images/Trialux 35.webp"
                alt="Contatti Trialux"
                fill
                priority
                sizes="100vw"
                className="!w-full !h-[120%] object-cover opacity-60"
              />
            </Parallax>
            {/* Top Shadow for Header Visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#152238]/80 via-transparent to-transparent h-40" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#152238] via-[#152238]/40 to-transparent" />
          </div>

          <div className="container-wide relative z-10 w-full">
            <FadeIn delay={0} effect="mask">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.1] mb-6 max-w-3xl">
                Siamo qui per <br /> connetterti.
              </h1>
            </FadeIn>
            <FadeIn delay={200} effect="mask">
              <p className="text-white text-base md:text-xl font-medium max-w-2xl mb-8 leading-relaxed">
                Pronti a rispondere alle vostre esigenze tecniche con soluzioni concrete e
                tempestive.
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
                  <div className="text-[#55ABE4] text-xs font-bold tracking-widest uppercase mb-3">
                    Indirizzo
                  </div>
                  <div className="text-white font-black text-xl mb-1">Via del Tessitore snc</div>
                  <div className="text-zinc-500 text-sm">Biancavilla (CT) — Sicilia</div>
                </div>
              </FadeIn>
              <FadeIn delay={80}>
                <div className="py-12 px-8 lg:px-12">
                  <div className="text-[#F0921E] text-xs font-bold tracking-widest uppercase mb-3">
                    Telefono
                  </div>
                  <a
                    href="tel:0958144954"
                    className="text-white font-black text-xl hover:text-[#55ABE4] transition-colors block mb-1"
                  >
                    095 814 4954
                  </a>
                  <div className="text-zinc-500 text-sm">Lun–Ven, 8:30–17:30</div>
                </div>
              </FadeIn>
              <FadeIn delay={160}>
                <div className="py-12 px-8 lg:px-12">
                  <div className="text-[#EE2430] text-xs font-bold tracking-widest uppercase mb-3">
                    Email principale
                  </div>
                  <a
                    href="mailto:info@trialuxsrl.it"
                    className="text-white font-black text-base hover:text-[#55ABE4] transition-colors block mb-1 break-all"
                  >
                    info@trialuxsrl.it
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
                    <span className="text-[#55ABE4] font-bold tracking-[0.15em] uppercase text-xs">
                      Informazioni
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#152238] leading-[1.1] mb-8">
                    Dove trovarci.
                  </h2>
                </FadeIn>

                <div className="space-y-10">
                  {/* Sede */}
                  <FadeIn delay={100}>
                    <div className="flex items-start gap-5">
                      <div className="w-11 h-11  bg-zinc-100 flex items-center justify-center shrink-0">
                        <MapPin size={20} className="text-[#152238]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-black mb-2 text-[#152238] tracking-wide">
                          Sede operativa
                        </h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                          Trialux S.r.l.
                          <br />
                          Via del Tessitore snc,
                          <br />
                          Biancavilla (CT)
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                  {/* Telefono */}
                  <FadeIn delay={150}>
                    <div className="flex items-start gap-5">
                      <div className="w-11 h-11  bg-zinc-100 flex items-center justify-center shrink-0">
                        <Phone size={20} className="text-[#152238]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-black mb-3 text-[#152238] tracking-wide">
                          Contatti telefonici
                        </h3>
                        <a
                          href="tel:0958144954"
                          className="text-2xl font-black text-[#55ABE4] hover:text-[#152238] transition-colors mb-4 block"
                        >
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
                            <div
                              key={idx}
                              className="flex items-center gap-3 text-zinc-500 text-sm"
                            >
                              <span className="w-7 h-7  bg-zinc-100 flex items-center justify-center text-xs font-black text-[#152238]">
                                {item.ext}
                              </span>
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
                        <Mail size={20} className="text-[#152238]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-black mb-4 text-[#152238] tracking-wide">
                          Email
                        </h3>
                        <ul className="space-y-3 list-none p-0 m-0">
                          {[
                            { label: 'Informazioni generali', email: 'info@trialuxsrl.it' },
                            {
                              label: 'Amministrazione e fatturazione',
                              email: 'amministrazione@trialuxsrl.it',
                            },
                            { label: 'Ufficio tecnico', email: 'ufficiotecnico@trialuxsrl.it' },
                            { label: 'Risorse umane', email: 'ufficiopersonale@trialuxsrl.it' },
                            {
                              label: 'Istruttoria lavori',
                              email: 'istruttorialavori@trialuxsrl.it',
                            },
                            { label: 'PEC', email: 'trialux@pec.it' },
                          ].map((item, idx) => (
                            <li key={idx} className="border-b border-zinc-100 pb-3">
                              <span className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">
                                {item.label}
                              </span>
                              <a
                                href={`mailto:${item.email}`}
                                className="text-[#152238] text-sm font-semibold hover:text-[#EE2430] transition-colors"
                              >
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
                        <Globe size={20} className="text-[#152238]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-black mb-2 text-[#152238] tracking-wide">
                          LinkedIn
                        </h3>
                        <p className="text-zinc-500 text-sm mb-3">
                          Seguici per aggiornamenti su cantieri, posizioni aperte e novità
                          aziendali.
                        </p>
                        <a
                          href="https://linkedin.com/company/trialux-srl"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#55ABE4] text-sm font-bold hover:text-[#152238] transition-colors"
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
                  <ContactForm />
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
