/**
 * Editorial mock cards rendered inside the MockPhoneFrame.
 * Pure presentation — no fake brand names, no fake prices that imply
 * live commerce, no real user photos. Every label that could be read
 * as live data is generic ("Curated brand", "Preview price").
 */

export function MockEventCard() {
  return (
    <div className="rounded-2xl overflow-hidden bg-ivory-soft border border-ink/[0.06] shadow-[0_1px_2px_rgba(20,20,20,0.04),0_8px_24px_-12px_rgba(20,20,20,0.12)]">
      <div className="relative h-24 bg-gradient-to-br from-coral via-coral/70 to-sage overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(246,241,234,0.5),transparent_50%)]" />
        <div className="absolute bottom-2 left-3 text-ivory text-[0.55rem] font-medium tracking-[0.15em] uppercase">
          Fri · 21:00 · Berlin
        </div>
      </div>
      <div className="p-3">
        <p className="text-[0.55rem] tracking-[0.18em] uppercase text-sage font-medium">
          Concert
        </p>
        <p className="font-display text-sm text-ink leading-tight mt-1">
          Late autumn show
        </p>
        <div className="flex items-center gap-1.5 mt-2 text-[0.6rem] text-ink/55">
          <span>9°C · Clear</span>
          <span aria-hidden>·</span>
          <span>Indoor</span>
        </div>
      </div>
    </div>
  );
}

export function MockOutfitCard() {
  return (
    <div className="rounded-2xl overflow-hidden bg-ink text-ivory shadow-[0_4px_12px_-2px_rgba(20,20,20,0.08),0_24px_48px_-16px_rgba(20,20,20,0.18)]">
      <div className="p-3">
        <div className="flex items-center justify-between">
          <span className="text-[0.55rem] tracking-[0.18em] uppercase text-coral font-medium">
            Look 02
          </span>
          <span className="text-[0.55rem] text-ivory/60">Strong match</span>
        </div>
        <p className="font-display text-base mt-1 leading-tight">
          Soft tailoring,
          <br />
          warm layers.
        </p>
        <div className="mt-2.5 grid grid-cols-3 gap-1.5">
          <div className="aspect-square rounded-lg bg-gradient-to-br from-ivory/15 to-ivory/5 border border-ivory/10" />
          <div className="aspect-square rounded-lg bg-gradient-to-br from-coral/30 to-coral/10 border border-ivory/10" />
          <div className="aspect-square rounded-lg bg-gradient-to-br from-sage/30 to-sage/10 border border-ivory/10" />
        </div>
        <div className="mt-2.5 flex items-center gap-1 text-[0.55rem] text-ivory/70">
          <span className="rounded-full bg-ivory/10 px-2 py-0.5">Warm</span>
          <span className="rounded-full bg-ivory/10 px-2 py-0.5">Comfort 4</span>
          <span className="rounded-full bg-ivory/10 px-2 py-0.5">Editorial</span>
        </div>
      </div>
    </div>
  );
}

export function MockProductCard() {
  return (
    <div className="rounded-2xl overflow-hidden bg-ivory-soft border border-ink/[0.06]">
      <div className="flex">
        <div className="w-16 aspect-square bg-gradient-to-br from-mist via-mist-soft to-cream" />
        <div className="flex-1 p-2.5 min-w-0">
          <p className="text-[0.5rem] tracking-[0.18em] uppercase text-ink/40">
            Curated · Seller link
          </p>
          <p className="text-[0.65rem] font-medium text-ink truncate">
            Wool overshirt
          </p>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-[0.6rem] text-ink/55">Preview price</span>
            <span className="text-[0.55rem] text-coral-deep font-medium">
              View at seller →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MockVoteTeaser() {
  return (
    <div className="rounded-2xl bg-coral/[0.08] border border-coral/20 p-3">
      <div className="flex items-center justify-between">
        <p className="text-[0.55rem] tracking-[0.18em] uppercase text-coral-deep font-medium">
          Friend voting
        </p>
        <div className="flex -space-x-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="size-4 rounded-full border-2 border-ivory bg-gradient-to-br from-sage to-ink"
            />
          ))}
        </div>
      </div>
      <p className="font-display text-xs text-ink leading-tight mt-1.5">
        Share a private link.
        <br />
        Get 3–4 votes back.
      </p>
    </div>
  );
}
