import { Header } from '../_components/Header'
import { Briefcase, ArrowRight, GraduationCap, Users, TrendingUp } from 'lucide-react'
import { Parallax } from '../_components/Parallax'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { FadeIn } from '../_components/FadeIn'
import '../style.css'
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
    <div className="bg-white min-h-screen text-[#0A0A0A] font-sans">
      <Header />
      
      <main className="w-full">
        
        {/* ── 5.1 INTESTAZIONE PAGINA ── */}
        <section className="relative w-full h-[80vh] md:h-screen min-h-[500px] md:min-h-[640px] flex flex-col justify-end overflow-hidden pb-16 md:pb-32 lg:pb-40">
          <div className="absolute inset-0">
            <Parallax offset={80} className="w-full h-full">
              <img
                src="/images/Trialux 14.jpg"
                alt="Lavora con Trialux"
                className="w-full h-[120%] object-cover transition-transform duration-[10s] hover:scale-110"
              />
            </Parallax>
            {/* Top Shadow for Header Visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/80 via-transparent to-transparent h-40" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/70 to-transparent w-full md:w-[60%]" />
          </div>

          <div className="container-wide relative z-10 w-full">
            <FadeIn delay={0} effect="mask">

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.1] mb-4 md:mb-6 max-w-3xl">
                Lavora con noi.
              </h1>
            </FadeIn>
            <FadeIn delay={200} effect="mask">
              <p className="text-white text-base md:text-xl font-medium max-w-2xl mb-6 md:mb-8 leading-relaxed">
                Costruiamo reti. Cerchiamo persone che vogliano costruire qualcosa con noi.
              </p>
              <p className="text-white/60 text-xs md:text-base max-w-lg leading-relaxed">
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
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#0A0A0A] leading-[1.1] mb-8">
                  Perché scegliere Trialux.
                </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  num: '01',
                  icon: <GraduationCap size={40} />, 
                  color: '#55ABE4', 
                  title: 'Formazione continua', 
                  desc: 'Investiamo nella crescita delle nostre persone. Organizziamo corsi di formazione e aggiornamento su tematiche tecniche e di sicurezza: dal rischio elettrico agli spazi confinati.' 
                },
                { 
                  num: '02',
                  icon: <TrendingUp size={40} />, 
                  color: '#F0921E', 
                  title: 'Un settore in espansione', 
                  desc: 'La transizione energetica e i grandi investimenti pubblici creano una domanda crescente di tecnici qualificati. Entrare in Trialux oggi significa costruirsi una carriera solida.' 
                },
                { 
                  num: '03',
                  icon: <Users size={40} />, 
                  color: '#EE2430', 
                  title: 'Squadra e spirito di gruppo', 
                  desc: 'Lavoriamo per cantieri, e ogni cantiere è una squadra. Troverai un ambiente diretto, meritocratico e orientato ai risultati, dove il contributo di ognuno conta.' 
                },
              ].map((item, idx) => (
                <FadeIn key={idx} delay={idx * 150} className="group relative overflow-hidden bg-zinc-50 p-8 md:p-12 transition-all duration-700 hover:shadow-2xl">
                  {/* Hover Color Fill (Slide up) */}
                  <div 
                    className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 z-0" 
                    style={{ backgroundColor: item.color }} 
                  />
                  
                  {/* Number Overlay */}
                  <div className="absolute top-8 right-10 text-xs font-black tracking-widest opacity-20 group-hover:opacity-40 group-hover:text-white transition-all">
                    {item.num}
                  </div>

                  <div className="relative z-10 flex flex-col justify-between h-full min-h-[300px]">
                    <div>
                      <div className="mb-8 transition-all duration-500 group-hover:scale-110 group-hover:!text-white" style={{ color: item.color }}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-black mb-4 tracking-tighter leading-tight group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
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
        <section className="section-dark py-16 md:py-32 border-y border-white/5">
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
                
                <FadeIn delay={400} className="bg-zinc-50 p-8 border-l-[4px] border-[#F0921E]">
                  <p className="text-zinc-600 text-sm font-medium leading-relaxed italic">
                    Valutiamo anche candidature di <span className="text-[#0A0A0A] font-bold uppercase tracking-tight">profili junior</span> da inserire in affiancamento, con percorso di formazione e certificazione a carico aziendale.
                  </p>
                </FadeIn>
              </div>

              <FadeIn className="relative min-h-[400px] lg:min-h-full overflow-hidden group">
                <img 
                  src="/images/Trialux 15.jpg" 
                  alt="Cantiere Operativo" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
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
                  <h2 className="text-3xl md:text-5xl font-black text-[#0A0A0A] tracking-tighter leading-[1] mb-6">
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
                              <h3 className="text-xl font-black text-[#0A0A0A] group-hover:text-white tracking-tighter mb-2">{job.jobTitle}</h3>
                              {descriptionPreview && (
                                <p className="text-zinc-500 text-sm group-hover:text-white/80 line-clamp-2 leading-relaxed">
                                  {descriptionPreview}
                                </p>
                              )}
                            </div>
                            <div className="w-12 h-12 flex items-center justify-center border border-zinc-100 group-hover:border-white text-[#0A0A0A] group-hover:text-white transition-all shrink-0">
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
                    <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-black text-[#0A0A0A] leading-[1.1] mb-6">
                      Non trovi la posizione giusta? <br className="hidden md:block" /> Scrivici lo stesso.
                    </h2>
                    <p className="text-zinc-500 text-base leading-relaxed mb-10 max-w-3xl">
                      Se hai esperienza nel settore elettrico e vuoi far parte di una realtà in crescita, inviaci il tuo curriculum. Valutiamo sempre nuovi profili in linea con le nostre attività.
                    </p>
                    <a
                      href="mailto:ufficiopersonale@trialuxsrl.it"
                      className="inline-flex items-center gap-4 px-10 py-5 bg-[#0A0A0A] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#F0921E] transition-all duration-500 group-button"
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
