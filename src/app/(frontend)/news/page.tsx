import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import { Header } from '../_components/Header'

export default async function NewsPage() {
  const payload = await getPayload({ config })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    limit: 20,
    sort: '-publishedDate',
  })

  return (
    <>
      <Header />
      <main className="w-full">
        {/* 6.1 Intestazione pagina */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-zinc-900 border-b border-zinc-800">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="text-purple-500 font-bold tracking-wider uppercase text-sm mb-4 block">News / Blog</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 max-w-4xl mx-auto text-white">
              News
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Aggiornamenti dal campo, novità dal settore e notizie dall’azienda.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link
                    href={`/posts/${post.slug}`}
                    key={post.id}
                    className="group flex flex-col gap-6 p-6 bg-zinc-900/40 border border-zinc-800 rounded-3xl hover:border-purple-500 transition-all hover:-translate-y-1"
                  >
                    {post.featuredImage &&
                      typeof post.featuredImage !== 'number' &&
                      post.featuredImage.url ? (
                        <img
                          src={post.featuredImage.url}
                          alt={post.title}
                          className="w-full aspect-[4/3] object-cover rounded-2xl bg-zinc-800"
                        />
                      ) : (
                        <div className="w-full aspect-[4/3] bg-zinc-800 rounded-2xl flex items-center justify-center">
                          <span className="text-zinc-600">No Image</span>
                        </div>
                      )}
                    <div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-zinc-500 text-sm">
                        {new Date(post.publishedDate || post.createdAt).toLocaleDateString('it-IT', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center text-zinc-500 py-16 bg-zinc-900/30 rounded-3xl border border-zinc-800">
                <p className="text-lg">Nessun articolo ancora pubblicato. Torna a trovarci presto.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
