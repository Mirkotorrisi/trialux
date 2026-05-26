import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { Header } from '../../_components/Header'
import { RichText } from '../../_components/RichText'
import { ArrowRight, MapPin, Briefcase, FileText } from 'lucide-react'
import { FadeIn } from '../../_components/FadeIn'
import '../../style.css'
import { Job } from '@/payload-types'

const contractTypeMap: Record<string, string> = {
  'full_time': 'Full-time',
  'part_time': 'Part-time',
  'permanent': 'indeterminato',
  'apprenticeship': 'apprendistato',
  'freelance': 'frelance'
};


export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })

  let job: Job | null = null;
  
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
    <div className="bg-white min-h-screen text-[#0a0f1a] selection:bg-[#55ABE4]/20 font-sans">
      <Header forceSolid />
      
      <main className="w-full relative overflow-hidden pt-[90px]">
        {/* Job Header */}
        <section className="bg-[#0a0f1a] py-24 lg:py-32 px-2 md:px-4 relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10">
            <FadeIn effect="mask">
              <div className="flex items-center gap-6 mb-8">
                <span className="w-16 h-[3px] bg-[#55ABE4]"></span>
                <span className="text-white font-black tracking-[0.4em] uppercase text-xs">Posizione Aperta</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-12 leading-[0.9] text-white uppercase max-w-5xl">
                {job.jobTitle}
              </h1>
              
              <div className="flex flex-wrap gap-8 py-8 border-t border-white/10">
                {job.location && (
                  <div className="flex items-center gap-4">
                    <MapPin className="text-[#55ABE4]" size={20} />
                    <div>
                      <div className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Sede</div>
                      <div className="font-bold text-white tracking-tight uppercase text-sm">{job.location}</div>
                    </div>
                  </div>
                )}
                {job.contractType && (
                  <div className="flex items-center gap-4 lg:border-l border-white/10 lg:pl-8">
                    <FileText className="text-[#55ABE4]" size={20} />
                    <div>
                      <div className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Contratto</div>
                      <div className="font-bold text-white tracking-tight uppercase text-sm">{contractTypeMap[job.contractType] || job.contractType}</div>
                    </div>
                  </div>
                )}
                {job.department && (
                  <div className="flex items-center gap-4 lg:border-l border-white/10 lg:pl-8">
                    <Briefcase className="text-[#55ABE4]" size={20} />
                    <div>
                      <div className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Dipartimento</div>
                      <div className="font-bold text-white tracking-tight uppercase text-sm">{job.department}</div>
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#55ABE4]/5 -skew-x-12 translate-x-1/2" />
        </section>

        {/* Job Content */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-2/3">
                <FadeIn effect="mask" delay={100}>
                  <div className="flex items-center gap-6 mb-8">
                    <span className="w-16 h-[3px] bg-[#55ABE4]"></span>
                    <span className="text-[#0a0f1a] font-black tracking-[0.2em] uppercase text-sm">Dettagli posizione</span>
                  </div>
                  <div className="prose prose-lg md:prose-xl prose-zinc max-w-none mb-8 lg:mb-16 font-medium">
                    <RichText content={job.description} />
                  </div>
                </FadeIn>
              </div>

              <div className="lg:w-1/3">
                <FadeIn effect="mask" delay={200} className="sticky top-32">
                  <div className="bg-zinc-50 p-10 lg:p-12 border-t-8 border-[#55ABE4] shadow-xl">
                    <h3 className="text-2xl font-black text-[#0a0f1a] mb-6 tracking-tighter leading-tight uppercase">
                      Candidati <br/> ora.
                    </h3>
                    <p className="text-zinc-500 font-medium text-base leading-relaxed mb-10">
                      Inviaci il tuo curriculum per questa posizione. Valuteremo il tuo profilo il prima possibile.
                    </p>
                    <a
                      href="mailto:ufficiopersonale@trialuxsrl.it"
                      className="inline-flex w-full justify-center items-center gap-4 px-8 py-5 bg-[#0a0f1a] text-white font-black uppercase tracking-widest text-xs hover:bg-[#55ABE4] transition-all group"
                    >
                      <span>Invia Candidatura</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <div className="mt-8 pt-8 border-t border-zinc-200 text-center">
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                        ufficiopersonale@trialuxsrl.it
                      </p>
                    </div>
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
