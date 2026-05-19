"use client";

import { useState } from "react";

const EMAIL = "erdemcisse98@icloud.com";
const SUBJECT = "WearWhere beta access request";

interface WaitlistInputRowProps {
  buttonLabel?: string;
  className?: string;
}

/**
 * Email-style mailto row. Looks like a captured email field, but submitting
 * opens the user's mail client with the address and a prefilled subject.
 *
 * No backend, no fake form: the helper text under the input clarifies it
 * opens email so visitors aren't surprised.
 */
export function WaitlistInputRow({
  buttonLabel = "Tell me when it launches",
  className = "",
}: WaitlistInputRowProps) {
  const [value, setValue] = useState("");

  const buildHref = () => {
    const trimmed = value.trim();
    const body = trimmed
      ? `Hi WearWhere,%0A%0AI'd like to know when the iOS beta opens. My email is ${encodeURIComponent(trimmed)}.%0A%0AThanks.`
      : "Hi WearWhere,%0A%0AI'd like to know when the iOS beta opens.%0A%0AThanks.";
    return `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = buildHref();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-md ${className}`}
      aria-label="Beta waitlist"
    >
      <div className="flex items-center gap-2 rounded-full border border-ink/15 bg-ivory p-1.5 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_8px_24px_-12px_rgba(20,20,20,0.12)] focus-within:border-ink/35 transition-colors">
        <label className="sr-only" htmlFor="waitlist-email">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="your@email.com"
          autoComplete="email"
          inputMode="email"
          className="flex-1 bg-transparent px-4 py-2 text-sm text-ink placeholder:text-ink/40 focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 inline-flex items-center justify-center rounded-full bg-coral text-ivory text-sm font-medium px-4 sm:px-5 h-10 hover:bg-coral-deep transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
        >
          {buttonLabel}
        </button>
      </div>
      <p className="mt-3 text-xs text-ink/45 leading-relaxed">
        Submitting opens your mail app — no form backend, no automated drips.
        We only email the address you write from.
      </p>
    </form>
  );
}
