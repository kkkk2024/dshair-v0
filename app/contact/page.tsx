import type { Metadata } from "next"
import { ContactView } from "@/components/pages/contact-view"
import { contactContent } from "@/lib/i18n/pages/contact"

export const metadata: Metadata = {
  title: contactContent.en.metaTitle,
  description: contactContent.en.metaDescription,
  keywords: [
    "contact hair extensions supplier",
    "hair extension supplier Manchester contact",
    "wholesale hair extensions contact",
    "D.S Hair Beauty contact",
    "hair extensions UK phone",
    "salon hair extensions supplier email",
  ],
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/contact",
  },
  openGraph: {
    title: contactContent.en.metaTitle,
    description: "Contact D.S Hair Beauty — UK hair extension supplier. WhatsApp, email, or form.",
    url: "https://www.dshairbeauty.co.uk/contact",
    type: "website",
    locale: "en_GB",
  },
}

export default function ContactPage() {
  return <ContactView content={contactContent.en} locale="en" />
}
