import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { Header } from '../../_components/Header'
import { RichText } from '../../_components/RichText'
import '../../style.css'

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs: jobs } = await payload.find({
    collection: 'jobs',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const job = jobs[0]

  if (!job) {
    return notFound()
  }

  return (
    <>
      <Header />
      <article className="container mx-auto px-6">
        <header className="max-w-[800px] mx-auto py-24 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-bold uppercase tracking-wider">
              Careers
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
            {job.jobTitle}
          </h1>
          <div className="flex justify-center flex-wrap gap-4 md:gap-8 text-zinc-500 font-medium">
            <span className="flex items-center gap-2">📍 {job.location}</span>
            <span className="text-zinc-800 hidden md:inline">•</span>
            <span className="flex items-center gap-2">📄 {job.contractType.replace('_', ' ')}</span>
            <span className="text-zinc-800 hidden md:inline">•</span>
            <span className="flex items-center gap-2 text-emerald-500 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {job.status}
            </span>
          </div>
        </header>

        {job.featuredImage && typeof job.featuredImage !== 'number' && job.featuredImage.url && (
          <div className="max-w-[1000px] mx-auto mb-16">
            <img
              src={job.featuredImage.url}
              alt={job.jobTitle}
              className="w-full rounded-3xl shadow-2xl shadow-black/50"
            />
          </div>
        )}

        <div className="pb-32">
          <div className="max-w-[750px] mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-blue-500 tracking-tight">
              Descrizione della posizione
            </h2>
            <RichText content={job.description} />

            <div className="mt-16 p-8 md:p-12 bg-zinc-900/40 border border-zinc-800 rounded-3xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                Interessato a questa posizione?
              </h3>
              <p className="text-zinc-400 mb-8 max-w-[500px]">
                Inviaci il tuo CV per <span className="text-white font-medium">{job.jobTitle}</span>{' '}
                a{' '}
                <a
                  href="mailto:careers@trialux.com"
                  className="text-blue-500 hover:text-blue-400 font-semibold underline decoration-2 underline-offset-4"
                >
                  careers@trialux.com
                </a>
              </p>
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20">
                Candidati Ora
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
