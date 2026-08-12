/**
 * Centralized brand configuration for D.S HAIR & BEAUTY
 * Single source of truth for all brand messaging and contact info.
 * 
 * Brand positioning: China-based manufacturer; UK warehouse launching (factory-direct express delivery).
 * +86 WhatsApp is factory-direct — not a trust issue but a strength.
 */

export const WHATSAPP_NUMBER = '8613516946001'
export const WHATSAPP_DISPLAY = '+86 13516946001'

export function whatsappLink(message?: string): string {
  const defaultMessage = "Hi D.S HAIR & BEAUTY! I'm a salon owner interested in trade pricing."
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message || defaultMessage)}`
}

// ─── Brand Voice ──────────────────────────────────────────────────────────────

export const BRAND = {
  // Short descriptor for page titles / meta
  tagline: 'China-Based Manufacturer. UK Warehouse Launching.',
  // Full descriptor for meta descriptions
  descriptor:
    'China-based manufacturer of 100% Remy human hair extensions. UK warehouse launching — express 3–5 day factory-direct delivery. Trade pricing, factory-direct quality. 19+ years industry experience.',
  // Footer / about summary
  footerSummary:
    'Premium 100% Remy Human Hair Extensions. Trusted by 500+ salons across UK & EU. China-based manufacturer with UK warehouse launching. Express 3–5 day factory-direct delivery. Factory-direct quality with 19+ years of industry experience.',
  
  // Location descriptors (use these instead of "Manchester-based")
  location: 'UK Warehouse Launching — Express 3–5 Day Delivery',
  locationShort: 'UK Warehouse Launching',
  
  // WhatsApp positioning text
  whatsappLabel: 'Factory-direct WhatsApp',
  whatsappTooltip: 'Chat with our production team — directly from the factory',
  
  // Address (keep light — no fake UK company address)
  address: 'Manchester, UK',
  
  // Bottom bar trust line
  bottomBar:
    'A trading brand of Kangde (HK) Jiankang Technology Limited. — B2B manufacturer-direct supply for professional salons.',
}

// ─── Contact Info ─────────────────────────────────────────────────────────────

export const CONTACT = {
  email: 'caro@dshairbeauty.co.uk',
  whatsapp: whatsappLink(),
  whatsappNumber: WHATSAPP_DISPLAY,
  company: 'D.S HAIR & BEAUTY',
}
