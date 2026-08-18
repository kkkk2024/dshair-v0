"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLocale } from "@/lib/i18n"
import { getShopUi } from "@/lib/i18n/shop"

export function ProductFilters() {
  const locale = useLocale()
  const t = getShopUi(locale)

  const filterSections = [
    {
      id: "length",
      name: t.productFilters.sections.length,
      options: [
        { value: "14", label: '14"' },
        { value: "16", label: '16"' },
        { value: "18", label: '18"' },
        { value: "20", label: '20"' },
        { value: "22", label: '22"' },
        { value: "24", label: '24"' },
        { value: "26", label: '26"' },
      ],
    },
    {
      id: "color-family",
      name: t.productFilters.sections.colorFamily,
      options: [
        { value: "black", label: t.productFilters.options.black },
        { value: "brown", label: t.productFilters.options.brown },
        { value: "blonde", label: t.productFilters.options.blonde },
        { value: "red", label: t.productFilters.options.red },
        { value: "balayage", label: t.productFilters.options.balayage },
        { value: "ombre", label: t.productFilters.options.ombre },
        { value: "rooted", label: t.productFilters.options.rooted },
      ],
    },
    {
      id: "style",
      name: t.productFilters.sections.style,
      options: [
        { value: "straight", label: t.productFilters.options.straight },
        { value: "wavy", label: t.productFilters.options.wavy },
        { value: "curly", label: t.productFilters.options.curly },
      ],
    },
    {
      id: "weight",
      name: t.productFilters.sections.weightVolume,
      options: [
        { value: "light", label: t.productFilters.options.light },
        { value: "medium", label: t.productFilters.options.medium },
        { value: "full", label: t.productFilters.options.full },
        { value: "extra", label: t.productFilters.options.extra },
      ],
    },
  ]

  const [openSections, setOpenSections] = useState<string[]>(["length", "color-family"])
  const [priceRange, setPriceRange] = useState([0, 300])
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const toggleFilter = (sectionId: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[sectionId] || []
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
      return { ...prev, [sectionId]: updated }
    })
  }

  const clearFilters = () => {
    setSelectedFilters({})
    setPriceRange([0, 300])
  }

  const activeFilterCount = Object.values(selectedFilters).flat().length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">{t.productFilters.filters}</h2>
        {activeFilterCount > 0 && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            {t.productFilters.clearAll(activeFilterCount)}
          </Button>
        )}
      </div>

      {/* Price Range */}
      <div className="border-b pb-6">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full py-2 text-left font-medium"
        >
          {t.productFilters.priceRange}
          <ChevronDown
            className={cn("h-4 w-4 transition-transform", openSections.includes("price") && "rotate-180")}
          />
        </button>
        {openSections.includes("price") && (
          <div className="mt-4 px-1">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={500}
              min={0}
              step={10}
              className="mb-4"
            />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>£{priceRange[0]}</span>
              <span>£{priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Filter Sections */}
      {filterSections.map((section) => (
        <div key={section.id} className="border-b pb-6">
          <button
            onClick={() => toggleSection(section.id)}
            className="flex items-center justify-between w-full py-2 text-left font-medium"
          >
            {section.name}
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                openSections.includes(section.id) && "rotate-180"
              )}
            />
          </button>
          {openSections.includes(section.id) && (
            <div className="mt-3 space-y-3">
              {section.options.map((option) => {
                const isSelected = selectedFilters[section.id]?.includes(option.value)
                return (
                  <div key={option.value} className="flex items-center gap-2">
                    <Checkbox
                      id={`${section.id}-${option.value}`}
                      checked={isSelected}
                      onCheckedChange={() => toggleFilter(section.id, option.value)}
                    />
                    <Label
                      htmlFor={`${section.id}-${option.value}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {option.label}
                    </Label>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      ))}

      {/* Availability */}
      <div className="pb-6">
        <div className="flex items-center gap-2">
          <Checkbox id="in-stock" />
          <Label htmlFor="in-stock" className="text-sm font-normal cursor-pointer">
            {t.productFilters.inStockOnly}
          </Label>
        </div>
      </div>
    </div>
  )
}
