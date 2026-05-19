import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LinkButton } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { FeatureCard } from "@/components/FeatureCard";
import { BrandBadge } from "@/components/BrandBadge";
import { DisclosureNote } from "@/components/DisclosureNote";
import { MockPhoneFrame } from "@/components/MockPhoneFrame";
import {
  MockEventCard,
  MockOutfitCard,
  MockProductCard,
  MockVoteTeaser,
} from "@/components/AppPreviewCard";

const howItWorks = [
  {
    index: "01",
    title: "Pick the plan",
    description:
      "Choose an event, a city, or a custom occasion. WearWhere reads the date, venue, and weather around it.",
  },
  {
    index: "02",
    title: "Get the look",
    description:
      "WearWhere considers weather, venue, comfort, color, and vibe — then proposes a handful of outfits.",
  },
  {
    index: "03",
    title: "Shop at seller",
    description:
      "Supported product links open the brand's official retailer page. Checkout stays on the retailer site.",
  },
];

const considers = [
  { label: "Event type", hint: "Concert, dinner, festival, city day" },
  { label: "Weather", hint: "Temperature, rain, wind, indoor vs outdoor" },
  { label: "Venue & city", hint: "Local norms, dress code signals" },
  { label: "Budget", hint: "Soft cap on suggested looks" },
  { label: "Comfort", hint: "Heel height, layering, fit preferences" },
  { label: "Color & vibe", hint: "Editorial, soft, sharp, warm, cool" },
  { label: "Friend voting", hint: "Private share-link feedback" },
  { label: "Retailer links", hint: "Official seller pages only" },
];

