import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start";
  return (
    <div className={`flex flex-col ${alignment} max-w-2xl ${className}`}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-sage mb-5">
          <span className="size-1 rounded-full bg-sage" aria-hidden />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-ink leading-[1.05]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base sm:text-lg text-ink/65 leading-relaxed max-w-xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
