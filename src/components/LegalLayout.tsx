import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SectionHeader } from "./SectionHeader";

interface LegalLayoutProps {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  updated?: string;
}

export function LegalLayout({
  eyebrow,
  title,
  description,
  children,
  updated,
}: LegalLayoutProps) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 lg:px-8 pt-16 pb-24">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        {updated ? (
          <p className="mt-6 text-xs tracking-[0.18em] uppercase text-ink/45">
            Last updated · {updated}
          </p>
        ) : null}
        <div className="mt-12 space-y-10 text-ink/75 leading-relaxed text-[0.95rem]">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

interface LegalSectionProps {
  heading: string;
  children: ReactNode;
}

export function LegalSection({ heading, children }: LegalSectionProps) {
  return (
    <section>
      <h2 className="font-display text-xl sm:text-2xl text-ink tracking-tight mb-3">
        {heading}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
