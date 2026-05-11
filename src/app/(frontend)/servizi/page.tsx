import { Header } from '../_components/Header'
import { Bolt, Lightbulb, Factory, Zap, Map, Grid, Truck, Building, ArrowRight } from 'lucide-react'
import { FadeIn } from '../_components/FadeIn'
import Link from 'next/link'

export default function ServiziPage() {
  const servizi = [
    {
      id: 'cavi-mt-bt',
      icon: Zap,
      category: 'Cavi MT/BT sotterranei',
      title: 'Fornitura e posa di cavi sotterranei',
      desc: 'Progettiamo e realizziamo il posizionamento di cavi di media e bassa tensione interrati, comprese le operazioni di giunzione e terminazione. Lavoriamo con materiali di prima qualità e rispettiamo le normative tecniche vigenti per garantire impianti duraturi e sicuri.',
      color: 'text-[#55ABE4]',
      iconBg: 'bg-[#55ABE4]/10'
    },
    {
      id: 'linee-aeree',
      icon: Bolt,
      category: 'Linee aeree MT/BT',
      title: 'Linee aeree su palo e su traliccio',
      desc: 'Realizziamo linee aeree di media e bassa tensione, sia su palo che su traliccio, per la trasmissione e distribuzione di energia elettrica. Gestiamo l’intera filiera operativa: progettazione del tracciato, fornitura dei materiali, installazione e collaudo.',
      color: 'text-[#F0921E]',
      iconBg: 'bg-[#F0921E]/10'
    },
    {
      id: 'cabine',
      icon: Factory,
      category: 'Cabine secondarie MT/BT',
      title: 'Installazione di cabine di trasformazione',
      desc: 'Forniamo e installiamo cabine secondarie di media e bassa tensione per la distribuzione locale dell’energia. Le nostre squadre sono qualificate per operare su impianti in media tensione e garantiscono esecuzioni a regola d’arte, nel rispetto delle prescrizioni del gestore di rete.',
      color: 'text-[#EE2430]',
      iconBg: 'bg-[#EE2430]/10'
    },
    {
      id: 'gruppi-elettrogeni',
      icon: Lightbulb,
      category: 'Gruppi elettrogeni temporanei',
      title: 'Alimentazione temporanea di cantiere e emergenza',
      desc: 'Forniamo e installiamo in via temporanea gruppi elettrogeni per garantire la continuità di alimentazione durante interventi sulla rete o in situazioni di emergenza. Il servizio include il dimensionamento, la fornitura, il posizionamento e il supporto tecnico per tutta la durata del cantiere.',
      color: 'text-[#F0921E]',
      iconBg: 'bg-[#F0921E]/10'
    },
    {
      id: 'scavi',
      icon: Map,
      category: 'Scavi di trincea',
      title: 'Scavi con escavatori per la posa di cavi interrati',
      desc: 'Disponiamo di mezzi propri per l’esecuzione di scavi di trincea necessari alla posa di cavi sotterranei. Operiamo in ambiente urbano ed extraurbano, coordinandoci con le autorità competenti per la gestione della viabilità e la sicurezza del cantiere.',
      color: 'text-[#55ABE4]',
      iconBg: 'bg-[#55ABE4]/10'
    },
    {
      id: 'strade',
      icon: Grid,
      category: 'Rifacimento manto stradale',
      title: 'Ripristino della pavimentazione dopo la posa',
      desc: 'Al termine degli scavi, provvediamo al rifacimento del manto d’usura stradale, restituendo la carreggiata alle condizioni originali. Un servizio che completa il ciclo di intervento e riduce al minimo i disagi per la collettività.',
      color: 'text-zinc-600',
      iconBg: 'bg-zinc-100'
    },
    {
      id: 'movimento-terra',
      icon: Truck,
      category: 'Movimento terra',
      title: 'Movimentazione e gestione delle terre di scavo',
      desc: 'Gestiamo le operazioni di movimento terra connesse ai cantieri elettrici: sbancamenti, riporti, livellamenti e smaltimento del materiale di risulta nel rispetto della normativa ambientale vigente.',
      color: 'text-[#EE2430]',
      iconBg: 'bg-[#EE2430]/10'
    },
    {
      id: 'opere-murarie',
      icon: Building,
      category: 'Opere murarie',
      title: 'Opere edili a supporto degli impianti elettrici',
      desc: 'Eseguiamo le opere murarie necessarie alla realizzazione e protezione degli impianti: basamenti per cabine, tramezzi tecnici, chiusure e finiture. Una competenza complementare che ci permette di offrire un servizio realmente chiavi in mano.',
      color: 'text-zinc-600',
      iconBg: 'bg-zinc-100'
    }
  ]

  return (
    <div className="bg-white min-h-screen text-[#1A1A1A] selection:bg-blue-500/20 font-sans">
      <Header />
      <main className="w-full relative overflow-hidden">
        
        {/* Architectural Hero */}
        <section className="relative w-full h-[80vh] min-h-[400px] md:min-h-[300px] md:min-h-[400px] flex items-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" alt="I nostri servizi" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-transparent w-full md:w-[80%]" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col justify-center h-full pt-32">
            <FadeIn delay={0}>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-[#55ABE4]"></span>
                <span className="text-white font-bold tracking-widest uppercase text-sm">I Nostri Servizi</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[80px] font-black tracking-tighter mb-6 max-w-5xl text-white leading-[0.95]">
                Dalla progettazione <br /> alla <span className="text-[#55ABE4]">posa in opera.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl lg:text-2xl text-zinc-300 max-w-3xl font-medium leading-tight">
                Trialux offre un servizio completo su linee elettriche di media e bassa tensione. Operiamo in ogni contesto con attrezzature proprie.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* 3.2 Griglia Servizi B2B */}
        <section className="py-16 md:py-12 md:py-20 bg-zinc-50 border-b border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
              {servizi.map((srv, index) => (
                <FadeIn key={srv.id} delay={(index % 3) * 100} className="h-full">
                  <div className="bg-white p-6 md:p-6 md:p-8 hover:bg-zinc-50 transition-colors group flex flex-col h-full relative border-r border-b border-zinc-200">
                    
                    <div className="flex flex-col gap-6 mb-8 relative z-10">
                      <div className={`w-16 h-16 shrink-0 bg-[#1A1A1A] flex items-center justify-center text-white`}>
                        <srv.icon size={32} />
                      </div>
                      <span className={`text-zinc-500 font-bold text-xs tracking-widest uppercase`}>{srv.category}</span>
                    </div>
                    
                    <div className="relative z-10 flex flex-col flex-grow">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-[#1A1A1A] mb-6 tracking-tighter leading-tight">{srv.title}</h3>
                      <p className="text-sm md:text-base lg:text-lg text-zinc-600 font-medium leading-relaxed mt-auto">
                        {srv.desc}
                      </p>
                    </div>
                    
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Banner CTA B2B */}
        <section className="py-16 md:py-12 md:py-20 bg-[#1A1A1A] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <img src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-10 grayscale mix-blend-luminosity" alt="Cantiere" />
          </div>
          <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center border-l-4 border-[#F0921E] pl-8 mx-auto max-w-4xl text-left">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter mb-8 leading-tight">Pronti per il tuo prossimo cantiere.</h2>
              <Link href="/contatti" className="inline-flex items-center gap-4 px-6 py-3 md:px-10 md:py-5 bg-[#F0921E] text-[#1A1A1A] font-bold text-sm md:text-base lg:text-lg hover:bg-white transition-all w-full sm:w-auto">
                <span>Contatta il Reparto Commerciale</span>
                <ArrowRight size={24} />
              </Link>
            </FadeIn>
          </div>
        </section>

      </main>
    </div>
  )
}
