import { sendEmail, isValidEmail } from "@/lib/sendEmail";

/**
 * Waitlist signup endpoint. Notifies the founder inbox per signup via
 * Resend. Responds 503 with { fallback: true } when no email provider is
 * configured so the client form can degrade to a prefilled mailto link
 * instead of pretending the address was stored.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const email = (body as { email?: unknown })?.email;
  if (!isValidEmail(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const result = await sendEmail({
    subject: "WearWhere waitlist signup",
    text: `New waitlist signup: ${email}\n\nSource: landing page waitlist form.`,
    replyTo: email,
  });

  if (!result.ok) {
    return Response.json({ fallback: true }, { status: 503 });
  }
  return Response.json({ ok: true });
}
