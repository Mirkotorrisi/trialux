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
        <section className="bg-zinc-50 border-b border-zinc-200 py-12 md:py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-[#55ABE4]"></span>
                <span className="text-zinc-500 font-bold tracking-widest uppercase text-sm">Posizione Aperta</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter mb-8 leading-tight">
                {job.jobTitle}
              </h1>
              
              <div className="flex flex-wrap gap-8 py-8 border-y border-zinc-200">
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#EE2430]" size={24} />
                  <div>
                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Sede</div>
                    <div className="font-bold">{job.location || 'Sicilia'}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-l border-zinc-200 pl-8">
                  <FileText className="text-[#55ABE4]" size={24} />
                  <div>
                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Contratto</div>
                    <div className="font-bold">{job.contractType ? job.contractType.replace('_', ' ') : 'Da definire'}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-l border-zinc-200 pl-8">
                  <Briefcase className="text-[#F0921E]" size={24} />
                  <div>
                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Dipartimento</div>
                    <div className="font-bold">{job.department || 'Operativo'}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Job Content */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-8 md:p-12">
              <div className="lg:w-2/3">
                <FadeIn delay={100}>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-[#1A1A1A] mb-8 tracking-tighter">Descrizione del ruolo</h2>
                  <div className="prose prose-base lg:prose-lg prose-zinc max-w-none mb-8 lg:mb-16">
                    <RichText content={job.description} />
                  </div>
                </FadeIn>
              </div>

              <div className="lg:w-1/3">
                <FadeIn delay={200} className="sticky top-32">
                  <div className="bg-zinc-50 border border-zinc-200 p-6 md:p-8">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-black mb-6 tracking-tighter">Candidati ora</h3>
                    <p className="text-zinc-600 mb-8 font-medium">
                      Inviaci il tuo curriculum per questa posizione. Valuteremo il tuo profilo il prima possibile.
                    </p>
                    <a
                      href="mailto:job@trialux.it"
                      className="inline-flex w-full justify-between items-center px-6 py-4 bg-[#1A1A1A] text-white font-bold hover:bg-[#55ABE4] transition-colors no-underline"
                    >
                      <span>Invia CV a job@trialux.it</span>
                      <ArrowRight size={20} />
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
