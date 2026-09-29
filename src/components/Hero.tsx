import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Film, Tv2, Radio } from 'lucide-react';
import { heroIcons } from '../data/mockData';

const iconMap = {
  films: Film,
  series: Tv2,
  direct: Radio,
} as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Fond ambiance violet */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(124,58,237,0.32),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_85%_30%,rgba(91,33,182,0.22),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_15%_60%,rgba(167,139,250,0.10),transparent_70%)]" />
        {/* Grille subtile */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(167,139,250,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><filter id=%22n%22><feTurbulence baseFrequency=%220.9%22 /></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 /></svg>')]" />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10 pt-12 pb-16 lg:pt-20 lg:pb-24">
        {/* En-tête éditorial */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[color:var(--color-violet-300)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-violet-400)] animate-pulse" />
            Bienvenue sur Ma TV
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="font-display font-light text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.02] tracking-[-0.02em] text-[color:var(--color-ink)] max-w-3xl"
        >
          Le direct et le streaming{' '}
          <span className="relative inline-block">
            <span className="italic font-normal text-[color:var(--color-violet-300)]">réunis</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
              className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[color:var(--color-violet-400)] to-transparent origin-left"
            />
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mt-5 max-w-xl text-[15px] sm:text-base text-[color:var(--color-ink-muted)] leading-relaxed font-light"
        >
          Films, séries originales et chaînes en direct — un seul endroit, une seule expérience.
        </motion.p>

        {/* Trois icônes premium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          className="mt-12 lg:mt-16 grid grid-cols-3 gap-3 sm:gap-6 lg:gap-12 max-w-2xl"
        >
          {heroIcons.map((item, i) => {
            const Icon = iconMap[item.id as keyof typeof iconMap];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 + i * 0.12, ease: 'easeOut' }}
              >
                <Link
                  to={item.href}
                  className="group block relative"
                >
                  {/* Halo externe */}
                  <div className="absolute -inset-3 rounded-[2rem] bg-[color:var(--color-violet-500)]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Cercle icône */}
                  <div className="relative aspect-square rounded-full p-[1.5px] bg-gradient-to-br from-[color:var(--color-violet-300)] via-[color:var(--color-violet-600)] to-[color:var(--color-violet-900)] shadow-[var(--shadow-violet-strong)] group-hover:scale-[1.04] transition-transform duration-500">
                    <div className="relative h-full w-full rounded-full bg-[radial-gradient(circle_at_30%_20%,#1c1828,#06050a)] overflow-hidden flex items-center justify-center">
                      {/* Reflet */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-white/[0.12] rounded-full pointer-events-none" />
                      {/* Pulsation interne */}
                      <div className="absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.18),transparent_70%)] animate-[pulse-glow_3s_ease-in-out_infinite]" />
                      <Icon
                        className="relative w-1/2 h-1/2 text-[color:var(--color-violet-200)] drop-shadow-[0_0_12px_rgba(167,139,250,0.6)]"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Label */}
                  <div className="mt-4 sm:mt-5 text-center">
                    <div className="font-display text-[15px] sm:text-[19px] font-medium tracking-tight text-[color:var(--color-ink)] group-hover:text-[color:var(--color-violet-200)] transition-colors">
                      {item.label}
                    </div>
                    <div className="mt-0.5 text-[11px] sm:text-[12px] text-[color:var(--color-ink-faint)] tracking-wide">
                      {item.sublabel}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Métadonnées premium */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-14 lg:mt-20 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] text-[color:var(--color-ink-faint)]"
        >
          {[
            { v: '4K', k: 'Ultra HD' },
            { v: 'HDR', k: 'Dolby Vision' },
            { v: 'ATMOS', k: 'Son immersif' },
            { v: '∞', k: 'Sans engagement' },
          ].map((s) => (
            <div key={s.k} className="flex items-center gap-2">
              <span className="font-display text-[color:var(--color-violet-300)] text-[14px] tracking-wide">{s.v}</span>
              <span className="tracking-wide uppercase text-[10px]">{s.k}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}