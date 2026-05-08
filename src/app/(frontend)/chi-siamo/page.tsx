import { Header } from '../_components/Header'
import { CheckCircle2, TrendingUp, Users, Building2, Shield, Heart } from 'lucide-react'

export default function ChiSiamoPage() {
  return (
    <>
      <Header />
      <main className="w-full">
        {/* 2.1 Intestazione pagina */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-zinc-900 border-b border-zinc-800">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-4 block">Chi siamo</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 max-w-4xl mx-auto text-white">
              Un progetto imprenditoriale nato in Sicilia, cresciuto con determinazione.
            </h1>
          </div>
        </section>

        {/* 2.2 La storia */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-extrabold mb-8 text-center">La nostra storia</h2>
              <div className="prose prose-invert prose-lg mx-auto text-zinc-400">
                <p>
                  Trialux S.r.l. nasce nel 2021 per volontà dell’imprenditore Salvatore Salamone, con un obiettivo chiaro: portare nel settore dell’impiantistica elettrica un modello operativo fondato su qualità, affidabilità e attenzione al territorio.
                </p>
                <p>
                  In pochi anni l’azienda ha costruito una struttura solida, assemblando un team di professionisti altamente qualificati e dotandosi di tecnologie e attrezzature all’avanguardia. La crescita è stata costante e misurabile: aumento del fatturato, nuove commesse affidate da enti pubblici e privati, incremento continuo dell’organico.
                </p>
                <p>
                  Oggi Trialux è un punto di riferimento riconosciuto nel settore della realizzazione e manutenzione di linee elettriche di media e bassa tensione, con all’attivo cantieri distribuiti sul territorio regionale e una presenza consolidata nelle gare pubbliche.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2.3 Il marchio */}
        <section className="py-24 bg-zinc-900/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-extrabold mb-8 text-center">Il nostro marchio</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-lg text-zinc-400 space-y-6">
                  <p>
                    Il logo di Trialux nasce da un’idea semplice e significativa: tre foglie, tre persone, un’unica direzione. Ideato insieme ai tre figli di Salvatore Salamone, il simbolo racconta il carattere familiare e generazionale dell’azienda, senza rinunciare alla proiezione verso il futuro.
                  </p>
                  <p>
                    Le tre foglie rappresentano i valori che guidano ogni decisione: <strong className="text-zinc-200">unità</strong>, perché il lavoro di squadra è la nostra prima risorsa; <strong className="text-zinc-200">crescita</strong>, perché non ci accontentiamo mai del risultato raggiunto; <strong className="text-zinc-200">continuità</strong>, perché costruiamo relazioni e infrastrutture pensando al lungo periodo.
                  </p>
                  <p className="font-bold text-white text-xl pt-4">
                    Un marchio che non è solo estetica, ma identità.
                  </p>
                </div>
                <div className="bg-zinc-900 aspect-square rounded-3xl border border-zinc-800 flex items-center justify-center p-12">
                   {/* Logo Placeholder - The logo will be implemented properly when assets are provided */}
                   <div className="text-6xl font-black bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                     TRIALUX
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2.4 Organigramma */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <Building2 size={48} className="mx-auto text-blue-500 mb-6" />
              <h2 className="text-4xl font-extrabold mb-6">La nostra struttura</h2>
              <p className="text-xl text-zinc-400 leading-relaxed">
                Trialux è organizzata con una struttura chiara, che garantisce presidio su ogni area operativa: dalla direzione tecnica alla gestione dei cantieri, dall’amministrazione alle risorse umane. Ogni funzione ha un responsabile definito e ruoli precisi, perché la chiarezza interna si traduce in affidabilità verso i clienti e le stazioni appaltanti.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
              {[
                { role: 'Amministratore Unico', name: 'Salvatore Salamone' },
                { role: 'Responsabile Gare e Contratti', name: 'Salvatore Salamone' },
                { role: 'Responsabile Sistema Gestione Integrato', name: 'Dott. Ing. Valentina Petagna' },
                { role: 'Direttore Tecnico', name: 'Salvatore Salamone' },
                { role: 'Direttore Operativo', name: 'Salvatore Salamone' },
                { role: 'Direttore Servizio Amministrativo', name: 'Dott. Tommaso Lombardo' },
                { role: 'Ufficio Tecnico', name: 'Dott. Placido Lavenia' },
                { role: 'Ufficio Personale', name: 'Dott. Andrea Giovanni Nicosia' },
                { role: 'Ufficio Contabilità', name: 'Giuseppe Magistro' },
                { role: 'Responsabile Cantieri', name: 'Placido Lavenia' },
                { role: 'RSPP / ASPP', name: 'Salamone Salvatore / Dott. Andrea Nicosia' }
              ].map((person, index) => (
                <div key={index} className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl flex items-start gap-4 hover:border-blue-500/50 transition-colors">
                  <div className="w-2 h-full min-h-[40px] bg-blue-500 rounded-full shrink-0"></div>
                  <div>
                    <div className="text-sm text-blue-400 font-bold uppercase tracking-wider mb-1">{person.role}</div>
                    <div className="text-xl font-medium text-white">{person.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2.5 I numeri */}
        <section className="py-24 bg-zinc-900/50 border-y border-zinc-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <TrendingUp size={48} className="mx-auto text-orange-500 mb-6" />
              <h2 className="text-4xl font-extrabold mb-6">Trialux in numeri</h2>
              <p className="text-xl text-zinc-400 leading-relaxed">
                La crescita di un’azienda si misura nei risultati. Dal 2021 a oggi, ogni indicatore racconta una storia di sviluppo solido e progressivo.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-8 bg-background rounded-3xl border border-zinc-800 shadow-xl">
                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 to-zinc-500 mb-4">2021</div>
                <div className="text-zinc-400 font-medium">Anno di fondazione</div>
              </div>
              <div className="text-center p-8 bg-background rounded-3xl border border-zinc-800 shadow-xl">
                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600 mb-4">+100</div>
                <div className="text-zinc-400 font-medium">Dipendenti in forza</div>
              </div>
              <div className="text-center p-8 bg-background rounded-3xl border border-zinc-800 shadow-xl">
                <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-600 mb-4 flex items-center justify-center h-[48px] md:h-[60px]">E-Distribuzione</div>
                <div className="text-zinc-400 font-medium">Cliente principale</div>
              </div>
              <div className="text-center p-8 bg-background rounded-3xl border border-zinc-800 shadow-xl">
                <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-emerald-600 mb-4 flex items-center justify-center h-[48px] md:h-[60px]">Costante</div>
                <div className="text-zinc-400 font-medium">Crescita anno su anno, su fatturato e commesse</div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto bg-blue-900/10 border border-blue-900/30 p-8 rounded-3xl">
              <p className="text-lg text-zinc-300 text-center leading-relaxed">
                Il team è composto da figure tecniche specializzate nelle principali operazioni su impianti elettrici: capisquadra, tirafili, giuntisti, cabinisti, operatori lavori sotto tensione e operatori di mezzi speciali. Tutto il personale dispone delle certificazioni di sicurezza richieste per operare in ambienti ad alto rischio.
              </p>
            </div>
          </div>
        </section>

        {/* 2.6 Sponsorizzazioni */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <Heart size={48} className="mx-auto text-red-500 mb-6" />
            <h2 className="text-4xl font-extrabold mb-6">Il territorio che sosteniamo</h2>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12">
              Trialux crede nel valore del radicamento locale. Per questo sosteniamo due realtà sportive del territorio siciliano: il Catania Football Club S.r.l. e la SSD Biancavilla Calcio Academy. Un modo concreto di restituire alla comunità parte di ciò che l’azienda riceve ogni giorno lavorando su questo territorio.
            </p>
          </div>
        </section>

      </main>
    </>
  )
}
