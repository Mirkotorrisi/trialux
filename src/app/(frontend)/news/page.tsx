import { Header } from '../_components/Header'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import { ArrowRight, Rss } from 'lucide-react'
import { FadeIn } from '../_components/FadeIn'
import '../style.css'

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

  const featuredPost = posts[0] || null
  const gridPosts = posts.slice(1)

  const accentColors = ['#55ABE4', '#F0921E', '#EE2430']

  return (
    <div className="bg-white min-h-screen text-[#0A0A0A] font-sans selection:bg-[#55ABE4]/20">
      <Header />

      <main className="w-full">

        {/* ── 1. HERO (ALLINEATA AL RESTO DEL SITO) ── */}
        <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-end overflow-hidden pb-24 md:pb-32 lg:pb-40">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
              alt="News e Blog"
              className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 to-transparent w-full md:w-[60%]" />
          </div>

          <div className="container-wide relative z-10 w-full">
            <FadeIn delay={0} effect="mask">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[1.5px] bg-[#EE2430]" />
                <span className="text-[#EE2430] font-semibold tracking-[0.25em] uppercase text-[11px]">News</span>
              </div>
              <h1 className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-black tracking-tighter text-white leading-[1.1] mb-6 max-w-3xl uppercase">
                News & <br/> Aggiornamenti.
              </h1>
            </FadeIn>
            <FadeIn delay={200} effect="mask">
              <p className="text-white text-lg md:text-xl font-medium max-w-2xl mb-8 leading-relaxed">
                Dal campo ai progetti speciali: tutte le novità dal mondo Trialux e dal settore delle infrastrutture energetiche.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── 2. GRID NEWS (CARD SQUADRATE) ── */}
        <section className="bg-white py-20 md:py-32">
          <div className="container-wide">

            {posts.length > 0 ? (
              <div className="space-y-24 lg:space-y-32">

                {/* FEATURED — High Contrast Block */}
                {featuredPost && (
                  <FadeIn>
                    <div className="flex items-center gap-4 mb-12">
                       <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">In Evidenza</span>
                       <span className="flex-1 h-[1px] bg-zinc-100" />
                    </div>
                    <Link
                      href={`/news/${featuredPost.slug || featuredPost.id}`}
                      className="group block relative bg-white border border-zinc-200 overflow-hidden hover:border-[#0A0A0A] transition-all duration-500"
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
                          <div className="text-xs font-bold text-[#EE2430] uppercase tracking-widest mb-6">
                            {new Date(featuredPost.publishedDate || featuredPost.createdAt).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' })}
                          </div>
                          <h2 className="text-3xl lg:text-5xl font-black text-[#0A0A0A] leading-tight tracking-tighter mb-8 uppercase">
                            {featuredPost.title}
                          </h2>
                          <p className="text-zinc-600 text-lg leading-relaxed mb-10 max-w-xl line-clamp-3">
                            {featuredPost.excerpt || extractPlainText(featuredPost.content)}
                          </p>
                          <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-[#0A0A0A] group-hover:gap-6 transition-all">
                            <span>Leggi l'articolo</span>
                            <ArrowRight size={20} className="text-[#EE2430]" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-16 h-16 bg-[#EE2430] translate-x-8 -translate-y-8 rotate-45" />
                    </Link>
                  </FadeIn>
                )}

                {/* GRID — Square Technical Cards */}
                {gridPosts.length > 0 && (
                  <div>
                    <FadeIn>
                      <div className="flex items-center gap-4 mb-16">
                        <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400 whitespace-nowrap">Recenti dal blog</h2>
                        <span className="flex-1 h-[1px] bg-zinc-100" />
                      </div>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                      {gridPosts.map((post: any, index: number) => {
                        const accent = accentColors[index % accentColors.length]
                        // Anteprima testo dal contenuto se manca excerpt
                        const previewText = post.excerpt || extractPlainText(post.content)

                        return (
                          <FadeIn key={post.id} delay={index * 100} className="h-full">
                            <Link
                              href={`/news/${post.slug || post.id}`}
                              className="group flex flex-col h-full bg-white border border-zinc-200 hover:border-[#0A0A0A] transition-all duration-300 relative"
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
                                <h3 className="text-xl font-black text-[#0A0A0A] leading-[1.2] tracking-tighter mb-4 uppercase group-hover:text-[#55ABE4] transition-colors">
                                  {post.title}
                                </h3>
                                {previewText && (
                                  <p className="text-zinc-600 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                                    {previewText}
                                  </p>
                                )}
                                <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
                                  <span className="text-[10px] font-black uppercase tracking-widest text-[#0A0A0A]">Leggi Tutto</span>
                                  <div className="w-8 h-8 flex items-center justify-center bg-zinc-50 group-hover:bg-[#0A0A0A] group-hover:text-white transition-all">
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
                <div className="border-[4px] border-[#0A0A0A] p-16 md:p-24 text-center">
                  <Rss size={48} className="mx-auto text-[#55ABE4] mb-8" />
                  <h2 className="text-3xl md:text-5xl font-black text-[#0A0A0A] uppercase tracking-tighter mb-6">
                    Archivio in aggiornamento.
                  </h2>
                  <p className="text-zinc-500 text-base max-w-xl mx-auto leading-relaxed">
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
