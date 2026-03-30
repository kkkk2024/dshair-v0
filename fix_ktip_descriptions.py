#!/usr/bin/env python3
"""
Fix K-Tip products: restore correct K-Tip description/shortDescription/features
Fix Nano products: update features to nano-specific
"""

FILE = "/Users/caro2026/.openclaw/workspace/dshairstorev0/lib/products.ts"

KTIP_DESC = (
    "Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. "
    "Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring "
    "pre-tipped keratin bonds for seamless fusion with your natural hair. "
    "Applied using a specialist hot fusion iron at 180-200°C, each strand bonds individually "
    "for a completely natural, long-lasting result. Available in 31 shades and lengths "
    'from 16\\"-28\\". Must be fitted and removed by a certified hair extension stylist.'
)

KTIP_SHORT = "100% Remy human hair · Keratin bond · Hot fusion · Individual strand method"

KTIP_FEATURES = '["100% Cuticle-aligned Remy human hair", "Pre-tipped keratin (hot fusion) bond", "Individual strand method — natural result", "Applied with specialist fusion iron 180-200°C", "Wears 3-6 months with proper care", "Professional removal with bonding solvent"]'

NANO_DESC = (
    "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — "
    "the most invisible professional method available. Each nano ring is an ultra-small, "
    "silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that "
    "attaches individual 1g hair strands to your natural hair with zero heat, zero glue "
    "and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding "
    "and a seamless, natural finish. Must be fitted and maintained by a certified stylist. "
    'Available in 31 shades and lengths from 16\\"-28\\".'
)

NANO_FEATURES = '["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands \u00d7 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"]'

NANO_SHORT = "100% Remy human hair \u00b7 No heat \u00b7 No glue \u00b7 Ultra-invisible nano ring method"

WRONG_DESC_IN_KTIP = (
    "Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — "
    "the most invisible professional method available. Each nano ring is an ultra-small, "
    "silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that "
    "attaches individual 1g hair strands to your natural hair with zero heat, zero glue "
    "and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding "
    "and a seamless, natural finish. Must be fitted and maintained by a certified stylist. "
    'Available in 31 shades and lengths from 16\\"-28\\".'
)

WRONG_SHORT_IN_KTIP = "100% Remy human hair \u00b7 No heat \u00b7 No glue \u00b7 Ultra-invisible nano ring method"

WRONG_FEATURES_IN_KTIP = '["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands \u00d7 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"]'

with open(FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Strategy: process K-Tip sections only
# K-Tip products have productType: "K-Tip Extensions"
# Nano products have productType: "Nano Extensions"
# We need to fix line by line based on context

lines = content.split("\n")
result = []
i = 0
ktip_fixes = 0
nano_fixes = 0

while i < len(lines):
    line = lines[i]
    # Detect K-Tip product lines (have productType: "K-Tip Extensions")
    if 'productType: "K-Tip Extensions"' in line:
        # This line contains the K-Tip product - fix wrong nano content
        line = line.replace(WRONG_DESC_IN_KTIP, KTIP_DESC)
        line = line.replace(WRONG_SHORT_IN_KTIP, KTIP_SHORT)
        line = line.replace(WRONG_FEATURES_IN_KTIP, KTIP_FEATURES)
        ktip_fixes += 1
    # Detect Nano product lines
    elif 'productType: "Nano Extensions"' in line:
        # Ensure nano features are correct (may already be set)
        nano_fixes += 1
    result.append(line)
    i += 1

new_content = "\n".join(result)

with open(FILE, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"K-Tip lines fixed: {ktip_fixes}")
print(f"Nano lines found: {nano_fixes}")
print("Done!")
