import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { LinkButton } from "@/components/Button";
import { DisclosureNote } from "@/components/DisclosureNote";
import { PartnershipForm } from "@/components/PartnershipForm";
import { screens, SCREEN_WIDTH, SCREEN_HEIGHT } from "@/data/screens";

export const metadata: Metadata = {
  title: "For brands & retailers",
  description:
    "Apply for the WearWhere affiliate programme. A curated, event-driven fashion app sending high-intent mobile traffic to official seller pages across 19 European markets.",
  alternates: {
    canonical: "/brands",
  },
};

const audienceRetailers = [
  "Zara · Bershka · Stradivarius · Mango",
  "H&M · COS · Arket · Weekday",
  "ASOS · Zalando · About You · NA-KD",
  "Uniqlo · Pull&Bear · Trendyol",
];

const marketFacts = [
  { label: "Launch market", value: "Germany (DE)" },
  { label: "Supported", value: "19 European shopping markets" },
  { label: "Browse-only", value: "Türkiye (commerce pending)" },
  { label: "Audience language", value: "English UI, local currency display" },
];

const placements = [
  {
    name: "Outfit Breakdown",
    screen: screens.outfitBreakdown,
    body: "The core placement. The user has picked her event — say, a concert in Berlin on Friday. WearWhere generates complete outfits scored on weather, comfort, and her vibe. Each look lists its component products (top, bottom, shoes, accessories) with brand, price preview, and an “Open seller” button. She's already committed to the occasion; she's deciding which version of the look to buy.",
  },
  {
    name: "Editorial Collection Rails",
    screen: screens.styleFeedRails,
    body: "Curated rows on the Home screen and Style Feed — “Festival Fits”, “Date Night”, “Summer Collection”, city-style capsules. Seasonal products shown in a contextual, editorial frame. No chaotic grid, no feed overwhelm.",
  },
  {
    name: "Closet “Pieces”",
    screen: screens.closetLooks,
    body: "Users save individual products to a personal wardrobe and return to them later. Saved pieces keep their seller link and show price freshness honestly (“price checked X days ago”). A saved product is a product the user has already decided she wants.",
  },
  {
    name: "Shared Looks & Friend Votes",
    screen: screens.shareVote,
    body: "Users share outfit cards to WhatsApp and Instagram and run private polls (“which one should I wear?”). Every shared look carries its brand line-up, putting products in front of new users organically — zero extra spend from us.",
  },
];

const compliance = [
  {
    title: "Official URLs only.",
    body: "Every product stores the retailer's canonical product URL. We never deep-link to mirrors, resellers, or cached pages, and we preserve the retailer's URL rather than rewriting it.",
  },
  {
    title: "Server-side link assembly.",
    body: "Affiliate tracking parameters are attached server-side at click time, per approved advertiser. No affiliate credentials or tokens ever ship inside the mobile app.",
  },
  {
    title: "Per-advertiser activation.",
    body: "Tracking activates only for brands whose programmes have approved us. Products from non-approved brands continue to link to the seller without tracking — the user experience never degrades and no commission is ever implied where none exists.",
  },
  {
    title: "Clear disclosure.",
    body: "When a tracked link exists, the product card shows “WearWhere may earn a commission.” The disclosure is per-product and only appears when true.",
  },
  {
    title: "No incentivised clicking, no cookie stuffing, no ad-on-brand bidding.",
    body: "Clicks come exclusively from a user choosing a product inside her outfit. We do not run paid search on brand terms and have no toolbar or extension behaviour.",
  },
  {
    title: "Privacy-respecting analytics.",
    body: "Outbound click logging stores the destination domain only — no full URLs, no raw IPs, no personal identifiers tied to clicks. GDPR-conscious by design for our young European audience.",
  },
];

const trustCommitments = [
  "We describe ourselves as an independent recommendation app. We never claim partnership, sponsorship, or endorsement by any brand unless a formal agreement exists.",
  "Brand product imagery is used only as permitted — via programme product feeds once approved, or in linking contexts that comply with the retailer's terms. We do not scrape retailer websites.",
  "Editorial and demo content is always labeled as such in the interface.",
  "The app is held to a high standard: private-by-default social features, no public comments before moderation infrastructure, no manipulative monetisation, and no resale of personal data — ever.",
  "A live privacy policy and support contact are published on this website.",
];

