"use client";

import { useState } from "react";

const EMAIL = "erdemcisse98@icloud.com";
const SUBJECT = "WearWhere beta access request";

type Status = "idle" | "submitting" | "success" | "fallback" | "error";

interface WaitlistFormProps {
  buttonLabel?: string;
  className?: string;
}

/**
 * Real waitlist form posting to /api/waitlist.
 *
 * Graceful degradation: if the API answers 503 { fallback: true } (no email
 * provider configured) or the request fails entirely, we open a prefilled
 * mailto so no signup is ever silently dropped — and we say so instead of
 * faking success. Used in the hero and in the #waitlist section.
 */
export function WaitlistForm({
  buttonLabel = "Tell me when it launches",
  className = "",
}: WaitlistFormProps) {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const mailtoHref = () => {
    const trimmed = value.trim();
    const body = encodeURIComponent(
      `Hi WearWhere,\n\nI'd like to know when the iOS beta opens.${trimmed ? ` My email is ${trimmed}.` : ""}\n\nThanks.`,
    );
    return `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value.trim() }),
      });

      if (res.ok) {
        setStatus("success");
        return;
      }
      if (res.status === 400) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setErrorMsg(data?.error ?? "Please enter a valid email address.");
        setStatus("error");
        return;
      }
      // 503 not-configured or anything unexpected → mailto fallback.
      window.location.href = mailtoHref();
      setStatus("fallback");
    } catch {
      window.location.href = mailtoHref();
      setStatus("fallback");
    }
  };

  if (status === "success") {
    return (
      <div
        className={`w-full max-w-md rounded-2xl border border-sage/40 bg-sage/10 px-5 py-4 ${className}`}
        role="status"
      >
        <p className="text-sm text-ink leading-relaxed">
          <span className="text-sage font-medium">✓ You&apos;re on the list.</span>{" "}
          We&apos;ll email you from {EMAIL} when the iOS beta opens.
        </p>
      </div>
    );
  }

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
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="your@email.com"
          autoComplete="email"
          inputMode="email"
          className="flex-1 min-w-0 bg-transparent px-4 py-2 text-sm text-ink placeholder:text-ink/40 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="shrink-0 inline-flex items-center justify-center rounded-full bg-coral text-ivory text-sm font-medium px-4 sm:px-5 h-10 hover:bg-coral-deep transition-colors disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
        >
          {status === "submitting" ? "Sending…" : buttonLabel}
        </button>
      </div>
      <p className="mt-3 text-xs text-ink/45 leading-relaxed" aria-live="polite">
        {status === "fallback"
          ? `We opened your mail app instead — sending that email puts you on the list. Or write to ${EMAIL} directly.`
          : status === "error"
            ? <span className="text-coral-deep">{errorMsg}</span>
            : "No spam. We only email when the beta opens."}
      </p>
    </form>
  );
}
