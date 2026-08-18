"use client"

import { useEffect, useRef, useState } from "react"

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

// ── 1. Honeypot ───────────────────────────────────────────────────────
// Invisible to real users (off-screen, no tab index). Bots that auto-fill
// every field will populate it, and the API route silently drops them.
export function HoneypotField() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-9999px",
        width: 1,
        height: 1,
        overflow: "hidden",
      }}
    >
      <label htmlFor="fax_number">Fax</label>
      <input
        id="fax_number"
        name="fax_number"
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  )
}

// ── 2. Cloudflare Turnstile widget ────────────────────────────────────
// Renders nothing until NEXT_PUBLIC_TURNSTILE_SITE_KEY is configured, so the
// site keeps working (fail-open) before CARO sets the keys.
export function TurnstileField({
  onTokenChange,
}: {
  onTokenChange: (token: string) => void
}) {
  const widgetRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)
  const cbRef = useRef(onTokenChange)
  cbRef.current = onTokenChange

  useEffect(() => {
    if (!SITE_KEY) return
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-cf-turnstile]'
    )
    if (!existing) {
      const s = document.createElement("script")
      s.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
      s.async = true
      s.defer = true
      s.setAttribute("data-cf-turnstile", "1")
      s.onload = () => setReady(true)
      document.body.appendChild(s)
    } else {
      setReady(true)
    }
  }, [])

  useEffect(() => {
    if (!SITE_KEY || !ready || !widgetRef.current) return
    const w = (window as unknown as { turnstile?: TurnstileApi }).turnstile
    if (!w) return
    w.render(widgetRef.current, {
      sitekey: SITE_KEY,
      callback: (token: string) => cbRef.current(token),
      "expired-callback": () => cbRef.current(""),
      "error-callback": () => cbRef.current(""),
    })
    // Intentionally only depends on `ready` — widget renders once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready])

  if (!SITE_KEY) return null
  return <div ref={widgetRef} className="cf-turnstile" data-theme="auto" />
}

type TurnstileApi = {
  render: (
    el: HTMLElement,
    opts: {
      sitekey: string
      callback: (token: string) => void
      "expired-callback": () => void
      "error-callback": () => void
    }
  ) => void
}
