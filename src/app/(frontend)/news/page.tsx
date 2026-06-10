import { Header } from '../_components/Header'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import { ArrowRight, Rss, Newspaper } from 'lucide-react'
import { FadeIn } from '../_components/FadeIn'
import { DecorativePattern } from '../_components/DecorativeArcs'

export const metadata = {
  title: 'News & Aggiornamenti — Trialux',
  description: 'Aggiornamenti dal campo, novità dal settore elettrico e notizie dall\'azienda Trialux.',
}

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

export default async function NewsPage() {
  const payload = await getPayload({ config })

  let posts: any[] = []
  try {
    const { docs } = await payload.find({
      collection: 'posts',
      sort: '-publishedDate',
    })
    posts = docs
  } catch (error) {
    console.log('Posts collection not found or error fetching posts:', error)
  }

  const featuredPost = posts.length > 0 ? posts[0] : null
  const gridPosts = posts.slice(1)

  const accentColors = ['#55ABE4', '#55ABE4', '#55ABE4']

  return (
    <div className="bg-white min-h-screen text-[#152238] font-sans selection:bg-[#F0921E]/20">
      <Header />

      <main className="w-full">

        {/* ── 1. TYPOGRAPHIC HERO (NON-PHOTOGRAPHIC BANNER) ── */}
        <section className="section-dark relative w-full overflow-hidden pt-28 pb-10 md:pt-36 md:pb-14 lg:pt-40 lg:pb-16 border-b border-white/5">
          <DecorativePattern />
          <div className="container-wide relative z-10 w-full">
            <div className="max-w-4xl">
              <FadeIn delay={0} effect="mask">
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                   <div className="w-8 h-[2px] bg-[#F0921E]" />
                   <span className="text-[#F0921E] text-xs md:text-sm font-bold uppercase tracking-[0.4em]">
                     Trialux Newsroom
                   </span>
                </div>
              </FadeIn>
              <FadeIn delay={100} effect="mask">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.1] mb-4 max-w-3xl break-words">
                  News & Aggiornamenti.
                </h1>
              </FadeIn>
              <FadeIn delay={200} effect="mask">
                <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
                  Dal campo ai progetti speciali: tutte le novità dal mondo Trialux e dal settore delle infrastrutture energetiche.
                </p>
              </FadeIn>
            </div>
          </div>
          
          {/* Subtle Geometric accent */}
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#F0921E]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        </section>

        {/* ── 2. GRID NEWS ── */}
        <section className="bg-white py-16 md:py-32 min-h-[50vh]">
          <div className="container-wide">

            {posts.length > 0 ? (
              <div className="space-y-24 lg:space-y-32">

                {/* FEATURED — High Contrast Block */}
                {featuredPost && (
                  <FadeIn>
                    <div className="flex items-center gap-6 mb-12">
                       <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#152238]">
                         In Evidenza
                       </h2>
                       <span className="flex-1 h-[2px] bg-zinc-200" />
                    </div>
                    <Link
                      href={`/news/${featuredPost.slug || featuredPost.id}`}
                      className="group block relative bg-white border border-zinc-200 overflow-hidden hover:border-[#152238] transition-all duration-500 shadow-sm hover:shadow-xl"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="aspect-[16/10] lg:aspect-auto relative overflow-hidden bg-zinc-100">
                          {featuredPost.featuredImage ? (
                            <img
                              src={typeof featuredPost.featuredImage === 'string' ? featuredPost.featuredImage : featuredPost.featuredImage.url}
                              alt={featuredPost.title}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Rss size={48} className="text-zinc-300" />
                            </div>
                          )}
                        </div>
                        <div className="p-10 lg:p-16 flex flex-col justify-center">
                           <div className="text-sm font-bold text-[#F0921E] uppercase tracking-widest mb-6">
                            {new Date(featuredPost.publishedDate || featuredPost.createdAt).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' })}
                          </div>
                          <h3 className="text-3xl md:text-5xl font-black text-[#152238] leading-tight tracking-tighter mb-8 group-hover:text-[#F0921E] transition-colors">
                            {featuredPost.title}
                          </h3>
                          <p className="text-zinc-600 text-sm md:text-lg leading-relaxed mb-10 max-w-xl line-clamp-3">
                            {featuredPost.excerpt || extractPlainText(featuredPost.content)}
                          </p>
                          <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-[#152238] group-hover:gap-6 transition-all">
                            <span>Leggi l'articolo</span>
                             <ArrowRight size={20} className="text-[#F0921E]" />
                          </div>
                        </div>
                      </div>
                       <div className="absolute top-0 right-0 w-16 h-16 bg-[#F0921E] translate-x-8 -translate-y-8 rotate-45" />
                    </Link>
                  </FadeIn>
                )}

                {/* GRID — Square Technical Cards */}
                {gridPosts.length > 0 && (
                  <div>
                    <FadeIn>
                      <div className="flex items-center gap-6 mb-16">
                        <h2 className="text-2xl md:text-4xl font-black tracking-tight text-[#152238]">
                          Recenti dal blog
                        </h2>
                        <span className="flex-1 h-[2px] bg-zinc-200" />
                      </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                      {gridPosts.map((post: any, index: number) => {
                        const accent = accentColors[index % accentColors.length]
                        const previewText = post.excerpt || extractPlainText(post.content)

                        return (
                          <FadeIn key={post.id} delay={index * 50} className="h-full">
                            <Link
                              href={`/news/${post.slug || post.id}`}
                              className="group flex flex-col h-full bg-white border border-zinc-200 hover:border-[#152238] hover:shadow-lg transition-all duration-300 relative"
                            >
                              <div className="aspect-[16/10] relative overflow-hidden bg-zinc-50 border-b border-zinc-100">
                                {post.featuredImage ? (
                                  <img
                                    src={typeof post.featuredImage === 'string' ? post.featuredImage : post.featuredImage.url}
                                    alt={post.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                  />
                                ) : (
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <Rss size={32} className="text-zinc-200" />
                                  </div>
                                )}
                                <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: accent }} />
                              </div>

                              <div className="p-8 flex flex-col flex-grow">
                                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">
                                  {new Date(post.publishedDate || post.createdAt).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' })}
                                </div>
                                <h3 className="text-xl font-black text-[#152238] leading-[1.2] tracking-tighter mb-4 group-hover:text-[#55ABE4] transition-colors">
                                  {post.title}
                               </h3>
                                {previewText && (
                                  <p className="text-zinc-600 text-sm leading-relaxed mb-8 line-clamp-3">
                                    {previewText}
                                  </p>
                                )}
                                <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
                                  <span className="text-[10px] font-black uppercase tracking-widest text-[#152238]">Leggi Tutto</span>
                                  <div className="w-8 h-8 flex items-center justify-center bg-zinc-50 group-hover:bg-[#152238] group-hover:text-white transition-all rounded-full">
                                    <ArrowRight size={16} />
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </FadeIn>
                        )
                      })}
                    </div>
                  </div>
                )}

              </div>
            ) : (
              <FadeIn>
                <div className="border-[4px] border-zinc-100 rounded-3xl p-16 md:p-24 text-center bg-white shadow-sm">
                  <Rss size={64} className="mx-auto text-zinc-300 mb-8" />
                  <h2 className="text-3xl md:text-4xl font-black text-[#152238] tracking-tighter mb-4">
                    Archivio in aggiornamento.
                  </h2>
                  <p className="text-zinc-500 text-lg max-w-xl mx-auto leading-relaxed">
                    Stiamo riorganizzando la nostra comunicazione per offrirvi aggiornamenti più puntuali e tecnici. Tornate a trovarci a breve.
                  </p>
                </div>
              </FadeIn>
            )}

          </div>
        </section>

      </main>
    </div>
  )
}
