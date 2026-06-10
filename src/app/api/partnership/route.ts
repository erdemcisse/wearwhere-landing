import { sendEmail, isValidEmail } from "@/lib/sendEmail";

interface PartnershipPayload {
  company?: string;
  name?: string;
  email?: string;
  network?: string;
  markets?: string;
  subject?: string;
  message?: string;
}

const MAX_FIELD = 2000;

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, MAX_FIELD) : "";
}

/**
 * Partnership / contact enquiry endpoint shared by the brands page form
 * and the contact page form. Same graceful degradation contract as
 * /api/waitlist: 503 + { fallback: true } when Resend isn't configured.
 */
export async function POST(request: Request) {
  let body: PartnershipPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const message = clean(body.message);

  if (!name || !isValidEmail(email)) {
    return Response.json(
      { error: "Please provide your name and a valid email address." },
      { status: 400 },
    );
  }

  const company = clean(body.company);
  const network = clean(body.network);
  const markets = clean(body.markets);
  const subject = clean(body.subject) || "Partnership enquiry";

  const lines = [
    `From: ${name} <${email}>`,
    ...(company ? [`Company / brand: ${company}`] : []),
    ...(network ? [`Affiliate network: ${network}`] : []),
    ...(markets ? [`Primary market(s): ${markets}`] : []),
    "",
    message || "(no message)",
  ];

  const result = await sendEmail({
    subject: `WearWhere — ${subject}`,
    text: lines.join("\n"),
    replyTo: email,
  });

  if (!result.ok) {
    return Response.json({ fallback: true }, { status: 503 });
  }
  return Response.json({ ok: true });
}
