"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const STORAGE_KEY = "ww-beta-banner-dismissed";

// Tiny external store around sessionStorage so dismissal re-renders the
// banner without setState-in-effect and without a hydration mismatch
// (the server snapshot is always "not dismissed").
let listeners: Array<() => void> = [];

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function isDismissed() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    // Storage unavailable (private mode) — just keep showing the banner.
    return false;
  }
}

function dismiss() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Non-fatal: the banner simply reappears on next page load.
  }
  listeners.forEach((l) => l());
}

/**
 * Thin strip above the nav announcing the private iOS beta.
 *
 * Rendered on every page from the root layout. Dismissing it persists for
 * the browser session. Remove by setting NEXT_PUBLIC_SHOW_BETA_BANNER=false
 * once the App Store version goes live (the env check lives in layout.tsx
 * so this component stays a pure client island).
 */
export function BetaBanner() {
  const dismissed = useSyncExternalStore(
    subscribe,
    isDismissed,
    () => false,
  );

  if (dismissed) return null;

  return (
    <div className="relative z-[60] bg-ink text-ivory text-xs text-center px-10 py-2">
      <p>
        <strong className="font-medium">WearWhere is in private iOS beta.</strong>{" "}
        <span className="text-ivory/70">Android and web are not planned.</span>{" "}
        <Link
          href="/#waitlist"
          className="underline decoration-coral underline-offset-2 hover:text-coral transition-colors"
        >
          Join the waitlist ↓
        </Link>
      </p>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss beta banner"
        className="absolute right-2 top-1/2 -translate-y-1/2 size-6 inline-flex items-center justify-center rounded-full text-ivory/60 hover:text-ivory hover:bg-ivory/10 transition-colors"
      >
        ×
      </button>
    </div>
  );
}
