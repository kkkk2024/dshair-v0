// Shared lead-form submission helper.
//
// Submissions go to this site's own /api/lead endpoint rather than straight to a
// third-party form service. Two reasons, both learned the hard way:
//
//  1. The provider's notification address lives in someone else's account and is
//     invisible from here. Submissions were being accepted while nobody received
//     them, and the visitor was told the form had gone through.
//  2. Every form used to swallow the reason for a failure, so a rejected
//     submission was indistinguishable from a quiet day.
//
// Routing through our own endpoint puts the destination in this project's
// environment, and returns per-channel detail that is logged to the browser
// console so a failure can be diagnosed instead of guessed at.

/** Fallback routes for a visitor whose submission did not go through. */
export const FALLBACK_WHATSAPP = "https://wa.me/8613516946001"
export const FALLBACK_EMAIL = "caro@dshairbeauty.co.uk"

const LEAD_ENDPOINT = "/api/lead"

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: string }

export async function submitLeadForm(form: HTMLFormElement): Promise<SubmitResult> {
  try {
    const response = await fetch(LEAD_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    })

    let payload: any = null
    try {
      payload = await response.json()
    } catch {
      payload = null
    }

    if (response.ok && payload?.ok) return { ok: true }

    const channels = payload?.channels
    const reason = channels
      ? `email: ${channels.email?.detail ?? "unknown"}; form service: ${
          channels.formService?.detail ?? "unknown"
        }`
      : payload?.error || `HTTP ${response.status}`

    console.error("[lead-form] Submission was not delivered:", reason, payload)
    return { ok: false, reason }
  } catch (error) {
    console.error("[lead-form] Could not reach the lead endpoint:", error)
    return { ok: false, reason: "network" }
  }
}
