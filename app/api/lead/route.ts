import { NextResponse } from "next/server"

// Lead intake endpoint.
//
// Why this exists rather than the browser posting straight to a form service:
//
// Submissions were being accepted by the form provider and then never reaching
// anybody. The provider's notification address is tied to whichever account owns
// the form, which is invisible from the codebase and cannot be verified or
// changed from here. A salon submitting the trade account form was shown a
// success confirmation, so the failure was silent in both directions.
//
// Routing submissions through our own endpoint means:
//   * the destination is a value in this project's environment, not a mystery
//     inside someone else's account;
//   * the destination can be changed by setting an environment variable, without
//     a code change or a rebuild;
//   * every submission is logged server-side with what each delivery channel
//     actually returned.
//
// Delivery order: direct email first (the recipient is explicit and therefore
// verifiable), then the third-party form service as a fallback. Only one channel
// is used per submission, so a lead is never delivered twice.

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

const DEFAULT_FORM_ENDPOINT = "https://formspree.io/f/mjgaagep"
const DEFAULT_LEAD_EMAIL = "caro@dshairbeauty.co.uk"
const SITE = "https://www.dshairbeauty.co.uk"

type ChannelResult = {
  attempted: boolean
  ok: boolean
  detail: string
}

function skipped(detail: string): ChannelResult {
  return { attempted: false, ok: false, detail }
}

/** Sends the submission as plain email via Resend. */
async function deliverByEmail(
  fields: Record<string, string>,
  subject: string
): Promise<ChannelResult> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return skipped("no RESEND_API_KEY configured")

  const to = process.env.LEAD_EMAIL || DEFAULT_LEAD_EMAIL
  const from = process.env.LEAD_FROM || `D.S Hair & Beauty <${DEFAULT_LEAD_EMAIL}>`

  const body = Object.entries(fields)
    .filter(([key]) => !key.startsWith("_"))
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n")

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: fields.email || undefined,
        subject,
        text: `${body}\n\n---\nSubmitted from ${fields.form_source || "the website"} on ${SITE}`,
      }),
    })

    if (response.ok) return { attempted: true, ok: true, detail: "accepted" }

    const payload = await response.json().catch(() => ({}))
    return {
      attempted: true,
      ok: false,
      detail: `HTTP ${response.status}${payload?.message ? ` — ${payload.message}` : ""}`,
    }
  } catch (error) {
    return { attempted: true, ok: false, detail: `network — ${String(error)}` }
  }
}

/** Forwards the submission to the third-party form service. */
async function deliverByFormService(
  form: FormData,
  subject: string
): Promise<ChannelResult> {
  const endpoint = process.env.LEAD_ENDPOINT || DEFAULT_FORM_ENDPOINT
  if (!endpoint.startsWith("http")) return skipped("no valid LEAD_ENDPOINT")

  const cc = process.env.LEAD_CC_EMAIL

  const send = async (withCc: boolean): Promise<ChannelResult> => {
    const payload = new FormData()
    for (const [key, value] of form.entries()) {
      if (typeof value === "string" && !key.startsWith("_") && key !== "consent") {
        payload.append(key, value)
      }
    }
    payload.set("_subject", subject)
    if (!payload.has("email")) payload.set("email", DEFAULT_LEAD_EMAIL)
    if (withCc && cc) payload.set("_cc", cc)

    // The service expects a browser origin; without it a server-side post can be
    // treated as automated traffic.
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", Origin: SITE, Referer: `${SITE}/` },
        body: payload,
      })

      if (response.ok) return { attempted: true, ok: true, detail: "accepted" }

      const detail = await response.text().catch(() => "")
      return {
        attempted: true,
        ok: false,
        detail: `HTTP ${response.status}${detail ? ` — ${detail.slice(0, 200)}` : ""}`,
      }
    } catch (error) {
      return { attempted: true, ok: false, detail: `network — ${String(error)}` }
    }
  }

  const first = await send(Boolean(cc))

  // A copy to a specific address is a paid-plan feature. If asking for one is
  // what caused the rejection, send again without it rather than losing the lead.
  if (!first.ok && cc) {
    const retry = await send(false)
    if (retry.ok) {
      return { ...retry, detail: "accepted, without the copy (_cc not available on this plan)" }
    }
  }

  return first
}

export async function POST(request: Request) {
  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not read the submitted form." },
      { status: 400 }
    )
  }

  // Everything the visitor typed, as plain strings.
  const fields: Record<string, string> = {}
  for (const [key, value] of form.entries()) {
    if (typeof value === "string") fields[key] = value
  }

  if (!fields.name && !fields.email) {
    return NextResponse.json(
      { ok: false, error: "A name or email address is required." },
      { status: 400 }
    )
  }

  const source = fields.form_source || "website"
  const subject =
    fields._subject || `Website enquiry (${source}) — ${fields.salon_name || fields.name || "unknown"}`

  const email = await deliverByEmail(fields, subject).catch((error) => ({
    attempted: true,
    ok: false,
    detail: String(error),
  }))

  const formService = email.ok ? skipped("email delivery succeeded") : await deliverByFormService(form, subject)

  const ok = email.ok || formService.ok

  // One line per submission, so the record survives even when no email arrives.
  console.log(
    JSON.stringify({
      tag: "lead",
      at: new Date().toISOString(),
      source,
      name: fields.name || "",
      salon: fields.salon_name || "",
      email: fields.email || "",
      phone: fields.phone || "",
      productInterest: fields.product_interest || fields.subject || "",
      ok,
      channels: { email, formService },
    })
  )

  return NextResponse.json(
    {
      ok,
      channels: { email, formService },
      hint: ok
        ? undefined
        : "No delivery channel accepted the submission. Check RESEND_API_KEY and LEAD_ENDPOINT.",
    },
    { status: ok ? 200 : 502 }
  )
}
