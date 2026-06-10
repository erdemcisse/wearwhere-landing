const CONTACT_EMAIL = "erdemcisse98@icloud.com";

export interface SendEmailInput {
  subject: string;
  text: string;
  replyTo?: string;
}

export type SendEmailResult =
  | { ok: true }
  | { ok: false; reason: "not-configured" | "send-failed" };

/**
 * Sends a notification email to the WearWhere inbox via the Resend REST
 * API (no SDK dependency). Set RESEND_API_KEY in .env.local / Vercel to
 * activate; until then callers receive { ok: false, reason: "not-configured" }
 * and the forms gracefully fall back to a prefilled mailto link.
 *
 * RESEND_FROM may override the sender once a domain is verified at Resend;
 * the default onboarding sender only delivers to the account owner, which
 * is exactly our use case (all notifications go to the founder inbox).
 */
export async function sendEmail({
  subject,
  text,
  replyTo,
}: SendEmailInput): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, reason: "not-configured" };

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM ?? "WearWhere <onboarding@resend.dev>",
        to: [CONTACT_EMAIL],
        subject,
        text,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });
    if (!res.ok) {
      console.error("Resend error", res.status, await res.text());
      return { ok: false, reason: "send-failed" };
    }
    return { ok: true };
  } catch (err) {
    console.error("Resend request failed", err);
    return { ok: false, reason: "send-failed" };
  }
}

export function isValidEmail(value: unknown): value is string {
  return (
    typeof value === "string" &&
    value.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  );
}
