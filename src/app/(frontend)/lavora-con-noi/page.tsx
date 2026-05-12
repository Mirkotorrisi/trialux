import { Header } from '../_components/Header'
import { Briefcase, ArrowRight, GraduationCap, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { FadeIn } from '../_components/FadeIn'

export default async function LavoraConNoiPage() {
  const payload = await getPayload({ config })
  
  let openPositions = []
  try {
    const { docs } = await payload.find({
      collection: 'jobs',
      where: {
        status: {
          equals: 'published'
        }
      },
      sort: '-createdAt',
    })
    openPositions = docs
  } catch (error) {
    console.log('Jobs collection not found or error fetching jobs:', error)
  }

  return (
    <div className="bg-white min-h-screen text-[#0A0A0A] font-sans">
      <Header />
      
      <main className="w-full">
        
        {/* ── HERO ── full-bleed */}
        <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-end overflow-hidden pb-16 md:pb-24 lg:pb-32">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069&auto=format&fit=crop"
              alt="Lavora con Trialux"
              className="w-full h-full object-cover scale-[1.04] transition-transform duration-[10s] ease-out"
              style={{ transformOrigin: 'center bottom' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 to-transparent" style={{ width: '60%' }} />
          </div>
          <div className="absolute top-[-10%] right-[-8%] w-[55vw] h-[120%]  border border-white/[0.04] pointer-events-none" />
          <div className="absolute top-[5%] right-[-15%] w-[45vw] h-[110%]  border border-[#55ABE4]/[0.08] pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg className="absolute right-[-5%] top-[-10%] w-[50%] h-[120%] opacity-[0.06]" viewBox="0 0 300 400" fill="none">
              <path d="M300 200 Q300 0 100 0" stroke="#F0921E" strokeWidth="60" fill="none"/>
              <path d="M280 200 Q280 380 80 400" stroke="#EE2430" strokeWidth="30" fill="none"/>
            </svg>
          </div>

          <div className="container-wide relative z-10 max-w-[1400px] w-full">
            <FadeIn delay={0} effect="mask">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[1.5px] bg-[#55ABE4]" />
                <span className="text-[#55ABE4] font-semibold tracking-[0.25em] uppercase text-[11px]">Lavora con noi</span>
              </div>
              <h1 className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-black tracking-[-0.01em] text-white leading-[1.1] mb-3 max-w-2xl">
                Costruisci il tuo futuro, insieme a noi.
              </h1>
            </FadeIn>
            <FadeIn delay={200} effect="mask">
              <p className="text-white/60 text-sm md:text-base max-w-lg leading-relaxed">
                Siamo sempre alla ricerca di persone motivate, con o senza esperienza pregressa, da inserire nei nostri cantieri e uffici.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── PERCHÉ TRIALUX — dark wide headline ── */}
        <section className="section-dark py-14 md:py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#55ABE4]" />
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg className="absolute right-0 top-0 h-full w-auto opacity-[0.04]" viewBox="0 0 400 600" fill="none">
              <path d="M400 300 Q400 0 100 0" stroke="white" strokeWidth="80" fill="none"/>
            </svg>
          </div>
          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <FadeIn effect="mask">
                <span className="text-[#55ABE4] text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Il nostro ambiente</span>
                <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black text-white tracking-tight leading-[1.2]">
                  Perché scegliere Trialux.
                </h2>
              </FadeIn>
              <FadeIn delay={150}>
                <div className="space-y-8">
                  {[
                    { icon: <GraduationCap size={22} />, color: '#55ABE4', title: 'Formazione continua', desc: 'Investiamo nella crescita delle nostre persone. Organizziamo corsi di formazione e aggiornamento su tematiche tecniche e di sicurezza.' },
                    { icon: <TrendingUp size={22} />, color: '#F0921E', title: 'Un settore in espansione', desc: 'Il settore dell\'energia e della distribuzione elettrica è in piena evoluzione. Entrare in Trialux oggi significa costruirsi una carriera solida.' },
                    { icon: <Users size={22} />, color: '#EE2430', title: 'Squadra e spirito di gruppo', desc: 'Lavoriamo per cantieri, e ogni cantiere è una squadra. Un ambiente diretto, meritocratico e orientato ai risultati.' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-5">
                      <div className="w-10 h-10  flex items-center justify-center text-white shrink-0" style={{ background: item.color }}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-black mb-1 tracking-tight">{item.title}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── PROFILI RICERCATI — white, offset photo ── */}
        <section className="bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-stretch">

              {/* Text col */}
              <div className="lg:col-span-7 lg:pr-16 flex flex-col justify-center">
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-[2px] bg-[#EE2430]" />
                    <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-xs">Figure professionali</span>
                  </div>
                  <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black tracking-tight text-[#0A0A0A] leading-[1.15] mb-3">
                    Profili ricercati.
                  </h2>
                </FadeIn>
                <FadeIn delay={150}>
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                    Operiamo con le seguenti figure professionali. Se hai un'esperienza affine, candidati: valutiamo ogni profilo con attenzione.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      { title: 'Caposquadra (profilo C)', desc: 'Coordinamento operativo di cantiere' },
                      { title: 'Tirafili (profilo D)', desc: 'Posa e tiro di conduttori elettrici' },
                      { title: 'Giuntista (profilo E)', desc: 'Giunzione e terminazione di cavi MT/BT' },
                      { title: 'Cabinista (profilo F)', desc: 'Installazione e collaudo di cabine di trasformazione' },
                      { title: 'Operatore lavori sotto tensione (profilo G)', desc: 'Interventi su linee in esercizio' },
                      { title: 'Operatore Mezzi Speciali / OMS', desc: 'Conduzione di mezzi da cantiere' },
                    ].map((item, idx) => (
                      <li key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 border-b border-zinc-100 hover:border-zinc-300 transition-colors">
                        <strong className="font-black text-[#0A0A0A] text-sm">{item.title}</strong>
                        <span className="text-zinc-400 text-sm">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-[#55ABE4] text-white p-6 ">
                    <p className="font-bold leading-tight">
                      Valutiamo anche candidature di profili junior da inserire in affiancamento, con percorso di formazione e certificazione a carico aziendale.
                    </p>
                  </div>
                </FadeIn>
              </div>

              {/* Image col */}
              <FadeIn delay={200} className="lg:col-span-5 h-full">
                <div className="relative h-full min-h-[400px]">
                  <div className="absolute -top-6 -right-6 w-40 h-40  border border-[#EE2430]/20 pointer-events-none" />
                  <div className="h-full overflow-hidden  shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                      alt="Cantiere Trialux"
                      className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-105"
                    />
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* ── POSIZIONI APERTE — dark bg ── */}
        <section className="section-dark py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

              {/* CTA spontanea */}
              <div className="lg:col-span-4">
                <FadeIn effect="mask" className="lg:sticky lg:top-24">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-[2px] bg-[#EE2430]" />
                    <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-xs">Opportunità</span>
                  </div>
                  <h2 className="text-[clamp(1.8rem,2.8vw,2.8rem)] font-black text-white tracking-tight leading-[1] mb-6">
                    Posizioni aperte.
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-10">
                    Trova la posizione adatta al tuo profilo. Se non trovi nulla di specifico, scrivici comunque: teniamo ogni candidatura in considerazione.
                  </p>
                  <div className="bg-zinc-900 border border-white/[0.06]  p-8 border-t-[3px]" style={{ borderTopColor: '#F0921E' }}>
                    <h3 className="text-lg font-black text-white mb-3 tracking-tight leading-tight">
                      Non trovi la posizione giusta?
                    </h3>
                    <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                      Inviaci il tuo curriculum: valutiamo ogni profilo.
                    </p>
                    <a
                      href="mailto:ufficiopersonale@trialuxsrl.it"
                      className="flex items-center justify-between gap-3 px-6 py-3 bg-white text-[#0A0A0A] font-bold  hover:bg-[#EE2430] hover:text-white transition-colors group text-sm"
                    >
                      <span>Candidatura spontanea</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="text-xs text-zinc-600 text-center mt-4 font-medium">ufficiopersonale@trialuxsrl.it</p>
                  </div>
                </FadeIn>
              </div>

              {/* Lista posizioni */}
              <div className="lg:col-span-8">
                {openPositions.length > 0 ? (
                  <div className="space-y-4">
                    {openPositions.map((job: any, index: number) => (
                      <FadeIn key={job.id} delay={index * 100}>
                        <Link
                          href={`/lavora-con-noi/${job.slug || job.id}`}
                          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 p-6 bg-zinc-900  border border-white/[0.06] hover:border-white/20 hover:bg-zinc-800 transition-all group"
                        >
                          <div>
                            <div className="flex gap-4 mb-2">
                              <span className="text-xs font-bold text-[#55ABE4] uppercase tracking-wide">{job.department || 'Operativo'}</span>
                              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wide">{job.location || 'Sicilia'}</span>
                            </div>
                            <h3 className="text-xl font-black text-white group-hover:text-[#55ABE4] transition-colors tracking-tight">{job.jobTitle}</h3>
                          </div>
                          <div className="w-10 h-10  bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#55ABE4] group-hover:border-[#55ABE4] transition-colors shrink-0">
                            <ArrowRight size={18} className="text-white -rotate-45 group-hover:rotate-0 transition-all" />
                          </div>
                        </Link>
                      </FadeIn>
                    ))}
                  </div>
                ) : (
                  <FadeIn delay={100}>
                    <div className="bg-zinc-900  p-12 lg:p-16 border border-white/[0.06] text-center">
                      <Briefcase size={48} className="mx-auto text-zinc-700 mb-6" />
                      <p className="text-zinc-400 text-lg max-w-lg mx-auto leading-relaxed">
                        Al momento non sono presenti posizioni aperte. Puoi comunque inviarci una candidatura spontanea: teniamo i curricula ricevuti in considerazione per le prossime selezioni.
                      </p>
                    </div>
                  </FadeIn>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
