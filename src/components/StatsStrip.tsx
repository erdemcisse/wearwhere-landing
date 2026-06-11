const stats = [
  { value: "19", label: "European markets", hint: "Germany first, then EU" },
  { value: "16+", label: "Event types", hint: "Concert → wedding" },
  { value: "0", label: "In-app checkouts", hint: "We never sell" },
  { value: "100%", label: "Official store links", hint: "Every piece, brand's own site" },
];

/**
 * Full-width number strip between the hero and how-it-works. Four
 * parallel, honest claims — no invented user or traffic numbers.
 */
export function StatsStrip() {
  return (
    <section
      aria-label="WearWhere at a glance"
      className="border-y border-mist bg-ivory"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl sm:text-4xl text-ink tracking-tight">
              {s.value}
            </p>
            <p className="mt-2 text-xs font-medium tracking-[0.18em] uppercase text-ink/45">
              {s.label}
            </p>
            <p className="mt-1 text-xs text-ink/50">{s.hint}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
