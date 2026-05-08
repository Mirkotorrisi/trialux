import { Header } from '../_components/Header'
import { Bolt, Lightbulb, Factory, Zap, Map, Grid, Truck, Building } from 'lucide-react'

export default function ServiziPage() {
  const servizi = [
    {
      id: 'cavi-mt-bt',
      icon: Zap,
      category: 'Cavi MT/BT sotterranei',
      title: 'Fornitura e posa di cavi sotterranei',
      desc: 'Progettiamo e realizziamo il posizionamento di cavi di media e bassa tensione interrati, comprese le operazioni di giunzione e terminazione. Lavoriamo con materiali di prima qualità e rispettiamo le normative tecniche vigenti per garantire impianti duraturi e sicuri.'
    },
    {
      id: 'linee-aeree',
      icon: Bolt,
      category: 'Linee aeree MT/BT',
      title: 'Linee aeree su palo e su traliccio',
      desc: 'Realizziamo linee aeree di media e bassa tensione, sia su palo che su traliccio, per la trasmissione e distribuzione di energia elettrica. Gestiamo l’intera filiera operativa: progettazione del tracciato, fornitura dei materiali, installazione e collaudo.'
    },
    {
      id: 'cabine',
      icon: Factory,
      category: 'Cabine secondarie MT/BT',
      title: 'Installazione di cabine di trasformazione',
      desc: 'Forniamo e installiamo cabine secondarie di media e bassa tensione per la distribuzione locale dell’energia. Le nostre squadre sono qualificate per operare su impianti in media tensione e garantiscono esecuzioni a regola d’arte, nel rispetto delle prescrizioni del gestore di rete.'
    },
    {
      id: 'gruppi-elettrogeni',
      icon: Lightbulb,
      category: 'Gruppi elettrogeni temporanei',
      title: 'Alimentazione temporanea di cantiere e emergenza',
      desc: 'Forniamo e installiamo in via temporanea gruppi elettrogeni per garantire la continuità di alimentazione durante interventi sulla rete o in situazioni di emergenza. Il servizio include il dimensionamento, la fornitura, il posizionamento e il supporto tecnico per tutta la durata del cantiere.'
    },
    {
      id: 'scavi',
      icon: Map,
      category: 'Scavi di trincea',
      title: 'Scavi con escavatori per la posa di cavi interrati',
      desc: 'Disponiamo di mezzi propri per l’esecuzione di scavi di trincea necessari alla posa di cavi sotterranei. Operiamo in ambiente urbano ed extraurbano, coordinandoci con le autorità competenti per la gestione della viabilità e la sicurezza del cantiere.'
    },
    {
      id: 'strade',
      icon: Grid,
      category: 'Rifacimento manto stradale',
      title: 'Ripristino della pavimentazione dopo la posa',
      desc: 'Al termine degli scavi, provvediamo al rifacimento del manto d’usura stradale, restituendo la carreggiata alle condizioni originali. Un servizio che completa il ciclo di intervento e riduce al minimo i disagi per la collettività.'
    },
    {
      id: 'movimento-terra',
      icon: Truck,
      category: 'Movimento terra',
      title: 'Movimentazione e gestione delle terre di scavo',
      desc: 'Gestiamo le operazioni di movimento terra connesse ai cantieri elettrici: sbancamenti, riporti, livellamenti e smaltimento del materiale di risulta nel rispetto della normativa ambientale vigente.'
    },
    {
      id: 'opere-murarie',
      icon: Building,
      category: 'Opere murarie',
      title: 'Opere edili a supporto degli impianti elettrici',
      desc: 'Eseguiamo le opere murarie necessarie alla realizzazione e protezione degli impianti: basamenti per cabine, tramezzi tecnici, chiusure e finiture. Una competenza complementare che ci permette di offrire un servizio realmente chiavi in mano.'
    }
  ]

  return (
    <>
      <Header />
      <main className="w-full">
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-zinc-900 border-b border-zinc-800">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4 block">I nostri servizi</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 max-w-4xl mx-auto text-white">
              Dalla progettazione alla messa in opera: realizziamo e manteniamo infrastrutture elettriche in ogni loro componente.
            </h1>
            <div className="max-w-4xl mx-auto text-lg text-zinc-400 leading-relaxed space-y-6">
              <p>
                Trialux offre un servizio completo su linee elettriche di media e bassa tensione. Operiamo sia in contesti urbani che in aree rurali e industriali, con attrezzature proprie, personale certificato e piena capacità di gestire ogni fase del lavoro in autonomia — dagli scavi alla messa in tensione.
              </p>
              <p>
                Lavoriamo principalmente per conto di operatori di rete, enti pubblici e grandi committenti privati, con la solidità organizzativa necessaria per gestire commesse di qualsiasi dimensione.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {servizi.map((srv) => (
                <div key={srv.id} className="flex flex-col gap-6 p-8 bg-zinc-900/40 rounded-3xl border border-zinc-800 hover:border-orange-500/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 shrink-0 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500">
                      <srv.icon size={28} />
                    </div>
                    <span className="text-orange-500 font-bold text-sm tracking-wider uppercase">{srv.category}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{srv.title}</h3>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
