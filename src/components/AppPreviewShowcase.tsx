import {
  appPreviews,
  featuredAppPreviews,
  type AppPreviewVisual,
  type AppPreviewItem,
} from "@/data/appPreviews";
import { SectionHeader } from "./SectionHeader";

/**
 * Editorial mock visual rendered inside each preview card today.
 *
 * When real iPhone screenshots are exported, drop them into
 * /public/previews/ at the paths declared in src/data/appPreviews.ts and
 * see public/previews/README.md for the swap procedure. The current
 * component intentionally never imports `next/image` — that means
 * missing screenshot files cannot break the build.
 */
function MockVisual({ kind }: { kind: AppPreviewVisual }) {
  const base =
    "relative size-full rounded-2xl overflow-hidden border border-mist/50";

  switch (kind) {
    case "event":
      return (
        <div className={`${base} bg-gradient-to-br from-coral/15 via-ivory-soft to-sage/15`}>
          <div className="absolute inset-x-4 top-5 text-[0.55rem] tracking-[0.18em] uppercase text-ink/55">
            Fri · 21:00 · Berlin
          </div>
          <div className="absolute inset-x-4 bottom-5">
            <p className="text-[0.55rem] tracking-[0.18em] uppercase text-sage">
              Concert
            </p>
            <p className="font-display text-base text-ink leading-tight mt-1">
              Late autumn show
            </p>
            <p className="text-[0.6rem] text-ink/50 mt-1.5">9°C · clear · indoor</p>
          </div>
        </div>
      );
    case "plan":
      return (
        <div className={`${base} bg-ivory-soft`}>
          <div className="absolute inset-x-4 top-5">
            <p className="text-[0.55rem] tracking-[0.18em] uppercase text-sage">
              Plan
            </p>
            <p className="font-display text-sm text-ink mt-1">
              How dressed-up?
            </p>
          </div>
          <div className="absolute inset-x-4 bottom-5 grid grid-cols-3 gap-1.5">
            {["Easy", "Sharp", "Dressed"].map((l, i) => (
              <span
                key={l}
                className={`rounded-full px-2 py-1.5 text-[0.55rem] text-center font-medium border ${
                  i === 1
                    ? "bg-coral text-ivory border-coral"
                    : "bg-ivory text-ink/65 border-ink/10"
                }`}
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      );
    case "outfit":
      return (
        <div className={`${base} bg-ink text-ivory`}>
          <div className="absolute inset-x-4 top-5">
            <p className="text-[0.55rem] tracking-[0.18em] uppercase text-coral">
              Look 02 · Strong match
            </p>
            <p className="font-display text-sm mt-1 leading-tight">
              Soft tailoring,
              <br />
              warm layers.
            </p>
          </div>
          <div className="absolute inset-x-4 bottom-5 grid grid-cols-3 gap-1.5">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-ivory/15 to-ivory/5 border border-ivory/10" />
            <div className="aspect-square rounded-lg bg-gradient-to-br from-coral/30 to-coral/10 border border-ivory/10" />
            <div className="aspect-square rounded-lg bg-gradient-to-br from-sage/30 to-sage/10 border border-ivory/10" />
          </div>
        </div>
      );
    case "shop":
      return (
        <div className={`${base} bg-ivory`}>
          <div className="absolute inset-x-4 top-5 flex gap-3">
            <div className="size-12 rounded-xl bg-gradient-to-br from-mist via-mist-soft to-cream" />
            <div className="flex-1 min-w-0">
              <p className="text-[0.5rem] tracking-[0.18em] uppercase text-ink/40">
                Curated · Seller link
              </p>
              <p className="text-[0.65rem] font-medium text-ink truncate">
                Wool overshirt
              </p>
              <p className="text-[0.6rem] text-ink/55 mt-0.5">Preview price</p>
            </div>
          </div>
          <div className="absolute inset-x-4 bottom-5 rounded-full bg-ink text-ivory text-[0.55rem] font-medium tracking-wide px-3 py-2 text-center">
            View at seller →
          </div>
        </div>
      );
    case "share":
      return (
        <div className={`${base} bg-gradient-to-b from-ivory-soft to-cream`}>
          <div className="absolute inset-x-4 top-5">
            <p className="text-[0.55rem] tracking-[0.18em] uppercase text-sage">
              Share card
            </p>
            <p className="font-display text-sm text-ink mt-1 leading-tight">
              Private link
              <br />
              · revocable
            </p>
          </div>
          <div className="absolute inset-x-4 bottom-5 rounded-2xl bg-ivory border border-ink/10 p-3">
            <div className="flex items-center justify-between">
              <span className="text-[0.55rem] text-ink/50">Tonight</span>
              <span className="text-[0.55rem] text-coral-deep font-medium">
                Copy link
              </span>
            </div>
          </div>
        </div>
      );
    case "vote":
      return (
        <div className={`${base} bg-coral/[0.08]`}>
          <div className="absolute inset-x-4 top-5">
            <p className="text-[0.55rem] tracking-[0.18em] uppercase text-coral-deep">
              Friend vote
            </p>
            <p className="font-display text-sm text-ink mt-1 leading-tight">
              Look A or Look B?
            </p>
          </div>
          <div className="absolute inset-x-4 bottom-5 grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-ivory border border-ink/10 p-2 text-center">
              <p className="text-[0.55rem] text-ink/50">A</p>
              <p className="font-display text-xs text-ink mt-1">3 votes</p>
            </div>
            <div className="rounded-xl bg-ink text-ivory p-2 text-center border border-ink">
              <p className="text-[0.55rem] text-ivory/60">B</p>
              <p className="font-display text-xs mt-1">5 votes</p>
            </div>
          </div>
        </div>
      );
  }
}

interface AppPreviewShowcaseProps {
  /** Show only featured cards (homepage). False = full set (e.g. /brands). */
  featuredOnly?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function AppPreviewShowcase({
  featuredOnly = true,
  eyebrow = "Beta interface preview",
  title = "Open it before the night out.",
  description = "Pick the plan. Get the look. Save it, share it, shop at the seller.",
}: AppPreviewShowcaseProps) {
  const items: AppPreviewItem[] = featuredOnly
    ? featuredAppPreviews
    : appPreviews;

  const gridCols =
    items.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <section
      id="app-preview"
      className="mx-auto max-w-6xl px-6 lg:px-8 py-24"
    >
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <div className={`mt-14 grid sm:grid-cols-2 ${gridCols} gap-5`}>
        {items.map((p) => (
          <article
            key={p.slug}
            className="group rounded-3xl bg-ivory-soft border border-mist/60 p-5 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_8px_24px_-12px_rgba(20,20,20,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(20,20,20,0.18)]"
          >
            <div className="relative aspect-[4/5] mb-5 rounded-2xl overflow-hidden">
              {/*
               * IMAGE SWAP POINT
               * When real iPhone screenshots ship under p.imagePath
               * (e.g. /previews/results.png), replace this <MockVisual />
               * with a next/image render. See public/previews/README.md
               * for sizing and the full procedure.
               */}
              <MockVisual kind={p.visualType} />
              <span className="absolute top-3 left-3 text-[0.55rem] font-medium tracking-[0.18em] uppercase bg-ink text-ivory rounded-full px-2.5 py-1">
                Beta interface preview
              </span>
            </div>
            <span className="text-xs tracking-[0.18em] uppercase text-sage font-medium">
              {p.eyebrow}
            </span>
            <h3 className="mt-1.5 font-display text-xl tracking-tight text-ink">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-ink/65 leading-relaxed">
              {p.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
