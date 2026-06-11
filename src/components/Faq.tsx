export interface FaqItem {
  q: string;
  a: string;
}

/**
 * Accessible accordion built on native <details>/<summary> — no JS,
 * keyboard-friendly out of the box. Used on the homepage and /brands.
 */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="rounded-3xl border border-mist/60 bg-ivory-soft divide-y divide-mist/50 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_8px_24px_-12px_rgba(20,20,20,0.10)]">
      {items.map((item) => (
        <details key={item.q} className="group px-6 md:px-7">
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-5 [&::-webkit-details-marker]:hidden">
            <span className="font-display text-base sm:text-lg tracking-tight text-ink">
              {item.q}
            </span>
            <span
              aria-hidden
              className="shrink-0 text-ink/40 text-xl leading-none transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="pb-6 text-sm text-ink/65 leading-relaxed max-w-2xl">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
