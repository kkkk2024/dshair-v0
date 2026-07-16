import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hair Extension Spec Library | D.S HAIR & BEAUTY",
  description:
    "Compare every hair extension method side-by-side. Technical specifications for Tape-In, Nano Ring, K-Tip, Clip-In, Weft and Butterfly Weft extensions. Professional salon reference guide.",
  keywords:
    "hair extension specifications, hair extension methods comparison, tape-in vs nano ring vs k-tip, hair extension installation time, hair extension lifespan, salon extension guide",
}

import ExtensionSpecsClient from "./extension-specs-client"

export default function ExtensionSpecsPage() {
  return <ExtensionSpecsClient />
}