const roadmap = [
  {
    title: "Live product feeds",
    body: "Replacing hand-curated catalogue with official programme feeds (richer inventory, live prices, stock-aware recommendations) as advertiser approvals land.",
  },
  {
    title: "Deeper shopping surfaces",
    body: "“Complete the look” suggestions and a budget ladder (same look at three price points), both of which increase products surfaced per session.",
  },
  {
    title: "Seasonal editorial capsules",
    body: "Festival season, party season, city-style collections concentrating high-intent traffic.",
  },
  {
    title: "AI stylist refinements",
    body: "Natural-language outfit adjustments (“under €100”, “more black”, “rain-proof it”) that keep users iterating — and shopping — inside one session.",
  },
];

const summaryRows = [
  {
    label: "What we ask",
    value:
      "Acceptance into your publisher programme so qualified outfit-driven traffic to your product pages can be tracked and attributed.",
  },
  {
    label: "What you get",
    value:
      "A new, brand-safe, high-intent mobile placement in front of a young European fashion audience at the exact moment of outfit decision.",
  },
  {
    label: "Integration",
    value:
      "Server-side deep links per your programme's specification; product feeds consumed server-side; per-product disclosure.",
  },
  {
    label: "Compliance",
    value:
      "No brand bidding, no incentivised clicks, no scraping, no fake commerce signals, GDPR-conscious analytics, full disclosure.",
  },
  {
    label: "Network",
    value:
      "Awin (publisher approved) — per-advertiser programme application required.",
  },
];

const linkFlow = [
  {
    n: "01",
    title: "User discovers an outfit idea",
    body: "Inside WearWhere, scored on event, weather, and personal style.",
  },
  {
    n: "02",
    title: "Product card shows the curated item",
    body: "Curated by a human. Brand name, title, preview price, source label.",
  },
  {
    n: "03",
    title: "User taps 'View at seller'",
    body: "In-app browser opens the brand's official product page in their domain.",
  },
  {
    n: "04",
    title: "Retailer handles checkout",
    body: "Payment, shipping, returns, customer service — all yours.",
  },
];

