"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const filterSections = [
  {
    id: "length",
    name: "Length",
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
    name: "Colour Family",
    options: [
      { value: "black", label: "Black" },
      { value: "brown", label: "Brown" },
      { value: "blonde", label: "Blonde" },
      { value: "red", label: "Red/Auburn" },
      { value: "balayage", label: "Balayage" },
      { value: "ombre", label: "Ombre" },
      { value: "rooted", label: "Rooted" },
    ],
  },
  {
    id: "style",
    name: "Style",
    options: [
      { value: "straight", label: "Straight" },
      { value: "wavy", label: "Wavy" },
      { value: "curly", label: "Curly" },
    ],
  },
  {
    id: "weight",
    name: "Weight/Volume",
    options: [
      { value: "light", label: "Light (100-120g)" },
      { value: "medium", label: "Medium (140-180g)" },
      { value: "full", label: "Full (200-220g)" },
      { value: "extra", label: "Extra Full (240g+)" },
    ],
  },
]

export function ProductFilters() {
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
        <h2 className="font-semibold text-lg">Filters</h2>
        {activeFilterCount > 0 && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear All ({activeFilterCount})
          </Button>
        )}
      </div>

      {/* Price Range */}
      <div className="border-b pb-6">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full py-2 text-left font-medium"
        >
          Price Range
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
            In Stock Only
          </Label>
        </div>
      </div>
    </div>
  )
}
