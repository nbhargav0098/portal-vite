import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h1 className="text-3xl font-bold tracking-tight text-white">404</h1>
        <p className="mt-3 text-slate-300">The page you requested does not exist.</p>
        <Link className="mt-5 inline-block text-sky-300 transition hover:text-sky-200" to="/">
          Go back home
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
