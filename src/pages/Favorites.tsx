import { contents } from '../data/mockData';
import ContentCard from '../components/ContentCard';
import { Heart, Bookmark, Clock } from 'lucide-react';

export default function Favorites() {
  const favs = contents.slice(0, 6);
  const watchLater = contents.slice(2, 9);
  const history = contents.slice(0, 4);

  return (
    <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-10 lg:py-16">
      <h1 className="font-display text-[36px] sm:text-[48px] font-light tracking-[-0.02em]">
        Mes <span className="italic text-[color:var(--color-violet-300)]">favoris</span>.
      </h1>
      <p className="mt-2 text-[15px] text-[color:var(--color-ink-muted)]">
        Tout ce que vous aimez, à portée de main.
      </p>

      {/* Stats rapides */}
      <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
        {[
          { icon: Heart, value: 47, label: 'Favoris', color: 'from-[color:var(--color-violet-600)] to-[color:var(--color-violet-900)]' },
          { icon: Bookmark, value: 12, label: 'À regarder', color: 'from-[#3b1d6e] to-[#1c0e3e]' },
          { icon: Clock, value: 184, label: 'Heures vues', color: 'from-[#2e1065] to-[#160728]' },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="relative overflow-hidden rounded-2xl border border-[color:var(--color-line)] bg-gradient-to-br p-5 sm:p-6"
              style={{ backgroundImage: 'linear-gradient(135deg, var(--color-violet-950), var(--color-surface))' }}
            >
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${s.color} blur-2xl opacity-60`} />
              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[color:var(--color-violet-500)]/15 border border-[color:var(--color-violet-500)]/30 flex items-center justify-center text-[color:var(--color-violet-300)]">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="font-display text-[24px] sm:text-[30px] font-light leading-none">{s.value}</div>
                  <div className="mt-1 text-[11px] tracking-[0.15em] uppercase text-[color:var(--color-ink-faint)]">
                    {s.label}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Favoris */}
      <section className="mt-12">
        <div className="flex items-center gap-2 mb-5">
          <Heart className="w-4 h-4 text-[color:var(--color-violet-300)]" />
          <h2 className="font-display text-[22px] font-normal">Vos coups de cœur</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {favs.map((c) => (
            <ContentCard key={c.id} content={c} />
          ))}
        </div>
      </section>

      {/* À regarder plus tard */}
      <section className="mt-12">
        <div className="flex items-center gap-2 mb-5">
          <Bookmark className="w-4 h-4 text-[color:var(--color-violet-300)]" />
          <h2 className="font-display text-[22px] font-normal">À regarder plus tard</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {watchLater.map((c) => (
            <ContentCard key={c.id} content={c} />
          ))}
        </div>
      </section>

      {/* Historique */}
      <section className="mt-12">
        <div className="flex items-center gap-2 mb-5">
          <Clock className="w-4 h-4 text-[color:var(--color-violet-300)]" />
          <h2 className="font-display text-[22px] font-normal">Reprise récente</h2>
        </div>
        <div className="space-y-3">
          {history.map((c) => (
            <div
              key={c.id}
              className="flex items-center gap-4 p-3 rounded-2xl bg-[color:var(--color-surface)] border border-[color:var(--color-line)] hover:border-[color:var(--color-line-strong)] hover:bg-[color:var(--color-surface-2)] transition-all cursor-pointer"
            >
              <img src={c.image} alt={c.title} className="w-16 h-16 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-[14px] text-[color:var(--color-ink)] truncate">{c.title}</div>
                <div className="mt-0.5 text-[12px] text-[color:var(--color-ink-faint)]">
                  {c.year} • {c.type === 'film' ? 'Film' : `Saison ${c.seasons}`}
                </div>
                {typeof c.progress === 'number' && c.progress > 0 && c.progress < 100 && (
                  <div className="mt-2 h-1 w-full max-w-xs bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[color:var(--color-violet-500)] to-[color:var(--color-violet-300)]"
                      style={{ width: `${c.progress}%` }}
                    />
                  </div>
                )}
              </div>
              <button className="shrink-0 px-4 py-1.5 rounded-full bg-[color:var(--color-violet-500)]/15 border border-[color:var(--color-violet-500)]/40 text-[color:var(--color-violet-200)] text-[12px] font-medium hover:bg-[color:var(--color-violet-500)]/25 transition-colors">
                Reprendre
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}