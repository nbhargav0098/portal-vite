function DashboardPreview() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          A Clear Overview of Your Job Search
        </h2>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 backdrop-blur-xl">
          <p className="text-sm font-semibold text-white">Applications List</p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg bg-white/10 p-3">
              <div className="h-2 w-24 rounded-full bg-slate-200/70" />
              <div className="mt-2 h-2 w-36 rounded-full bg-slate-400/40" />
            </div>
            <div className="rounded-lg bg-white/10 p-3">
              <div className="h-2 w-20 rounded-full bg-slate-200/70" />
              <div className="mt-2 h-2 w-28 rounded-full bg-slate-400/40" />
            </div>
          </div>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 backdrop-blur-xl">
          <p className="text-sm font-semibold text-white">Kanban Pipeline</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="rounded-lg bg-white/10 p-2">
              <div className="h-14 rounded bg-slate-400/30" />
            </div>
            <div className="rounded-lg bg-white/10 p-2">
              <div className="h-14 rounded bg-slate-400/30" />
            </div>
            <div className="rounded-lg bg-white/10 p-2">
              <div className="h-14 rounded bg-slate-400/30" />
            </div>
          </div>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 backdrop-blur-xl">
          <p className="text-sm font-semibold text-white">Analytics Dashboard</p>
          <div className="mt-4 flex h-24 items-end gap-2">
            <div className="h-7 w-6 rounded bg-sky-400/50" />
            <div className="h-12 w-6 rounded bg-sky-400/60" />
            <div className="h-16 w-6 rounded bg-sky-400/70" />
            <div className="h-20 w-6 rounded bg-sky-400/90" />
            <div className="h-14 w-6 rounded bg-sky-400/70" />
          </div>
        </article>
      </div>
    </section>
  )
}

export default DashboardPreview
