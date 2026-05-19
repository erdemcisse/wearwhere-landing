import { BrandBadge } from "./BrandBadge";
import { WaitlistInputRow } from "./WaitlistInputRow";

/**
 * Final waitlist CTA — single, clean, no fake App Store badge.
 *
 * The "Coming soon to the App Store" black rectangle that previously
 * lived here was reading as a broken asset. Replaced with a tiny muted
 * pill so the primary action is unambiguously the waitlist input.
 *
 * TODO(launch): When the iOS app is live, replace the muted pill below
 * with Apple's official "Download on the App Store" badge from
 * https://developer.apple.com/app-store/marketing/guidelines/ and link
 * to the App Store listing URL.
 */
export function WaitlistCTA() {
  return (
    <section
      id="waitlist"
      className="mx-auto max-w-6xl px-6 lg:px-8 py-24"
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-ivory-soft border border-mist/60 p-10 md:p-16 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_24px_48px_-20px_rgba(20,20,20,0.12)]">
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
            Want early access?
          </h2>
          <p className="mt-5 text-lg text-ink/65 leading-relaxed">
            Drop your email and we&apos;ll let you know when the iOS beta
            opens.
          </p>
          <div className="mt-8">
            <WaitlistInputRow />
          </div>
          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-mist/70 bg-ivory px-3 py-1.5 text-[0.65rem] tracking-[0.18em] uppercase text-ink/55">
            <span className="size-1 rounded-full bg-sage" aria-hidden />
            iOS app in preparation
          </span>
        </div>
      </div>
    </section>
  );
}
