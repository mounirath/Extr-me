import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContentCard from './ContentCard';
import type { Content } from '../data/mockData';

export default function Carousel({ title, items, seeAllHref }: { title: string; items: Content[]; seeAllHref?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const update = () => {
    const el = ref.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scrollBy = (dir: number) => {
    ref.current?.scrollBy({ left: dir * (ref.current.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <section className="relative">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 mb-4 flex items-end justify-between">
        <div>
          <h2 className="font-display text-[20px] sm:text-[26px] font-normal tracking-[-0.01em] text-[color:var(--color-ink)]">
            {title}
          </h2>
          <div className="mt-2 h-px w-12 bg-gradient-to-r from-[color:var(--color-violet-400)] to-transparent" />
        </div>
        {seeAllHref && (
          <Link
            to={seeAllHref}
            className="text-[12px] tracking-wide text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-violet-300)] transition-colors"
          >
            Tout voir →
          </Link>
        )}
      </div>

      <div className="relative group">
        {/* Bouton gauche */}
        {canLeft && (
          <button
            onClick={() => scrollBy(-1)}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-[color:var(--color-line)] items-center justify-center text-white hover:bg-black hover:border-[color:var(--color-violet-500)] transition-all"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}
        {canRight && (
          <button
            onClick={() => scrollBy(1)}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-[color:var(--color-line)] items-center justify-center text-white hover:bg-black hover:border-[color:var(--color-violet-500)] transition-all"
            aria-label="Suivant"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}

        <div
          ref={ref}
          className="no-scrollbar flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth px-6 lg:px-10 pb-2"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]"
            >
              <ContentCard content={item} />
            </div>
          ))}
          {/* Espace pour ne pas être coupé */}
          <div className="shrink-0 w-2" aria-hidden />
        </div>
      </div>
    </section>
  );
}