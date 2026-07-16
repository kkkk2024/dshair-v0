"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hi D.S HAIR & BEAUTY! I'm a salon owner interested in your wholesale hair extensions."
    )
    window.open(`https://wa.me/8613516946001?text=${message}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* Trade Account CTA */}
      <Link
        href="/salon-partners"
        className="bg-accent text-white text-sm font-medium rounded-full px-4 py-2 shadow-lg hover:bg-accent/90 transition-all flex items-center gap-2 opacity-90 hover:opacity-100"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        Trade Account
      </Link>
      {/* WhatsApp button */}
      <button
        onClick={handleClick}
        aria-label="Contact us on WhatsApp"
        className="h-14 w-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 active:scale-95 transition-all flex items-center justify-center group"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute right-16 bg-gray-900 text-white text-sm rounded-lg px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Factory-direct WhatsApp
        </span>
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      </button>
    </div>
  )
}
