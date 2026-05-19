import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { LinkButton } from "@/components/Button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with WearWhere — beta access, brand partnerships, or general questions.",
};

const EMAIL = "erdemcisse98@icloud.com";

const channels = [
  {
    eyebrow: "Beta access",
    title: "Try WearWhere",
    body: "Tell us a bit about how you'd use it — your city, the kinds of events you go to, and whether you're testing on iOS.",
    subject: "WearWhere beta access",
  },
  {
    eyebrow: "Brands & retailers",
    title: "Partnership inquiries",
    body: "Awin advertisers, fashion brands, and retailers — let's talk about how WearWhere fits alongside your existing channels.",
    subject: "WearWhere brand inquiry",
  },
  {
    eyebrow: "General",
    title: "Anything else",
    body: "Press, feedback, bug reports, or a question about our privacy or affiliate posture.",
    subject: "WearWhere general inquiry",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 lg:px-8 pt-16 pb-24">
        <SectionHeader
          eyebrow="Contact"
          title="Email is the fastest way."
          description="There is no contact form yet — we keep WearWhere intentionally simple during the beta. A quick email reaches us directly."
        />

        <div className="mt-12 grid gap-4">
          {channels.map((c) => (
            <article
              key={c.subject}
              className="group rounded-3xl border border-ink/[0.08] bg-ivory-soft p-7 transition-all hover:border-ink/20 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-20px_rgba(20,20,20,0.18)]"
            >
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-sage">
                {c.eyebrow}
              </span>
              <h3 className="mt-2 font-display text-2xl tracking-tight text-ink">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                {c.body}
              </p>
              <div className="mt-5">
                <LinkButton
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(c.subject)}`}
                  external
                  variant="primary"
                  size="md"
                >
                  Email WearWhere
                </LinkButton>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-ink/[0.08] bg-ivory px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-ink/45 mb-1">
              Direct email
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="font-display text-xl text-ink underline decoration-coral underline-offset-4 hover:text-coral-deep transition-colors"
            >
              {EMAIL}
            </a>
          </div>
          <p className="text-xs text-ink/50 max-w-xs sm:text-right">
            We reply from this address. No newsletters, no automated drip
            sequences.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
