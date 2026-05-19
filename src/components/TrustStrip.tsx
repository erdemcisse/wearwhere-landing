import { heroTrustSignals } from "@/data/trustBullets";

/**
 * Compact trust signal row that sits directly under the hero.
 *
 * Layout — never five cramped columns:
 *   - 1 col on mobile
 *   - 2 cols on tablet
 *   - 3 cols on desktop with the 4th card wrapping to a second row
 */
export function TrustStrip() {
  return (
    <section
      aria-label="Trust signals"
      className="mx-auto max-w-6xl px-6 lg:px-8 -mt-8 md:-mt-12"
    >
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {heroTrustSignals.map((s) => (
          <li
            key={s.title}
            className="rounded-2xl border border-mist/60 bg-ivory-soft p-6 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_8px_24px_-12px_rgba(20,20,20,0.10)] hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-20px_rgba(20,20,20,0.18)] transition-all duration-300"
          >
            <p className="font-display text-base text-ink leading-tight">
              {s.title}
            </p>
            <p className="mt-2 text-sm text-ink/60 leading-relaxed">
              {s.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
