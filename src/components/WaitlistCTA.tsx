import { BrandBadge } from "./BrandBadge";
import { WaitlistForm } from "./WaitlistForm";

const trustTokens = [
  { icon: "🔒", label: "No spam" },
  { icon: "📱", label: "iOS only" },
  { icon: "🇪🇺", label: "Europe-first" },
];

/**
 * Final waitlist CTA (#waitlist anchor — the beta banner, nav button, and
 * hero scroll link all land here).
 *
 * TODO(launch): When the iOS app is live, replace the muted pill below
 * with Apple's official "Download on the App Store" badge from
 * https://developer.apple.com/app-store/marketing/guidelines/ and link
 * to the App Store listing URL.
 */
export function WaitlistCTA() {
  return (
    <section id="waitlist" className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
      <div className="rounded-[2rem] bg-ivory-soft border border-mist/60 p-10 md:p-16 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_24px_48px_-20px_rgba(20,20,20,0.12)]">
        <div className="max-w-2xl">
          <BrandBadge label="Private beta" tone="sage" />
          <h2 className="mt-6 font-display text-4xl md:text-5xl tracking-tight leading-[1.05] text-ink">
            Want early access?
          </h2>
          <p className="mt-5 text-lg text-ink/65 leading-relaxed">
            <strong className="text-ink font-medium">
              The iOS beta is filling up.
            </strong>{" "}
            We&apos;re starting with a small group of users in Germany and
            expanding city by city. Drop your email and we&apos;ll let you
            know when your market opens.
          </p>
          <div className="mt-8">
            <WaitlistForm />
          </div>
          <p className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink/55">
            {trustTokens.map((t, i) => (
              <span key={t.label} className="inline-flex items-center gap-1.5">
                {i > 0 ? (
                  <span aria-hidden className="text-ink/30 mr-2">
                    ·
                  </span>
                ) : null}
                <span aria-hidden>{t.icon}</span>
                {t.label}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
