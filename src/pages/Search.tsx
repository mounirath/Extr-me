import { useState } from 'react';
import { Search as SearchIcon, X, Film, Tv2, Sparkles } from 'lucide-react';
import { contents } from '../data/mockData';
import ContentCard from '../components/ContentCard';

const suggestions = [
  'Thriller',
  'Saison 3',
  'Arte',
  'Polar',
  'Cinéma français',
  'Documentaire nature',
];

const categories = [
  { id: 'tout', label: 'Tout', icon: Sparkles },
  { id: 'films', label: 'Films', icon: Film },
  { id: 'series', label: 'Séries', icon: Tv2 },
];

export default function Search() {
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState('tout');
  const q = query.trim().toLowerCase();

  const results = contents.filter((c) => {
    const matchQuery =
      !q || c.title.toLowerCase().includes(q) || c.genres.some((g) => g.toLowerCase().includes(q));
    const matchCat = activeCat === 'tout' || (activeCat === 'films' ? c.type === 'film' : c.type === 'serie');
    return matchQuery && matchCat;
  });
  const trendingSearches = ['Nuit de Velours', 'Code Source', 'Polar français', 'Sci-fi 2025'];

  return (
    <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-10 lg:py-16">
      <h1 className="font-display text-[36px] sm:text-[48px] font-light tracking-[-0.02em]">
        <span className="italic text-[color:var(--color-violet-300)]">Rechercher</span>.
      </h1>
      <p className="mt-2 text-[15px] text-[color:var(--color-ink-muted)]">
        Trouvez votre prochaine obsession.
      </p>

      {/* Champ de recherche */}
      <div className="mt-8 relative">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-[color:var(--color-violet-300)]">
          <SearchIcon className="w-5 h-5" strokeWidth={1.75} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Films, séries, genres…"
          className="w-full h-14 pl-14 pr-14 rounded-2xl bg-[color:var(--color-surface)] border border-[color:var(--color-line)] focus:border-[color:var(--color-violet-500)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-violet-500)]/20 text-[color:var(--color-ink)] placeholder:text-[color:var(--color-ink-faint)] transition-all"
          autoFocus
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute inset-y-0 right-5 flex items-center text-[color:var(--color-ink-faint)] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Suggestions */}
      {!query && (
        <div className="mt-5 flex items-center gap-2 flex-wrap">
          <span className="text-[11px] tracking-[0.2em] uppercase text-[color:var(--color-ink-faint)] mr-2">
            Tendances
          </span>
          {trendingSearches.map((t) => (
            <button
              key={t}
              onClick={() => setQuery(t)}
              className="px-3 py-1.5 rounded-full bg-[color:var(--color-surface)] border border-[color:var(--color-line)] text-[12px] text-[color:var(--color-ink-muted)] hover:text-white hover:border-[color:var(--color-violet-500)]/40 transition-all"
            >
              {t}
            </button>
          ))}
        </div>
      )}

      {/* Filtres */}
      <div className="mt-8 flex items-center gap-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[12px] font-medium transition-all ${
                activeCat === cat.id
                  ? 'bg-[color:var(--color-violet-500)] text-white'
                  : 'border border-[color:var(--color-line)] text-[color:var(--color-ink-muted)] hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5" strokeWidth={1.75} />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Résultats */}
      <div className="mt-8">
        {query && (
          <div className="mb-4 text-[12px] text-[color:var(--color-ink-faint)]">
            {results.length} résultat{results.length > 1 ? 's' : ''} pour « {query} »
          </div>
        )}
        {results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {results.map((c) => (
              <ContentCard key={c.id} content={c} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <div className="inline-flex w-16 h-16 rounded-full bg-[color:var(--color-surface)] border border-[color:var(--color-line)] items-center justify-center text-[color:var(--color-violet-400)] mb-4">
              <SearchIcon className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-[20px] font-medium">
              {query ? 'Aucun résultat' : 'Lancez votre recherche'}
            </h3>
            <p className="mt-2 text-[13px] text-[color:var(--color-ink-muted)] max-w-xs mx-auto">
              {query
                ? 'Essayez avec un autre mot-clé ou explorez les suggestions ci-dessus.'
                : 'Tapez le titre d\'un film, d\'une série ou un genre pour commencer.'}
            </p>
            {!query && (
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="px-3 py-1.5 rounded-full bg-[color:var(--color-surface)] border border-[color:var(--color-line)] text-[12px] text-[color:var(--color-ink-muted)] hover:text-white hover:border-[color:var(--color-violet-500)]/40"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}