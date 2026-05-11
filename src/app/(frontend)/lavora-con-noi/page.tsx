import { Header } from '../_components/Header'
import { Briefcase, ArrowRight, CheckCircle2, GraduationCap, Users } from 'lucide-react'
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
    <div className="bg-white min-h-screen text-[#1A1A1A] selection:bg-blue-500/20 font-sans">
      <Header />
      
      <main className="w-full relative overflow-hidden">
        {/* Architectural Hero */}
        <section className="relative w-full h-[80vh] min-h-[400px] md:min-h-[300px] md:min-h-[400px] flex items-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069&auto=format&fit=crop" alt="Lavora con noi" className="w-full h-full object-cover scale-105 grayscale opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-transparent w-full md:w-[80%]" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col justify-center h-full pt-32">
            <FadeIn delay={0}>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-[#55ABE4]"></span>
                <span className="text-white font-bold tracking-widest uppercase text-sm">Carriere</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[80px] font-black tracking-tighter mb-6 max-w-5xl text-white leading-[0.95]">
                Cerchiamo energia,<br /> formiamo <span className="text-[#55ABE4]">competenza.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl lg:text-2xl text-zinc-300 max-w-3xl font-medium leading-tight">
                Siamo un’azienda in forte espansione. Cerchiamo tecnici esperti per guidare i cantieri e giovani motivati da formare sul campo.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Posizioni Aperte - B2B Solid layout */}
        <section className="py-16 md:py-12 md:py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-8 md:p-12">
              
              {/* Spontanea */}
              <div className="lg:w-1/3">
                <FadeIn delay={100} direction="up" className="sticky top-32">
                  <div className="bg-zinc-50 p-6 md:p-8 border-l-4 border-[#55ABE4]">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-[#1A1A1A] mb-6 tracking-tighter">Candidatura Spontanea</h3>
                    <p className="text-zinc-600 font-medium leading-relaxed mb-8">
                      Anche in assenza di posizioni aperte, valutiamo costantemente capisquadra, tirafili, cabinisti e operatori LST. Inviaci il tuo CV.
                    </p>
                    <a href="mailto:job@trialux.it" className="inline-flex w-full justify-between items-center gap-2 px-6 py-4 bg-[#1A1A1A] text-white font-bold hover:bg-[#55ABE4] transition-colors">
                      <span>Invia il tuo CV</span>
                      <ArrowRight size={20} />
                    </a>
                  </div>
                </FadeIn>
              </div>

              {/* Lista posizioni */}
              <div className="lg:w-2/3">
                <FadeIn>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A1A1A] mb-6 lg:mb-12 tracking-tighter">Posizioni Aperte</h2>
                </FadeIn>
                
                {openPositions.length > 0 ? (
                  <div className="flex flex-col border-t border-zinc-200">
                    {openPositions.map((job: any, index: number) => (
                      <FadeIn key={job.id} delay={index * 100}>
                        <div className="border-b border-zinc-200 p-8 hover:bg-zinc-50 transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 group">
                          <div>
                            <div className="flex gap-4 mb-4">
                              <span className="text-xs font-bold text-[#55ABE4] uppercase tracking-widest">{job.department || 'Operativo'}</span>
                              <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-4 border-l border-zinc-300">{job.location || 'Sicilia'}</span>
                            </div>
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-[#1A1A1A] tracking-tighter group-hover:text-[#55ABE4] transition-colors">{job.jobTitle}</h3>
                          </div>
                          <Link href={`/lavora-con-noi/${job.slug || job.id}`} className="shrink-0 flex items-center justify-center w-12 h-12 bg-zinc-100 text-[#1A1A1A] group-hover:bg-[#55ABE4] group-hover:text-white transition-colors">
                            <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                          </Link>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                ) : (
                  <FadeIn delay={100}>
                    <div className="bg-zinc-50 p-8 md:p-12 border border-zinc-200 text-center">
                      <Briefcase size={48} className="mx-auto text-zinc-300 mb-6" />
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-[#1A1A1A] mb-4 tracking-tighter">Nessuna ricerca attiva</h3>
                      <p className="text-sm md:text-base lg:text-lg text-zinc-600 font-medium max-w-lg mx-auto">
                        Al momento l'organico è al completo, ma siamo sempre alla ricerca di professionisti specializzati. 
                      </p>
                    </div>
                  </FadeIn>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* Perché scegliere Trialux */}
        <section className="py-16 md:py-12 md:py-20 bg-[#1A1A1A] text-white relative">
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-[#55ABE4]"></span>
                <span className="text-white font-bold tracking-widest uppercase text-sm">Vantaggi del team</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-10 lg:mb-20 tracking-tighter max-w-4xl">Un ambiente solido per costruire il tuo futuro.</h2>
            </FadeIn>
            
            <div className="grid md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
              <FadeIn delay={0} className="h-full">
                <div className="bg-[#1A1A1A] p-6 md:p-6 md:p-8 hover:bg-[#1A1A1A] transition-colors h-full border-b border-r border-zinc-800">
                  <GraduationCap size={48} className="text-[#55ABE4] mb-8" />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-4 tracking-tighter">Formazione continua</h3>
                  <p className="text-zinc-400 font-medium leading-relaxed text-sm md:text-base lg:text-lg ">
                    Copriamo i costi per il conseguimento di patentini e abilitazioni. Investiamo costantemente nella crescita tecnica.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={200} className="h-full">
                <div className="bg-[#1A1A1A] p-6 md:p-6 md:p-8 hover:bg-[#1A1A1A] transition-colors h-full border-b border-r border-zinc-800">
                  <Briefcase size={48} className="text-[#F0921E] mb-8" />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-4 tracking-tighter">Stabilità garantita</h3>
                  <p className="text-zinc-400 font-medium leading-relaxed text-sm md:text-base lg:text-lg ">
                    Contratti a tempo indeterminato (CCNL Metalmeccanico) e un ambiente strutturato e meritocratico.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={400} className="h-full">
                <div className="bg-[#1A1A1A] p-6 md:p-6 md:p-8 hover:bg-[#1A1A1A] transition-colors h-full border-b border-zinc-800">
                  <Users size={48} className="text-[#EE2430] mb-8" />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-4 tracking-tighter">Strumentazione</h3>
                  <p className="text-zinc-400 font-medium leading-relaxed text-sm md:text-base lg:text-lg ">
                    Mezzi moderni di proprietà, DPI di altissima qualità e strumenti di lavoro di ultima generazione.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