const previewCards = [
  {
    title: "Event discovery",
    description:
      "Curated event surfaces — concerts, dinners, festivals, city days — with weather already factored in.",
  },
  {
    title: "Plan wizard",
    description:
      "A short, calm flow. Tell WearWhere who you are going with and how dressed-up you want to feel.",
  },
  {
    title: "Outfit results",
    description:
      "A small set of looks scored on weather, formality, and your style — never an overwhelming list.",
  },
  {
    title: "Closet",
    description:
      "Save looks. Re-use pieces across events. Stay on top of what you actually wear.",
  },
  {
    title: "Friend voting",
    description:
      "Share a private, revocable link. Friends vote between two looks — no public feed, no public profile.",
  },
  {
    title: "Shop the look",
    description:
      "Each piece links to the brand's official site. WearWhere never handles checkout, payment, or delivery.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================================ */}
        {/* HERO */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden">
          {/* Soft ambient backdrop */}
          <div
            className="absolute inset-0 -z-10 opacity-70"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 80% 0%, rgba(255,106,74,0.10), transparent 50%), radial-gradient(ellipse 60% 50% at 0% 30%, rgba(125,143,122,0.10), transparent 50%)",
            }}
          />

          <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-[1.15fr_1fr] gap-16 lg:gap-12 items-center">
            <div>
              <BrandBadge label="Beta in development" />
              <h1 className="mt-7 font-display text-[2.75rem] sm:text-6xl md:text-7xl tracking-tight leading-[0.98] text-ink">
                Outfits for the plans you{" "}
                <em className="not-italic relative inline-block">
                  <span className="relative z-10">actually</span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1 h-3 bg-coral/30 -z-0"
                  />
                </em>{" "}
                have.
              </h1>
              <p className="mt-7 max-w-xl text-lg text-ink/65 leading-relaxed">
                WearWhere helps you decide what to wear for concerts, dinners,
                festivals, city days, and nights out — using event context,
                weather, style preferences, and curated product links.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <LinkButton href="/contact" variant="primary" size="lg">
                  Request beta access
                </LinkButton>
                <LinkButton href="#brands" variant="ghost" size="lg">
                  For brands & retailers
                </LinkButton>
              </div>

              <p className="mt-8 text-xs text-ink/45 max-w-md leading-relaxed">
                Europe-first · Event-aware · Privacy-first. Not yet on the App
                Store. No public feed, no public profiles.
              </p>
            </div>

            {/* App preview composition */}
            <div className="relative mt-4 lg:mt-0">
              <div className="relative">
                <MockPhoneFrame>
                  <div className="size-full bg-gradient-to-b from-ivory to-ivory-soft p-3 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-[0.55rem] tracking-[0.18em] uppercase text-ink/45 px-1 pt-1">
                      <span>Today</span>
                      <span>Berlin · 9°C</span>
                    </div>
                    <MockEventCard />
                    <MockOutfitCard />
                    <MockProductCard />
                    <MockVoteTeaser />
                  </div>
                </MockPhoneFrame>

                {/* Floating accent cards */}
                <div className="hidden md:block absolute -left-10 top-1/4 w-44 rotate-[-6deg] opacity-95">
                  <div className="rounded-2xl bg-ivory-soft border border-ink/[0.06] shadow-[0_4px_12px_-2px_rgba(20,20,20,0.08),0_24px_48px_-16px_rgba(20,20,20,0.18)] p-3">
                    <span className="text-[0.55rem] tracking-[0.18em] uppercase text-sage font-medium">
                      Weather
                    </span>
                    <p className="font-display text-sm text-ink mt-1 leading-tight">
                      9°C · clear
                      <br />
                      light layer fine
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute -right-6 bottom-12 w-40 rotate-[5deg]">
                  <div className="rounded-2xl bg-coral text-ivory shadow-[0_4px_12px_-2px_rgba(20,20,20,0.08),0_24px_48px_-16px_rgba(20,20,20,0.18)] p-3">
                    <span className="text-[0.55rem] tracking-[0.18em] uppercase font-medium opacity-80">
                      Stylist note
                    </span>
                    <p className="font-display text-sm mt-1 leading-tight">
                      Warm tones,
                      <br />
                      grounded shoes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* HOW IT WORKS */}
        {/* ============================================================ */}
        <section
          id="how-it-works"
          className="mx-auto max-w-6xl px-6 lg:px-8 py-24"
        >
          <SectionHeader
            eyebrow="How it works"
            title="Three calm steps. No dashboards."
            description="WearWhere is not a marketplace and not a feed. It is a small, opinionated planner that hands you back to the brand for the actual purchase."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {howItWorks.map((s) => (
              <FeatureCard
                key={s.index}
                index={s.index}
                title={s.title}
                description={s.description}
              />
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* WHAT IT CONSIDERS */}
        {/* ============================================================ */}
        <section className="bg-ivory-soft border-y border-ink/[0.06]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
            <SectionHeader
              eyebrow="The ingredients"
              title="What WearWhere considers."
              description="Eight signals, weighted differently per event. Nothing about your body or location ever appears on a share card."
            />
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {considers.map((c) => (
                <div
                  key={c.label}
                  className="rounded-2xl border border-ink/[0.08] bg-ivory p-5 hover:border-ink/20 transition-colors"
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
        {/* APP PREVIEW CARDS */}
        {/* ============================================================ */}
        <section className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <SectionHeader
            eyebrow="Beta interface preview"
            title="Six surfaces, one calm flow."
            description="None of the imagery below is a live App Store screenshot. The visual system shown here is what we're building toward in the iOS beta."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {previewCards.map((p) => (
              <FeatureCard
                key={p.title}
                title={p.title}
                description={p.description}
              />
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* FOR BRANDS */}
        {/* ============================================================ */}
        <section
          id="brands"
          className="bg-ink text-ivory relative overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 100% 0%, rgba(255,106,74,0.18), transparent 60%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-coral mb-5">
                <span className="size-1 rounded-full bg-coral" aria-hidden />
                For brands & retailers
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.05]">
                A calm, contextual lane to discovery.
              </h2>
              <p className="mt-5 text-lg text-ivory/70 leading-relaxed max-w-xl">
                WearWhere helps users discover outfit ideas in high-intent
                contexts: concerts, dinners, festivals, city days, weather
                changes, and nights out. We send those users to your official
                retailer page and step out of the way.
              </p>

              <div className="mt-9 grid sm:grid-cols-2 gap-3">
                {[
                  "Europe-first fashion discovery",
                  "Contextual outfit recommendations",
                  "Event & weather-based user intent",
                  "Official seller links — no marketplace",
                  "Affiliate disclosure when applicable",
                  "No scraping, ever",
                ].map((b) => (
                  <div
                    key={b}
                    className="flex items-start gap-3 text-sm text-ivory/85"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 size-1.5 rounded-full bg-coral shrink-0"
                    />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9">
                <LinkButton href="/contact" variant="primary" size="lg">
                  Get in touch
                </LinkButton>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="rounded-3xl border border-ivory/10 bg-ivory/[0.03] p-7">
                <h3 className="font-display text-2xl">What we hand back to you</h3>
                <ul className="mt-5 space-y-4 text-sm text-ivory/75 leading-relaxed">
                  <li>
                    <strong className="text-ivory">Checkout, payment, delivery, returns, customer service</strong>{" "}
                    — all stay with the retailer. WearWhere never sees a card.
                  </li>
                  <li>
                    <strong className="text-ivory">Anonymous click metadata</strong>{" "}
                    — only the destination domain and a source surface label.
                    No raw URLs, no PII, no full query strings.
                  </li>
                  <li>
                    <strong className="text-ivory">Honest disclosure</strong>{" "}
                    — affiliate language only appears on products with an
                    approved relationship and a verified link.
                  </li>
                </ul>
              </div>

              <p className="mt-6 text-xs text-ivory/50 leading-relaxed">
                We are currently in beta and preparing approved affiliate
                relationships. Until then, product links may be official seller
                links without commission.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* DISCLOSURE */}
        {/* ============================================================ */}
        <section
          id="disclosure"
          className="mx-auto max-w-3xl px-6 lg:px-8 py-24"
        >
          <SectionHeader
            eyebrow="Affiliate disclosure"
            title="When we earn, we say so."
            description="WearWhere may earn commission from qualifying retailer links where an approved affiliate relationship exists. Product recommendations remain clearly labeled, and checkout takes place on the retailer's website."
          />
          <DisclosureNote className="mt-10">
            We do not currently claim to earn commission from any specific
            brand. Each affiliate relationship is approved individually by the
            retailer through our affiliate network partner. Where no approved
            relationship exists, the product opens as a plain official seller
            link.
          </DisclosureNote>
        </section>

        {/* ============================================================ */}
        {/* BETA / FINAL CTA */}
        {/* ============================================================ */}
        <section id="beta" className="mx-auto max-w-6xl px-6 lg:px-8 pb-24">
          <div className="relative overflow-hidden rounded-[2rem] bg-ivory-soft border border-ink/[0.08] p-10 md:p-16">
            <div
              aria-hidden
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 100% 100%, rgba(255,106,74,0.14), transparent 60%), radial-gradient(ellipse 50% 40% at 0% 0%, rgba(125,143,122,0.12), transparent 60%)",
              }}
            />
            <div className="relative max-w-2xl">
              <BrandBadge label="Private beta" tone="sage" />
              <h2 className="mt-6 font-display text-4xl md:text-5xl tracking-tight leading-[1.05] text-ink">
                Want to see WearWhere?
              </h2>
              <p className="mt-5 text-lg text-ink/65 leading-relaxed">
                We are preparing a Europe-first beta for event-aware outfit
                planning and shoppable style discovery. Tell us a bit about
                yourself or your brand and we&apos;ll be in touch.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href="/contact" variant="primary" size="lg">
                  Contact WearWhere
                </LinkButton>
                <LinkButton href="/privacy" variant="ghost" size="lg">
                  Read the privacy policy
                </LinkButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
