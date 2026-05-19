interface BrandBadgeProps {
  label?: string;
  tone?: "coral" | "sage" | "ink";
  className?: string;
}

const tones = {
  coral: "bg-coral/10 text-coral-deep border-coral/20",
  sage: "bg-sage/12 text-sage border-sage/25",
  ink: "bg-ink/[0.04] text-ink/70 border-ink/10",
};

export function BrandBadge({
  label = "Beta in development",
  tone = "coral",
  className = "",
}: BrandBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide ${tones[tone]} ${className}`}
    >
      <span
        className={`size-1.5 rounded-full ${tone === "coral" ? "bg-coral" : tone === "sage" ? "bg-sage" : "bg-ink"} animate-pulse`}
        aria-hidden
      />
      {label}
    </span>
  );
}
