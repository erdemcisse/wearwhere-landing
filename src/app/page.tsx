import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LinkButton } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatsStrip } from "@/components/StatsStrip";
import { AppShowcase } from "@/components/AppShowcase";
import { WaitlistForm } from "@/components/WaitlistForm";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { screens } from "@/data/screens";

export const metadata: Metadata = {
  description:
    "WearWhere helps you decide what to wear to concerts, dinners, festivals, and dates. Event-aware, weather-aware, style-aware. iOS app — Europe first.",
  alternates: {
    canonical: "/",
  },
};

const howItWorks = [
  {
    index: "01",
    title: "Plan around the event",
    description:
      "Tonight's concert. Saturday dinner. A flight at 7am. WearWhere reads the date, city, and weather around it.",
    screen: screens.planWhereWhen,
  },
  {
    index: "02",
    title: "Get the look",
    description:
      "A small set of outfits, scored on weather, comfort, and your style. No overwhelming list.",
    screen: screens.lookDetail,
  },
  {
    index: "03",
    title: "Shop at the seller",
    description:
      "Each piece links straight to the brand's official product page. No marketplace, no checkout interception.",
    screen: screens.outfitBreakdown,
  },
  {
    index: "04",
    title: "Send to friends",
    description:
      "Share 2–4 looks with a private link. Friends pick a favourite. Results stay between you.",
    screen: screens.shareVote,
  },
];

const problems = [
  { icon: "📱", text: "Six tabs open, still unsure" },
  { icon: "👠", text: "Wrong shoes for four hours" },
  { icon: "🥶", text: "Freezing at an outdoor show" },
  { icon: "🤔", text: "Overdressed or underdressed" },
  { icon: "📸", text: "Nothing photographs right" },
  { icon: "💬", text: "Three selfies sent to the group chat" },
];

const occasions = [
  { icon: "🎵", title: "Concert tonight", note: "Indoor venue, standing crowd" },
  { icon: "🍽", title: "Saturday dinner", note: "Dress code: smart-casual" },
  { icon: "🎪", title: "Festival weekend", note: "Three-day outdoor, pack light" },
  { icon: "✈", title: "Early flight", note: "7am airport, comfort first" },
  { icon: "🎂", title: "Wedding guest", note: "Not the bride, still chic" },
  { icon: "☕", title: "Rooftop brunch", note: "Warm afternoon, cool evening" },
];

const SITE_URL = "https://wearwhere-landing.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "WearWhere",
      url: SITE_URL,
      description:
        "WearWhere helps you decide what to wear to concerts, dinners, festivals, and dates. Event-aware, weather-aware, style-aware.",
    },
    {
      "@type": "MobileApplication",
      name: "WearWhere",
      operatingSystem: "iOS",
      applicationCategory: "LifestyleApplication",
      description:
        "Event-aware outfit recommendations for concerts, dinners, festivals, and dates across Europe. Private iOS beta.",
      url: SITE_URL,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ============================================================ */}
        {/* HERO — copy left, real screenshot in a phone frame right */}
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

          <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-12 items-center">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-sage">
                iOS · Europe-first · Beta
              </p>
              <h1 className="mt-6 font-display text-[2.75rem] sm:text-6xl md:text-7xl tracking-tight leading-[0.98] text-ink">
                Outfits for the plans you{" "}
                <em className="not-italic relative inline-block">
                  <span className="relative z-10">actually have</span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1 h-3 bg-coral/30 -z-0"
                  />
                </em>
                .
              </h1>
              <p className="mt-7 max-w-xl text-lg text-ink/65 leading-relaxed">
                Tell WearWhere where you&apos;re going. We build the look
                around the event, the weather, and your style.
              </p>

              <div className="mt-9">
                <WaitlistForm />
              </div>

              <div className="mt-7">
                <a
                  href="#how-it-works"
                  className="text-sm text-ink/70 hover:text-ink transition-colors underline decoration-mist underline-offset-4"
                >
                  ↓ See how it works
                </a>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <PhoneFrame
                src={screens.lookResults.src}
                alt={screens.lookResults.alt}
                size="lg"
                priority
              />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* STATS STRIP */}
        {/* ============================================================ */}
        <StatsStrip />

        {/* ============================================================ */}
        {/* PROBLEM / SOLUTION */}
        {/* ============================================================ */}
        <section className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <SectionHeader title="You know the feeling." />
          <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((p) => (
              <li
                key={p.text}
                className="flex items-center gap-4 rounded-2xl border border-mist/60 bg-ivory-soft px-5 py-4 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_8px_24px_-12px_rgba(20,20,20,0.08)]"
              >
                <span aria-hidden className="text-xl">
                  {p.icon}
                </span>
                <span className="text-sm text-ink/75">{p.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 font-display text-2xl text-coral-deep">
            WearWhere collapses that into one flow.
          </p>
        </section>

        {/* ============================================================ */}
        {/* HOW IT WORKS — 4 steps with real screenshots */}
        {/* ============================================================ */}
        <section
          id="how-it-works"
          className="bg-ivory-soft border-y border-mist/50"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
            <SectionHeader
              eyebrow="How it works"
              title="Pick the plan. Get the look."
              description="A small, opinionated planner — not a feed, not a marketplace."
            />
            <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {howItWorks.map((s) => (
                <li key={s.index} className="flex flex-col items-center">
                  <PhoneFrame
                    src={s.screen.src}
                    alt={s.screen.alt}
                    size="sm"
                  />
                  <div className="mt-6 text-center max-w-[240px]">
                    <p className="font-display text-xl text-ink/25 tabular-nums">
                      {s.index}
                    </p>
                    <h3 className="mt-1 font-display text-xl tracking-tight text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============================================================ */}
        {/* APP SHOWCASE — real screenshots, scroll-snap row */}
        {/* ============================================================ */}
        <AppShowcase />

        {/* ============================================================ */}
        {/* WHO IT'S FOR */}
        {/* ============================================================ */}
        <section className="bg-ivory-soft border-y border-mist/50">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
            <SectionHeader
              eyebrow="Who it's for"
              title="Made for real plans."
            />
            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {occasions.map((o) => (
                <li
                  key={o.title}
                  className="rounded-2xl border border-mist/60 bg-ivory p-5 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_8px_24px_-12px_rgba(20,20,20,0.08)]"
                >
                  <span aria-hidden className="text-2xl">
                    {o.icon}
                  </span>
                  <p className="mt-3 font-display text-lg text-ink">
                    {o.title}
                  </p>
                  <p className="mt-1 text-sm text-ink/55 leading-relaxed">
                    &ldquo;{o.note}&rdquo;
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============================================================ */}
        {/* BRANDS TEASER */}
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
