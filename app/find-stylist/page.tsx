import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import FindStylistClient from "./find-stylist-client"

export const metadata: Metadata = {
  title: "Find a Hair Extension Stylist UK | D.S Hair Beauty",
  description:
    "Find a certified hair extension stylist near you. Our UK-wide network of professional salon partners specialises in tape-in, nano ring, K-tip, and hand-tied weft extensions.",
  keywords: [
    "find hair extension stylist",
    "hair extension salon near me",
    "professional hair extension installer UK",
    "certified hair extension stylist",
    "hair extension salon finder",
  ],
  alternates: {
    canonical: 'https://www.dshairbeauty.co.uk/find-stylist',
  },
  openGraph: {
    title: 'Find a Hair Extension Stylist UK | D.S Hair Beauty',
    description: 'Find a certified hair extension stylist near you in the UK.',
    url: 'https://www.dshairbeauty.co.uk/find-stylist',
    type: 'website',
    locale: 'en_GB',
  },
}

export default function FindStylistPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.dshairbeauty.co.uk" },
        { name: "Find a Stylist", url: "https://www.dshairbeauty.co.uk/find-stylist" },
      ]} />
      <FindStylistClient />
    </>
  )
}
