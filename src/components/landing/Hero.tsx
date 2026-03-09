function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:pt-20">
      <div>
        <p className="inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300">
          JobTracker Platform
        </p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Organize Your Job Search With JobTracker
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-300">
          Track applications, manage interviews, and stay organized throughout
          your job hunt.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-900/30 transition hover:-translate-y-0.5 hover:bg-sky-400"
            type="button"
          >
            Start Tracking Jobs
          </button>
          <button
            className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
            type="button"
          >
            See How It Works
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <p className="text-sm font-semibold text-white">Job List</p>
            <div className="mt-3 space-y-2">
              <div className="rounded-lg bg-white/5 p-2">
                <p className="text-xs font-medium text-slate-200">Frontend Engineer</p>
                <p className="text-xs text-slate-400">Acme • Applied</p>
              </div>
              <div className="rounded-lg bg-white/5 p-2">
                <p className="text-xs font-medium text-slate-200">Product Designer</p>
                <p className="text-xs text-slate-400">Nova Labs • Interview</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <p className="text-sm font-semibold text-white">Analytics</p>
            <div className="mt-3 flex h-24 items-end gap-2">
              <div className="h-8 w-5 rounded bg-sky-400/60" />
              <div className="h-14 w-5 rounded bg-sky-400/70" />
              <div className="h-10 w-5 rounded bg-sky-400/50" />
              <div className="h-20 w-5 rounded bg-sky-400" />
              <div className="h-16 w-5 rounded bg-sky-400/80" />
            </div>
          </article>
        </div>

        <article className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
          <p className="text-sm font-semibold text-white">Kanban Board</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-white/5 p-2">
              <p className="text-xs font-medium text-slate-300">Applied</p>
              <div className="mt-2 h-8 rounded bg-slate-700/40" />
            </div>
            <div className="rounded-lg bg-white/5 p-2">
              <p className="text-xs font-medium text-slate-300">Interview</p>
              <div className="mt-2 h-8 rounded bg-slate-700/40" />
            </div>
            <div className="rounded-lg bg-white/5 p-2">
              <p className="text-xs font-medium text-slate-300">Offer</p>
              <div className="mt-2 h-8 rounded bg-slate-700/40" />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Hero
