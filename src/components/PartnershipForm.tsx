"use client";

import { useState } from "react";

const EMAIL = "erdemcisse98@icloud.com";

const NETWORKS = [
  "Awin",
  "Impact",
  "Partnerize",
  "Other",
  "Not yet on a network",
];

type Status = "idle" | "submitting" | "success" | "fallback" | "error";

const inputCls =
  "w-full rounded-xl border border-ink/15 bg-ivory px-4 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:border-ink/40 transition-colors";
const labelCls = "block text-xs font-medium tracking-wide text-ink/70 mb-1.5";

/**
 * Partnership enquiry form on /brands. Posts to /api/partnership; if the
 * email provider isn't configured (503 fallback) or the request fails, it
 * opens a prefilled mailto assembled from the form fields so the enquiry
 * is never lost.
 */
export function PartnershipForm() {
  const [fields, setFields] = useState({
    company: "",
    name: "",
    email: "",
    network: "",
    markets: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set =
    (key: keyof typeof fields) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));

  const mailtoHref = () => {
    const subject = `WearWhere partnership enquiry — ${fields.company || fields.name}`;
    const body = [
      `Company / brand: ${fields.company}`,
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Affiliate network: ${fields.network}`,
      `Primary market(s): ${fields.markets}`,
      "",
      fields.message,
    ].join("\n");
    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/partnership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          subject: "Partnership enquiry",
        }),
      });

      if (res.ok) {
        setStatus("success");
        return;
      }
      if (res.status === 400) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setErrorMsg(data?.error ?? "Please check the required fields.");
        setStatus("error");
        return;
      }
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
        className="rounded-2xl border border-sage/40 bg-sage/10 px-6 py-5"
        role="status"
      >
        <p className="text-sm text-ink leading-relaxed">
          <span className="text-sage font-medium">✓ Enquiry sent.</span> We
          respond to all genuine partnership enquiries within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Partnership enquiry">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls} htmlFor="pf-company">
            Company / brand name *
          </label>
          <input
            id="pf-company"
            type="text"
            required
            value={fields.company}
            onChange={set("company")}
            className={inputCls}
            autoComplete="organization"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="pf-name">
            Your name *
          </label>
          <input
            id="pf-name"
            type="text"
            required
            value={fields.name}
            onChange={set("name")}
            className={inputCls}
            autoComplete="name"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="pf-email">
            Email *
          </label>
          <input
            id="pf-email"
            type="email"
            required
            value={fields.email}
            onChange={set("email")}
            className={inputCls}
            autoComplete="email"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="pf-network">
            Affiliate network
          </label>
          <select
            id="pf-network"
            value={fields.network}
            onChange={set("network")}
            className={`${inputCls} ${fields.network ? "" : "text-ink/35"}`}
          >
            <option value="">Select…</option>
            {NETWORKS.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="pf-markets">
            Primary market(s)
          </label>
          <input
            id="pf-markets"
            type="text"
            value={fields.markets}
            onChange={set("markets")}
            placeholder="DE, NL, FR..."
            className={inputCls}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="pf-message">
            Message
          </label>
          <textarea
            id="pf-message"
            rows={5}
            value={fields.message}
            onChange={set("message")}
            placeholder="Tell us about the programme and any questions you have."
            className={`${inputCls} resize-y`}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-coral text-ivory font-medium tracking-tight h-11 px-6 text-sm hover:bg-coral-deep hover:-translate-y-px transition-all disabled:opacity-60 shadow-[0_8px_24px_-12px_rgba(255,106,74,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
        >
          {status === "submitting" ? "Sending…" : "Send enquiry →"}
        </button>
        <p className="text-xs text-ink/50" aria-live="polite">
          {status === "fallback"
            ? `We opened your mail app with the enquiry prefilled — or write to ${EMAIL} directly.`
            : status === "error"
              ? <span className="text-coral-deep">{errorMsg}</span>
              : null}
        </p>
      </div>
    </form>
  );
}
