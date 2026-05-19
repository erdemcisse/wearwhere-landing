import { SectionHeader } from "./SectionHeader";

const looks = [
  { id: "A", label: "Soft tailoring", votes: 3, tone: "from-sage/20 to-ivory" },
  { id: "B", label: "Sharp evening", votes: 5, tone: "from-coral/20 to-ivory" },
  { id: "C", label: "Editorial casual", votes: 2, tone: "from-mist/40 to-ivory" },
];

export function FriendVotePreview() {
  return (
    <section className="bg-ivory-soft border-y border-ink/[0.06]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 items-center">
          <div>
            <SectionHeader
              eyebrow="Friend voting"
              title="Send the look. Let friends vote."
              description="Create a few outfit options and share a private voting link before the night out. Friends pick a favourite — results stay between you."
            />
            <ul className="mt-9 space-y-3 text-sm text-ink/65 leading-relaxed max-w-md">
              <li className="flex gap-3">
                <span aria-hidden className="mt-1.5 size-1.5 rounded-full bg-coral shrink-0" />
                <span>Private-first. No public comments or public profiles in the beta.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-1.5 size-1.5 rounded-full bg-coral shrink-0" />
                <span>Revocable links. Owner can close or revoke a vote at any time.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-1.5 size-1.5 rounded-full bg-coral shrink-0" />
                <span>No body, sizing, or location data ever appears on a share card.</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="grid grid-cols-3 gap-3">
              {looks.map((l) => (
                <article
                  key={l.id}
                  className={`relative aspect-[3/4] rounded-3xl border border-ink/[0.06] overflow-hidden bg-gradient-to-b ${l.tone} hover:-translate-y-1 transition-transform duration-300`}
                >
                  <div className="absolute inset-x-3 top-3 flex items-center justify-between">
                    <span className="text-[0.55rem] tracking-[0.18em] uppercase text-ink/55 font-medium">
                      Look {l.id}
                    </span>
                    <span className="size-6 rounded-full bg-ivory text-ink font-display text-[0.65rem] grid place-items-center border border-ink/10">
                      {l.votes}
                    </span>
                  </div>
                  <div className="absolute inset-x-3 bottom-3">
                    <p className="font-display text-xs text-ink leading-tight">
                      {l.label}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between rounded-2xl border border-ink/[0.08] bg-ivory px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="size-7 rounded-full border-2 border-ivory bg-gradient-to-br from-sage to-ink"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-xs text-ink/55">10 friends voted</p>
                  <p className="font-display text-sm text-ink">Look B leading</p>
                </div>
              </div>
              <span className="text-[0.55rem] tracking-[0.18em] uppercase text-coral-deep font-medium">
                Private link
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
