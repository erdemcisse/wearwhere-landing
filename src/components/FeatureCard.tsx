import type { ReactNode } from "react";

interface FeatureCardProps {
  index?: string;
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export function FeatureCard({
  index,
  title,
  description,
  icon,
  className = "",
}: FeatureCardProps) {
  return (
    <article
      className={`group relative rounded-3xl bg-ivory-soft border border-ink/[0.06] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(20,20,20,0.18)] ${className}`}
    >
      <div className="flex items-start justify-between mb-6">
        {icon ? (
          <div className="size-11 rounded-2xl bg-ink/[0.04] flex items-center justify-center text-ink/70">
            {icon}
          </div>
        ) : (
          <div />
        )}
        {index ? (
          <span className="font-display text-2xl text-ink/15 tabular-nums">
            {index}
          </span>
        ) : null}
      </div>
      <h3 className="font-display text-xl tracking-tight text-ink mb-2">
        {title}
      </h3>
      <p className="text-sm text-ink/65 leading-relaxed">{description}</p>
    </article>
  );
}
