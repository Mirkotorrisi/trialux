import { Header } from '../_components/Header'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

const LinkedinIcon = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function ContattiPage() {
  return (
    <>
      <Header />
      <main className="w-full">
        {/* 7.1 Intestazione pagina */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-zinc-900 border-b border-zinc-800">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-4 block">Contatti</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 max-w-4xl mx-auto text-white">
              Contatti
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-zinc-400">
              Siamo a Biancavilla, in provincia di Catania. Scrivici o chiamaci: ti risponderemo nel più breve tempo possibile.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
              
              <div className="flex flex-col gap-12">
                {/* 7.2 Sede */}
                <div className="bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800">
                  <div className="flex items-center gap-4 mb-6">
                    <MapPin className="text-blue-500" size={32} />
                    <h2 className="text-2xl font-bold">Sede</h2>
                  </div>
                  <p className="text-lg text-zinc-300 mb-6 font-medium">
                    Trialux S.r.l. — Via del Tessitore snc, Biancavilla (CT)
                  </p>
                  <div className="w-full h-64 bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700">
                     <iframe 
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12648.777717462064!2d14.851080300000002!3d37.6322894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313e2f50d173d1f%3A0x6b87640db90cf5a7!2s95033%20Biancavilla%20CT!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit" 
                       width="100%" 
                       height="100%" 
                       style={{border:0}} 
                       allowFullScreen={false} 
                       loading="lazy" 
                       referrerPolicy="no-referrer-when-downgrade"
                     ></iframe>
                  </div>
                </div>

                {/* 7.3 Contatti telefonici */}
                <div className="bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800">
                  <div className="flex items-center gap-4 mb-6">
                    <Phone className="text-blue-500" size={32} />
                    <h2 className="text-2xl font-bold">Recapiti Telefonici</h2>
                  </div>
                  <p className="text-3xl font-extrabold text-blue-400 mb-6">Tel. 095 814 4954</p>
                  <div className="bg-background p-6 rounded-2xl border border-zinc-800">
                    <p className="text-zinc-400 text-sm font-bold uppercase mb-4 tracking-wider">Chiama e seleziona l'interno:</p>
                    <ul className="space-y-3 text-zinc-300">
                      <li className="flex justify-between border-b border-zinc-800/50 pb-2"><span>01</span> <span>Ufficio amministrativo</span></li>
                      <li className="flex justify-between border-b border-zinc-800/50 pb-2"><span>02</span> <span>Ufficio tecnico</span></li>
                      <li className="flex justify-between border-b border-zinc-800/50 pb-2"><span>03</span> <span>Ufficio fatturazione</span></li>
                      <li className="flex justify-between border-b border-zinc-800/50 pb-2"><span>04</span> <span>Ufficio Risorse umane</span></li>
                      <li className="flex justify-between"><span>05</span> <span>Ufficio operativo</span></li>
                    </ul>
                  </div>
                </div>

                {/* 7.4 Contatti email */}
                <div className="bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800">
                  <div className="flex items-center gap-4 mb-6">
                    <Mail className="text-blue-500" size={32} />
                    <h2 className="text-2xl font-bold">Email e PEC</h2>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex flex-col">
                      <span className="text-zinc-500 text-sm">Informazioni generali</span>
                      <a href="mailto:trialuxsrl@gmail.com" className="text-white hover:text-blue-400 transition-colors">trialuxsrl@gmail.com</a>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-zinc-500 text-sm">Ufficio amministrativo e fatturazione</span>
                      <a href="mailto:amministrazione@trialuxsrl.it" className="text-white hover:text-blue-400 transition-colors">amministrazione@trialuxsrl.it</a>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-zinc-500 text-sm">Ufficio tecnico</span>
                      <a href="mailto:ufficiotecnico@trialuxsrl.it" className="text-white hover:text-blue-400 transition-colors">ufficiotecnico@trialuxsrl.it</a>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-zinc-500 text-sm">Risorse umane</span>
                      <a href="mailto:ufficiopersonale@trialuxsrl.it" className="text-white hover:text-blue-400 transition-colors">ufficiopersonale@trialuxsrl.it</a>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-zinc-500 text-sm">Istruttoria lavori</span>
                      <a href="mailto:istruttorialavori@trialuxsrl.it" className="text-white hover:text-blue-400 transition-colors">istruttorialavori@trialuxsrl.it</a>
                    </li>
                    <li className="flex flex-col mt-4 p-4 bg-zinc-800/50 rounded-xl">
                      <span className="text-zinc-400 text-sm font-bold">Posta Elettronica Certificata (PEC)</span>
                      <a href="mailto:trialux@pec.it" className="text-blue-400 font-bold">trialux@pec.it</a>
                    </li>
                  </ul>
                </div>

                {/* 7.5 Social */}
                <div className="bg-[#0A66C2]/10 p-8 rounded-3xl border border-[#0A66C2]/30 flex flex-col items-center text-center">
                  <LinkedinIcon className="text-[#0A66C2] mb-4" size={48} />
                  <p className="text-[#0A66C2] font-medium mb-6">
                    Seguici su LinkedIn per aggiornamenti su cantieri, posizioni aperte e novità aziendali.
                  </p>
                  <a href="https://linkedin.com/company/trialux-srl" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#0A66C2] text-white font-bold rounded-full hover:bg-[#004182] transition-colors">
                    linkedin.com/company/trialux-srl
                  </a>
                </div>

              </div>

              {/* 7.6 Form di contatto */}
              <div>
                <div className="sticky top-32 bg-zinc-900 p-8 md:p-10 rounded-3xl border border-zinc-800 shadow-2xl">
                  <h2 className="text-3xl font-extrabold mb-8">Inviaci un messaggio</h2>
                  <form className="flex flex-col gap-6" action="#">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-zinc-300">Nome e cognome *</label>
                      <input type="text" id="name" required className="bg-background border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Il tuo nome completo" />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-sm font-medium text-zinc-300">Azienda / Ente (opzionale)</label>
                      <input type="text" id="company" className="bg-background border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="La tua azienda" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email *</label>
                        <input type="email" id="email" required className="bg-background border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="La tua email" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-sm font-medium text-zinc-300">Telefono (opzionale)</label>
                        <input type="tel" id="phone" className="bg-background border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Il tuo telefono" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="text-sm font-medium text-zinc-300">Oggetto *</label>
                      <select id="subject" required className="bg-background border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                        <option value="" disabled selected>Seleziona il motivo...</option>
                        <option value="commerciale">Richiesta commerciale</option>
                        <option value="tecniche">Informazioni tecniche</option>
                        <option value="candidatura">Candidatura</option>
                        <option value="altro">Altro</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm font-medium text-zinc-300">Messaggio *</label>
                      <textarea id="message" required rows={5} className="bg-background border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Scrivi il tuo messaggio qui..."></textarea>
                    </div>

                    <div className="flex items-start gap-3 mt-2">
                      <input type="checkbox" id="privacy" required className="mt-1 w-5 h-5 accent-blue-600 bg-background border-zinc-700 rounded focus:ring-blue-500" />
                      <label htmlFor="privacy" className="text-sm text-zinc-400 leading-tight">
                        Acconsento al trattamento dei miei dati personali in conformità alla Privacy Policy per la gestione della richiesta. *
                      </label>
                    </div>

                    <button type="submit" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all mt-4 w-full">
                      Invia messaggio <Send size={18} />
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
