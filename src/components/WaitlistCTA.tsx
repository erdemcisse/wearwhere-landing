import { LinkButton } from "./Button";
import { BrandBadge } from "./BrandBadge";
import { AppStoreComingSoonButton } from "./AppStoreComingSoonButton";

const EMAIL = "erdemcisse98@icloud.com";

export function WaitlistCTA() {
  return (
    <section
      id="waitlist"
      className="mx-auto max-w-6xl px-6 lg:px-8 py-24"
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-ivory-soft border border-ink/[0.08] p-10 md:p-16">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 100% 100%, rgba(255,106,74,0.14), transparent 60%), radial-gradient(ellipse 50% 40% at 0% 0%, rgba(125,143,122,0.12), transparent 60%)",
          }}
        />
        <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <BrandBadge label="Private beta" tone="sage" />
            <h2 className="mt-6 font-display text-4xl md:text-5xl tracking-tight leading-[1.05] text-ink">
              Want early access?
            </h2>
            <p className="mt-5 text-lg text-ink/65 leading-relaxed max-w-xl">
              Send us a note and we&apos;ll let you know when the beta opens.
              No automated drips, no newsletters — just a personal heads-up
              when there&apos;s something to try.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton
                href={`mailto:${EMAIL}?subject=${encodeURIComponent("WearWhere beta access request")}`}
                external
                variant="primary"
                size="lg"
              >
                Request beta access
              </LinkButton>
              <LinkButton href="/#brands" variant="ghost" size="lg">
                Brand or retailer? Get in touch
              </LinkButton>
            </div>
            <p className="mt-6 text-xs text-ink/45 max-w-md">
              iOS-first. App Store launch in preparation. We&apos;ll only email
              the address you write from.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <AppStoreComingSoonButton variant="ink" />
            <p className="mt-4 text-xs text-ink/45 max-w-[16rem] leading-relaxed">
              We&apos;ll switch this to the official Apple App Store badge
              once the listing is live.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
