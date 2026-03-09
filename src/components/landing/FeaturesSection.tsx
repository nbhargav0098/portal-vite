import type { ReactNode } from 'react'

type Feature = {
  title: string
  description: string
  icon: ReactNode
}

const features: Feature[] = [
  {
    title: 'Track Applications',
    description:
      'Keep all your job applications organized with company details, roles, and status updates.',
    icon: (
      <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
    ),
  },
  {
    title: 'Visual Dashboard',
    description:
      'Get insights into your job search with analytics and progress tracking.',
    icon: <path d="M4 19h16M6 16l4-4 3 3 5-7" />,
  },
  {
    title: 'Kanban Job Pipeline',
    description:
      'Move applications across hiring stages with an intuitive drag-and-drop board.',
    icon: <path d="M4 6h16M4 12h10M4 18h7" />,
  },
  {
    title: 'Smart Search & Filters',
    description:
      'Easily find and manage applications using powerful search and filtering tools.',
    icon: <path d="M11 19a8 8 0 1 1 5.3-14l5.2 5.2-2 2-5.2-5.2A8 8 0 0 1 11 19Z" />,
  },
  {
    title: 'Interview Notes',
    description:
      'Save important notes and reminders for each job opportunity.',
    icon: <path d="M6 4h12v16l-6-3-6 3V4Zm3 5h6M9 12h6" />,
  },
  {
    title: 'Stay Organized',
    description:
      'Never lose track of opportunities with a structured job search workflow.',
    icon: <path d="M5 7h14M5 12h14M5 17h14" />,
  },
]

function FeaturesSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="features">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Powerful Features to Manage Your Job Hunt
        </h2>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-sky-900/20"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/15 text-sky-300">
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {feature.icon}
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
