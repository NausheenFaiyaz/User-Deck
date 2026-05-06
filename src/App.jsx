import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Pagination from './components/Pagination'
import UserGrid from './components/UserGrid'

const API_URL = 'https://api.freeapi.app/api/v1/public/randomusers'
const PAGE_SIZE = 9

function App() {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [retryToken, setRetryToken] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    const fetchUsers = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(`${API_URL}?page=${page}&limit=${PAGE_SIZE}`, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error('Unable to fetch users right now.')
        }

        const payload = await response.json()

        if (!payload?.success || !payload?.data) {
          throw new Error('Unexpected API response format.')
        }

        setUsers(payload.data.data || [])
        setTotalPages(Number(payload.data.totalPages) || 1)
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message || 'Something went wrong while loading users.')
          setUsers([])
        }
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()

    return () => controller.abort()
  }, [page, retryToken])

  const canGoPrev = page > 1
  const canGoNext = page < totalPages

  return (
    <main className="app-shell">
      <Header />

      <Pagination
        page={page}
        totalPages={totalPages}
        loading={loading}
        canGoPrev={canGoPrev}
        canGoNext={canGoNext}
        onPrev={() => setPage((prev) => prev - 1)}
        onNext={() => setPage((prev) => prev + 1)}
      />

      {loading && <p className="status">Loading users...</p>}

      {!loading && error && (
        <section className="status-card" role="alert">
          <p>{error}</p>
          <button type="button" onClick={() => setRetryToken((value) => value + 1)}>
            Try Again
          </button>
        </section>
      )}

      {!loading && !error && <UserGrid users={users} />}
    </main>
  )
}

export default App
