import Link from "next/link";

const footerCols = [
  {
    heading: "WearWhere",
    items: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "App", href: "/#app-showcase" },
      { label: "For brands", href: "/brands" },
      { label: "About", href: "/about" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Affiliate disclosure", href: "/brands#disclosure" },
    ],
  },
  {
    heading: "Contact",
    items: [
      { label: "Email", href: "/contact" },
      { label: "Partnership enquiry", href: "/brands#partnership-form" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/[0.08] bg-ivory-soft mt-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-display text-2xl tracking-tight text-ink"
            >
              WearWhere
            </Link>
            <p className="mt-3 text-sm text-ink/60 max-w-xs leading-relaxed">
              What to wear. Where to go.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-xs text-sage tracking-wider uppercase">
              <span className="size-1.5 rounded-full bg-coral animate-pulse" />
              Beta in development
            </p>
          </div>

          {footerCols.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-medium tracking-wider uppercase text-ink/40 mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-3 text-sm text-ink/70">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <Link
                      href={it.href}
                      className="hover:text-ink transition-colors"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-ink/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ink/50">
          <p>© {new Date().getFullYear()} WearWhere. All rights reserved.</p>
          <p>Europe-first · Beta · Built with care</p>
        </div>
      </div>
    </footer>
  );
}
