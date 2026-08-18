// Shared anti-spam helpers for D.S Hair & Beauty form routes.
// DESIGN: every check is FAIL-OPEN so a misconfiguration never blocks real salon owners.
//   - Turnstile: skipped if TURNSTILE_SECRET_KEY is not set, or on network error.
//   - Honeypot: only rejects when the trap field is actually filled (a real user never sees it).
//   - Timing:    only rejects when submitTime is provided AND < MIN_SUBMIT_MS.

// ── 1. Disposable / temporary email domains to reject ───────────────
// These are free throwaway inboxes used almost exclusively by bots / competitors probing.
export const DISPOSABLE_EMAIL_DOMAINS = new Set([
  "mailinator.com", "yopmail.com", "yopmail.net", "guerrillamail.com", "guerrillamail.net",
  "guerrillamailblock.com", "guerrillamail.info", "guerrillamail.de", "tempmail.com",
  "temp-mail.org", "tempmailo.com", "tempmailaddress.com", "tempemail.co", "tempinbox.com",
  "10minutemail.com", "10minutemail.net", "throwawaymail.com", "trashmail.com", "trashmail.net",
  "getnada.com", "nada.email", "maildrop.cc", "sharklasers.com", "sharklasers.org",
  "dispostable.com", "fakeinbox.com", "mailnesia.com", "mintemail.com", "emailondeck.com",
  "mohmal.com", "emailfake.com", "fake-mail.cc", "mailtemp.net", "inboxbear.com",
  "fakemailgenerator.com", "spam4.me", "grr.la", "pokemail.net", "spammy.io",
  "tempmail.ninja", "tempmail.ws", "disbox.net", "emailondeck.net", "tempemail.net",
])

export function isDisposableEmail(email: string): boolean {
  if (typeof email !== "string" || email.indexOf("@") < 0) return false
  const domain = email.slice(email.lastIndexOf("@") + 1).toLowerCase().trim()
  return DISPOSABLE_EMAIL_DOMAINS.has(domain)
}

// ── 2. Honeypot: bots auto-fill fields hidden via CSS ────────────────
export function honeypotTriggered(body: Record<string, unknown>): boolean {
  const traps = ["fax_number", "company_url", "website_extra", "hp_email"]
  for (const key of traps) {
    const v = body[key]
    if (typeof v === "string" && v.trim().length > 0) return true
  }
  return false
}

// ── 3. Submit-timing: a human needs more than MIN_SUBMIT_MS to fill ─
export const MIN_SUBMIT_MS = 5000

export function isTooFast(submitTime: unknown): boolean {
  if (typeof submitTime !== "number" || !submitTime) return false // fail-open
  const elapsed = Date.now() - submitTime
  return elapsed < MIN_SUBMIT_MS
}

// ── 4. Cloudflare Turnstile verify (fails open) ─────────────────────
export async function verifyTurnstile(token: unknown): Promise<{ ok: boolean; skipped: boolean }> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return { ok: true, skipped: true } // not configured → skip
  if (typeof token !== "string" || !token) return { ok: false, skipped: false } // configured but no token → reject
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
    })
    const data = (await res.json()) as { success?: boolean }
    return { ok: !!data.success, skipped: false }
  } catch {
    return { ok: true, skipped: true } // network error → never block a real user
  }
}

// ── 5. Field-length cap (prevents abuse / oversized payloads) ───────
export function tooLong(value: unknown, max = 2000): boolean {
  return typeof value === "string" && value.length > max
}
