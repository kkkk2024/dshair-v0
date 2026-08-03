import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import SalonPartnersClient from "./salon-partners-client"

export const metadata: Metadata = {
  title: "Salon Partner Programme | Wholesale Hair Extensions | D.S Hair Beauty",
  description:
    "Join 50+ UK & EU salons as a D.S Hair Beauty partner. Get trade pricing, a free digital colour catalogue, dedicated support, and express factory-direct shipping (3–5 days) on 100% Remy human hair extensions.",
  keywords: [
    "salon partner programme",
    "wholesale hair extensions UK",
    "trade hair extension account",
    "salon hair extension supplier",
    "professional hair extension wholesale",
  ],
  alternates: {
    canonical: 'https://www.dshairbeauty.co.uk/salon-partners',
  },
  openGraph: {
    title: 'Salon Partner Programme | D.S Hair Beauty',
    description: 'Join 50+ UK & EU salons. Trade pricing, free digital colour catalogue, express factory-direct shipping.',
    url: 'https://www.dshairbeauty.co.uk/salon-partners',
    type: 'website',
    locale: 'en_GB',
  },
}

export default function SalonPartnersPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.dshairbeauty.co.uk" },
        { name: "Salon Partners", url: "https://www.dshairbeauty.co.uk/salon-partners" },
      ]} />
      <SalonPartnersClient />
    </>
  )
}
