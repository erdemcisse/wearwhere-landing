"use client";

import Link from "next/link";
import { useState } from "react";
import { LinkButton } from "./Button";

const navLinks = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#app-showcase", label: "App" },
  { href: "/brands", label: "For brands" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-ivory/80 border-b border-ink/[0.06]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-ink shrink-0"
          aria-label="WearWhere home"
          onClick={() => setOpen(false)}
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
              className="hover:text-ink transition-colors whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LinkButton href="/#waitlist" variant="primary" size="md">
            Join beta →
          </LinkButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex flex-col items-center justify-center gap-[5px] size-10 rounded-full border border-ink/15 text-ink"
          >
            <span
              className={`block h-px w-4 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-4 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="md:hidden border-t border-ink/[0.06] bg-ivory px-6 py-4"
        >
          <ul className="space-y-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-ink/80 hover:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
