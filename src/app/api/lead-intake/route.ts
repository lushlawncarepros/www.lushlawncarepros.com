/**
 * Batch #26: dual delivery for website leads.
 *
 * The browser posts each form submission here; this server route
 * forwards it to the CRM's intake endpoint with the shared secret
 * attached. The secret lives ONLY in this server-side env var
 * (CRM_INTAKE_SECRET) — it never ships to the browser. The form's
 * EmailJS email is the safety net and is not involved here: if this
 * forward fails, the email lead still lands exactly as before.
 */
const INTAKE_URL =
  process.env.CRM_INTAKE_URL ??
  "https://app-lushlawncarepros-com.vercel.app/api/intake/website-lead";

export async function POST(request: Request) {
  const secret = process.env.CRM_INTAKE_SECRET;
  if (!secret) {
    return Response.json({ error: "Intake is not configured." }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "A JSON body is required." }, { status: 400 });
  }

  try {
    const upstream = await fetch(INTAKE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-intake-secret": secret,
      },
      body: JSON.stringify(body),
    });
    const result = await upstream.json().catch(() => ({}));
    return Response.json(result, { status: upstream.status });
  } catch (error) {
    console.error("Lead intake forward failed", error);
    return Response.json({ error: "Intake forward failed." }, { status: 502 });
  }
}
