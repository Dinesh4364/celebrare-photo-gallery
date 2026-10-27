import { useEffect, useReducer } from 'react'
import useFetchPhotos from './hooks/useFetchPhotos'
import Gallery from './components/Gallery'

const STORAGE_KEY = 'celebrare-photo-favourites'

function loadFavourites() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function favouritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE': {
      const exists = state.some(
        (photo) => photo.id === action.photo.id
      )

      return exists
        ? state.filter((photo) => photo.id !== action.photo.id)
        : [...state, action.photo]
    }

    default:
      return state
  }
}

export default function App() {
  const { photos, loading, error } = useFetchPhotos()

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    undefined,
    loadFavourites
  )

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(favourites)
      )
    } catch {
      // The gallery remains usable if storage is unavailable.
    }
  }, [favourites])

  function handleToggleFavourite(photo) {
    dispatch({
      type: 'TOGGLE_FAVOURITE',
      photo,
    })
  }

  return (
    <main className="min-h-screen bg-[#0B0D14] text-white">
      <header className="border-b border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-9 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-400" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
                Photography collection
              </p>
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Frames<span className="text-indigo-400">.</span>
            </h1>

            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
              A little space for beautiful photographs and the people
              behind them.
            </p>
          </div>

          <div className="flex items-center gap-4 self-start rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 sm:self-auto">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M12 21.35 10.55 20C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6 6 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.51L12 21.35Z" />
              </svg>
            </div>

            <div>
              <p className="text-xs text-slate-400">Your favourites</p>
              <p className="mt-1 text-2xl font-semibold">
                {favourites.length}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        {loading && (
          <div
            role="status"
            className="flex min-h-72 flex-col items-center justify-center gap-5"
          >
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-indigo-400" />
            <p className="text-sm text-slate-400">
              Gathering beautiful photographs...
            </p>
          </div>
        )}

        {!loading && error && (
          <div
            role="alert"
            className="rounded-2xl border border-rose-400/20 bg-rose-400/5 p-6"
          >
            <h2 className="font-semibold text-rose-300">
              We couldn't load the photographs
            </h2>
            <p className="mt-2 text-sm text-slate-400">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <Gallery
            photos={photos}
            favourites={favourites}
            onToggleFavourite={handleToggleFavourite}
          />
        )}
      </div>

      <footer className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Frames. — A photo gallery</p>
          <p>Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </main>
  )
}
