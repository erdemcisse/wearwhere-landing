import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { LinkButton } from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who is behind WearWhere — a solo-founder, Europe-first iOS app that answers the what-do-I-wear-tonight question honestly: no fake data, no manipulative patterns.",
  alternates: {
    canonical: "/about",
  },
};

const EMAIL = "erdemcisse98@icloud.com";

const values = [
  {
    title: "Useful, not impressive",
    body: "Recommendations that actually account for standing for four hours.",
  },
  {
    title: "Honest",
    body: "No fake prices, no fake stock, no fake popularity.",
  },
  {
    title: "Private-first",
    body: "Share features are link-based and revocable; no public feed.",
  },
  {
    title: "Europe-first",
    body: "Built for the European high street, not US-only retailers.",
  },
  {
    title: "Affiliate, not marketplace",
    body: "We send users to the brand's site; the transaction is always theirs.",
  },
];

const contacts = [
  { label: "Support", value: EMAIL, subject: "" },
  { label: "Partnerships", value: EMAIL, subject: "WearWhere partnership" },
  { label: "Press", value: EMAIL, subject: "WearWhere press" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================================ */}
        {/* HERO */}
        {/* ============================================================ */}
        <section className="mx-auto max-w-3xl px-6 lg:px-8 pt-16 pb-12">
          <SectionHeader
            eyebrow="About WearWhere"
            title="Built because the question is real."
            description="Every person going to a concert, dinner, or date faces the same ten-tab problem: event page, weather app, Pinterest, Instagram, Zara, the group chat. WearWhere closes those tabs."
          />
        </section>

        {/* ============================================================ */}
        {/* ORIGIN STORY */}
        {/* ============================================================ */}
        <section className="mx-auto max-w-3xl px-6 lg:px-8 pb-20 space-y-5 text-[0.95rem] text-ink/75 leading-relaxed">
          <p>
            WearWhere started as a personal frustration. The
            outfit-for-tonight question is genuinely hard — it involves your
            event, the weather, the venue&apos;s vibe, your comfort, your
            budget, and often your friends&apos; opinions. Every existing app
            solves a piece of it. WearWhere tries to solve it whole.
          </p>
          <p>
            The app is being built by a solo founder in Germany, with a
            Europe-first focus and a deliberate philosophy: no fake data, no
            manipulative patterns, no body-shaming language. Just useful
            recommendations at the right moment.
          </p>
        </section>

        {/* ============================================================ */}
        {/* VALUES */}
        {/* ============================================================ */}
        <section className="bg-ivory-soft border-y border-mist/50">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
            <SectionHeader eyebrow="Values" title="The values, as stated." />
            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((v) => (
                <li
                  key={v.title}
                  className="rounded-2xl border border-mist/60 bg-ivory p-6 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_8px_24px_-12px_rgba(20,20,20,0.08)]"
                >
                  <p className="font-display text-lg text-ink leading-tight">
                    {v.title}
                  </p>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                    {v.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============================================================ */}
        {/* CONTACT */}
        {/* ============================================================ */}
        <section className="mx-auto max-w-3xl px-6 lg:px-8 py-24">
          <SectionHeader eyebrow="Contact" title="One inbox, read daily." />
          <dl className="mt-10 rounded-3xl border border-mist/60 bg-ivory-soft divide-y divide-mist/50">
            {contacts.map((c) => (
              <div
                key={c.label}
                className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-6 py-4"
              >
                <dt className="w-32 shrink-0 text-xs font-medium tracking-[0.18em] uppercase text-ink/45">
                  {c.label}
                </dt>
                <dd className="text-sm text-ink">
                  <a
                    href={`mailto:${c.value}${c.subject ? `?subject=${encodeURIComponent(c.subject)}` : ""}`}
                    className="underline decoration-coral underline-offset-4 hover:text-coral-deep transition-colors"
                  >
                    {c.value}
                  </a>
                  {c.subject ? (
                    <span className="text-ink/45"> (subject: {c.subject})</span>
                  ) : null}
                </dd>
              </div>
            ))}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-6 py-4">
              <dt className="w-32 shrink-0 text-xs font-medium tracking-[0.18em] uppercase text-ink/45">
                Location
              </dt>
              <dd className="text-sm text-ink">Germany · Europe-first</dd>
            </div>
          </dl>

          <div className="mt-12 rounded-3xl border border-mist/60 bg-ivory-soft p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-sage mb-2">
                Brands & retailers
              </p>
              <p className="font-display text-xl text-ink leading-tight">
                Reviewing a publisher application?
              </p>
            </div>
            <LinkButton href="/brands" variant="secondary" size="md">
              Partnership details →
            </LinkButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
