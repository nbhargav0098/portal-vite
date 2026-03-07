import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
        <header className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Portal Vite
          </p>
          <nav className="flex gap-4 text-sm font-medium text-slate-600">
            <Link className="hover:text-blue-600" to="/">
              Home
            </Link>
            <Link className="hover:text-blue-600" to="/about">
              About
            </Link>
          </nav>
        </header>
        <section className="pt-6">
          <Outlet />
        </section>
      </div>
    </main>
  )
}

export default App
