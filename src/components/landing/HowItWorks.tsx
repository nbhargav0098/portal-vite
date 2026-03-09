const steps = [
  {
    title: 'Create Your Account',
    icon: <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 9a7 7 0 0 1 14 0" />,
  },
  {
    title: 'Add Job Applications',
    icon: <path d="M12 5v14M5 12h14" />,
  },
  {
    title: 'Track Progress Through Hiring Stages',
    icon: <path d="M4 19h16M6 16l4-4 3 3 5-7" />,
  },
]

function HowItWorks() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="how-it-works">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Manage Your Job Search in 3 Simple Steps
        </h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-lg shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">
              Step {index + 1}
            </p>
            <div className="mx-auto mt-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/15 text-sky-300">
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {step.icon}
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
