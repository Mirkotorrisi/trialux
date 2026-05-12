import { Header } from '../_components/Header'
import { FadeIn } from '../_components/FadeIn'
import { Parallax } from '../_components/Parallax'
import { DecorativePattern, DecorativeArc } from '../_components/DecorativeArcs'
import Link from 'next/link'
import { ArrowRight, Zap, Radio, Building2, Battery, Hammer, Tractor, Shovel, HardHat } from 'lucide-react'
import '../style.css'

const services = [
  {
    cat: 'Cavi MT/BT sotterranei',
    title: 'Fornitura e posa di cavi sotterranei',
    desc: 'Progettiamo e realizziamo il posizionamento di cavi di media e bassa tensione interrati, comprese le operazioni di giunzione e terminazione. Lavoriamo con materiali di prima qualità e rispettiamo le normative tecniche vigenti per garantire impianti duraturi e sicuri.',
    img: '/images/Trialux 7.jpg',
    icon: <Zap size={32} className="text-[#55ABE4]" />,
    isDark: false
  },
  {
    cat: 'Linee aeree MT/BT',
    title: 'Linee aeree su palo e su traliccio',
    desc: 'Realizziamo linee aeree di media e bassa tensione, sia su palo che su traliccio, per la trasmissione e distribuzione di energia elettrica. Gestiamo l\'intera filiera operativa: progettazione del tracciato, fornitura dei materiali, installazione e collaudo.',
    img: '/images/Trialux 8.jpg',
    icon: <Radio size={32} className="text-[#55ABE4]" />,
    isDark: true
  },
  {
    cat: 'Cabine secondarie MT/BT',
    title: 'Installazione di cabine di trasformazione',
    desc: 'Forniamo e installiamo cabine secondarie di media e bassa tensione per la distribuzione locale dell\'energia. Le nostre squadre sono qualificate per operare su impianti in media tensione e garantiscono esecuzioni a regola d\'arte.',
    img: '/images/Trialux 9.jpg',
    icon: <Building2 size={32} className="text-[#55ABE4]" />,
    isDark: false
  },
  {
    cat: 'Gruppi elettrogeni temporanei',
    title: 'Alimentazione temporanea di cantiere e emergenza',
    desc: 'Forniamo e installiamo in via temporanea gruppi elettrogeni per garantire la continuità di alimentazione durante interventi sulla rete o in situazioni di emergenza.',
    img: '/images/Trialux 10.jpg',
    icon: <Battery size={32} className="text-[#55ABE4]" />,
    isDark: true
  },
  {
    cat: 'Scavi di trincea',
    title: 'Scavi con escavatori per la posa di cavi interrati',
    desc: 'Disponiamo di mezzi propri per l\'esecuzione di scavi di trincea necessari alla posa di cavi sotterranei. Operiamo in ambiente urbano ed extraurbano, coordinandoci con le autorità competenti.',
    img: '/images/Trialux 11.jpg',
    icon: <Shovel size={32} className="text-[#55ABE4]" />,
    isDark: false
  },
  {
    cat: 'Opere murarie',
    title: 'Opere edili a supporto degli impianti elettrici',
    desc: 'Eseguiamo le opere murarie necessarie alla realizzazione e protezione degli impianti: basamenti per cabine, tramezzi tecnici, chiusure e finiture. Una competenza complementare che ci permette di offrire un servizio realmente chiavi in mano.',
    img: '/images/Trialux 12.jpg',
    icon: <Hammer size={32} className="text-[#55ABE4]" />,
    isDark: true
  }
]

