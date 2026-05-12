import { Header } from '../_components/Header'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import { Calendar, ArrowRight, Rss, Clock } from 'lucide-react'
import { FadeIn } from '../_components/FadeIn'

export const metadata = {
  title: 'News & Aggiornamenti — Trialux',
  description: 'Aggiornamenti dal campo, novità dal settore elettrico e notizie dall\'azienda Trialux.',
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

  return (
    <div className="bg-white min-h-screen text-[#0A0A0A] font-sans">
      <Header />

      <main className="w-full relative">

        {/* ── HERO ── full-bleed photo */}
        <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-end overflow-hidden pb-16 md:pb-24 lg:pb-32">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
              alt="News e Blog"
              className="w-full h-full object-cover scale-[1.04] transition-transform duration-[10s] ease-out"
              style={{ transformOrigin: 'center bottom' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 to-transparent" style={{ width: '60%' }} />
          </div>

          {/* Arc decorations */}
          <div className="absolute top-[-10%] right-[-8%] w-[55vw] h-[120%]  border border-white/[0.04] pointer-events-none" />
          <div className="absolute top-[5%] right-[-15%] w-[45vw] h-[110%]  border border-[#EE2430]/[0.06] pointer-events-none" />

          <div className="container-wide relative z-10 max-w-[1400px] w-full">
            <FadeIn delay={0} effect="mask">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[1.5px] bg-[#EE2430]" />
                <span className="text-[#EE2430] font-semibold tracking-[0.25em] uppercase text-[11px]">News &amp; Blog</span>
              </div>
              <h1 className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-black tracking-[-0.01em] text-white leading-[1.1] mb-3 max-w-2xl">
                Dal campo, dal settore.
              </h1>
            </FadeIn>
            <FadeIn delay={200} effect="mask">
              <p className="text-white/60 text-sm md:text-base max-w-lg leading-relaxed">
                Aggiornamenti dal campo, novità dal settore e notizie dall'azienda.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── CONTENUTO NEWS ── */}
        <section className="bg-white py-14 md:py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">

            {posts.length > 0 ? (
              <div className="space-y-20 lg:space-y-32">

                {/* FEATURED POST — large editorial layout */}
                {featuredPost && (
                  <FadeIn>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-8">Articolo in evidenza</p>
                    <Link
                      href={`/news/${featuredPost.slug || featuredPost.id}`}
                      className="group grid grid-cols-1 lg:grid-cols-12 gap-0  overflow-hidden section-dark hover:shadow-2xl transition-shadow duration-500"
                    >
                      {/* Image — 7 cols */}
                      <div className="lg:col-span-7 aspect-video lg:aspect-auto relative bg-zinc-900 min-h-[280px] overflow-hidden">
                        {featuredPost.featuredImage ? (
                          <img
                            src={typeof featuredPost.featuredImage === 'string' ? featuredPost.featuredImage : featuredPost.featuredImage.url}
                            alt={featuredPost.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s]"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Rss size={64} className="text-zinc-700" />
                          </div>
                        )}
                        {/* Date badge */}
                        <div className="absolute top-6 left-6 flex items-center gap-2 section-dark/80 backdrop-blur-sm px-4 py-2 ">
                          <Calendar size={13} className="text-[#55ABE4]" />
                          <span className="text-white text-xs font-bold">
                            {new Date(featuredPost.publishedDate || featuredPost.createdAt).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' })}
                          </span>
                        </div>
                      </div>

                      {/* Text — 5 cols */}
                      <div className="lg:col-span-5 p-10 lg:p-14 flex flex-col justify-center section-dark">
                        <div className="flex items-center gap-2 mb-6">
                          <span className="w-6 h-[2px] bg-[#EE2430]" />
                          <span className="text-[#EE2430] text-xs font-bold tracking-widest uppercase">Trialux News</span>
                        </div>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white leading-tight tracking-tight mb-6 group-hover:text-[#55ABE4] transition-colors">
                          {featuredPost.title}
                        </h2>
                        {featuredPost.excerpt && (
                          <p className="text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3">
                            {featuredPost.excerpt}
                          </p>
                        )}
                        <div className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest mt-auto group-hover:text-[#55ABE4] transition-colors">
                          <span>Leggi l'articolo</span>
                          <div className="w-8 h-8  bg-white/10 group-hover:bg-[#55ABE4] flex items-center justify-center transition-colors">
                            <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                )}

                {/* GRID POSTS — editorial 3-col */}
                {gridPosts.length > 0 && (
                  <div>
                    <FadeIn>
                      <div className="flex items-center justify-between border-b border-zinc-100 pb-6 mb-6">
                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Tutti gli articoli</p>
                        <span className="text-xs text-zinc-300 font-medium">{gridPosts.length} articol{gridPosts.length === 1 ? 'o' : 'i'}</span>
                      </div>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {gridPosts.map((post: any, index: number) => (
                        <FadeIn key={post.id} delay={index * 80} className="h-full">
                          <Link
                            href={`/news/${post.slug || post.id}`}
                            className="group flex flex-col h-full  overflow-hidden border border-zinc-100 hover:border-zinc-200 hover:shadow-lg transition-all duration-300"
                          >
                            {/* Thumbnail */}
                            <div className="aspect-video relative bg-zinc-100 overflow-hidden">
                              {post.featuredImage ? (
                                <img
                                  src={typeof post.featuredImage === 'string' ? post.featuredImage : post.featuredImage.url}
                                  alt={post.title}
                                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
                                />
                              ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-zinc-50">
                                  <Rss size={32} className="text-zinc-300" />
                                </div>
                              )}
                            </div>

                            {/* Content */}
                            <div className="p-7 flex flex-col flex-grow">
                              <div className="flex items-center gap-3 text-zinc-400 text-xs font-medium mb-4">
                                <Calendar size={12} />
                                <span>{new Date(post.publishedDate || post.createdAt).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                              </div>
                              <h3 className="text-lg font-black text-[#0A0A0A] group-hover:text-[#55ABE4] leading-tight tracking-tight mb-3 transition-colors">
                                {post.title}
                              </h3>
                              {post.excerpt && (
                                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 mb-6">
                                  {post.excerpt}
                                </p>
                              )}
                              <div className="mt-auto flex items-center gap-2 text-xs font-bold text-zinc-400 group-hover:text-[#55ABE4] uppercase tracking-widest transition-colors">
                                <span>Leggi</span>
                                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </Link>
                        </FadeIn>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ) : (
              /* EMPTY STATE — clean, no chamfer */
              <FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-2  overflow-hidden border border-zinc-100 shadow-sm">
                  <div className="relative min-h-[280px] section-dark overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1974&auto=format&fit=crop"
                      alt="News in arrivo"
                      className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20  bg-white/10 flex items-center justify-center">
                        <Rss size={36} className="text-white/60" />
                      </div>
                    </div>
                  </div>
                  <div className="p-12 lg:p-16 flex flex-col justify-center bg-zinc-50">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="w-8 h-[2px] bg-[#55ABE4]" />
                      <span className="text-[#55ABE4] text-xs font-bold tracking-widest uppercase">In arrivo</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-[#0A0A0A] leading-tight tracking-tight mb-4">
                      Nessun articolo ancora pubblicato.
                    </h2>
                    <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                      Torna a trovarci presto per tutti gli aggiornamenti dal campo e le novità aziendali.
                    </p>
                  </div>
                </div>
              </FadeIn>
            )}

          </div>
        </section>

      </main>
    </div>
  )
}
