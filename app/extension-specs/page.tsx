import type { Metadata } from "next"
import { ExtensionSpecsView } from "@/components/pages/extension-specs-view"
import { getExtensionSpecsContent } from "@/lib/i18n/pages/extension-specs"
import { SITE_URL, hreflangAlternates } from "@/lib/i18n/config"

const c = getExtensionSpecsContent("en")

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/extension-specs`,
    languages: hreflangAlternates("/extension-specs"),
  },
}

export default function ExtensionSpecsPage() {
  return <ExtensionSpecsView locale="en" />
}
