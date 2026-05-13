import { Header } from '../_components/Header'
import { Briefcase, ArrowRight, GraduationCap, Users, TrendingUp } from 'lucide-react'
import { Parallax } from '../_components/Parallax'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { DecorativePattern } from '../_components/DecorativeArcs'
import { FadeIn } from '../_components/FadeIn'
import { Job } from '@/payload-types'


// Funzione per estrarre testo puro dal contenuto RichText (Lexical)
function extractPlainText(content: any): string {
  if (!content || !content.root || !content.root.children) return ''
  
  return content.root.children
    .map((node: any) => {
      if (node.children) {
        return node.children
          .map((child: any) => (child.type === 'text' ? child.text : ''))
          .join('')
      }
      return ''
    })
    .join(' ')
    .trim()
}

export default async function CareerPage() {
  const payload = await getPayload({ config })
  
  let openPositions: Job[] = []
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
    <div className="bg-white min-h-screen text-[#0a0f1a] font-sans">
      <Header />
      
      <main className="w-full">
        
        {/* ── 5.1 INTESTAZIONE PAGINA ── */}
        <section className="relative w-full flex flex-col justify-end overflow-hidden pb-16 md:pb-32 lg:pb-40" style={{ height: '100dvh', minHeight: '100dvh' }}>
          <div className="absolute inset-0">
            <Parallax offset={80} className="w-full h-full">
              <img
                src="/images/Trialux 17.jpg"
                alt="Lavora con Trialux"
                className="w-full h-[120%] object-cover transition-transform duration-[10s] hover:scale-110"
              />
            </Parallax>
            {/* Top Shadow for Header Visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/80 via-transparent to-transparent h-40" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/70 to-transparent w-full md:w-[60%]" />
          </div>

          <div className="container-wide relative z-10 w-full">
            <FadeIn delay={0} effect="mask">

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.1] mb-4 md:mb-6 max-w-3xl">
                Lavora con noi.
              </h1>
            </FadeIn>
            <FadeIn delay={200} effect="mask">
              <p className="text-white/70 text-base md:text-xl max-w-2xl leading-relaxed">
                Trialux è in costante crescita e il team si allarga ogni anno. Cerchiamo professionisti tecnici, motivati e pronti a lavorare sul campo, in un ambiente che valorizza le competenze e investe nella formazione continua.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── 5.2 PERCHÉ SCEGLIERE TRIALUX ── */}
        <section className="bg-white py-16 md:py-32">
          <div className="container-wide">
            <div className="max-w-3xl mb-20">
              <FadeIn effect="mask">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-[2px] bg-[#F0921E]" />
                  <span className="text-[#F0921E] font-bold tracking-[0.15em] uppercase text-xs">I nostri valori</span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#0a0f1a] leading-[1.1] mb-8">
                  Perché scegliere Trialux.
                </h2>
              </FadeIn>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-100">
              {[
                { 
                  num: '01',
                  icon: <GraduationCap size={40} />, 
                  color: '#55ABE4', 
                  title: 'Formazione continua', 
                  desc: 'Investiamo nella crescita delle nostre persone. Organizziamo corsi di formazione e aggiornamento su tematiche tecniche e di sicurezza.' 
                },
                { 
                  num: '02',
                  icon: <TrendingUp size={40} />, 
                  color: '#F0921E', 
                  title: 'Settore in espansione', 
                  desc: 'La transizione energetica e i grandi investimenti pubblici creano una domanda crescente di tecnici qualificati.' 
                },
                { 
                  num: '03',
                  icon: <Users size={40} />, 
                  color: '#EE2430', 
                  title: 'Spirito di gruppo', 
                  desc: 'Lavoriamo per cantieri, e ogni cantiere è una squadra. Troverai un ambiente meritocratico e orientato ai risultati.' 
                },
              ].map((item, idx) => (
                <FadeIn key={idx} delay={idx * 150} className="group relative overflow-hidden border-r last:border-r-0 border-zinc-100">
                  {/* Hover Color Fill */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-0" 
                    style={{ backgroundColor: item.color }} 
                  />
                  
                  <div className="relative z-10 p-8 md:p-14 h-full flex flex-col justify-between min-h-[320px] md:min-h-[380px]">
                    <div>
                      <div className="mb-10 flex items-center justify-between">
                        <div 
                          className="transition-all duration-500 group-hover:scale-125 group-hover:!text-white" 
                          style={{ color: item.color }}
                        >
                          {item.icon}
                        </div>
                        <div className="text-[11px] font-black tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 group-hover:text-white transition-all">
                          {item.num}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-black mb-6 leading-tight tracking-tighter group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-zinc-500 text-base leading-relaxed group-hover:text-white/90 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5.3 PROFILI RICERCATI (DARK) ── */}
        <section className="section-dark py-16 md:py-32 border-y border-white/5 relative overflow-hidden">
          <DecorativePattern />
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
              
              <div className="py-8">
                  <FadeIn effect="mask">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="w-10 h-[2px] bg-[#EE2430]" />
                      <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-xs">Competenze tecniche</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1] mb-6">
                      Profili ricercati.
                    </h2>
                  </FadeIn>
                  <FadeIn delay={200} effect="mask">
                    <p className="text-white/50 text-base leading-relaxed mb-12 max-w-xl">
                      Operiamo principalmente con le seguenti figure professionali. Se rientri in uno di questi profili o hai un’esperienza affine, candidati.
                    </p>
                  </FadeIn>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-1 mb-12">
                  {[
                    { title: 'Caposquadra (profilo C)', desc: 'coordinamento operativo' },
                    { title: 'Tirafili (profilo D)', desc: 'posa e tiro conduttori' },
                    { title: 'Giuntista (profilo E)', desc: 'giunzione cavi MT/BT' },
                    { title: 'Cabinista (profilo F)', desc: 'installazione cabine' },
                    { title: 'Operatore lavori sotto tensione (profilo G)', desc: 'interventi linee' },
                    { title: 'Operatore Mezzi Speciali / OMS', desc: 'conduzione mezzi' },
                  ].map((item, idx) => (
                    <FadeIn key={idx} delay={idx * 50} className="py-6 border-b border-white/10">
                      <h4 className="font-black text-white text-sm tracking-tight mb-1">{item.title}</h4>
                      <p className="text-white/40 text-xs">{item.desc}</p>
                    </FadeIn>
                  ))}
                </div>
                
                <FadeIn delay={400} className="bg-white/5 border border-white/10 p-8 border-l-[4px] border-l-[#F0921E]">
                  <p className="text-white/70 text-sm font-medium leading-relaxed italic">
                    Valutiamo anche candidature di <span className="text-white font-bold uppercase tracking-tight">profili junior</span> da inserire in affiancamento, con percorso di formazione e certificazione a carico aziendale.
                  </p>
                </FadeIn>
              </div>

              <FadeIn className="relative min-h-[400px] lg:min-h-full overflow-hidden group shadow-2xl">
                <Parallax offset={40} className="w-full h-full">
                  <img 
                    src="/images/Trialux 15.jpg" 
                    alt="Cantiere Operativo" 
                    className="w-full h-[120%] object-cover transition-transform duration-1000 group-hover:scale-105" 
                    style={{ top: '-10%', position: 'absolute' }}
                  />
                </Parallax>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── 5.4 POSIZIONI APERTE (LIGHT GRAY) ── */}
        <section className="bg-zinc-50 py-16 md:py-32">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <FadeIn effect="mask">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-[2px] bg-[#F0921E]" />
                    <span className="text-[#F0921E] font-bold tracking-[0.15em] uppercase text-xs">Opportunità</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-[#0a0f1a] tracking-tighter leading-[1] mb-6">
                    Posizioni aperte.
                  </h2>
                </FadeIn>
                <FadeIn delay={200} effect="mask">
                  <p className="text-zinc-500 text-sm leading-relaxed mb-10 max-w-xs">
                    Trova la posizione adatta al tuo profilo. Se non trovi nulla di specifico, scrivici comunque.
                  </p>
                </FadeIn>
              </div>

              <div className="lg:col-span-8">
                {openPositions.length > 0 ? (
                  <div className="space-y-4">
                    {openPositions.map((job: any, index: number) => {
                      const descriptionPreview = extractPlainText(job.description)
                      
                      return (
                        <FadeIn key={job.id} delay={index * 100}>
                          <Link href={`/career/${job.slug || job.id}`} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 p-8 bg-white hover:bg-[#F0921E] group transition-all duration-500 shadow-sm hover:shadow-xl border border-zinc-100">
                            <div className="flex-1">
                              {job.department && (
                                <span className="text-[10px] font-black text-[#F0921E] group-hover:text-white uppercase tracking-[0.2em] mb-2 block">{job.department}</span>
                              )}
                              <h3 className="text-xl font-black text-[#0a0f1a] group-hover:text-white tracking-tighter mb-2">{job.jobTitle}</h3>
                              {descriptionPreview && (
                                <p className="text-zinc-500 text-sm group-hover:text-white/80 line-clamp-2 leading-relaxed">
                                  {descriptionPreview}
                                </p>
                              )}
                            </div>
                            <div className="w-12 h-12 flex items-center justify-center border border-zinc-100 group-hover:border-white text-[#0a0f1a] group-hover:text-white transition-all shrink-0">
                              <ArrowRight size={20} />
                            </div>
                          </Link>
                        </FadeIn>
                      )
                    })}
                  </div>
                ) : (
                  <FadeIn delay={100}>
                    <div className="bg-white p-20 text-center border border-zinc-100 shadow-sm">
                      <Briefcase size={48} className="mx-auto text-zinc-200 mb-6" />
                      <p className="text-zinc-500 font-medium">Al momento non sono presenti posizioni aperte.</p>
                      <p className="text-zinc-400 text-sm mt-2">Puoi comunque inviarci una candidatura spontanea.</p>
                    </div>
                  </FadeIn>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5.5 CANDIDATURA SPONTANEA (WHITE) ── */}
        <section className="bg-white py-16 md:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="bg-zinc-50 border border-zinc-100 p-10 lg:p-16 relative overflow-hidden group">
                <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
                  <div className="w-16 h-16 bg-[#F0921E] flex items-center justify-center text-white shrink-0 shadow-lg">
                    <Briefcase size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="w-10 h-[2px] bg-[#F0921E]" />
                      <span className="text-[#F0921E] font-bold tracking-[0.15em] uppercase text-xs">Candidatura spontanea</span>
                    </div>
                    <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-black text-[#0a0f1a] leading-[1.1] mb-6">
                      Non trovi la posizione giusta? <br className="hidden md:block" /> Scrivici lo stesso.
                    </h2>
                    <p className="text-zinc-500 text-base leading-relaxed mb-10 max-w-3xl">
                      Se hai esperienza nel settore elettrico e vuoi far parte di una realtà in crescita, inviaci il tuo curriculum. Valutiamo sempre nuovi profili in linea con le nostre attività.
                    </p>
                    <a
                      href="mailto:ufficiopersonale@trialuxsrl.it"
                      className="inline-flex items-center gap-4 px-10 py-5 bg-[#0a0f1a] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#F0921E] transition-all duration-500 group-button"
                    >
                      <span>Candidati</span>
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </a>
                    <div className="mt-6 text-zinc-400 text-xs font-mono uppercase tracking-widest">
                      ufficiopersonale@trialuxsrl.it
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
    </div>
  )
}
