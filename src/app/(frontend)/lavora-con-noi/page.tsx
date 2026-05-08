import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import { Header } from '../_components/Header'
import { ArrowRight, BookOpen, TrendingUp, Users, HardHat, FileUp, Zap, Briefcase } from 'lucide-react'

export default async function LavoraConNoiPage() {
  const payload = await getPayload({ config })

  const { docs: jobs } = await payload.find({
    collection: 'jobs',
    where: {
      status: {
        equals: 'published',
      },
    },
  })

  return (
    <>
      <Header />
      <main className="w-full">
        {/* 5.1 Intestazione pagina */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-zinc-900 border-b border-zinc-800">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-4 block">Lavora con noi</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 max-w-4xl mx-auto text-white">
              Costruiamo reti. Cerchiamo persone che vogliano costruire qualcosa con noi.
            </h1>
            <div className="max-w-4xl mx-auto text-lg text-zinc-400 leading-relaxed space-y-6">
              <p>
                Trialux è in costante crescita e il team si allarga ogni anno. Cerchiamo professionisti tecnici, motivati e pronti a lavorare sul campo, in un ambiente che valorizza le competenze e investe nella formazione continua.
              </p>
              <p>
                Non offriamo solo un posto di lavoro: offriamo un percorso. Chi entra in Trialux ha accesso a corsi di aggiornamento, certificazioni professionali e opportunità concrete di crescita all’interno di una struttura organizzata e in espansione.
              </p>
            </div>
          </div>
        </section>

        {/* 5.2 Perché scegliere Trialux */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-extrabold mb-6">Perché scegliere Trialux</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-8 bg-zinc-900/40 rounded-3xl border border-zinc-800">
                <BookOpen size={48} className="text-blue-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Formazione continua</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Investiamo nella crescita delle nostre persone. Organizziamo corsi di formazione e aggiornamento su tematiche tecniche e di sicurezza: dalla gestione del rischio elettrico ai lavori sotto tensione, dai DPI di terza categoria agli spazi confinati. Il tuo sviluppo professionale è una priorità per noi tanto quanto lo è per te.
                </p>
              </div>
              <div className="p-8 bg-zinc-900/40 rounded-3xl border border-zinc-800">
                <TrendingUp size={48} className="text-blue-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Un settore in espansione</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Il settore dell’energia e della distribuzione elettrica è in piena evoluzione: la transizione energetica, i piani di ammodernamento della rete e i grandi investimenti pubblici in infrastrutture creano una domanda crescente di tecnici qualificati. Entrare in Trialux oggi significa costruirsi una carriera in un mercato solido e in crescita.
                </p>
              </div>
              <div className="p-8 bg-zinc-900/40 rounded-3xl border border-zinc-800">
                <Users size={48} className="text-blue-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Squadra e spirito di gruppo</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Lavoriamo per cantieri, e ogni cantiere è una squadra. Crediamo che la qualità del lavoro dipenda anche dalla qualità delle relazioni tra le persone. In Trialux troverai un ambiente diretto, meritocratico e orientato ai risultati, dove il contributo di ognuno conta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5.3 Profili ricercati */}
        <section className="py-24 bg-zinc-900/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <HardHat size={48} className="mx-auto text-orange-500 mb-6" />
                <h2 className="text-4xl font-extrabold mb-6">Profili ricercati</h2>
                <p className="text-lg text-zinc-400">
                  Operiamo principalmente con le seguenti figure professionali. Se rientri in uno di questi profili o hai un’esperienza affine, candidati: valutiamo ogni profilo con attenzione.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-background border border-zinc-800 rounded-xl">
                  <Zap className="text-orange-500 shrink-0" />
                  <div><span className="font-bold">Caposquadra (profilo C)</span> — coordinamento operativo di cantiere</div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-background border border-zinc-800 rounded-xl">
                  <Zap className="text-orange-500 shrink-0" />
                  <div><span className="font-bold">Tirafili (profilo D)</span> — posa e tiro di conduttori elettrici</div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-background border border-zinc-800 rounded-xl">
                  <Zap className="text-orange-500 shrink-0" />
                  <div><span className="font-bold">Giuntista (profilo E)</span> — giunzione e terminazione di cavi MT/BT</div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-background border border-zinc-800 rounded-xl">
                  <Zap className="text-orange-500 shrink-0" />
                  <div><span className="font-bold">Cabinista (profilo F)</span> — installazione e collaudo di cabine di trasformazione</div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-background border border-zinc-800 rounded-xl">
                  <Zap className="text-orange-500 shrink-0" />
                  <div><span className="font-bold">Operatore lavori sotto tensione (profilo G)</span> — interventi su linee in esercizio</div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-background border border-zinc-800 rounded-xl">
                  <Zap className="text-orange-500 shrink-0" />
                  <div><span className="font-bold">Operatore Mezzi Speciali / OMS</span> — conduzione di mezzi da cantiere</div>
                </div>
              </div>
              
              <div className="bg-orange-500/10 border border-orange-500/20 p-6 rounded-xl text-orange-200">
                <strong className="text-orange-400">Nota:</strong> Valutiamo anche candidature di profili junior da inserire in affiancamento, con percorso di formazione e certificazione a carico aziendale.
              </div>
            </div>
          </div>
        </section>

        {/* 5.4 Posizioni aperte */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <Briefcase className="text-blue-500" size={32} />
                <h2 className="text-3xl font-bold">Posizioni aperte</h2>
              </div>
              
              {jobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {jobs.map((job) => (
                    <Link
                      href={`/jobs/${job.slug}`}
                      key={job.id}
                      className="group flex flex-col justify-between p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-blue-500 transition-all hover:-translate-y-1"
                    >
                      <div>
                        <div className="flex gap-2 mb-6">
                          <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-md font-medium uppercase">
                            {job.location}
                          </span>
                          <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-md font-medium uppercase">
                            {job.contractType.replace('_', ' ')}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors uppercase tracking-tight mb-4">
                          {job.jobTitle}
                        </h3>
                      </div>
                      <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between text-blue-500 font-bold">
                        Dettagli e candidatura <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl">
                  <p className="text-lg text-zinc-400">
                    Al momento non sono presenti posizioni aperte. Puoi comunque inviarci una candidatura spontanea: teniamo i curricula ricevuti in considerazione per le prossime selezioni.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 5.5 Candidatura spontanea */}
        <section className="py-24 bg-blue-900/10 border-t border-blue-900/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <FileUp size={48} className="mx-auto text-blue-500 mb-6" />
              <h2 className="text-3xl font-extrabold mb-6">Non trovi la posizione giusta? Scrivici lo stesso.</h2>
              <p className="text-lg text-zinc-300 mb-8">
                Se hai esperienza nel settore elettrico e vuoi far parte di una realtà in crescita, inviaci il tuo curriculum. Valutiamo sempre nuovi profili in linea con le nostre attività.
              </p>
              <a href="mailto:ufficiopersonale@trialuxsrl.it" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all text-lg">
                Invia la tua candidatura — ufficiopersonale@trialuxsrl.it
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
