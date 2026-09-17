// Shared lead-form submission helper.
//
// Every form on this site posts to the same Formspree endpoint. Previously each
// form swallowed the reason for a failure: the visitor saw a generic message and
// the real cause was never recorded anywhere. A rejected submission could
// therefore go unnoticed for weeks.
//
// This helper keeps one endpoint, one fallback address, and always reports the
// real error to the browser console so that a failure can be diagnosed from the
// visitor's screen instead of being guessed at afterwards.

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgaagep"

/** Fallback routes for a visitor whose submission did not go through. */
export const FALLBACK_WHATSAPP = "https://wa.me/8613516946001"
export const FALLBACK_EMAIL = "caro@dshairbeauty.co.uk"

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: string }

export async function submitLeadForm(form: HTMLFormElement): Promise<SubmitResult> {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    })

    if (response.ok) return { ok: true }

    // Surface what the provider actually said — quota reached, form disabled,
    // domain not allowed, spam rejection — instead of discarding it.
    let detail = ""
    try {
      const payload = await response.json()
      detail = payload?.error || payload?.errors?.[0]?.message || ""
    } catch {
      detail = ""
    }

    const reason = `HTTP ${response.status}${detail ? ` — ${detail}` : ""}`
    console.error("[lead-form] Formspree rejected the submission:", reason, {
      endpoint: FORMSPREE_ENDPOINT,
    })
    return { ok: false, reason }
  } catch (error) {
    console.error("[lead-form] Could not reach Formspree:", error, {
      endpoint: FORMSPREE_ENDPOINT,
    })
    return { ok: false, reason: "network" }
  }
}
