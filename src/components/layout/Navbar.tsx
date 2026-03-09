import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="text-lg font-semibold tracking-tight text-white" to="/">
          JobTracker
        </Link>

        <button
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded-lg border border-white/15 p-2 text-slate-200 transition hover:bg-white/10 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
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
            {isOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
          <Link
            className="text-sm font-medium text-slate-300 transition hover:text-white"
            to="/about"
          >
            Login
          </Link>
          <Link
            className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-900/30 transition hover:-translate-y-0.5 hover:bg-sky-400"
            to="/about"
          >
            Get Started
          </Link>
        </nav>
      </div>

      {isOpen && (
        <nav className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item.label}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
              onClick={() => setIsOpen(false)}
              to="/about"
            >
              Login
            </Link>
            <Link
              className="rounded-lg bg-sky-500 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-sky-400"
              onClick={() => setIsOpen(false)}
              to="/about"
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar
