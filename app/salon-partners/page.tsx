import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import SalonPartnersClient from "./salon-partners-client"

export const metadata: Metadata = {
  title: "Salon Partner Programme | Wholesale Hair Extensions | D.S Hair Beauty",
  description:
    "Join 500+ UK salons as a D.S Hair Beauty partner. Get trade pricing, free colour matching kits, dedicated support, and same-day dispatch on 100% Remy human hair extensions.",
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
    description: 'Join 500+ UK salons. Trade pricing, free colour matching, same-day dispatch.',
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
