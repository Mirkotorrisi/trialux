import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { Header } from '../../_components/Header'
import { RichText } from '../../_components/RichText'
import { Calendar, User } from 'lucide-react'
import { FadeIn } from '../../_components/FadeIn'
import '../../style.css'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })

  let post;
  
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

  return (
    <div className="bg-white min-h-screen text-[#1A1A1A] selection:bg-[#55ABE4]/20 font-sans">
      <Header />
      
      <main className="w-full relative overflow-hidden pt-[90px]">
        {/* Article Header */}
        <section className="bg-zinc-50 border-b border-zinc-200 py-12 md:py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-[#EE2430]"></span>
                <span className="text-zinc-500 font-bold tracking-widest uppercase text-sm">Trialux News</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-8 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap gap-8 py-8 border-t border-zinc-200">
                <div className="flex items-center gap-3">
                  <Calendar className="text-[#55ABE4]" size={24} />
                  <div>
                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Data pubblicazione</div>
                    <div className="font-bold">{new Date(post.publishedDate || post.createdAt).toLocaleDateString('it-IT')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-l border-zinc-200 pl-8">
                  <User className="text-[#F0921E]" size={24} />
                  <div>
                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Autore</div>
                    <div className="font-bold">Trialux Editorial Team</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Featured Image */}
        {post.featuredImage && typeof post.featuredImage !== 'number' && post.featuredImage.url && (
          <section className="bg-white py-12">
            <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
              <FadeIn delay={100}>
                <div className="aspect-[21/9] w-full relative overflow-hidden bg-zinc-100 border border-zinc-200">
                  <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-12 bg-white pb-32">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <FadeIn delay={200}>
              <div className="prose prose-base lg:prose-lg prose-zinc max-w-none">
                <RichText content={post.content} />
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  )
}
