function CTASection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 px-6 py-14 text-center shadow-2xl shadow-sky-950/30 backdrop-blur-xl sm:px-10">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Start Tracking Your Job Applications Today
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          Take control of your job search with JobTracker.
        </p>
        <button
          className="mt-8 rounded-xl bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-950/30 transition hover:-translate-y-0.5 hover:bg-sky-400"
          type="button"
        >
          Create Free Account
        </button>
      </div>
    </section>
  )
}

export default CTASection
