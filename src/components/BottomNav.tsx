import { NavLink, useLocation } from 'react-router-dom';
import { Home, Tv, Search, Heart, User } from 'lucide-react';

const items = [
  { to: '/accueil', label: 'Accueil', icon: Home },
  { to: '/direct', label: 'Direct', icon: Tv },
  { to: '/recherche', label: 'Recherche', icon: Search },
  { to: '/favoris', label: 'Favoris', icon: Heart },
  { to: '/mon-espace', label: 'Mon espace', icon: User },
];

export default function BottomNav() {
  const location = useLocation();
  const isActive = (to: string) =>
    to === '/accueil' ? location.pathname === '/accueil' || location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      {/* Halo lumineux derrière la barre */}
      <div className="absolute inset-x-0 -top-6 h-6 bg-gradient-to-t from-[color:var(--color-void)] to-transparent pointer-events-none" />

      <div className="relative backdrop-blur-2xl bg-[color:var(--color-void)]/80 border-t border-[color:var(--color-line)]">
        <div className="max-w-screen-md mx-auto grid grid-cols-5 px-1 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
          {items.map(({ to, label, icon: Icon }) => {
            const active = isActive(to);
            return (
              <NavLink
                key={to}
                to={to}
                className="group flex flex-col items-center gap-1 py-1.5 rounded-xl transition-all"
              >
                <div className="relative">
                  {active && (
                    <span className="absolute -inset-2 bg-[color:var(--color-violet-500)]/20 blur-xl rounded-full" />
                  )}
                  <div
                    className={`relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      active
                        ? 'bg-gradient-to-br from-[color:var(--color-violet-500)] to-[color:var(--color-violet-800)] text-white shadow-[0_0_18px_-2px_rgba(167,139,250,0.55)]'
                        : 'text-[color:var(--color-ink-faint)] group-hover:text-[color:var(--color-ink-muted)]'
                    }`}
                  >
                    <Icon className="w-[18px] h-[18px]" strokeWidth={active ? 2.25 : 1.75} />
                  </div>
                </div>
                <span
                  className={`text-[10px] tracking-wide font-medium transition-colors ${
                    active ? 'text-[color:var(--color-violet-200)]' : 'text-[color:var(--color-ink-faint)]'
                  }`}
                >
                  {label}
                </span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}