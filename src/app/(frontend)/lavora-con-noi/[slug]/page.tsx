import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { Header } from '../../_components/Header'
import { RichText } from '../../_components/RichText'
import { ArrowRight, MapPin, Briefcase, FileText } from 'lucide-react'
import { FadeIn } from '../../_components/FadeIn'
import '../../style.css'

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })

  let job;
  
  // Try finding by slug first
  try {
    const { docs: jobs } = await payload.find({
      collection: 'jobs',
      where: { slug: { equals: slug } },
    })
    job = jobs[0]
  } catch (e) {
    console.log(e)
  }

  // Fallback to finding by ID
  if (!job) {
    try {
      job = await payload.findByID({
        collection: 'jobs',
        id: slug,
      })
    } catch (e) {
      console.log('Not found by ID')
    }
  }

  if (!job) {
    return notFound()
  }

  return (
    <div className="bg-white min-h-screen text-[#1A1A1A] selection:bg-[#55ABE4]/20 font-sans">
      <Header />
      
      <main className="w-full relative overflow-hidden pt-[90px]">
        {/* Job Header */}
        <section className="bg-[#0A0A0A] bg-dot-grid-light py-24 lg:py-32 px-2 md:px-4">
          <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
            <FadeIn effect="mask">
              <div className="flex items-center gap-6 mb-8">
                <span className="w-16 h-[3px] bg-[#EE2430]"></span>
                <span className="text-white font-black tracking-[0.2em] uppercase text-sm">Posizione Aperta</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-12 leading-[0.9] text-white uppercase max-w-5xl">
                {job.jobTitle}
              </h1>
              
              <div className="flex flex-wrap gap-8 py-8 border-t-2 border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center chamfer-reverse">
                    <MapPin className="text-[#0A0A0A]" size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] mb-1">Sede</div>
                    <div className="font-bold text-white tracking-widest">{job.location || 'Sicilia'}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 lg:border-l-2 border-white/10 lg:pl-8">
                  <div className="w-12 h-12 bg-white flex items-center justify-center chamfer-reverse">
                    <FileText className="text-[#0A0A0A]" size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] mb-1">Contratto</div>
                    <div className="font-bold text-white tracking-widest uppercase">{job.contractType ? job.contractType.replace('_', ' ') : 'Da definire'}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 lg:border-l-2 border-white/10 lg:pl-8">
                  <div className="w-12 h-12 bg-white flex items-center justify-center chamfer-reverse">
                    <Briefcase className="text-[#0A0A0A]" size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] mb-1">Dipartimento</div>
                    <div className="font-bold text-white tracking-widest uppercase">{job.department || 'Operativo'}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Job Content */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-2/3">
                <FadeIn effect="mask" delay={100}>
                  <div className="flex items-center gap-6 mb-8">
                    <span className="w-16 h-[3px] bg-[#EE2430]"></span>
                    <span className="text-[#0A0A0A] font-black tracking-[0.2em] uppercase text-sm">Descrizione del ruolo</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0A] mb-12 tracking-tighter uppercase leading-[0.9]">IL PROFILO <br/> CHE CERCHIAMO.</h2>
                  <div className="prose prose-lg md:prose-xl prose-zinc max-w-none mb-8 lg:mb-16 font-medium">
                    <RichText content={job.description} />
                  </div>
                </FadeIn>
              </div>

              <div className="lg:w-1/3">
                <FadeIn effect="mask" delay={200} className="sticky top-32">
                  <div className="bg-[#0A0A0A] p-10 lg:p-16 chamfer border-t-8 border-[#EE2430] shadow-2xl">
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
                      CANDIDATI <br/> ORA.
                    </h3>
                    <p className="text-zinc-400 font-medium text-lg leading-tight mb-10">
                      Inviaci il tuo curriculum per questa posizione. Valuteremo il tuo profilo il prima possibile.
                    </p>
                    <a
                      href="mailto:job@trialux.it"
                      className="inline-flex w-full justify-center items-center gap-4 px-8 py-5 bg-white text-[#0A0A0A] font-black uppercase tracking-widest hover:bg-[#EE2430] hover:text-white transition-colors chamfer group"
                    >
                      <span>Invia CV</span>
                      <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
