import Link from "next/link";
import { LinkButton } from "./Button";

const navLinks = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#brands", label: "For brands" },
  { href: "/privacy", label: "Privacy" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-ivory/80 border-b border-ink/[0.06]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-ink"
          aria-label="WearWhere home"
        >
          WearWhere
        </Link>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-7 text-sm text-ink/70"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LinkButton
            href="/contact"
            variant="primary"
            size="md"
            className="hidden sm:inline-flex"
          >
            Request beta access
          </LinkButton>
          <LinkButton
            href="/contact"
            variant="primary"
            size="md"
            className="sm:hidden"
          >
            Beta
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
