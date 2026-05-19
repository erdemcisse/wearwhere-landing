import { trustBullets } from "@/data/trustBullets";

export function TrustStrip() {
  return (
    <section className="mx-auto max-w-6xl px-6 lg:px-8 pb-12">
      <div className="rounded-3xl border border-ink/[0.08] bg-ivory-soft p-7 md:p-10">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 mb-7">
          <h2 className="font-display text-2xl tracking-tight text-ink">
            Trust posture, in five lines.
          </h2>
          <p className="text-xs tracking-[0.18em] uppercase text-sage">
            Beta · Private-first
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {trustBullets.map((b) => (
            <div key={b.title} className="border-t border-ink/[0.08] pt-4">
              <p className="font-display text-sm text-ink leading-tight">
                {b.title}
              </p>
              <p className="mt-1.5 text-xs text-ink/55 leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
