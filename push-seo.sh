#!/bin/bash
# SEO Optimization Push Script
# Run this from terminal:  bash /Users/carokk/Desktop/dshair-v0/push-seo.sh

cd /Users/carokk/Desktop/dshair-v0

echo "=== Staging all changes ==="
git add -A

echo ""
echo "=== Committing ==="
git commit -m "feat: comprehensive SEO optimization

- Enhanced Organization Schema with geo, openingHours, priceRange, knowsAbout
- Added LocalBusinessJsonLd component to json-ld.tsx
- Rewrote product page generateMetadata with 12 product-type SEO templates
- Split 7 use-client pages into server+client for metadata support:
  why-choose-us, salon-partners, find-stylist, resources, ambassador, solutions, academy
- Added FAQPage schema to /faqs (server component refactor)
- Added Blog + ItemList schema to /blog (18 BlogPosting entries)
- Added BreadcrumbJsonLd to /trade-wholesale and /colour-match
- Added canonical URLs + OG tags to about, contact, color-chart, account, blog
- Fixed footer external links: added rel='noopener noreferrer'
- Fixed logo path in Organization/Article schema (/logo.png → /apple-icon.png)"

echo ""
echo "=== Pushing to remote ==="
git push

echo ""
echo "=== Done! Check Vercel dashboard for deployment ==="
