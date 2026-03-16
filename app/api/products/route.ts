import { NextResponse } from 'next/server'

const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || 'd-s-hair-beauty.myshopify.com'
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '47f2402532bd55a6560cba2fa38b5b48'

export async function GET() {
  try {
    const response = await fetch(
      `https://${SHOPIFY_STORE_DOMAIN}/api/2025-01/graphql.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        },
        body: JSON.stringify({
          query: `
            query {
              products(first: 50) {
                edges {
                  node {
                    id
                    title
                    handle
                    description
                    vendor
                    productType
                    tags
                    priceRange {
                      minVariantPrice {
                        amount
                        currencyCode
                      }
                    }
                    featuredImage {
                      url
                      altText
                    }
                    images(first: 10) {
                      edges {
                        node {
                          url
                        }
                      }
                    }
                    variants(first: 10) {
                      edges {
                        node {
                          id
                          title
                          availableForSale
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
        }),
      }
    )

    const data = await response.json()

    if (data.errors) {
      return NextResponse.json({ error: data.errors[0].message }, { status: 500 })
    }

    const products = data.data.products.edges.map((edge: any) => edge.node)

    return NextResponse.json(products)
  } catch (error) {
    console.error('Shopify API error:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}
