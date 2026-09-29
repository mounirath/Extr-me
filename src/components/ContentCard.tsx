import { Link } from 'react-router-dom';
import { Play, Plus, Star } from 'lucide-react';
import type { Content } from '../data/mockData';

const badgeStyles: Record<string, string> = {
  NOUVEAU: 'bg-[color:var(--color-violet-500)] text-white',
  EXCLUSIF: 'bg-gradient-to-r from-[color:var(--color-violet-700)] to-[color:var(--color-violet-400)] text-white',
  TENDANCE: 'bg-black/70 backdrop-blur-md border border-[color:var(--color-violet-400)]/60 text-[color:var(--color-violet-200)]',
};

export default function ContentCard({ content }: { content: Content }) {
  return (
    <Link
      to={`/accueil`}
      className="group relative block w-full overflow-hidden rounded-xl bg-[color:var(--color-surface)] border border-[color:var(--color-line)] hover:border-[color:var(--color-line-strong)] transition-all duration-300"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={content.image}
          alt={content.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06050a] via-[#06050a]/30 to-transparent" />

        {/* Badge */}
        {content.badge && (
          <div className={`absolute top-2 left-2 px-1.5 py-0.5 rounded-md text-[9px] font-semibold tracking-[0.1em] ${badgeStyles[content.badge]}`}>
            {content.badge}
          </div>
        )}

        {/* Boutons au survol */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            onClick={(e) => e.preventDefault()}
            className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-black hover:bg-white shadow-lg"
            aria-label="Lire"
          >
            <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
          </button>
          <button
            onClick={(e) => e.preventDefault()}
            className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80"
            aria-label="Ajouter"
          >
            <Plus className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>

        {/* Barre de progression */}
        {typeof content.progress === 'number' && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-[color:var(--color-violet-400)] to-[color:var(--color-violet-200)]"
              style={{ width: `${content.progress}%` }}
            />
          </div>
        )}

        {/* Note */}
        <div className="absolute top-2 right-2 flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10">
          <Star className="w-2.5 h-2.5 text-[color:var(--color-violet-300)]" fill="currentColor" />
          <span className="text-[10px] font-semibold tracking-wide">{content.rating}</span>
        </div>
      </div>

      <div className="px-3 py-2.5">
        <h3 className="font-medium text-[13px] text-[color:var(--color-ink)] truncate">{content.title}</h3>
        <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-[color:var(--color-ink-faint)]">
          <span>{content.year}</span>
          <span className="opacity-50">•</span>
          <span className="truncate">{content.type === 'film' ? content.duration : `S${content.seasons}`}</span>
        </div>
      </div>
    </Link>
  );
}