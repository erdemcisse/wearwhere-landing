import Link from "next/link";

interface AppStoreComingSoonButtonProps {
  href?: string;
  className?: string;
  variant?: "ink" | "outline";
}

/**
 * Custom "Coming soon to the App Store" pill.
 *
 * Deliberately NOT a clone of Apple's official "Download on the App Store"
 * badge — that asset is governed by Apple's marketing guidelines and may
 * only be used once we have a live App Store listing. The shape, copy,
 * and typography here intentionally diverge from Apple's badge.
 *
 * TODO(launch): When the iOS app is live on the App Store, replace this
 * component with the official badge from Apple's marketing resources
 * (https://developer.apple.com/app-store/marketing/guidelines/) and link
 * to the App Store listing URL.
 */
export function AppStoreComingSoonButton({
  href = "/contact",
  className = "",
  variant = "ink",
}: AppStoreComingSoonButtonProps) {
  const tones =
    variant === "ink"
      ? "bg-ink text-ivory hover:bg-ink/90"
      : "bg-ivory text-ink border border-ink/15 hover:border-ink/30";

  return (
    <Link
      href={href}
      aria-label="Coming soon to the App Store — request beta access"
      className={`group inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition-all duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-ivory ${tones} ${className}`}
    >
      <span
        aria-hidden
        className="size-9 rounded-xl bg-current/10 grid place-items-center"
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.5-2.7-1.7-3.3-1.8-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.1 2.8-2.2.9-1.3 1.3-2.6 1.3-2.6-.1 0-2.5-1-2.7-3.8zM14 5.6c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.6-.9 2.6.9.1 2-.5 2.6-1.2z" />
        </svg>
      </span>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[0.6rem] tracking-[0.18em] uppercase opacity-70">
          Coming soon to the
        </span>
        <span className="font-display text-base">App Store</span>
      </span>
    </Link>
  );
}