export default function ServiziPage() {
  return (
    <div className="bg-white min-h-screen text-[#0a0f1a]">
      <Header />

      <main className="w-full">

        {/* ── HERO ────────────────────────────────────────────────── */}
        <section className="relative w-full h-[80vh] md:h-screen min-h-[500px] md:min-h-[640px] flex flex-col justify-end overflow-hidden pb-16 md:pb-32 lg:pb-40 bg-zinc-950">
          <div className="absolute inset-0">
            <Parallax offset={60} className="w-full h-full">
              <img
                src="/images/Trialux 6.jpg"
                alt="Servizi Trialux"
                className="w-full h-[120%] object-cover opacity-60"
              />
            </Parallax>
            {/* Top Shadow for Header Visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/80 via-transparent to-transparent h-40" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/70 to-transparent w-full md:w-[60%]" />
          </div>

          <div className="container-wide relative z-10">
            <FadeIn delay={0} effect="mask">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.1] mb-6 max-w-3xl">
                I nostri servizi.
              </h1>
            </FadeIn>
            <FadeIn delay={200} effect="mask">
              <p className="text-white/70 text-base md:text-xl max-w-2xl leading-relaxed">
                Soluzioni complete per infrastrutture elettriche di media e bassa tensione.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── SERVICES SECTIONS (Equal hierarchy) ─────────────────── */}
        {services.map((srv, idx) => (
          <section 
            key={idx} 
            className={`py-20 md:py-32 border-b border-zinc-100 relative overflow-hidden ${srv.isDark ? 'section-dark' : 'bg-white'}`}
          >
            {/* Variations of Decorative Patterns for Dark Sections */}
            {srv.isDark && idx === 1 && <DecorativePattern />}
            {srv.isDark && idx === 3 && (
              <>
                <DecorativeArc className="-top-32 -left-32 md:-top-64 md:-left-64" size={800} rotation={210} color="#55ABE4" opacity={0.02} />
                <DecorativeArc className="-bottom-32 -right-32 md:-bottom-64 md:-right-64" size={1000} rotation={30} color="#55ABE4" opacity={0.03} />
              </>
            )}
            {srv.isDark && idx === 5 && (
              <>
                <DecorativeArc className="-top-48 -right-64" size={1200} rotation={-30} color="#55ABE4" opacity={0.015} />
                <DecorativeArc className="-bottom-64 -left-64" size={1000} rotation={150} color="#55ABE4" opacity={0.02} />
              </>
            )}

            <div className="container-wide relative z-10">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Content */}
                <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <FadeIn effect="mask">
                    <div className="mb-6">{srv.icon}</div>
                    <span className={`text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block ${srv.isDark ? 'text-[#55ABE4]' : 'text-[#55ABE4]'}`}>
                      {srv.cat}
                    </span>
                    <h2 className={`text-3xl md:text-5xl font-black tracking-tighter leading-[1.1] mb-6 ${srv.isDark ? 'text-white' : 'text-[#0a0f1a]'}`}>
                      {srv.title}
                    </h2>
                  </FadeIn>
                  <FadeIn delay={200} effect="mask">
                    <p className={`text-sm md:text-base leading-relaxed mb-10 max-w-lg ${srv.isDark ? 'text-white/60' : 'text-zinc-500'}`}>
                      {srv.desc}
                    </p>
                    <Link href="/contatti" className={`tri-btn ${srv.isDark ? 'tri-btn-outline' : 'tri-btn-outline-dark'} px-8 py-4 text-[11px]`}>
                      Richiedi informazioni
                    </Link>
                  </FadeIn>
                </div>

                <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                  <FadeIn>
                    <div className="aspect-video overflow-hidden group">
                      <img 
                        src={srv.img} 
                        alt={srv.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                    </div>
                  </FadeIn>
                </div>

              </div>
            </div>
          </section>
        ))}

        {/* ── FINAL CTA (Ignition Hover Banner) ────────────────────── */}
        <section className="relative py-20 lg:py-28 overflow-hidden group cursor-pointer bg-[#0a0f1a]">
          {/* Base Image Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/Trialux 21.jpg" 
              alt="Industrial Background" 
              className="w-full h-full object-cover opacity-30 transition-transform duration-[2s] group-hover:scale-110"
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
                    Insieme, accendiamo <br />
                    <span className="text-white/50 group-hover:text-white transition-colors duration-500">il vostro futuro.</span>
                  </h2>
                </FadeIn>
              </div>

              {/* Action Side */}
              <div className="lg:col-span-4 flex lg:justify-end">
                <FadeIn delay={200}>
                  <Link href="/contatti" className="group relative px-8 py-5 md:px-12 md:py-7 bg-white text-[#0a0f1a] font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-[#0a0f1a] hover:text-white transition-all duration-500 flex items-center justify-between gap-6 shadow-2xl overflow-hidden min-w-[240px] md:min-w-[280px]">
                    <span className="relative z-10">Inizia ora</span>
                    <ArrowRight size={22} className="relative z-10 group-hover:translate-x-2 transition-transform" />
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
