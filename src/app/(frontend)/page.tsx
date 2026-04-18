import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import { Header } from './_components/Header'
import './style.css'

export default async function HomePage() {
  const payload = await getPayload({ config })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    limit: 6,
    sort: '-publishedDate',
  })

  const { docs: jobs } = await payload.find({
    collection: 'jobs',
    limit: 6,
    where: {
      status: {
        equals: 'published',
      },
    },
  })

  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-16">
        <section className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="inline-flex items-center px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-bold uppercase tracking-wider">
                Magazine
              </span>
              <h2 className="text-4xl font-extrabold mt-2 tracking-tight">Ultimi Articoli</h2>
            </div>
            <p className="text-zinc-400">Scopri le novità di Trialux</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                href={`/posts/${post.slug}`}
                key={post.id}
                className="group flex flex-col gap-4 p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-blue-500 transition-all hover:-translate-y-1"
              >
                {post.featuredImage &&
                  typeof post.featuredImage !== 'number' &&
                  post.featuredImage.url && (
                    <img
                      src={post.featuredImage.url}
                      alt={post.title}
                      className="w-full aspect-video object-cover rounded-xl bg-zinc-800"
                    />
                  )}
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
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
        </section>

        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="inline-flex items-center px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-bold uppercase tracking-wider">
                Careers
              </span>
              <h2 className="text-4xl font-extrabold mt-2 tracking-tight">Posizioni Aperte</h2>
            </div>
            <p className="text-zinc-400">Unisciti al nostro team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <Link
                href={`/jobs/${job.slug}`}
                key={job.id}
                className="group flex flex-col justify-between p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-emerald-500 transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 text-xs bg-zinc-800 text-zinc-400 rounded-md font-medium uppercase">
                      {job.location}
                    </span>
                    <span className="px-2 py-1 text-xs bg-zinc-800 text-zinc-400 rounded-md font-medium uppercase">
                      {job.contractType.replace('_', ' ')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors uppercase tracking-tight">
                    {job.jobTitle}
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2 line-clamp-2">
                    Sede: {job.location} • Inizio immediato
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-zinc-800 text-emerald-500 font-bold text-sm">
                  Dettagli posizione →
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
