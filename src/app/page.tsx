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
import { AppStoreComingSoonButton } from "@/components/AppStoreComingSoonButton";
import { AppPreviewShowcase } from "@/components/AppPreviewShowcase";
import { BrandRetailerFlow } from "@/components/BrandRetailerFlow";
import { FriendVotePreview } from "@/components/FriendVotePreview";
import { TrustStrip } from "@/components/TrustStrip";
import { WaitlistCTA } from "@/components/WaitlistCTA";

const EMAIL = "erdemcisse98@icloud.com";
const BETA_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("WearWhere beta access request")}`;

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

const launchPoints = [
  {
    title: "iOS-first mobile experience",
    body: "Designed for iPhone. Native-feeling interface, safe-area aware, built on Expo + React Native.",
  },
  {
    title: "Private-first sharing",
    body: "No public feed. No public profiles. Share links are revocable and never expose body or sizing data.",
  },
  {
    title: "Account deletion in-app",
    body: "Users can initiate account deletion from inside the app. No support-ticket gate.",
  },
  {
    title: "Retailer checkout, not ours",
    body: "WearWhere never handles payment, shipping, or customer service. Affiliate disclosure when applicable.",
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
          <div
            className="absolute inset-0 -z-10 opacity-70"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 80% 0%, rgba(255,106,74,0.10), transparent 50%), radial-gradient(ellipse 60% 50% at 0% 30%, rgba(125,143,122,0.10), transparent 50%)",
            }}
          />

          <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-12 items-center">
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
                festivals, city days, and nights out — using events, weather,
                style, comfort, and curated seller links.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <LinkButton href={BETA_MAILTO} external variant="primary" size="lg">
                  Join beta waitlist
                </LinkButton>
                <LinkButton href="#brands" variant="ghost" size="lg">
                  For brands & retailers
                </LinkButton>
              </div>

              <p className="mt-7 inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-ink/45">
                <span className="size-1 rounded-full bg-sage" aria-hidden />
                iOS-first · App Store launch in preparation
              </p>
            </div>

            {/* App preview composition — 3 layered phone-style screens */}
            <div className="relative mt-4 lg:mt-0 min-h-[520px] sm:min-h-[600px] lg:min-h-[640px]">
              {/* Back screen — Plan/event */}
              <div className="hidden md:block absolute -left-8 top-2 w-[220px] rotate-[-8deg] opacity-95">
                <MockPhoneFrame label="Plan">
                  <div className="size-full bg-gradient-to-b from-ivory to-ivory-soft p-3 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-[0.55rem] tracking-[0.18em] uppercase text-ink/45 px-1 pt-1">
                      <span>Friday</span>
                      <span>Berlin · 9°</span>
                    </div>
                    <MockEventCard />
                    <div className="rounded-2xl bg-ivory-soft border border-ink/[0.06] p-3">
                      <p className="text-[0.55rem] tracking-[0.18em] uppercase text-sage font-medium">
                        Plan
                      </p>
                      <p className="font-display text-sm text-ink mt-1">
                        How dressed-up?
                      </p>
                      <div className="mt-2.5 grid grid-cols-3 gap-1.5">
                        {["Easy", "Sharp", "Dressed"].map((l, i) => (
                          <span
                            key={l}
                            className={`rounded-full px-1.5 py-1 text-[0.5rem] text-center font-medium border ${
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
                  </div>
                </MockPhoneFrame>
              </div>

              {/* Front screen — Outfit results (centred, primary) */}
              <div className="relative z-10">
                <MockPhoneFrame label="Outfit result">
                  <div className="size-full bg-gradient-to-b from-ivory to-ivory-soft p-3 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-[0.55rem] tracking-[0.18em] uppercase text-ink/45 px-1 pt-1">
                      <span>Tonight</span>
                      <span>Strong match</span>
                    </div>
                    <MockOutfitCard />
                    <MockProductCard />
                    <MockVoteTeaser />
                  </div>
                </MockPhoneFrame>
              </div>

              {/* Right screen — Closet/Vote */}
              <div className="hidden md:block absolute -right-8 bottom-2 w-[220px] rotate-[7deg] opacity-95">
                <MockPhoneFrame label="Vote">
                  <div className="size-full bg-gradient-to-b from-coral/[0.06] via-ivory to-ivory-soft p-3 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-[0.55rem] tracking-[0.18em] uppercase text-ink/45 px-1 pt-1">
                      <span>Friend vote</span>
                      <span>10 votes</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="aspect-[3/4] rounded-xl bg-gradient-to-b from-sage/20 to-ivory border border-ink/[0.06] flex items-end p-2">
                        <span className="text-[0.5rem] font-medium text-ink/65">
                          Look A
                        </span>
                      </div>
                      <div className="aspect-[3/4] rounded-xl bg-ink text-ivory border border-ink flex items-end p-2">
                        <span className="text-[0.5rem] font-medium">
                          Look B · winning
                        </span>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-coral/[0.08] border border-coral/20 p-2.5">
                      <p className="text-[0.55rem] tracking-[0.18em] uppercase text-coral-deep font-medium">
                        Closet
                      </p>
                      <p className="font-display text-xs text-ink mt-1 leading-tight">
                        Saved for later
                      </p>
                    </div>
                  </div>
                </MockPhoneFrame>
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
        {/* BUILT FOR IPHONE / APP STORE LAUNCH */}
        {/* ============================================================ */}
        <section
          id="launch"
          className="bg-ivory-soft border-y border-ink/[0.06]"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
            <div className="lg:sticky lg:top-24">
              <BrandBadge label="Launch in preparation" tone="sage" />
              <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.05] text-ink">
                Built for iPhone.
                <br />
                Preparing for App Store launch.
              </h2>
              <p className="mt-5 text-lg text-ink/65 leading-relaxed max-w-xl">
                WearWhere is an iOS-first experience. We&apos;re polishing the
                beta now and preparing the App Store listing. Want to be told
                when it&apos;s ready?
              </p>

              <div className="mt-8 flex flex-wrap gap-3 items-center">
                <AppStoreComingSoonButton variant="ink" />
                <LinkButton
                  href={BETA_MAILTO}
                  external
                  variant="ghost"
                  size="lg"
                >
                  Get launch updates
                </LinkButton>
              </div>

              <p className="mt-6 text-xs text-ink/45 max-w-md leading-relaxed">
                The button above is a custom WearWhere placeholder, not
                Apple&apos;s official badge. We&apos;ll switch it for the
                official App Store badge once the listing is live.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4">
              {launchPoints.map((p) => (
                <li
                  key={p.title}
                  className="rounded-3xl border border-ink/[0.08] bg-ivory p-6 hover:border-ink/20 transition-colors"
                >
                  <p className="font-display text-lg text-ink leading-tight">
                    {p.title}
                  </p>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============================================================ */}
        {/* APP PREVIEW SHOWCASE */}
        {/* ============================================================ */}
        <AppPreviewShowcase />

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
        {/* FRIEND VOTING */}
        {/* ============================================================ */}
        <FriendVotePreview />

        {/* ============================================================ */}
        {/* FOR BRANDS */}
        {/* ============================================================ */}
        <BrandRetailerFlow />

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
        {/* TRUST STRIP */}
        {/* ============================================================ */}
        <TrustStrip />

        {/* ============================================================ */}
        {/* WAITLIST CTA */}
        {/* ============================================================ */}
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
