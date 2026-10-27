
export default function PhotoCard({
  photo,
  isFavourite,
  onToggleFavourite,
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111522] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-xl hover:shadow-indigo-950/30">
      <div className="relative overflow-hidden bg-slate-800">
        <img
          src={`https://picsum.photos/id/${photo.id}/600/400`}
          alt={`Photograph by ${photo.author}`}
          loading="lazy"
          className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

        <button
          type="button"
          onClick={() => onToggleFavourite(photo)}
          aria-label={
            isFavourite
              ? `Remove ${photo.author} from favourites`
              : `Add ${photo.author} to favourites`
          }
          aria-pressed={isFavourite}
          className={`absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 backdrop-blur-md transition-all duration-200 ${
            isFavourite
              ? 'scale-105 bg-rose-500 text-white shadow-lg shadow-rose-950/30'
              : 'bg-black/45 text-white hover:scale-105 hover:bg-rose-500'
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill={isFavourite ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-between gap-3 p-4">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-300">
            Photographer
          </p>

          <h2 className="mt-1.5 truncate text-sm font-medium text-slate-100">
            {photo.author}
          </h2>
        </div>

        <span className="shrink-0 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-xs text-slate-400">
          #{photo.id}
        </span>
      </div>
    </article>
  )
}
