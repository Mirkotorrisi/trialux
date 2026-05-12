import { Header } from '../_components/Header'
import { FadeIn } from '../_components/FadeIn'
import Link from 'next/link'
import { ArrowRight, Zap, Radio, Building2, Battery, Hammer, Tractor, Shovel, HardHat } from 'lucide-react'
import '../style.css'

const services = [
  {
    cat: 'Cavi MT/BT sotterranei',
    title: 'Fornitura e posa di cavi sotterranei',
    desc: 'Progettiamo e realizziamo il posizionamento di cavi di media e bassa tensione interrati, comprese le operazioni di giunzione e terminazione. Lavoriamo con materiali di prima qualità e rispettiamo le normative tecniche vigenti per garantire impianti duraturi e sicuri.',
    img: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=2069',
    icon: <Zap size={32} className="text-[#55ABE4]" />,
    isDark: false
  },
  {
    cat: 'Linee aeree MT/BT',
    title: 'Linee aeree su palo e su traliccio',
    desc: 'Realizziamo linee aeree di media e bassa tensione, sia su palo che su traliccio, per la trasmissione e distribuzione di energia elettrica. Gestiamo l\'intera filiera operativa: progettazione del tracciato, fornitura dei materiali, installazione e collaudo.',
    img: 'https://images.unsplash.com/photo-1473665516087-0b5c1fb98115?q=80&w=2070',
    icon: <Radio size={32} className="text-[#55ABE4]" />,
    isDark: true
  },
  {
    cat: 'Cabine secondarie MT/BT',
    title: 'Installazione di cabine di trasformazione',
    desc: 'Forniamo e installiamo cabine secondarie di media e bassa tensione per la distribuzione locale dell\'energia. Le nostre squadre sono qualificate per operare su impianti in media tensione e garantiscono esecuzioni a regola d\'arte.',
    img: 'https://images.unsplash.com/photo-1590496794008-383c8070b257?q=80&w=2070',
    icon: <Building2 size={32} className="text-[#55ABE4]" />,
    isDark: false
  },
  {
    cat: 'Gruppi elettrogeni temporanei',
    title: 'Alimentazione temporanea di cantiere e emergenza',
    desc: 'Forniamo e installiamo in via temporanea gruppi elettrogeni per garantire la continuità di alimentazione durante interventi sulla rete o in situazioni di emergenza.',
    img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070',
    icon: <Battery size={32} className="text-[#55ABE4]" />,
    isDark: true
  },
  {
    cat: 'Scavi di trincea',
    title: 'Scavi con escavatori per la posa di cavi interrati',
    desc: 'Disponiamo di mezzi propri per l\'esecuzione di scavi di trincea necessari alla posa di cavi sotterranei. Operiamo in ambiente urbano ed extraurbano, coordinandoci con le autorità competenti.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070',
    icon: <Shovel size={32} className="text-[#55ABE4]" />,
    isDark: false
  },
  {
    cat: 'Opere murarie',
    title: 'Opere edili a supporto degli impianti elettrici',
    desc: 'Eseguiamo le opere murarie necessarie alla realizzazione e protezione degli impianti: basamenti per cabine, tramezzi tecnici, chiusure e finiture. Una competenza complementare che ci permette di offrire un servizio realmente chiavi in mano.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071',
    icon: <Hammer size={32} className="text-[#55ABE4]" />,
    isDark: true
  }
]

export default function ServiziPage() {
  return (
    <div className="bg-white min-h-screen text-[#0A0A0A]">
      <Header />

      <main className="w-full">

        {/* ── HERO ────────────────────────────────────────────────── */}
        <section className="relative w-full h-[60vh] min-h-[480px] flex flex-col justify-end overflow-hidden pb-16 md:pb-24 lg:pb-32 bg-zinc-950">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069"
              alt="Servizi Trialux"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent" />
          </div>

          <div className="container-wide relative z-10 pb-16">
            <FadeIn delay={0} effect="mask">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[1.5px] bg-[#55ABE4]" />
                <span className="text-[#55ABE4] font-bold tracking-[0.2em] uppercase text-[10px]">Trialux S.r.l.</span>
              </div>
              <h1 className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-black tracking-[-0.01em] text-white leading-[1.1] mb-2 max-w-3xl">
                I nostri servizi.
              </h1>
              <p className="text-white/60 text-base max-w-xl">
                Soluzioni complete per infrastrutture elettriche di media e bassa tensione.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── SERVICES SECTIONS (Equal hierarchy) ─────────────────── */}
        {services.map((srv, idx) => (
          <section 
            key={idx} 
            className={`py-20 md:py-32 border-b border-zinc-100 ${srv.isDark ? 'section-dark' : 'bg-white'}`}
          >
            <div className="container-wide">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Content */}
                <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <FadeIn effect="mask">
                    <div className="mb-6">{srv.icon}</div>
                    <span className={`text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block ${srv.isDark ? 'text-[#55ABE4]' : 'text-[#55ABE4]'}`}>
                      {srv.cat}
                    </span>
                    <h2 className={`text-[clamp(1.8rem,3vw,3rem)] font-black tracking-tight leading-[1.1] mb-4 ${srv.isDark ? 'text-white' : 'text-[#0A0A0A]'}`}>
                      {srv.title}
                    </h2>
                    <p className={`text-base leading-relaxed mb-8 max-w-lg ${srv.isDark ? 'text-white/60' : 'text-zinc-500'}`}>
                      {srv.desc}
                    </p>
                    <Link href="/contatti" className={`tri-btn ${srv.isDark ? 'tri-btn-outline' : 'tri-btn-outline-dark'}`}>
                      Richiedi informazioni
                    </Link>
                  </FadeIn>
                </div>

                {/* Image */}
                <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                  <FadeIn delay={200}>
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={srv.img} 
                        alt={srv.title} 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                      />
                    </div>
                  </FadeIn>
                </div>

              </div>
            </div>
          </section>
        ))}

        {/* ── FINAL CTA ────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-white text-center">
          <div className="container-wide">
            <FadeIn effect="mask">
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-tighter mb-8">
                Pronti per il tuo prossimo cantiere.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contatti" className="tri-btn tri-btn-dark">
                  Parliamo del tuo progetto
                </Link>
                <Link href="/chi-siamo" className="tri-btn tri-btn-outline-dark">
                  Scopri chi siamo
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
    </div>
  )
}
