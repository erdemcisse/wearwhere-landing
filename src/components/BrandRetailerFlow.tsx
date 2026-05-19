import { brandTrustPoints } from "@/data/trustBullets";
import { LinkButton } from "./Button";

const flowSteps = [
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

export function BrandRetailerFlow() {
  return (
    <section
      id="brands"
      className="bg-ink text-ivory relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 100% 0%, rgba(255,106,74,0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-coral mb-5">
              <span className="size-1 rounded-full bg-coral" aria-hidden />
              For brands & retailers
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.05]">
              A calm, contextual lane to discovery.
            </h2>
            <p className="mt-5 text-lg text-ivory/70 leading-relaxed max-w-xl">
              WearWhere helps users decide what to wear in high-intent
              contexts — concerts, dinners, festivals, city days, weather
              changes. We hand the user back to your official product page
              and step out of the way.
            </p>

            <div className="mt-9 grid sm:grid-cols-2 gap-3 max-w-xl">
              {brandTrustPoints.map((b) => (
                <div
                  key={b}
                  className="flex items-start gap-3 text-sm text-ivory/85"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 size-1.5 rounded-full bg-coral shrink-0"
                  />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <LinkButton href="/contact" variant="primary" size="lg">
                Partnership review
              </LinkButton>
              <LinkButton
                href="/#disclosure"
                variant="ghost"
                size="lg"
                className="border-ivory/20 text-ivory hover:border-ivory/40 hover:bg-ivory/[0.04]"
              >
                Read our disclosure
              </LinkButton>
            </div>
          </div>

          <div className="lg:pl-6">
            <p className="text-xs tracking-[0.18em] uppercase text-ivory/50 mb-4">
              How product links work
            </p>
            <ol className="space-y-3">
              {flowSteps.map((s) => (
                <li
                  key={s.n}
                  className="rounded-2xl border border-ivory/10 bg-ivory/[0.03] p-5 hover:bg-ivory/[0.05] transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-display text-2xl text-coral tabular-nums leading-none mt-0.5">
                      {s.n}
                    </span>
                    <div>
                      <p className="font-display text-base text-ivory leading-tight">
                        {s.title}
                      </p>
                      <p className="mt-1 text-sm text-ivory/65 leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-xs text-ivory/55 leading-relaxed">
              Until an advertiser relationship is approved, WearWhere can
              operate in official seller-link mode without commission.
              Affiliate disclosure only appears on products with a verified,
              approved affiliate link.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
