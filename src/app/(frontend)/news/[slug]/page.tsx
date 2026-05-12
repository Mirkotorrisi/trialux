import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { Header } from '../../_components/Header'
import { RichText } from '../../_components/RichText'
import { Calendar, ArrowLeft } from 'lucide-react'
import { FadeIn } from '../../_components/FadeIn'
import '../../style.css'
import Link from 'next/link'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })

  let post: any;

  // Try finding by slug first
  try {
    const { docs: posts } = await payload.find({
      collection: 'posts',
      where: { slug: { equals: slug } },
    })
    post = posts[0]
  } catch (e) {
    console.log(e)
  }

  // Fallback to finding by ID
  if (!post) {
    try {
      post = await payload.findByID({
        collection: 'posts',
        id: slug,
      })
    } catch (e) {
      console.log('Not found by ID')
    }
  }

  if (!post) {
    return notFound()
  }

  const publishedDate = new Date(post.publishedDate || post.createdAt).toLocaleDateString('it-IT', {
    day: '2-digit', month: 'long', year: 'numeric'
  })

  return (
    <div className="bg-white min-h-screen text-[#0a0f1a] font-sans">
      <Header />

      <main className="w-full relative">

        {/* ── ARTICLE HERO — full-bleed photo behind title */}
        <section className="relative w-full min-h-[55vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0f1a]">
            {post.featuredImage && typeof post.featuredImage !== 'number' && post.featuredImage.url && (
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className="w-full h-full object-cover opacity-40"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/95 via-[#0a0f1a]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/60 to-transparent" style={{ width: '70%' }} />
          </div>

          {/* Arc deco */}
          <div className="absolute top-[-10%] right-[-8%] w-[55vw] h-[120%] rounded-full border border-white/[0.04] pointer-events-none" />

          <div className="container mx-auto px-6 lg:px-16 relative z-10 pb-16 pt-40 max-w-[1400px] w-full">
            <FadeIn effect="mask">
              {/* Breadcrumb */}
              <Link href="/news" className="inline-flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors mb-8 group">
                <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
                Tutte le news
              </Link>

              {/* Tag + date */}
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-[#EE2430]" />
                  <span className="text-[#EE2430] text-xs font-bold tracking-widest uppercase">Trialux News</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-500 text-xs">
                  <Calendar size={12} />
                  <span className="font-medium">{publishedDate}</span>
                </div>
              </div>

              <h1 className="text-[clamp(1.7rem,2.5vw,2.6rem)] font-black text-white leading-[1.2] tracking-[-0.01em] max-w-3xl">
                {post.title}
              </h1>
            </FadeIn>
          </div>
        </section>

        {/* ── ARTICLE BODY ── */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
            <FadeIn delay={100}>
              {/* Optional excerpt as lead */}
              {post.excerpt && (
                <p className="text-xl font-medium text-zinc-600 leading-relaxed border-l-4 border-[#55ABE4] pl-6 mb-6">
                  {post.excerpt}
                </p>
              )}
              <div className="prose prose-base lg:prose-lg prose-zinc max-w-none
                prose-headings:font-black prose-headings:tracking-tight
                prose-a:text-[#55ABE4] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-[#0a0f1a]
              ">
                <RichText content={post.content} />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── BACK TO NEWS — footer CTA */}
        <section className="bg-zinc-50 border-t border-zinc-100 py-16">
          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Hai finito di leggere?</p>
                <h3 className="text-2xl font-black text-[#0a0f1a] tracking-tight">Torna agli aggiornamenti</h3>
              </div>
              <Link href="/news" className="tri-btn tri-btn-primary inline-flex group shrink-0">
                <span>Tutte le news</span>
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
