import { Bell, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-[color:var(--color-void)]/65 border-b border-[color:var(--color-line)]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/accueil" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[color:var(--color-violet-500)] to-[color:var(--color-violet-800)] flex items-center justify-center shadow-[0_0_20px_-4px_rgba(167,139,250,0.6)]">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-60" />
            <span className="relative font-display text-[15px] font-semibold tracking-tight">M</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-[20px] font-medium tracking-tight text-[color:var(--color-ink)]">Ma</span>
            <span className="font-display text-[20px] font-light italic text-[color:var(--color-violet-300)]">TV</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/accueil" className="text-[13px] font-medium tracking-wide text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)] transition-colors">Accueil</Link>
          <Link to="/direct" className="text-[13px] font-medium tracking-wide text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)] transition-colors">Direct</Link>
          <Link to="/recherche" className="text-[13px] font-medium tracking-wide text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)] transition-colors">Recherche</Link>
          <Link to="/favoris" className="text-[13px] font-medium tracking-wide text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)] transition-colors">Favoris</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/recherche"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)] hover:bg-[color:var(--color-surface)] transition-all"
            aria-label="Recherche"
          >
            <Search className="w-[18px] h-[18px]" strokeWidth={1.75} />
          </Link>
          <button
            className="w-9 h-9 rounded-full flex items-center justify-center text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)] hover:bg-[color:var(--color-surface)] transition-all"
            aria-label="Notifications"
          >
            <Bell className="w-[18px] h-[18px]" strokeWidth={1.75} />
          </button>
          <Link
            to="/mon-espace"
            className="w-9 h-9 rounded-full bg-gradient-to-br from-[color:var(--color-violet-700)] to-[color:var(--color-violet-950)] flex items-center justify-center text-[color:var(--color-violet-100)] border border-[color:var(--color-line-strong)] hover:scale-105 transition-transform"
            aria-label="Mon espace"
          >
            <User className="w-[16px] h-[16px]" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </header>
  );
}