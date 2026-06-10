import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How WearWhere handles your data during the private beta. Plain language, no dark patterns.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Privacy"
      title="Privacy policy."
      description="Plain-language privacy policy for the WearWhere private beta. We try to keep this readable; the legal version follows the same posture once we exit beta."
      updated="June 2026"
    >
      <LegalSection heading="What WearWhere is">
        <p>
          WearWhere is an iOS-first, Europe-focused outfit planning app
          currently in private beta. The App Store listing is in preparation
          and is not yet live. WearWhere is not a marketplace, does not
          process payments, and links out to brands&apos; official retailer
          websites for the actual purchase.
        </p>
      </LegalSection>

      <LegalSection heading="Data we may collect">
        <p>
          During the beta, WearWhere may collect the following so the app can
          actually work for you:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Account data such as your email address (only if you create an account).</li>
          <li>Style preferences you choose in onboarding (vibes, colors, fit hints).</li>
          <li>
            Size and fit preferences, only if you provide them. They never
            appear on a share card or in a public surface.
          </li>
          <li>Outfits and events you save inside the app.</li>
          <li>Plans and occasion preferences for outfit recommendations.</li>
          <li>
            Anonymous click metadata when you open a retailer link — the
            destination domain and the source surface inside the app, never the
            full URL or any personal query string.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Data we do not currently collect">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>No photos of you, unless a future feature explicitly asks and you opt in.</li>
          <li>No payment information. WearWhere never sees your card.</li>
          <li>No GPS coordinates or precise location. City-level only, and only when needed.</li>
          <li>No selling of personal data to third parties.</li>
          <li>No public profiles, no public feed, no follower counts.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Product links and third-party retailers">
        <p>
          When you tap a product, WearWhere opens the brand&apos;s official
          retailer page in an in-app browser. From that point onward, the
          retailer&apos;s own privacy policy and terms apply. Anything you do on
          their site — browsing, adding to cart, purchasing, returning — is
          handled entirely by them.
        </p>
      </LegalSection>

      <LegalSection heading="Account deletion">
        <p>
          If you create an account during the beta, you can initiate account
          deletion from inside the app. We remove your account-linked data on
          our backend once the deletion completes. Anonymous click metadata
          (which contains no identifying information) may be retained as
          aggregate analytics.
        </p>
      </LegalSection>

      <LegalSection heading="Children">
        <p>
          WearWhere is not designed for children under 13. If you believe a
          child has created an account, contact us and we&apos;ll remove it.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this policy">
        <p>
          We&apos;ll update this page when our practices change. The
          &quot;Last updated&quot; date above always reflects the current
          version. Material changes will be communicated in-app where
          appropriate.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about privacy? Email us at{" "}
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
