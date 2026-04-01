"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

interface Faq {
  q: string
  a: string
}

interface ProductFaqAccordionProps {
  faqs: Faq[]
}

export function ProductFaqAccordion({ faqs }: ProductFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (faqs.length === 0) return null

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container px-4 md:px-6 py-5">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="h-4 w-4 text-[#4A1942]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4A1942]">
            Salon FAQs
          </span>
        </div>
        {/* Accordion items */}
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                aria-expanded={openIndex === idx}
              >
                <span className="font-medium text-sm text-[#2A2A2A]">{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 text-[#4A1942] shrink-0 transition-transform duration-200 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  openIndex === idx ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-4 py-3 text-sm text-gray-600 leading-relaxed bg-white">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
