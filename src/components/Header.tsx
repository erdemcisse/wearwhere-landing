import Link from "next/link";
import { LinkButton } from "./Button";

const EMAIL = "erdemcisse98@icloud.com";
const BETA_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("WearWhere beta access request")}`;

const navLinks = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#app-preview", label: "App preview" },
  { href: "/#brands", label: "For brands" },
  { href: "/privacy", label: "Privacy" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-ivory/80 border-b border-ink/[0.06]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-ink shrink-0"
          aria-label="WearWhere home"
        >
          WearWhere
        </Link>

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-7 text-sm text-ink/70"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-ink transition-colors whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LinkButton
            href={BETA_MAILTO}
            external
            variant="primary"
            size="md"
          >
            Join beta
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
