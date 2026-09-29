import { useState } from 'react';
import { channels } from '../data/mockData';
import LiveChannelCard from '../components/LiveChannel';
import { Radio } from 'lucide-react';

const categories = ['Toutes', 'Généraliste', 'Info', 'Premium', 'Documentaire', 'Culture', 'International'];

export default function Live() {
  const [active, setActive] = useState('Toutes');
  const filtered = active === 'Toutes' ? channels : channels.filter((c) => c.category === active);
  const liveCount = channels.filter((c) => c.live).length;

  return (
    <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-10 lg:py-16">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[color:var(--color-violet-300)] mb-3">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-[color:var(--color-violet-400)] animate-ping opacity-70" />
              <span className="relative rounded-full bg-[color:var(--color-violet-400)] w-1.5 h-1.5" />
            </span>
            {liveCount} chaînes en direct
          </div>
          <h1 className="font-display text-[36px] sm:text-[48px] font-light tracking-[-0.02em]">
            Le <span className="italic text-[color:var(--color-violet-300)]">direct</span>.
          </h1>
          <p className="mt-3 text-[15px] text-[color:var(--color-ink-muted)] max-w-lg">
            Toutes les chaînes, un seul geste. Le direct sans interruption.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[color:var(--color-violet-500)] text-white text-[13px] font-medium hover:bg-[color:var(--color-violet-400)] transition-colors shadow-[0_0_24px_-6px_rgba(167,139,250,0.6)]">
          <Radio className="w-4 h-4" />
          Guide TV
        </button>
      </div>

      {/* Filtres */}
      <div className="mt-10 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wide transition-all ${
              active === cat
                ? 'bg-[color:var(--color-violet-500)] text-white shadow-[0_0_18px_-4px_rgba(167,139,250,0.5)]'
                : 'border border-[color:var(--color-line)] text-[color:var(--color-ink-muted)] hover:text-white hover:border-[color:var(--color-line-strong)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille des chaînes */}
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
        {filtered.map((channel) => (
          <LiveChannelCard key={channel.id} channel={channel} />
        ))}
      </div>

      {/* Footer info */}
      <div className="mt-12 flex items-center justify-center gap-2 text-[11px] text-[color:var(--color-ink-faint)]">
        <span className="inline-block w-1 h-1 rounded-full bg-[color:var(--color-violet-400)] animate-pulse" />
        Mise à jour du programme toutes les 30 secondes
      </div>
    </div>
  );
}