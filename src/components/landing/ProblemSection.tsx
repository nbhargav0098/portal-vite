const problems = [
  {
    title: 'Scattered Information',
    description: 'Applications get buried across job portals, inboxes, and notes.',
  },
  {
    title: 'Messy Spreadsheets',
    description: 'Manual tracking quickly becomes hard to maintain and error-prone.',
  },
  {
    title: 'Missed Interview Details',
    description: 'Important dates and prep notes are easy to forget under pressure.',
  },
  {
    title: 'Unclear Status',
    description: 'Without structure, it is difficult to know what needs follow-up.',
  },
]

function ProblemSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Job Searching Shouldn&apos;t Be Chaotic
        </h2>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((problem) => (
          <article
            key={problem.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <h3 className="text-base font-semibold text-white">{problem.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{problem.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProblemSection
