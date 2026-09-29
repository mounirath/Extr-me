import { Radio } from 'lucide-react';
import type { Channel } from '../data/mockData';

const brandColors: Record<string, { bg: string; text: string; accent: string }> = {
  tf1: { bg: 'from-[#1a1a1a] to-[#0a0a0a]', text: 'text-white', accent: 'bg-[#cc2229]' },
  f2: { bg: 'from-[#1c1828] to-[#0a0a0a]', text: 'text-white', accent: 'bg-[#a78bfa]' },
  f3: { bg: 'from-[#14110e] to-[#0a0a0a]', text: 'text-white', accent: 'bg-[#d4a574]' },
  canal: { bg: 'from-[#0f0a1a] to-[#000000]', text: 'text-white', accent: 'bg-[#ffffff]' },
  france5: { bg: 'from-[#0e1218] to-[#0a0a0a]', text: 'text-white', accent: 'bg-[#5ba3c7]' },
  m6: { bg: 'from-[#0a0a0a] to-[#0a0a0a]', text: 'text-white', accent: 'bg-[#e30613]' },
  arte: { bg: 'from-[#0e0a0a] to-[#0a0a0a]', text: 'text-white', accent: 'bg-[#e94e1b]' },
  cnews: { bg: 'from-[#0a0a0a] to-[#0a0a0a]', text: 'text-white', accent: 'bg-[#cc2229]' },
  rmc: { bg: 'from-[#0a0a0a] to-[#0a0a0a]', text: 'text-white', accent: 'bg-[#cc2229]' },
  bfm: { bg: 'from-[#0a0a0a] to-[#0a0a0a]', text: 'text-white', accent: 'bg-[#cc2229]' },
  lci: { bg: 'from-[#0a0a0a] to-[#0a0a0a]', text: 'text-white', accent: 'bg-[#e30613]' },
  tv5: { bg: 'from-[#0a0a0a] to-[#0a0a0a]', text: 'text-white', accent: 'bg-[#ff6b00]' },
};

export default function LiveChannelCard({ channel }: { channel: Channel }) {
  const colors = brandColors[channel.id] ?? { bg: 'from-[#0a0a0a] to-[#0a0a0a]', text: 'text-white', accent: 'bg-[#a78bfa]' };

  return (
    <div className="group relative flex items-center gap-4 p-4 rounded-2xl bg-[color:var(--color-surface)] border border-[color:var(--color-line)] hover:border-[color:var(--color-line-strong)] hover:bg-[color:var(--color-surface-2)] transition-all cursor-pointer">
      {/* Logo */}
      <div className={`relative shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center font-display text-[15px] font-semibold ${colors.text} overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.10] pointer-events-none" />
        <span className="relative tracking-tight">{channel.logo}</span>
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${colors.accent}`} />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[color:var(--color-ink-faint)]">
            Chaîne {channel.number}
          </span>
          {channel.live && (
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wide text-[color:var(--color-violet-300)]">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-[color:var(--color-violet-400)] animate-ping opacity-60" />
                <span className="relative rounded-full bg-[color:var(--color-violet-400)] w-1.5 h-1.5" />
              </span>
              LIVE
            </span>
          )}
        </div>
        <div className="mt-1 font-display text-[17px] font-medium text-[color:var(--color-ink)] truncate">
          {channel.name}
        </div>
        <div className="text-[12px] text-[color:var(--color-ink-muted)] truncate mt-0.5">
          {channel.program}
        </div>
      </div>

      {/* Bouton */}
      <button
        className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[color:var(--color-violet-500)] to-[color:var(--color-violet-800)] flex items-center justify-center text-white shadow-[0_0_18px_-4px_rgba(167,139,250,0.5)] group-hover:scale-105 transition-transform"
        aria-label="Regarder"
      >
        <Radio className="w-4 h-4" strokeWidth={2} />
      </button>
    </div>
  );
}