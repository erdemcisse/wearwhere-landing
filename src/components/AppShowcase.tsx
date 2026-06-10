"use client";

import { useRef } from "react";
import { PhoneFrame } from "./PhoneFrame";
import { SectionHeader } from "./SectionHeader";
import { screens } from "@/data/screens";

const showcaseScreens = [
  {
    caption: "Pick the moment",
    detail: "Tonight's events, at a glance.",
    screen: screens.homeTonight,
  },
  {
    caption: "Set the plan",
    detail: "Occasion, date, weather, budget.",
    screen: screens.planOccasion,
  },
  {
    caption: "Get the look",
    detail: "Scored on weather, comfort, vibe.",
    screen: screens.lookResults,
  },
  {
    caption: "See the pieces",
    detail: "Every item links to the seller.",
    screen: screens.outfitBreakdown,
  },
  {
    caption: "Share & vote",
    detail: "Private polls for the group chat.",
    screen: screens.shareVote,
  },
];

/**
 * The centrepiece section — real beta screenshots in a horizontally
 * scroll-snapped row of phones on desktop, a vertical stack on mobile.
 */
export function AppShowcase() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  return (
    <section id="app-showcase" className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
      <div className="flex items-end justify-between gap-6">
        <SectionHeader
          eyebrow="Real screens from the beta"
          title="Open it before the night out."
          description="Every screen you see is from the actual build. Demo content is labeled as such."
        />
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Scroll screenshots left"
            className="size-11 rounded-full border border-ink/15 text-ink hover:border-ink/30 hover:bg-ink/[0.03] transition-colors"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Scroll screenshots right"
            className="size-11 rounded-full border border-ink/15 text-ink hover:border-ink/30 hover:bg-ink/[0.03] transition-colors"
          >
            →
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        className="mt-14 flex flex-col items-center gap-12 sm:flex-row sm:items-start sm:gap-8 sm:overflow-x-auto sm:snap-x sm:snap-mandatory sm:pb-6 sm:[scrollbar-width:thin]"
      >
        {showcaseScreens.map((s) => (
          <li key={s.caption} className="sm:snap-start sm:shrink-0">
            <PhoneFrame
              src={s.screen.src}
              alt={s.screen.alt}
              size="md"
              caption={`${s.caption} — ${s.detail}`}
            />
          </li>
        ))}
      </ul>

      <p className="mt-8 text-xs text-ink/50 leading-relaxed max-w-2xl italic">
        Every screen runs real WearWhere data. Demo and editorial content is
        explicitly labeled in the app — we never display fake prices, fake
        stock, or fake popularity.
      </p>
    </section>
  );
}
