import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import { Header } from './_components/Header'
import './style.css'
import { ArrowRight, Bolt, Lightbulb, Factory, Map, Truck, Grid, HardHat, Building, CheckCircle2, Star, ShieldCheck, Zap } from 'lucide-react'

export default async function HomePage() {
  const payload = await getPayload({ config })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    limit: 3,
    sort: '-publishedDate',
  })

  return (
    <>
      <Header />
      <main className="w-full">
        {/* 1.1 Hero */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-[80vh]">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-background to-zinc-900" />
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>
          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 max-w-4xl bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              L’energia che muove il territorio.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-3xl leading-relaxed">
              Trialux realizza e mantiene reti elettriche di media e bassa tensione per enti pubblici e privati. Competenza tecnica, affidabilità e rispetto delle scadenze: ogni giorno, su ogni cantiere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/servizi" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-full hover:from-red-500 hover:to-orange-400 transition-all hover:-translate-y-1 shadow-lg shadow-red-500/25 w-full sm:w-auto">
                Scopri i nostri servizi
                <ArrowRight size={20} />
              </Link>
              <Link href="/contatti" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-800 text-white font-bold rounded-full hover:bg-zinc-700 transition-all hover:-translate-y-1 w-full sm:w-auto border border-zinc-700">
                Contattaci
              </Link>
            </div>
          </div>
        </section>

        {/* 1.2 Chi siamo */}
        <section className="py-24 bg-zinc-900/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-4 block">Chi Siamo</span>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Un’azienda costruita sulla competenza.</h2>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  Fondata nel 2021 da Salvatore Salamone, Trialux è cresciuta rapidamente fino a diventare un riferimento nel settore dell’impiantistica elettrica in Sicilia. Oggi operiamo con oltre 100 professionisti qualificati, serviamo i principali operatori del settore energetico — tra cui E-Distribuzione — e lavoriamo ogni giorno per garantire reti sicure ed efficienti.
                </p>
                <Link href="/chi-siamo" className="inline-flex items-center gap-2 text-white font-bold hover:text-red-400 transition-colors group">
                  Scopri la nostra storia <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden bg-zinc-800">
                <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop" alt="Team Trialux al lavoro" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* 1.3 Numeri chiave */}
        <section className="py-20 border-y border-zinc-800 bg-zinc-900/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-background rounded-3xl border border-zinc-800">
                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-2">2021</div>
                <div className="text-zinc-400 font-medium">Anno di fondazione</div>
              </div>
              <div className="text-center p-6 bg-background rounded-3xl border border-zinc-800">
                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 mb-2">+100</div>
                <div className="text-zinc-400 font-medium">Professionisti in organico</div>
              </div>
              <div className="text-center p-6 bg-background rounded-3xl border border-zinc-800">
                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500 mb-2">MT/BT</div>
                <div className="text-zinc-400 font-medium">Reti di media e bassa tensione</div>
              </div>
              <div className="text-center p-6 bg-background rounded-3xl border border-zinc-800">
                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-500 mb-2">3</div>
                <div className="text-zinc-400 font-medium">Certificazioni ISO ottenute</div>
              </div>
            </div>
          </div>
        </section>

        {/* 1.4 Servizi */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4 block">Servizi</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Cosa facciamo</h2>
              <p className="text-zinc-400 text-lg">
                Dalla progettazione alla posa in opera, gestiamo ogni fase dei lavori su linee aeree e sotterranee, cabine di distribuzione e impianti temporanei.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Cavi MT/BT sotterranei', icon: Zap },
                { title: 'Linee aeree MT/BT', icon: Bolt },
                { title: 'Cabine secondarie MT/BT', icon: Factory },
                { title: 'Gruppi elettrogeni temporanei', icon: Lightbulb },
                { title: 'Scavi di trincea', icon: Map },
                { title: 'Rifacimento manto stradale', icon: Grid },
                { title: 'Movimento terra', icon: Truck },
                { title: 'Opere murarie', icon: Building }
              ].map((srv, idx) => (
                <Link key={idx} href="/servizi" className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 transition-all group block">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-4 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <srv.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-orange-400 transition-colors">{srv.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 1.5 Certificazioni */}
        <section className="py-24 bg-gradient-to-b from-zinc-900/50 to-background border-y border-zinc-800/50">
          <div className="container mx-auto px-6 text-center">
            <ShieldCheck size={48} className="mx-auto text-emerald-500 mb-6" />
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Qualità certificata</h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-3xl mx-auto">
              Operiamo con sistemi di gestione certificati ISO 9001, ISO 14001 e ISO 45001. Siamo iscritti alla White List e titolari del Rating di Legalità a due stelle: garanzie concrete per ogni stazione appaltante.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
              {['ISO 9001', 'ISO 14001', 'ISO 45001', 'White List', 'Rating Legalità ★★'].map(cert => (
                <div key={cert} className="px-6 py-3 rounded-full bg-zinc-800 text-zinc-200 font-bold flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500" /> {cert}
                </div>
              ))}
            </div>
            <Link href="/certificazioni" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-bold group">
              Vedi tutte le certificazioni <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* 1.6 Cliente principale */}
        <section className="py-24 bg-zinc-900/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-3xl">
              <div className="w-full md:w-1/3 flex justify-center">
                 <div className="text-4xl font-black tracking-tighter text-blue-500 flex flex-col items-center">
                   E-Distribuzione
                   <span className="text-sm font-normal text-zinc-500 mt-2">Gruppo Enel</span>
                 </div>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-lg text-zinc-300 leading-relaxed">
                  Tra i nostri principali committenti figura E-Distribuzione, la società di Enel che gestisce la rete di distribuzione elettrica nazionale. Una collaborazione che testimonia la solidità operativa e l’affidabilità di Trialux su cantieri di grande responsabilità.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 1.7 Lavora con noi */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-blue-900/20 border border-blue-900/50 p-8 md:p-16 rounded-[3rem]">
              <div className="max-w-2xl">
                <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-4 block">Lavora con noi</span>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Costruiamo insieme il futuro della rete.</h2>
                <p className="text-zinc-300 text-lg">
                  Stiamo crescendo e cerchiamo professionisti appassionati. Se hai esperienza nel settore elettrico o vuoi formarti in un’azienda strutturata, c’è posto per te.
                </p>
              </div>
              <Link href="/lavora-con-noi" className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all font-bold text-lg">
                Vedi le posizioni aperte
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
