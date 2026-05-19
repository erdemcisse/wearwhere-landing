import type { ReactNode } from "react";

interface DisclosureNoteProps {
  children: ReactNode;
  className?: string;
}

export function DisclosureNote({ children, className = "" }: DisclosureNoteProps) {
  return (
    <aside
      className={`rounded-2xl border border-ink/[0.08] bg-ivory-soft px-5 py-4 text-xs sm:text-sm text-ink/65 leading-relaxed ${className}`}
    >
      <span className="block text-[0.65rem] font-medium tracking-[0.18em] uppercase text-sage mb-1.5">
        Disclosure
      </span>
      {children}
    </aside>
  );
}
