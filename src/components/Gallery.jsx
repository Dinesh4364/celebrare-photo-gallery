
import { useCallback, useMemo, useState } from 'react'
import PhotoCard from './PhotoCard'

export default function Gallery({
    photos,
    favourites,
    onToggleFavourite,
}) {
    const [search, setSearch] = useState('')

    const handleSearchChange = useCallback((event) => {
        setSearch(event.target.value)
    }, [])

    const filteredPhotos = useMemo(() => {
        const keyword = search.trim().toLowerCase()

        return photos.filter((photo) =>
            photo.author.toLowerCase().includes(keyword)
        )
    }, [photos, search])

    return (
        <section>
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
                        The collection
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        Explore photographs
                    </h2>

                    <p className="mt-2 text-sm text-slate-400">
                        {filteredPhotos.length} of {photos.length} photographs
                    </p>
                </div>

                <div className="w-full sm:max-w-sm">
                    <label
                        htmlFor="photo-search"
                        className="mb-2 block text-xs font-medium text-slate-400"
                    >
                        Search by photographer
                    </label>

                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#111522] px-4 transition focus-within:border-indigo-400/60 focus-within:ring-2 focus-within:ring-indigo-400/10">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="h-5 w-5 shrink-0 text-slate-500"
                            aria-hidden="true"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <path d="m16 16 4 4" strokeLinecap="round" />
                        </svg>

                        <input
                            id="photo-search"
                            type="search"
                            value={search}
                            onChange={handleSearchChange}
                            placeholder="Try an author's name..."
                            className="min-w-0 w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-500"
                        />
                    </div>
                </div>
            </div>

            {filteredPhotos.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-16 text-center">
                    <h3 className="text-lg font-medium text-white">
                        No photographs found
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                        Try a different photographer's name.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredPhotos.map((photo) => (
                        <PhotoCard
                            key={photo.id}
                            photo={photo}
                            isFavourite={favourites.some(
                                (item) => item.id === photo.id
                            )}
                            onToggleFavourite={onToggleFavourite}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}
