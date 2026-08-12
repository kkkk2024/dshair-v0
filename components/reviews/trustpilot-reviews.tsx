"use client"

import { useEffect } from "react"
import { REVIEWS_CONFIG } from "@/lib/reviews"

// On-site Trustpilot TrustBox. Renders nothing until reviews are connected
// (enabled + businessUnitId set in lib/reviews.ts), so we never show a fake
// widget or fabricated ratings.
export function TrustpilotReviews() {
  const { trustpilotBusinessUnitId, trustpilotReviewUrl, trustBoxTemplateId, enabled } =
    REVIEWS_CONFIG

  useEffect(() => {
    if (!enabled || !trustpilotBusinessUnitId) return
    const existing = document.getElementById("tp-widget-bootstrap")
    if (!existing) {
      const s = document.createElement("script")
      s.id = "tp-widget-bootstrap"
      s.src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
      s.async = true
      document.head.appendChild(s)
    }
  }, [trustpilotBusinessUnitId, enabled])

  if (!enabled || !trustpilotBusinessUnitId) return null

  return (
    <section className="my-10" aria-label="Customer reviews">
      <div
        className="trustpilot-widget"
        data-locale="en-GB"
        data-template-id={trustBoxTemplateId}
        data-businessunit-id={trustpilotBusinessUnitId}
        data-style-height="rounded"
        data-style-width="100%"
        data-theme="light"
        data-review-languages="en"
        data-style-alignment="center"
      >
        <a href={trustpilotReviewUrl} target="_blank" rel="noopener noreferrer">
          Read our reviews on Trustpilot
        </a>
      </div>
    </section>
  )
}
