export type OccasionKind =
  | "concert"
  | "dinner"
  | "festival"
  | "flight"
  | "wedding"
  | "brunch";

/**
 * One consistent outline icon set for the "Made for real plans" cards —
 * same 24px grid, stroke width, caps, and color treatment for all six.
 * Inline SVGs (Tabler-style) so we don't pull an icon dependency for six
 * glyphs.
 */
const paths: Record<OccasionKind, React.ReactNode> = {
  concert: (
    // Eighth note
    <>
      <circle cx="8.5" cy="17.5" r="2.8" />
      <path d="M11.3 17.5V5.2" />
      <path d="M11.3 5.2c3.2.4 5.4 1.7 6.2 4.1" />
    </>
  ),
  dinner: (
    // Fork & knife
    <>
      <path d="M6.2 3.5v4.2a2.1 2.1 0 0 0 4.2 0V3.5" />
      <path d="M8.3 3.5v17" />
      <path d="M16.6 20.5v-17c2.4 2 2.4 7.3 0 9.4" />
    </>
  ),
  festival: (
    // Tent
    <>
      <path d="M12 4 3.5 20h5l3.5-5.6L15.5 20h5L12 4Z" />
    </>
  ),
  flight: (
    // Paper plane
    <>
      <path d="M20.5 3.5 13.8 20.3l-3-6.6-6.8-2.5L20.5 3.5Z" />
      <path d="M20.5 3.5 10.8 13.7" />
    </>
  ),
  wedding: (
    // Diamond ring
    <>
      <circle cx="12" cy="14.5" r="5.5" />
      <path d="m12 3.5 2.6 2.6L12 8.7 9.4 6.1 12 3.5Z" />
    </>
  ),
  brunch: (
    // Coffee cup
    <>
      <path d="M4.5 9.5h11.5v5.5a4 4 0 0 1-4 4H8.5a4 4 0 0 1-4-4V9.5Z" />
      <path d="M16 10.5h1.3a2.4 2.4 0 0 1 0 4.8H16" />
      <path d="M8 3.5v2.3M12 3.5v2.3" />
    </>
  ),
};

export function OccasionIcon({
  kind,
  className = "size-7",
}: {
  kind: OccasionKind;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {paths[kind]}
    </svg>
  );
}
