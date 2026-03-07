import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">404</h1>
      <p className="mt-3 text-slate-600">The page you requested does not exist.</p>
      <Link className="mt-5 inline-block text-blue-600 hover:text-blue-700" to="/">
        Go back home
      </Link>
    </div>
  )
}

export default NotFoundPage
