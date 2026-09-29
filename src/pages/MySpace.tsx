import { Link } from 'react-router-dom';
import { User, Settings, Download, Bell, Shield, CreditCard, ChevronRight, LogOut } from 'lucide-react';

export default function MySpace() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-10 lg:py-16">
      {/* Carte profil */}
      <section className="relative overflow-hidden rounded-3xl border border-[color:var(--color-line)] bg-gradient-to-br from-[color:var(--color-violet-950)]/40 via-[color:var(--color-surface)] to-[color:var(--color-surface)] p-6 sm:p-10">
        <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-[color:var(--color-violet-500)]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 w-72 h-72 rounded-full bg-[color:var(--color-violet-700)]/15 blur-3xl" />

        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[color:var(--color-violet-500)] to-[color:var(--color-violet-900)] flex items-center justify-center shadow-[0_0_30px_-5px_rgba(167,139,250,0.5)] border border-[color:var(--color-line-strong)]">
            <User className="w-9 h-9 sm:w-10 sm:h-10 text-white" strokeWidth={1.5} />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[color:var(--color-violet-500)]/15 border border-[color:var(--color-violet-500)]/30 text-[10px] tracking-[0.2em] uppercase text-[color:var(--color-violet-200)] mb-2">
              <span className="w-1 h-1 rounded-full bg-[color:var(--color-violet-300)]" />
              Premium
            </div>
            <h1 className="font-display text-[28px] sm:text-[36px] font-light tracking-[-0.02em]">
              Camille <span className="italic text-[color:var(--color-violet-300)]">Mercier</span>
            </h1>
            <p className="mt-1 text-[14px] text-[color:var(--color-ink-muted)]">
              camille.mercier@matv.fr
            </p>
          </div>
          <button className="px-5 py-2.5 rounded-full border border-[color:var(--color-line-strong)] text-[13px] text-[color:var(--color-ink-muted)] hover:bg-[color:var(--color-surface)] hover:text-white transition-all">
            Modifier
          </button>
        </div>
      </section>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
        {[
          { v: '184h', k: 'Visionnées' },
          { v: '47', k: 'Favoris' },
          { v: '12', k: 'Profils' },
        ].map((s) => (
          <div
            key={s.k}
            className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-4 sm:p-5 text-center"
          >
            <div className="font-display text-[24px] sm:text-[30px] font-light text-[color:var(--color-violet-200)]">
              {s.v}
            </div>
            <div className="mt-1 text-[10px] tracking-[0.2em] uppercase text-[color:var(--color-ink-faint)]">
              {s.k}
            </div>
          </div>
        ))}
      </div>

      {/* Réglages */}
      <section className="mt-10">
        <h2 className="font-display text-[20px] font-normal mb-4">Réglages</h2>
        <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] divide-y divide-[color:var(--color-line)]">
          {[
            { icon: Bell, label: 'Notifications', desc: 'Personnalisez vos alertes' },
            { icon: Download, label: 'Téléchargements', desc: 'Gérer le stockage hors-ligne' },
            { icon: Shield, label: 'Confidentialité', desc: 'Contrôle de vos données' },
            { icon: CreditCard, label: 'Abonnement', desc: 'Ma TV Premium — 9,99 €/mois' },
            { icon: Settings, label: 'Préférences de lecture', desc: 'Qualité, langue, son' },
          ].map(({ icon: Icon, label, desc }) => (
            <button
              key={label}
              className="w-full flex items-center gap-4 p-4 hover:bg-[color:var(--color-surface-2)] transition-colors text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-[color:var(--color-violet-500)]/15 border border-[color:var(--color-violet-500)]/30 flex items-center justify-center text-[color:var(--color-violet-300)]">
                <Icon className="w-4 h-4" strokeWidth={1.75} />
              </div>
              <div className="flex-1">
                <div className="text-[14px] font-medium text-[color:var(--color-ink)]">{label}</div>
                <div className="text-[12px] text-[color:var(--color-ink-faint)]">{desc}</div>
              </div>
              <ChevronRight className="w-4 h-4 text-[color:var(--color-ink-faint)]" />
            </button>
          ))}
        </div>
      </section>

      {/* Profils */}
      <section className="mt-10">
        <h2 className="font-display text-[20px] font-normal mb-4">Profils</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { name: 'Camille', active: true, color: 'from-[color:var(--color-violet-500)] to-[color:var(--color-violet-800)]' },
            { name: 'Léa', color: 'from-[#3b1d6e] to-[#1c0e3e]' },
            { name: 'Enfants', color: 'from-[#2e1065] to-[#160728]' },
          ].map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border bg-gradient-to-br ${p.color} p-4 flex flex-col items-center gap-2 cursor-pointer transition-all ${
                p.active ? 'border-[color:var(--color-violet-400)] shadow-[0_0_24px_-5px_rgba(167,139,250,0.5)]' : 'border-[color:var(--color-line)] hover:border-[color:var(--color-line-strong)]'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                <User className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="font-display text-[14px] font-medium text-white">{p.name}</div>
              {p.active && (
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/70">Actif</span>
              )}
            </div>
          ))}
          <button className="rounded-2xl border border-dashed border-[color:var(--color-line-strong)] p-4 flex flex-col items-center gap-2 text-[color:var(--color-ink-muted)] hover:text-white hover:border-[color:var(--color-violet-500)] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[color:var(--color-surface)] flex items-center justify-center">
                <span className="text-2xl">+</span>
              </div>
              <span className="font-display text-[13px]">Ajouter</span>
            </button>
        </div>
      </section>

      {/* Déconnexion */}
      <div className="mt-10 flex items-center justify-between gap-4 p-4 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center text-[color:var(--color-ink-muted)]">
            <LogOut className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[14px] font-medium">Déconnexion</div>
            <div className="text-[12px] text-[color:var(--color-ink-faint)]">Quitter Ma TV sur cet appareil</div>
          </div>
        </div>
        <Link
          to="/accueil"
          className="px-4 py-2 rounded-full border border-[color:var(--color-line-strong)] text-[12px] text-[color:var(--color-ink-muted)] hover:bg-[color:var(--color-surface-2)] hover:text-white transition-all"
        >
          Se déconnecter
        </Link>
      </div>
    </div>
  );
}