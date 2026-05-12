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
        
        {/* ── HERO ── */}
        <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-end overflow-hidden pb-16 md:pb-24 lg:pb-32">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069&auto=format&fit=crop"
              alt="Lavora con Trialux"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/40 to-transparent" />
          </div>

          <div className="container-wide relative z-10 max-w-[1400px] w-full">
            <FadeIn delay={0} effect="mask">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[1.5px] bg-[#55ABE4]" />
                <span className="text-[#55ABE4] font-semibold tracking-[0.25em] uppercase text-[11px]">Lavora con noi</span>
              </div>
              <h1 className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-black tracking-tight text-white leading-[1.1] mb-3 max-w-2xl">
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

        {/* ── PERCHÉ TRIALUX ── */}
        <section className="section-dark py-14 md:py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#55ABE4]" />
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
                      <div className="w-10 h-10 flex items-center justify-center text-white shrink-0" style={{ background: item.color }}>
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

        {/* ── PROFILI RICERCATI — Sticky Section Logic ── */}
        <section className="bg-white py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
              
              {/* Left Side: Flows with the page */}
              <div className="py-2">
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-[2px] bg-[#EE2430]" />
                    <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-xs">Figure professionali</span>
                  </div>
                  <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black tracking-tight text-[#0A0A0A] leading-[1.15] mb-6">
                    Profili ricercati.
                  </h2>
                </FadeIn>
                <FadeIn delay={150}>
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
                    Operiamo con le seguenti figure professionali. Se hai un'esperienza affine, candidati: valutiamo ogni profilo con attenzione.
                  </p>
                  <ul className="list-none p-0 m-0 space-y-0 mb-12 border-t border-zinc-100">
                    {[
                      { title: 'Caposquadra (profilo C)', desc: 'Coordinamento operativo di cantiere' },
                      { title: 'Tirafili (profilo D)', desc: 'Posa e tiro di conduttori elettrici' },
                      { title: 'Giuntista (profilo E)', desc: 'Giunzione e terminazione di cavi MT/BT' },
                      { title: 'Cabinista (profilo F)', desc: 'Installazione e collaudo di cabine di trasformazione' },
                      { title: 'Operatore lavori sotto tensione (profilo G)', desc: 'Interventi su linee in esercizio' },
                      { title: 'Operatore Mezzi Speciali / OMS', desc: 'Conduzione di mezzi da cantiere' },
                      { title: 'Tecnico di Cantiere', desc: 'Rilevazioni e contabilità di cantiere' },
                      { title: 'Responsabile Qualità', desc: 'Gestione certificazioni e processi' },
                      { title: 'Project Manager', desc: 'Gestione commesse e coordinamento' },
                      { title: 'Assistente Tecnico', desc: 'Supporto alla progettazione e rilievi' },
                    ].map((item, idx) => (
                      <li key={idx} className="flex flex-col gap-1 py-7 border-b border-zinc-100 group px-0">
                        <strong className="font-black text-[#0A0A0A] text-base uppercase tracking-tight">{item.title}</strong>
                        <span className="text-zinc-400 text-sm leading-relaxed">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-zinc-50 border-l-4 border-[#55ABE4] p-6 md:p-8 max-w-lg">
                    <p className="text-zinc-700 text-sm md:text-base font-medium leading-relaxed">
                      Valutiamo anche candidature di <span className="text-[#0A0A0A] font-bold text-sm uppercase tracking-tight">profili junior</span> da inserire in affiancamento.
                    </p>
                  </div>
                </FadeIn>
              </div>

              {/* Right Side: Sticky Visual Block */}
              <div className="hidden lg:block sticky top-32 self-start">
                <FadeIn delay={200} className="relative w-full">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-8 h-[400px] mt-10 relative z-10 shadow-2xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
                        alt="Cantiere Trialux"
                        className="w-full h-full object-cover transition-transform duration-[5s] hover:scale-110"
                      />
                    </div>
                    <div className="col-span-4 flex flex-col gap-4">
                      <div className="h-[180px] overflow-hidden shadow-xl">
                        <img
                          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
                          alt="Tecnica"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="h-[260px] overflow-hidden shadow-xl">
                        <img
                          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
                          alt="Pianificazione"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>

            </div>
          </div>
        </section>

        {/* ── POSIZIONI APERTE ── */}
        <section className="section-dark py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
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
                    Trova la posizione adatta al tuo profilo. Se non trovi nulla di specifico, scrivici comunque.
                  </p>
                  <div className="bg-zinc-900 border border-white/[0.06] p-8 border-t-[3px]" style={{ borderTopColor: '#F0921E' }}>
                    <h3 className="text-lg font-black text-white mb-3">Non trovi la posizione giusta?</h3>
                    <a href="mailto:ufficiopersonale@trialuxsrl.it" className="flex items-center justify-between px-6 py-3 bg-white text-black font-bold hover:bg-[#EE2430] hover:text-white transition-colors text-sm">
                      <span>Candidatura spontanea</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </FadeIn>
              </div>

              <div className="lg:col-span-8">
                {openPositions.length > 0 ? (
                  <div className="space-y-4">
                    {openPositions.map((job: any, index: number) => (
                      <FadeIn key={job.id} delay={index * 100}>
                        <Link href={`/lavora-con-noi/${job.slug || job.id}`} className="flex flex-col sm:flex-row justify-between items-center gap-6 p-6 bg-zinc-900 border border-white/[0.06] hover:bg-zinc-800 transition-all group">
                          <div>
                            <span className="text-xs font-bold text-[#55ABE4] uppercase">{job.department || 'Operativo'}</span>
                            <h3 className="text-xl font-black text-white group-hover:text-[#55ABE4]">{job.jobTitle}</h3>
                          </div>
                          <ArrowRight size={18} className="text-white" />
                        </Link>
                      </FadeIn>
                    ))}
                  </div>
                ) : (
                  <FadeIn delay={100}>
                    <div className="bg-zinc-900 p-16 border border-white/[0.06] text-center">
                      <Briefcase size={48} className="mx-auto text-zinc-700 mb-6" />
                      <p className="text-zinc-400">Al momento non sono presenti posizioni aperte.</p>
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
