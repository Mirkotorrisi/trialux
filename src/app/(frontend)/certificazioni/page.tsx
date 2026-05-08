import { Header } from '../_components/Header'
import { ShieldCheck, CheckCircle2, Award, Star, FileText, AlertTriangle } from 'lucide-react'

export default function CertificazioniPage() {
  return (
    <>
      <Header />
      <main className="w-full">
        {/* 4.1 Intestazione pagina */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-zinc-900 border-b border-zinc-800">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="text-emerald-500 font-bold tracking-wider uppercase text-sm mb-4 block">Qualità e Certificazioni</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 max-w-4xl mx-auto text-white">
              Operiamo con sistemi di gestione certificati e standard riconosciuti a livello nazionale e internazionale.
            </h1>
            <p className="max-w-4xl mx-auto text-lg text-zinc-400 leading-relaxed">
              Per Trialux la qualità non è una dichiarazione d’intenti, è un sistema strutturato e verificato da enti terzi indipendenti. Le nostre certificazioni sono il risultato di un percorso rigoroso di adeguamento dei processi interni e rappresentano una garanzia concreta per chiunque decida di affidarci un lavoro.
            </p>
          </div>
        </section>

        {/* 4.2 Certificazioni ISO */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <ShieldCheck size={64} className="mx-auto text-emerald-500 mb-8" />
              <h2 className="text-4xl font-extrabold mb-6">Certificazioni ISO</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
              <div className="flex flex-col gap-6 p-8 bg-zinc-900/40 rounded-3xl border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                <div className="flex items-center gap-4 border-b border-zinc-800 pb-6">
                  <CheckCircle2 size={32} className="shrink-0 text-emerald-500" />
                  <h3 className="text-2xl font-bold">ISO 9001</h3>
                </div>
                <div className="text-sm text-emerald-400 font-bold uppercase tracking-wider mb-2">Sistema di gestione per la qualità</div>
                <p className="text-zinc-400 leading-relaxed">
                  La certificazione ISO 9001 attesta che Trialux ha implementato e mantiene un sistema di gestione per la qualità conforme allo standard internazionale. Questo significa processi documentati, controllo costante delle attività operative e un approccio sistematico al miglioramento continuo. Per i nostri clienti, è la garanzia che ogni commessa viene gestita con metodo e rigore.
                </p>
              </div>
              <div className="flex flex-col gap-6 p-8 bg-zinc-900/40 rounded-3xl border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                <div className="flex items-center gap-4 border-b border-zinc-800 pb-6">
                  <CheckCircle2 size={32} className="shrink-0 text-emerald-500" />
                  <h3 className="text-2xl font-bold">ISO 14001</h3>
                </div>
                <div className="text-sm text-emerald-400 font-bold uppercase tracking-wider mb-2">Sistema di gestione ambientale</div>
                <p className="text-zinc-400 leading-relaxed">
                  Con la certificazione ISO 14001, Trialux dimostra il proprio impegno nella gestione responsabile degli impatti ambientali legati alle attività di cantiere. Monitoriamo i consumi, gestiamo correttamente i rifiuti e adottiamo procedure operative che minimizzano l’impatto sull’ambiente. Un cantiere ben fatto non può prescindere dalla sostenibilità.
                </p>
              </div>
              <div className="flex flex-col gap-6 p-8 bg-zinc-900/40 rounded-3xl border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                <div className="flex items-center gap-4 border-b border-zinc-800 pb-6">
                  <CheckCircle2 size={32} className="shrink-0 text-emerald-500" />
                  <h3 className="text-2xl font-bold">ISO 45001</h3>
                </div>
                <div className="text-sm text-emerald-400 font-bold uppercase tracking-wider mb-2">Sistema di gestione per la salute e la sicurezza</div>
                <p className="text-zinc-400 leading-relaxed">
                  La sicurezza dei lavoratori è la nostra priorità assoluta. La certificazione ISO 45001 attesta che Trialux ha adottato un sistema strutturato per l’identificazione e la gestione dei rischi professionali. Tutto il personale è formato e certificato per operare in sicurezza, anche nelle condizioni più critiche: lavori sotto tensione, spazi confinati, utilizzo di DPI di terza categoria.
                </p>
              </div>
            </div>

            {/* 4.3 Attestati e riconoscimenti */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <Award size={64} className="mx-auto text-yellow-500 mb-8" />
              <h2 className="text-4xl font-extrabold mb-6">Attestati e riconoscimenti</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="flex flex-col gap-6 p-8 bg-zinc-900 rounded-3xl border border-zinc-800">
                <h3 className="text-xl font-bold flex items-center gap-2">Rating di legalità <span className="text-yellow-500 flex"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></span></h3>
                <p className="text-zinc-400 leading-relaxed">
                  Il Rating di Legalità è un indicatore del rispetto della legalità da parte delle imprese, rilasciato dall’Autorità Garante della Concorrenza e del Mercato (AGCM). Trialux ha ottenuto il punteggio di due stelle, riconoscimento che certifica la trasparenza nella gestione aziendale e il rispetto dei requisiti etici, fiscali e normativi. Un vantaggio concreto in tutte le procedure di gara pubblica.
                </p>
              </div>
              <div className="flex flex-col gap-6 p-8 bg-zinc-900 rounded-3xl border border-zinc-800">
                <h3 className="text-xl font-bold flex items-center gap-2"><FileText size={24} className="text-emerald-500" /> Attestato di rating di sostenibilità</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Trialux è in possesso dell’attestato di rating di sostenibilità, che certifica l’integrazione di criteri ESG (ambientali, sociali e di governance) nei processi aziendali. Un riconoscimento che si affianca alle certificazioni ISO e rafforza il posizionamento dell’azienda nelle gare che prevedono criteri di selezione legati alla sostenibilità.
                </p>
              </div>
              <div className="flex flex-col gap-6 p-8 bg-zinc-900 rounded-3xl border border-zinc-800">
                <h3 className="text-xl font-bold flex items-center gap-2"><ShieldCheck size={24} className="text-blue-500" /> Iscrizione alla White List</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Trialux è iscritta alla White List della Prefettura, l’elenco dei fornitori, prestatori di servizi ed esecutori di lavori non soggetti a tentativi di infiltrazione mafiosa. Un requisito essenziale per partecipare a numerose tipologie di appalti pubblici e un segnale inequivocabile di trasparenza e correttezza.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4.4 Whistleblowing */}
        <section className="py-24 bg-zinc-900/50 border-t border-zinc-800">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <AlertTriangle size={48} className="mx-auto text-red-500 mb-6" />
              <h2 className="text-3xl font-extrabold mb-6">Segnalazione di condotte illecite</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                In linea con la normativa vigente in materia di whistleblowing (D. Lgs. 24/2023), Trialux ha attivato un canale dedicato per la segnalazione riservata di eventuali condotte illecite o irregolari. Il sistema garantisce la massima riservatezza al segnalante e viene gestito in modo indipendente dalla struttura aziendale.
              </p>
              <a href="https://trialux.segnalazioni.eu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white transition-all font-bold">
                Accedi alla piattaforma: trialux.segnalazioni.eu
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
