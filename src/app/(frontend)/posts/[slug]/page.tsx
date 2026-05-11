import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { Header } from '../../_components/Header'
import { RichText } from '../../_components/RichText'
import '../../style.css'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const post = posts[0]

  if (!post) {
    return notFound()
  }

  return (
    <>
      <Header />
      <article className="container mx-auto px-6">
        <header className="max-w-[800px] mx-auto py-12 md:py-20 text-center">
          <span className="inline-flex items-center px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Magazine
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
            {post.title}
          </h1>
          <div className="flex justify-center gap-6 text-zinc-500 text-sm font-medium">
            <span>
              Pubblicato il{' '}
              {new Date(post.publishedDate || post.createdAt).toLocaleDateString('it-IT')}
            </span>
            <span className="text-zinc-800">•</span>
            <span>Trialux Editorial Team</span>
          </div>
        </header>

        {post.featuredImage && typeof post.featuredImage !== 'number' && post.featuredImage.url && (
          <div className="max-w-[1000px] mx-auto mb-8 lg:mb-16">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className="w-full rounded-3xl shadow-2xl shadow-black/50"
            />
          </div>
        )}

        <div className="pb-24">
          <RichText content={post.content} />
        </div>
      </article>
    </>
  )
}
