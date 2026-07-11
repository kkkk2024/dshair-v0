const fs = require('fs');
const path = require('path');

const BLOG_DIR = '/Users/carokk/Desktop/dshair-v0/app/blog';
const BASE_URL = 'https://www.dshairbeauty.co.uk';

// All blog slugs
const slugs = [
  'balayage-extensions-salon-guide',
  'best-extensions-fine-hair-uk',
  'butterfly-extensions-guide',
  'clip-in-extensions-guide',
  'fringes-bangs-extensions-guide',
  'hair-extension-aftercare-guide',
  'hair-extension-methods-comparison',
  'hair-extension-types-guide',
  'hair-topper-guide',
  'hand-tied-weft-guide',
  'how-to-choose-hair-extension-supplier',
  'k-tip-extensions-guide',
  'manchester-colour-collection-2026',
  'manchester-hair-extension-supplier',
  'nano-ring-extensions-guide',
  'ponytail-extensions-guide',
  'remy-vs-nonremy-hair-guide',
  'tape-in-extensions-guide',
  'trade-vs-diy-extensions',
  'weft-extensions-guide',
  'wholesale-hair-extensions-uk',
];

let updated = 0;

for (const slug of slugs) {
  const filePath = path.join(BLOG_DIR, slug, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP: ${slug} - file not found`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // 1. Add ArticleJsonLd import if not present
  if (!content.includes('ArticleJsonLd')) {
    // Add after the last import line
    content = content.replace(
      /(\nimport .+?\n(?:import .+?\n)*?)(\nexport const metadata|\n\nexport default)/,
      (match, imports, next) => {
        return imports + 'import { ArticleJsonLd } from "@/components/seo/json-ld"\n' + next;
      }
    );
  }

  // 2. Add alternates.canonical to metadata if missing
  if (!content.includes('alternates')) {
    // Extract title and description from metadata
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    const descMatch = content.match(/description:\s*\n?\s*"([^"]+)"/) || content.match(/description:\s*"([^"]+)"/);
    const title = titleMatch ? titleMatch[1] : '';
    const desc = descMatch ? descMatch[1] : '';

    // Add alternates after the description line (or after openGraph if it exists)
    if (content.includes('openGraph')) {
      // Add alternates before openGraph
      content = content.replace(
        /(description:\s*\n?\s*"[^"]+"\s*\n)(\s*openGraph)/,
        '$1  alternates: {\n    canonical: `' + BASE_URL + '/blog/' + slug + '`,\n  },\n$2'
      );
    } else {
      // Add after description
      content = content.replace(
        /(description:\s*\n?\s*"[^"]+"\s*\n)/,
        '$1  alternates: {\n    canonical: `' + BASE_URL + '/blog/' + slug + '`,\n  },\n'
      );
    }
  }

  // 3. Add openGraph to metadata if missing
  if (!content.includes('openGraph')) {
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    const descMatch = content.match(/description:\s*\n?\s*"([^"]+)"/) || content.match(/description:\s*\n?\s*"([^"]+)"\s*,/);
    const title = titleMatch ? titleMatch[1] : '';
    const desc = descMatch ? descMatch[1] : '';

    // Add after the metadata closing brace area (before the export default)
    const ogBlock = `\n  openGraph: {\n    title: \`${title}\`,\n    description: \`${desc.replace(/`/g, "'")}\`,\n    url: '${BASE_URL}/blog/${slug}',\n    locale: 'en_GB',\n    siteName: 'D.S HAIR & BEAUTY',\n    type: 'article',\n  },\n`;

    // Insert before the closing } of metadata
    content = content.replace(
      /(alternates:\s*\{[^}]+\},?\s*\n)/,
      '$1' + ogBlock
    );
  }

  // 4. Add ArticleJsonLd component in the JSX
  // Find the opening of the return block and add ArticleJsonLd
  if (!content.includes('<ArticleJsonLd')) {
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    const descMatch = content.match(/description:\s*\n?\s*"([^"]+)"/) || content.match(/description:\s*\n?\s*"([^"]+)"\s*,/);
    const title = titleMatch ? titleMatch[1] : 'Blog Post';
    const desc = descMatch ? descMatch[1] : '';

    const articleJsonLd = `<ArticleJsonLd
        title="${title}"
        description="${desc.replace(/"/g, '&quot;')}"
        author="D.S HAIR & BEAUTY"
        datePublished="2026-05-01"
        image="${BASE_URL}/og-blog-${slug}.png"
        url="${BASE_URL}/blog/${slug}"
      />`;

    // Insert after the CartProvider opening
    if (content.includes('<CartProvider>')) {
      content = content.replace(
        /<CartProvider>\n/,
        `<CartProvider>\n      ${articleJsonLd}\n`
      );
    } else if (content.includes('return (')) {
      // Fallback: add before the first div
      content = content.replace(
        /return \(\n(\s*)<div/,
        `return (\n$1${articleJsonLd}\n$1<div`
      );
    }
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  updated++;
  console.log(`OK: ${slug}`);
}

console.log(`\nUpdated ${updated}/${slugs.length} blog posts`);
