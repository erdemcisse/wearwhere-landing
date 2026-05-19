import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { LinkButton } from "@/components/Button";
import { BrandRetailerFlow } from "@/components/BrandRetailerFlow";
import { AppPreviewShowcase } from "@/components/AppPreviewShowcase";
import { DisclosureNote } from "@/components/DisclosureNote";
import { fullTrustPosture } from "@/data/trustBullets";

export const metadata: Metadata = {
  title: "For brands & retailers",
  description:
    "How WearWhere works alongside brands and retailers — official seller links, no marketplace, no scraping, affiliate disclosure when approved.",
};

export default function BrandsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-3xl px-6 lg:px-8 pt-16 pb-12">
          <SectionHeader
            eyebrow="For brands & retailers"
            title="A calm, contextual lane to discovery."
            description="WearWhere helps users decide what to wear in high-intent moments — concerts, dinners, festivals, weather changes. We hand the user back to your official product page and step out of the way."
          />
        </section>

        {/* For affiliate reviewers — Awin-ready quick-reference card */}
        <section
          id="for-affiliate-reviewers"
          aria-label="For affiliate reviewers"
          className="mx-auto max-w-3xl px-6 lg:px-8 pb-12"
        >
          <article className="rounded-3xl border border-mist/60 bg-ivory-soft p-7 md:p-9 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_8px_24px_-12px_rgba(20,20,20,0.10)]">
            <p className="text-xs tracking-[0.18em] uppercase text-sage font-medium">
              For affiliate reviewers
            </p>
            <h3 className="mt-3 font-display text-2xl tracking-tight text-ink">
              The 6 lines we&apos;d like you to know.
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-ink/70 leading-relaxed">
              <li className="flex gap-3">
                <span aria-hidden className="mt-1.5 size-1.5 rounded-full bg-coral shrink-0" />
                <span>WearWhere is currently in private beta. The iOS App Store listing is in preparation and not yet live.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-1.5 size-1.5 rounded-full bg-coral shrink-0" />
                <span>Until your advertiser approval lands, your brand operates in <strong className="text-ink">official seller-link mode</strong> — plain links to your product detail pages, no commission to WearWhere.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-1.5 size-1.5 rounded-full bg-coral shrink-0" />
                <span>WearWhere never scrapes retailers. Catalogue rows are human-curated; the mobile bundle never assembles affiliate URLs.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-1.5 size-1.5 rounded-full bg-coral shrink-0" />
                <span>Checkout, payment, shipping, returns, and customer service all remain on your retailer site. WearWhere never sees a card.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-1.5 size-1.5 rounded-full bg-coral shrink-0" />
                <span>Affiliate disclosure (&quot;WearWhere may earn a commission&quot;) appears in-app only on products with a verified, approved affiliate link.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-1.5 size-1.5 rounded-full bg-coral shrink-0" />
                <span>
                  Questions before approval?{" "}
                  <a
                    href={`mailto:erdemcisse98@icloud.com?subject=${encodeURIComponent("WearWhere brand/retailer inquiry")}`}
                    className="underline decoration-coral underline-offset-4 hover:text-ink"
                  >
                    erdemcisse98@icloud.com
                  </a>
                  .
                </span>
              </li>
            </ul>
          </article>
        </section>

        <BrandRetailerFlow />

        <section className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <SectionHeader
            eyebrow="Trust posture"
            title="Five lines you can quote in your application."
          />
          <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fullTrustPosture.map((s) => (
              <li
                key={s.title}
                className="rounded-2xl border border-mist/60 bg-ivory-soft p-6 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_8px_24px_-12px_rgba(20,20,20,0.10)]"
              >
                <p className="font-display text-base text-ink leading-tight">
                  {s.title}
                </p>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                  {s.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <AppPreviewShowcase
          featuredOnly={false}
          eyebrow="Where your products show up"
          title="Curated surfaces. Official seller links."
          description="Every surface where a product can appear inside WearWhere. Mock visuals today; real iPhone screenshots will replace them as the beta hardens."
        />

        <section className="mx-auto max-w-3xl px-6 lg:px-8 py-24">
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

        <section className="mx-auto max-w-6xl px-6 lg:px-8 pb-24">
          <div className="rounded-[2rem] bg-ink text-ivory p-10 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-coral mb-3">
                Get in touch
              </p>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight leading-tight">
                Partnership review or affiliate question?
              </h2>
              <p className="mt-3 text-ivory/70 max-w-lg">
                One email gets to us directly — no automated drips.
              </p>
            </div>
            <LinkButton
              href={`mailto:erdemcisse98@icloud.com?subject=${encodeURIComponent("WearWhere brand/retailer inquiry")}`}
              external
              variant="primary"
              size="lg"
            >
              Email WearWhere
            </LinkButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
