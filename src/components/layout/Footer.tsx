import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <Link className="text-lg font-semibold tracking-tight text-white" to="/">
            JobTracker
          </Link>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Product</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>
              <a className="transition hover:text-white" href="/#features">
                Features
              </a>
            </li>
            <li>
              <a className="transition hover:text-white" href="/#how-it-works">
                How It Works
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Account</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>
              <Link className="transition hover:text-white" to="/about">
                Login
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-white" to="/about">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Legal</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>
              <a className="transition hover:text-white" href="#">
                Privacy
              </a>
            </li>
            <li>
              <a className="transition hover:text-white" href="#">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">
        © 2026 JobTracker
      </div>
    </footer>
  )
}

export default Footer
