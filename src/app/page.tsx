import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LinkButton } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { FeatureCard } from "@/components/FeatureCard";
import { BrandBadge } from "@/components/BrandBadge";
import { MockPhoneFrame } from "@/components/MockPhoneFrame";
import {
  MockOutfitCard,
  MockProductCard,
  MockEventCard,
} from "@/components/AppPreviewCard";
import { AppPreviewShowcase } from "@/components/AppPreviewShowcase";
import { TrustStrip } from "@/components/TrustStrip";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { WaitlistInputRow } from "@/components/WaitlistInputRow";
import { hasPublicAsset } from "@/lib/publicAssets";
import Image from "next/image";

const howItWorks = [
  {
    index: "01",
    title: "Pick the plan",
    description:
      "Tonight's concert. Saturday brunch. A flight at 7am. WearWhere reads the date and weather around it.",
  },
  {
    index: "02",
    title: "Get the look",
    description:
      "A small set of outfits, scored on weather, comfort, and your style. No overwhelming list.",
  },
  {
    index: "03",
    title: "Save, share, shop",
    description:
      "Save it to a closet. Share a private vote link. Tap through to the brand's official site.",
  },
];

const considers = [
  { label: "Event & venue", hint: "Concerts, dinners, festivals, city days" },
  { label: "Weather", hint: "Forecast, indoor vs outdoor, comfort" },
  { label: "Style & vibe", hint: "Editorial, soft, sharp, warm, cool" },
  { label: "Comfort", hint: "Heel height, layering, fit preferences" },
];

export default function Home() {
  const heroResultsReady = hasPublicAsset("/previews/hero-results.png");

  return (
    <>
      <Header />
      <main>
        {/* ============================================================ */}
        {/* HERO */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10 opacity-70"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 80% 0%, rgba(255,106,74,0.10), transparent 50%), radial-gradient(ellipse 60% 50% at 0% 30%, rgba(125,143,122,0.10), transparent 50%)",
            }}
          />

          <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-16 pb-32 md:pt-24 md:pb-40 grid lg:grid-cols-[1.15fr_1fr] gap-16 lg:gap-12 items-center">
            <div>
              <BrandBadge label="iOS-first · App Store launch in preparation" />
              <h1 className="mt-7 font-display text-[2.75rem] sm:text-6xl md:text-7xl tracking-tight leading-[0.98] text-ink">
                Know what to wear{" "}
                <em className="not-italic relative inline-block">
                  <span className="relative z-10">before the night</span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1 h-3 bg-coral/30 -z-0"
                  />
                </em>{" "}
                starts.
              </h1>
              <p className="mt-7 max-w-xl text-lg text-ink/65 leading-relaxed">
                Pick tonight&apos;s concert, dinner, or city plan. WearWhere
                reads the event, weather, comfort, and vibe — then gives you
                a look you can save, share, and shop at the seller.
              </p>

              <div className="mt-9">
                <WaitlistInputRow />
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <LinkButton href="#how-it-works" variant="ghost" size="md">
                  See how it works
                </LinkButton>
                <span className="text-xs text-ink/50">
                  No login needed to browse events or build a first look.
                </span>
              </div>
            </div>

            {/* Hero visual — one dominant phone + two floating chips */}
            <div className="relative mt-4 lg:mt-0">
              <MockPhoneFrame
                label={heroResultsReady ? "iOS preview" : "Beta interface preview"}
              >
                {heroResultsReady ? (
                  <Image
                    src="/previews/hero-results.png"
                    alt="WearWhere outfit results — iOS preview screenshot"
                    fill
                    sizes="320px"
                    priority
                    className="object-cover"
                  />
                ) : (
                  <div className="size-full bg-gradient-to-b from-ivory to-ivory-soft p-3 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-[0.55rem] tracking-[0.18em] uppercase text-ink/45 px-1 pt-1">
                      <span>Tonight</span>
                      <span>Strong match</span>
                    </div>
                    <MockEventCard />
                    <MockOutfitCard />
                    <MockProductCard />
                  </div>
                )}
              </MockPhoneFrame>

              {/* Floating accent chip — event/weather context */}
              <div className="hidden md:block absolute -left-8 top-12 w-52 -rotate-6 z-10">
                <div className="rounded-2xl bg-ivory border border-mist/60 shadow-[0_4px_12px_-2px_rgba(20,20,20,0.08),0_24px_48px_-16px_rgba(20,20,20,0.18)] p-4">
                  <p className="text-[0.55rem] tracking-[0.18em] uppercase text-sage font-medium">
                    Event · weather
                  </p>
                  <p className="font-display text-base text-ink mt-1.5 leading-tight">
                    Berlin · Fri 21:00
                    <br />
                    9°C clear
                  </p>
                </div>
              </div>

              {/* Floating accent chip — match + seller */}
              <div className="hidden md:block absolute -right-6 bottom-16 w-52 rotate-6 z-10">
                <div className="rounded-2xl bg-ink text-ivory shadow-[0_4px_12px_-2px_rgba(20,20,20,0.08),0_24px_48px_-16px_rgba(20,20,20,0.18)] p-4">
                  <p className="text-[0.55rem] tracking-[0.18em] uppercase text-coral font-medium">
                    Strong match
                  </p>
                  <p className="font-display text-base mt-1.5 leading-tight">
                    Weather ready.
                    <br />
                    View at seller →
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* TRUST STRIP — directly under hero */}
        {/* ============================================================ */}
        <TrustStrip />

        {/* ============================================================ */}
        {/* HOW IT WORKS — three steps */}
        {/* ============================================================ */}
        <section
          id="how-it-works"
          className="mx-auto max-w-6xl px-6 lg:px-8 py-24"
        >
          <SectionHeader
            eyebrow="How it works"
            title="Pick the plan. Get the look."
            description="A small, opinionated planner — not a feed, not a marketplace."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {howItWorks.map((s) => (
              <FeatureCard
                key={s.index}
                index={s.index}
                title={s.title}
                description={s.description}
                className="border-mist/60 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_8px_24px_-12px_rgba(20,20,20,0.10)]"
              />
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* APP PREVIEW — 4 featured cards */}
        {/* ============================================================ */}
        <AppPreviewShowcase featuredOnly />

        {/* ============================================================ */}
        {/* WHAT IT CONSIDERS — condensed to 4 */}
        {/* ============================================================ */}
        <section className="bg-ivory-soft border-y border-mist/50">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
            <SectionHeader
              eyebrow="The ingredients"
              title="Already considered, before you even pick a piece."
            />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {considers.map((c) => (
                <div
                  key={c.label}
                  className="rounded-2xl border border-mist/60 bg-ivory p-5 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_8px_24px_-12px_rgba(20,20,20,0.08)]"
                >
                  <p className="font-display text-base text-ink">{c.label}</p>
                  <p className="mt-1.5 text-xs text-ink/55 leading-relaxed">
                    {c.hint}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* BRANDS TEASER — small, links to /brands */}
        {/* ============================================================ */}
        <section className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <div className="rounded-3xl border border-mist/60 bg-ivory-soft p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_8px_24px_-12px_rgba(20,20,20,0.10)]">
            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-sage mb-2">
                Brands & retailers
              </p>
              <p className="font-display text-2xl text-ink leading-tight">
                Retailer or brand? See how product links work.
              </p>
            </div>
            <LinkButton href="/brands" variant="secondary" size="md">
              For brands & retailers
            </LinkButton>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FINAL WAITLIST CTA */}
        {/* ============================================================ */}
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