export default function BrandsPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================================ */}
        {/* HERO + ELEVATOR PITCH */}
        {/* ============================================================ */}
        <section className="mx-auto max-w-4xl px-6 lg:px-8 pt-16 pb-12">
          <SectionHeader
            eyebrow="For brands & retailers"
            title="A calm, contextual lane to discovery."
            description="WearWhere recommends event-appropriate outfits to a young European fashion audience and links every product back to your official page. We hand the user to you at the moment of highest purchase intent."
          />

          <blockquote className="mt-10 rounded-3xl border border-mist/60 bg-ivory-soft p-7 md:p-8 text-[0.95rem] text-ink/75 leading-relaxed italic shadow-[0_1px_2px_rgba(20,20,20,0.04),0_8px_24px_-12px_rgba(20,20,20,0.10)]">
            WearWhere is a Europe-first iOS app that recommends
            event-appropriate outfits accounting for venue, weather, comfort,
            and budget, and links users to brands&apos; official product
            pages. We currently send users to sellers directly; we are
            applying to track and attribute that traffic through your
            programme. No checkout happens inside the app — the retailer owns
            the customer and the transaction.
          </blockquote>

          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="#partnership-form" variant="primary" size="lg">
              Apply for partnership →
            </LinkButton>
            <LinkButton href="#disclosure" variant="ghost" size="lg">
              Read our disclosure ↓
            </LinkButton>
          </div>
        </section>

        {/* ============================================================ */}
        {/* AUDIENCE */}
        {/* ============================================================ */}
        <section className="bg-ivory-soft border-y border-mist/50">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
            <SectionHeader
              eyebrow="Audience"
              title="Who she is. Where she shops."
            />
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="rounded-3xl border border-mist/60 bg-ivory p-7">
                <h3 className="text-xs font-medium tracking-[0.18em] uppercase text-sage">
                  The person
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-ink/75 leading-relaxed">
                  <li>Women and young women, approximately 16–35.</li>
                  <li>Students and young professionals.</li>
                  <li>
                    Goes to concerts, festivals, dinners, dates, club nights,
                    and brunches.
                  </li>
                  <li>
                    Asks friends &ldquo;which outfit should I wear?&rdquo;
                    before going out.
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl border border-mist/60 bg-ivory p-7">
                <h3 className="text-xs font-medium tracking-[0.18em] uppercase text-sage">
                  Where she shops
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-ink/75 leading-relaxed">
                  {audienceRetailers.map((row) => (
                    <li key={row} className="font-display text-base text-ink">
                      {row}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-ink/50 leading-relaxed">
                  Retailer names indicate where our audience already shops —
                  not an existing partnership or endorsement.
                </p>
              </div>
              <div className="rounded-3xl border border-mist/60 bg-ivory p-7">
                <h3 className="text-xs font-medium tracking-[0.18em] uppercase text-sage">
                  Why her intent is high
                </h3>
                <p className="mt-4 text-sm text-ink/75 leading-relaxed">
                  A WearWhere user is not idly browsing — she has a specific
                  event on a specific date and a budget she has already told
                  us. By the time she taps a product, the occasion, weather,
                  and price range have already been matched. That click is
                  qualified, near-term purchase intent.
                </p>
              </div>
            </div>

            <dl className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-mist/60 bg-mist/60">
              {marketFacts.map((f) => (
                <div key={f.label} className="bg-ivory px-5 py-4">
                  <dt className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-ink/45">
                    {f.label}
                  </dt>
                  <dd className="mt-1.5 font-display text-base text-ink leading-snug">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FOUR PLACEMENTS */}
        {/* ============================================================ */}
        <section className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <SectionHeader
            eyebrow="Placements"
            title="Where your products appear."
            description="Four high-intent surfaces inside WearWhere. Every call-to-action opens your official product page."
          />
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {placements.map((p, i) => (
              <article
                key={p.name}
                className="rounded-3xl border border-mist/60 bg-ivory-soft overflow-hidden shadow-[0_1px_2px_rgba(20,20,20,0.04),0_8px_24px_-12px_rgba(20,20,20,0.10)]"
              >
                <div className="relative h-64 bg-cream overflow-hidden">
                  <Image
                    src={p.screen.src}
                    alt={p.screen.alt}
                    width={SCREEN_WIDTH}
                    height={SCREEN_HEIGHT}
                    sizes="(min-width: 768px) 45vw, 90vw"
                    className="size-full object-cover object-top"
                  />
                  <span className="absolute top-3 left-3 text-[0.55rem] font-medium tracking-[0.18em] uppercase bg-ink text-ivory rounded-full px-2.5 py-1">
                    Real beta screen
                  </span>
                </div>
                <div className="p-7">
                  <p className="text-xs tracking-[0.18em] uppercase text-sage font-medium">
                    Placement {i + 1}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl tracking-tight text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm text-ink/65 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* HOW A CLICK HAPPENS — dark band */}
        {/* ============================================================ */}
        <section className="bg-ink text-ivory relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 100% 0%, rgba(255,106,74,0.18), transparent 60%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-coral mb-5">
              <span className="size-1 rounded-full bg-coral" aria-hidden />
              How product links work
            </span>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight leading-[1.05] max-w-xl">
              From outfit idea to your checkout, in four steps.
            </h2>
            <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {linkFlow.map((s) => (
                <li
                  key={s.n}
                  className="rounded-2xl border border-ivory/10 bg-ivory/[0.03] p-5"
                >
                  <span className="font-display text-2xl text-coral tabular-nums leading-none">
                    {s.n}
                  </span>
                  <p className="mt-3 font-display text-base text-ivory leading-tight">
                    {s.title}
                  </p>
                  <p className="mt-1.5 text-sm text-ivory/65 leading-relaxed">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-xs text-ivory/55 leading-relaxed max-w-2xl">
              Until an advertiser relationship is approved, WearWhere operates
              in official seller-link mode without commission. Affiliate
              disclosure only appears on products with a verified, approved
              affiliate link.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* NETWORK COMPLIANCE */}
        {/* ============================================================ */}
        <section className="mx-auto max-w-4xl px-6 lg:px-8 py-24">
          <SectionHeader
            eyebrow="Linking & tracking"
            title="Built for network compliance from day one."
          />
          <ol className="mt-12 rounded-3xl border border-mist/60 bg-ivory-soft divide-y divide-mist/50 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_8px_24px_-12px_rgba(20,20,20,0.10)]">
            {compliance.map((c, i) => (
              <li key={c.title} className="flex gap-5 p-6 md:p-7">
                <span
                  aria-hidden
                  className="shrink-0 size-9 rounded-full bg-ink text-ivory font-display text-sm flex items-center justify-center tabular-nums"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg tracking-tight text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink/65 leading-relaxed">
                    {c.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ============================================================ */}
        {/* TRUST COMMITMENTS */}
        {/* ============================================================ */}
        <section className="bg-ivory-soft border-y border-mist/50">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 py-24">
            <SectionHeader
              eyebrow="Trust & brand safety"
              title="Five lines you can quote in your application review."
            />
            <ul className="mt-12 space-y-4">
              {trustCommitments.map((t) => (
                <li
                  key={t}
                  className="flex gap-4 rounded-2xl border border-mist/60 bg-ivory p-5"
                >
                  <span aria-hidden className="text-sage font-medium">
                    ✓
                  </span>
                  <p className="text-sm text-ink/75 leading-relaxed">{t}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ROADMAP */}
        {/* ============================================================ */}
        <section className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <SectionHeader
            eyebrow="Roadmap"
            title="Where the product is going."
            description="WearWhere is launching with a complete private loop. On the near-term roadmap:"
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {roadmap.map((r) => (
              <article
                key={r.title}
                className="rounded-3xl border border-mist/60 bg-ivory-soft p-7 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_8px_24px_-12px_rgba(20,20,20,0.10)]"
              >
                <h3 className="font-display text-xl tracking-tight text-ink">
                  {r.title}
                </h3>
                <p className="mt-2.5 text-sm text-ink/65 leading-relaxed">
                  {r.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 font-display text-xl text-ink/80 italic max-w-2xl">
            Affiliate commerce is our primary and first monetisation channel.
            We are building the catalogue, the placements, and the audience
            around it.
          </p>
        </section>

        {/* ============================================================ */}
        {/* SUMMARY TABLE */}
        {/* ============================================================ */}
        <section className="mx-auto max-w-4xl px-6 lg:px-8 pb-24">
          <SectionHeader
            eyebrow="Summary"
            title="Partnership at a glance."
          />
          <div className="mt-12 rounded-3xl border border-mist/60 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {summaryRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-ivory" : "bg-ivory-soft"}
                  >
                    <th
                      scope="row"
                      className="align-top text-left font-display text-base text-ink p-5 w-36 sm:w-44"
                    >
                      {row.label}
                    </th>
                    <td className="align-top p-5 text-ink/70 leading-relaxed">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ============================================================ */}
        {/* AFFILIATE DISCLOSURE (kept anchor) */}
        {/* ============================================================ */}
        <section
          id="disclosure"
          className="mx-auto max-w-3xl px-6 lg:px-8 pb-24 scroll-mt-24"
        >
          <SectionHeader
            eyebrow="Affiliate disclosure"
            title="When we earn, we say so."
            description="WearWhere may earn commission from qualifying retailer links where an approved affiliate relationship exists. Until that approval lands, the same product opens as a plain official seller link with no commission."
          />
          <DisclosureNote className="mt-10">
            We do not currently claim to earn commission from any specific
            brand. Each affiliate relationship is approved individually
            through our affiliate network partner. Where no approved
            relationship exists, the product opens as a plain official seller
            link.
          </DisclosureNote>
        </section>

        {/* ============================================================ */}
        {/* PARTNERSHIP FORM */}
        {/* ============================================================ */}
        <section
          id="partnership-form"
          className="mx-auto max-w-4xl px-6 lg:px-8 pb-24 scroll-mt-24"
        >
          <div className="rounded-[2rem] border border-mist/60 bg-ivory-soft p-8 md:p-12 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_24px_48px_-20px_rgba(20,20,20,0.12)]">
            <SectionHeader
              eyebrow="Get in touch"
              title="Partnership review or affiliate question?"
              description="One email reaches us directly. No automated drips, no sales team."
            />
            <div className="mt-10">
              <PartnershipForm />
            </div>
            <p className="mt-8 text-xs text-ink/50 leading-relaxed">
              We respond to all genuine partnership enquiries within 2
              business days. If you are an Awin publisher account manager,
              please reference your advertiser ID in the message.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
