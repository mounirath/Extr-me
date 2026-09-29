import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import { contents, genres } from '../data/mockData';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronRight, TrendingUp, Calendar } from 'lucide-react';

export default function Home() {
  const films = contents.filter((c) => c.type === 'film');
  const series = contents.filter((c) => c.type === 'serie');
  const inProgress = contents.filter((c) => typeof c.progress === 'number');
  const trending = contents.filter((c) => c.badge === 'TENDANCE' || c.badge === 'EXCLUSIF');
  const newOnes = contents.filter((c) => c.badge === 'NOUVEAU' || c.year === 2025);

  return (
    <div className="space-y-12 lg:space-y-16">
      <Hero />

      {/* Catégories rapides */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display text-[20px] sm:text-[26px] font-normal tracking-[-0.01em]">
            Explorer
          </h2>
          <span className="text-[11px] tracking-[0.2em] uppercase text-[color:var(--color-ink-faint)]">
            Par univers
          </span>
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3">
          {genres.map((g, i) => (
            <Link
              key={g.id}
              to={`/accueil?cat=${g.id}`}
              className="group relative overflow-hidden rounded-2xl p-4 lg:p-6 bg-[color:var(--color-surface)] border border-[color:var(--color-line)] hover:border-[color:var(--color-violet-500)]/40 transition-all"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[color:var(--color-violet-500)]/15 blur-3xl group-hover:bg-[color:var(--color-violet-500)]/30 transition-colors" />
              <div className="relative text-[color:var(--color-violet-300)] group-hover:text-[color:var(--color-violet-200)]">
                <Sparkles className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
              </div>
              <div className="relative mt-3 lg:mt-6 font-display text-[14px] lg:text-[16px] font-medium text-[color:var(--color-ink)]">
                {g.label}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Carousel title="Reprendre votre lecture" items={inProgress} />
      <Carousel title="Tendances du moment" items={trending} />

      {/* Bandeau éditorial */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-line)] bg-gradient-to-br from-[color:var(--color-violet-950)]/60 via-[color:var(--color-surface)] to-[color:var(--color-surface)] p-8 lg:p-12">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[color:var(--color-violet-500)]/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-10 w-64 h-64 rounded-full bg-[color:var(--color-violet-700)]/15 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[color:var(--color-violet-300)] mb-4">
                <TrendingUp className="w-3 h-3" />
                Sélection de la rédaction
              </div>
              <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-light leading-[1.1] tracking-[-0.02em]">
                Cette semaine, on regarde{' '}
                <span className="italic text-[color:var(--color-violet-300)]">Nuit de Velours</span>.
              </h2>
              <p className="mt-4 text-[15px] text-[color:var(--color-ink-muted)] leading-relaxed max-w-md">
                Saison 3 disponible. Reprenez l'enquête là où vous l'avez laissée ou redécouvrez Paris en noir et blanc.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[color:var(--color-violet-500)] text-white text-[13px] font-medium hover:bg-[color:var(--color-violet-400)] transition-colors">
                  Reprendre l'épisode
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[color:var(--color-line-strong)] text-[color:var(--color-ink-muted)] text-[13px] hover:bg-[color:var(--color-surface)] hover:text-white transition-all">
                  Bande annonce
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 lg:gap-4">
              {[series[0], films[0], series[1]].map((c, i) => (
                <Link
                  key={c.id}
                  to="/accueil"
                  className={`relative rounded-2xl overflow-hidden border border-[color:var(--color-line)] hover:border-[color:var(--color-violet-500)]/40 transition-all ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
                >
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[color:var(--color-violet-300)] mb-1">
                      {c.type === 'film' ? 'Film' : 'Série'}
                    </div>
                    <div className="font-display text-[15px] lg:text-[18px] font-medium leading-tight">
                      {c.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Carousel title="Nouveautés" items={newOnes} seeAllHref="/accueil" />
      <Carousel title="Films cultes" items={films} seeAllHref="/accueil" />
      <Carousel title="Séries du moment" items={series} seeAllHref="/accueil" />

      {/* Footer signature */}
      <footer className="max-w-screen-xl mx-auto px-6 lg:px-10 pt-8 pb-12 border-t border-[color:var(--color-line)]">
        <div className="grid sm:grid-cols-3 gap-6 text-[12px] text-[color:var(--color-ink-faint)]">
          <div>
            <div className="font-display text-[color:var(--color-ink)] text-[15px] mb-2">Ma TV</div>
            <p className="leading-relaxed">Le direct et le streaming réunis dans une expérience unique.</p>
          </div>
          <div>
            <div className="text-[color:var(--color-ink-muted)] tracking-[0.2em] uppercase text-[10px] mb-3">
              Navigation
            </div>
            <ul className="space-y-2">
              <li><Link to="/accueil" className="hover:text-[color:var(--color-violet-300)] transition-colors">Accueil</Link></li>
              <li><Link to="/direct" className="hover:text-[color:var(--color-violet-300)] transition-colors">Direct</Link></li>
              <li><Link to="/recherche" className="hover:text-[color:var(--color-violet-300)] transition-colors">Recherche</Link></li>
              <li><Link to="/favoris" className="hover:text-[color:var(--color-violet-300)] transition-colors">Favoris</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[color:var(--color-ink-muted)] tracking-[0.2em] uppercase text-[10px] mb-3">
              Qualité
            </div>
            <ul className="space-y-2">
              <li>4K Ultra HD</li>
              <li>Dolby Vision</li>
              <li>Dolby Atmos</li>
              <li>Multi-profil</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[color:var(--color-ink-faint)]">
          <Calendar className="w-3 h-3" />
          {new Date().getFullYear()} — Tous droits réservés
        </div>
      </footer>
    </div>
  );
}