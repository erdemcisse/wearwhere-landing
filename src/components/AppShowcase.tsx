"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PhoneFrame } from "./PhoneFrame";
import { SectionHeader } from "./SectionHeader";
import { screens } from "@/data/screens";

const showcaseScreens = [
  { caption: "Pick the moment", screen: screens.homeTonight },
  { caption: "Set the plan", screen: screens.planOccasion },
  { caption: "Get the look", screen: screens.lookResults },
  { caption: "See the pieces", screen: screens.outfitBreakdown },
  { caption: "Share & vote", screen: screens.shareVote },
];

/**
 * The centrepiece section — real beta screenshots in a horizontally
 * scroll-snapped row of phones on desktop, a vertical stack on mobile.
 * Captions stay short; the full step explanations live only in
 * "Pick the plan. Get the look."
 */
export function AppShowcase() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateChevrons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    updateChevrons();
    window.addEventListener("resize", updateChevrons);
    return () => window.removeEventListener("resize", updateChevrons);
  }, [updateChevrons]);

  const scrollBy = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  const chevronCls =
    "size-11 rounded-full border border-ink/15 text-ink hover:border-ink/30 hover:bg-ink/[0.03] transition-colors disabled:opacity-35 disabled:pointer-events-none";

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
            disabled={!canLeft}
            aria-label="Scroll screenshots left"
            className={chevronCls}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            disabled={!canRight}
            aria-label="Scroll screenshots right"
            className={chevronCls}
          >
            →
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        onScroll={updateChevrons}
        className="mt-14 flex flex-col items-center gap-12 sm:flex-row sm:items-start sm:gap-8 sm:overflow-x-auto sm:snap-x sm:snap-mandatory sm:pb-6 sm:[scrollbar-width:thin]"
      >
        {showcaseScreens.map((s, i) => (
          <li key={s.caption} className="sm:snap-start sm:shrink-0">
            <PhoneFrame
              src={s.screen.src}
              alt={s.screen.alt}
              size="md"
              caption={s.caption}
              priority={i < 2}
              eager
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
