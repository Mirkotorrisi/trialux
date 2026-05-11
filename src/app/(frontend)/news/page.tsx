import { Header } from '../_components/Header'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import { Calendar, ArrowRight, Rss } from 'lucide-react'
import { FadeIn } from '../_components/FadeIn'

export default async function NewsPage() {
  const payload = await getPayload({ config })

  let posts = []
  try {
    const { docs } = await payload.find({
      collection: 'posts',
      sort: '-publishedDate',
    })
    posts = docs
  } catch (error) {
    console.log('Posts collection not found or error fetching posts:', error)
  }

  return (
    <div className="bg-white min-h-screen text-[#1A1A1A] selection:bg-blue-500/20 font-sans">
      <Header />
      
      <main className="w-full relative overflow-hidden">
        {/* Architectural Hero */}
        <section className="relative w-full h-[80vh] min-h-[400px] md:min-h-[300px] md:min-h-[400px] flex items-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" alt="News e Blog" className="w-full h-full object-cover scale-105 grayscale opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-transparent w-full md:w-[80%]" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col justify-center h-full pt-32">
            <FadeIn delay={0}>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-[#55ABE4]"></span>
                <span className="text-white font-bold tracking-widest uppercase text-sm">News & Blog</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[80px] font-black tracking-tighter mb-6 max-w-5xl text-white leading-[0.95]">
                Aggiornamenti dai <span className="text-[#55ABE4]">cantieri.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl lg:text-2xl text-zinc-300 max-w-3xl font-medium leading-tight">
                Progetti completati, traguardi aziendali e novità normative del settore energetico.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Griglia News B2B */}
        <section className="py-16 md:py-12 md:py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            
            {posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
                {posts.map((post: any, index: number) => (
                  <FadeIn key={post.id} delay={(index % 3) * 150} className="h-full">
                    <Link href={`/news/${post.slug || post.id}`} className="flex flex-col bg-white hover:bg-zinc-50 transition-colors h-full border-b border-r border-zinc-200 group">
                      {/* Immagine */}
                      <div className="aspect-[4/3] bg-zinc-100 relative overflow-hidden">
                        {post.featuredImage ? (
                          <img 
                            src={typeof post.featuredImage === 'string' ? post.featuredImage : post.featuredImage.url} 
                            alt={post.title} 
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]" 
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-zinc-300">
                            <Rss size={48} opacity={0.5} />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                      </div>
                      
                      {/* Contenuto */}
                      <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                        <div className="flex items-center gap-4 text-xs text-zinc-500 font-bold uppercase tracking-widest mb-6 border-b-2 border-[#1A1A1A] pb-4">
                          <span className="flex items-center gap-2"><Calendar size={16} /> {new Date(post.publishedDate).toLocaleDateString('it-IT')}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-[#1A1A1A] mb-6 group-hover:text-[#55ABE4] transition-colors leading-tight tracking-tighter">
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className="text-sm md:text-base lg:text-lg text-zinc-600 font-medium mb-8 leading-relaxed">
                            {post.excerpt}
                          </p>
                        )}
                        
                        <div className="mt-auto flex items-center justify-between">
                          <span className="text-[#1A1A1A] font-bold uppercase tracking-widest text-sm group-hover:text-[#55ABE4] transition-colors">Leggi articolo</span>
                          <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center group-hover:bg-[#55ABE4] group-hover:text-white transition-colors">
                            <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            ) : (
              <FadeIn delay={100}>
                <div className="max-w-4xl mx-auto text-center p-8 lg:p-20 bg-zinc-50 border border-zinc-200">
                  <div className="w-24 h-24 bg-zinc-200 flex items-center justify-center mx-auto mb-8">
                    <Rss size={40} className="text-zinc-500" />
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 text-[#1A1A1A] tracking-tighter">Nessun articolo pubblicato</h3>
                  <p className="text-base md:text-lg lg:text-xl text-zinc-600 font-medium max-w-2xl mx-auto">
                    Stiamo preparando nuovi contenuti aziendali. Torna a trovarci presto.
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
