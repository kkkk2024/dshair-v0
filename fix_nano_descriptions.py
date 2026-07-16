#!/usr/bin/env python3
"""
Fix all nano products in products.ts:
- description: replace K-Tip copy with correct Nano Ring text
- shortDescription: replace K-Tip copy with correct Nano Ring text  
- features: replace K-Tip features with correct Nano Ring features
- tags: remove "keratin" tag
"""

import re

FILE = "/Users/caro2026/.openclaw/workspace/dshairstorev0/lib/products.ts"

with open(FILE, "r", encoding="utf-8") as f:
    content = f.read()

# ── New values ────────────────────────────────────────────────────────────────
NANO_DESC = (
    'Add length, volume and dimension with D.S HAIR 100% Remy Nano Ring Hair Extensions — '
    'the most invisible professional method available. Each nano ring is an ultra-small, '
    'silicone-lined metal bead (roughly 90% smaller than a standard micro-ring) that '
    'attaches individual 1g hair strands to your natural hair with zero heat, zero glue '
    'and zero chemicals. Cuticle-aligned Remy human hair means no tangling, no shedding '
    'and a seamless, natural finish. Must be fitted and maintained by a certified stylist. '
    'Available in 31 shades and lengths from 16\\"-28\\".'
)

NANO_SHORT = "100% Remy human hair · No heat · No glue · Ultra-invisible nano ring method"

NANO_FEATURES = '["100% Cuticle-aligned Remy human hair", "Ultra-small silicone-lined nano ring", "No heat, no glue, no chemicals", "50 strands × 1g per pack", "Wears 6-12 months with proper care", "Hair strands reusable 2-3 times"]'

OLD_DESC = (
    'Transform your look with D.S HAIR premium K-Tip (Keratin Tip) hair extensions. '
    'Our K-Tip extensions are crafted from the finest 100% Remy human hair, featuring '
    'pre-tipped keratin bonds for a seamless, natural look. Available in multiple lengths '
    '(16\\"-28\\") and colors. Perfect for adding volume, length, and dimension. UK stockist '
    'with free colour matching. Professional-grade quality for salon use.'
)

OLD_SHORT = "Premium 100% Remy human hair K-Tip extensions"

OLD_FEATURES = '["100% Remy Human Hair", "Pre-tipped keratin bonds", "Hot fusion application", "Reusable and durable", "Natural look and feel", "Multiple lengths available (16\\"-28\\")"]'

# Count occurrences before
n_desc_before = content.count(OLD_DESC)
n_short_before = content.count(OLD_SHORT)
n_features_before = content.count(OLD_FEATURES.replace('\\"', '\\"'))

print(f"Found description occurrences: {n_desc_before}")
print(f"Found shortDescription occurrences: {n_short_before}")

# Replace description (only in nano products - but since this exact string only exists in nano, safe to replace all)
content = content.replace(OLD_DESC, NANO_DESC)
content = content.replace(OLD_SHORT, NANO_SHORT)
content = content.replace(OLD_FEATURES, NANO_FEATURES)

# Remove "keratin" tag from nano products tags
# Pattern: tags: ["nano", "keratin", "professional", "new"]
content = content.replace(
    '["nano", "keratin", "professional", "new"]',
    '["nano", "professional", "new"]'
)

n_desc_after = content.count(OLD_DESC)
print(f"After replacement - description occurrences: {n_desc_after}")

with open(FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Done! products.ts updated.")
