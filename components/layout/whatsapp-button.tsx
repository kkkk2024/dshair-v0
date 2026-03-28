"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hi D.S HAIR & BEAUTY! I'd like to find out more about your hair extension products."
    )
    window.open(`https://wa.me/8613516946001?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 active:scale-95 transition-all flex items-center justify-center group"
    >
      <MessageCircle className="h-7 w-7" />
      {/* Tooltip */}
      <span className="absolute right-16 bg-gray-900 text-white text-sm rounded-lg px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat on WhatsApp
      </span>
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
    </button>
  )
}
