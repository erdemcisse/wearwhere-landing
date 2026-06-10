import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Plain-language beta terms for the WearWhere private beta.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Terms"
      title="Beta terms of use."
      description="Concise, readable terms for the WearWhere private beta. The full legal version preserves the same posture once we exit beta."
      updated="June 2026"
    >
      <LegalSection heading="What WearWhere provides">
        <p>
          WearWhere is an iOS-first outfit planning app currently in private
          beta. The App Store listing is in preparation and is not yet live.
          WearWhere offers outfit suggestions and planning support based on
          events, weather, and your stated preferences. The suggestions are
          informational. They are not professional styling, medical, or legal
          advice.
        </p>
      </LegalSection>

      <LegalSection heading="Beta nature & changing features">
        <p>
          WearWhere is in private beta and preparing for App Store launch.
          Features may change, break, or be removed without notice during the
          beta. Share and vote links are private-first and revocable. There
          are no public comments, public feeds, or public profiles in the
          beta.
        </p>
      </LegalSection>

      <LegalSection heading="Product links and retailers">
        <p>
          Product links inside WearWhere open the brand&apos;s official
          retailer website. Retailers handle checkout, payment, shipping,
          returns, taxes, customs, and customer support. WearWhere is not a
          party to any sale you make on a retailer&apos;s site.
        </p>
        <p>
          Prices and availability shown inside the app reflect the moment a
          human last verified them. They may change between the time you see
          them and the time you reach the retailer&apos;s page. Always trust
          the price and stock shown on the retailer&apos;s own site.
        </p>
      </LegalSection>

      <LegalSection heading="Affiliate disclosure">
        <p>
          WearWhere may earn commission from qualifying retailer links where
          an approved affiliate relationship exists. When that is the case, the
          relevant product surface in the app shows a clear disclosure. Where
          no approved relationship exists, the link opens as a plain official
          seller link with no commission to WearWhere.
        </p>
      </LegalSection>

      <LegalSection heading="Acceptable use">
        <p>
          Don&apos;t misuse the service. Specifically: don&apos;t attempt to
          scrape WearWhere, don&apos;t reverse-engineer the API, don&apos;t
          impersonate other people, and don&apos;t share private vote links to
          parties they were not intended for.
        </p>
      </LegalSection>

      <LegalSection heading="No public user-generated content">
        <p>
          During the beta, WearWhere does not host a public feed, public
          comments, or public profiles. Sharing is link-based, private, and
          revocable.
        </p>
      </LegalSection>

      <LegalSection heading="Liability">
        <p>
          To the extent permitted by law, WearWhere is provided &quot;as
          is&quot; during the beta. We are not liable for purchases made on
          retailer sites, for shipping issues, or for content on third-party
          websites we link to.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to these terms">
        <p>
          We&apos;ll update this page when our terms change. The &quot;Last
          updated&quot; date above always reflects the current version.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about these terms? Email us at{" "}
          <a
            href="mailto:erdemcisse98@icloud.com"
            className="underline decoration-coral underline-offset-4 hover:text-ink"
          >
            erdemcisse98@icloud.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
