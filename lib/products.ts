// Shopify Storefront API Client
const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || 'd-s-hair-beauty.myshopify.com';
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '47f2402532bd55a6560cba2fa38b5b48';

const API_VERSION = '2025-01';
const API_URL = `https://${SHOPIFY_STORE_DOMAIN}/api/${API_VERSION}/graphql.json`;

async function shopifyFetch(query: string, variables: Record<string, unknown> = {}) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Shopify API error: ${response.status}`);
  }

  const json = await response.json();
  
  if (json.errors) {
    console.error('Shopify API errors:', json.errors);
    throw new Error(json.errors[0]?.message || 'Shopify API error');
  }

  return json.data;
}

// Fetch all products from Shopify
export async function getProducts(first: number = 50) {
  try {
    const query = `
      query GetProducts($first: Int!) {
        products(first: $first) {
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
                width
                height
              }
              images(first: 10) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
              variants(first: 10) {
                edges {
                  node {
                    id
                    title
                    availableForSale
                    priceV2 {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const data = await shopifyFetch(query, { first });
    
    return data.products.edges.map((edge: any) => {
      const product = edge.node;
      return {
        id: product.id,
        slug: product.handle,
        name: product.title,
        title: product.title,
        handle: product.handle,
        description: product.description || '',
        shortDescription: product.description?.substring(0, 100) || '',
        price: parseFloat(product.priceRange?.minVariantPrice?.amount || '0'),
        originalPrice: undefined,
        images: product.images?.edges?.map((e: any) => e.node.url) || [],
        image: product.featuredImage?.url || '',
        category: product.productType || 'Hair Extensions',
        subcategory: '',
        badge: product.tags?.includes('bestseller') ? 'Best Seller' : product.tags?.includes('new') ? 'New' : undefined,
        rating: 4.8,
        reviews: Math.floor(Math.random() * 500) + 100,
        colors: [],
        lengths: [],
        features: [],
        inStock: product.variants?.edges?.some((e: any) => e.node.availableForSale) || false,
        type: product.tags?.includes('professional') ? 'professional' as const : 'diy' as const,
        vendor: product.vendor,
        tags: product.tags || [],
        currencyCode: product.priceRange?.minVariantPrice?.currencyCode || 'GBP',
        variants: product.variants?.edges?.map((e: any) => e.node) || [],
      };
    });
  } catch (error) {
    console.error('Failed to fetch products from Shopify:', error);
    return [];
  }
}

// Fetch single product by handle
export async function getProductByHandle(handle: string) {
  try {
    const query = `
      query GetProduct($handle: String!) {
        productByHandle(handle: $handle) {
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
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          featuredImage {
            url
            altText
            width
            height
          }
          images(first: 10) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 50) {
            edges {
              node {
                id
                title
                availableForSale
                priceV2 {
                  amount
                  currencyCode
                }
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
        }
      }
    `;

    const data = await shopifyFetch(query, { handle });
    
    if (!data.productByHandle) {
      return null;
    }
    
    const product = data.productByHandle;
    return {
      id: product.id,
      slug: product.handle,
      name: product.title,
      title: product.title,
      handle: product.handle,
      description: product.description || '',
      shortDescription: product.description?.substring(0, 100) || '',
      price: parseFloat(product.priceRange?.minVariantPrice?.amount || '0'),
      originalPrice: undefined,
      images: product.images?.edges?.map((e: any) => e.node.url) || [],
      image: product.featuredImage?.url || '',
      category: product.productType || 'Hair Extensions',
      subcategory: '',
      badge: product.tags?.includes('bestseller') ? 'Best Seller' : product.tags?.includes('new') ? 'New' : undefined,
      rating: 4.8,
      reviews: Math.floor(Math.random() * 500) + 100,
      colors: [],
      lengths: [],
      features: [],
      inStock: product.variants?.edges?.some((e: any) => e.node.availableForSale) || false,
      type: product.tags?.includes('professional') ? 'professional' as const : 'diy' as const,
      vendor: product.vendor,
      tags: product.tags || [],
      currencyCode: product.priceRange?.minVariantPrice?.currencyCode || 'GBP',
      variants: product.variants?.edges?.map((e: any) => e.node) || [],
    };
  } catch (error) {
    console.error('Failed to fetch product from Shopify:', error);
    return null;
  }
}

// Format price
export function formatPrice(amount: number | string, currencyCode: string = 'GBP'): string {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currencyCode,
  }).format(num);
}

// Collections - still static for now
export interface Collection {
  slug: string
  name: string
  description: string
  image: string
  productCount: number
  type: "diy" | "professional" | "all"
}

export const collections: Collection[] = [
  {
    slug: "diy",
    name: "DIY Extensions",
    description: "Easy to apply hair extensions for at-home use. Transform your look in minutes without a salon visit.",
    image: "/images/collection-diy.jpg",
    productCount: 48,
    type: "diy",
  },
  {
    slug: "professional",
    name: "Professional Extensions",
    description: "Premium quality extensions for salon professionals. Designed for expert application and long-lasting results.",
    image: "/images/collection-pro.jpg",
    productCount: 36,
    type: "professional",
  },
  {
    slug: "clip-in",
    name: "Clip-In Extensions",
    description: "Easy to apply, instant transformation",
    image: "/images/category-clip-in.jpg",
    productCount: 24,
    type: "diy",
  },
  {
    slug: "tape-in",
    name: "Tape-In Extensions",
    description: "Seamless, long-lasting results",
    image: "/images/category-tape-in.jpg",
    productCount: 18,
    type: "professional",
  },
  {
    slug: "ponytails",
    name: "Ponytails",
    description: "Instant glam for any occasion",
    image: "/images/category-ponytails.jpg",
    productCount: 18,
    type: "diy",
  },
  {
    slug: "wefts",
    name: "Weft Extensions",
    description: "Professional-grade quality",
    image: "/images/category-wefts.jpg",
    productCount: 12,
    type: "professional",
  },
];

// Product type
export interface Product {
  id: string
  name: string
  slug: string
  handle: string
  description: string
  shortDescription: string
  price: number
  originalPrice?: number
  images: string[]
  image: string
  category: string
  subcategory: string
  badge?: string
  rating: number
  reviews: number
  colors: ProductColor[]
  lengths: string[]
  features: string[]
  inStock: boolean
  type: "diy" | "professional"
  vendor?: string
  tags?: string[]
  currencyCode?: string
  variants?: any[]
}

export interface ProductColor {
  name: string
  hex: string
  image: string
}

// Get collection by slug
export function getCollectionBySlug(slug: string) {
  return collections.find(c => c.slug === slug) || null
}

// Get products by collection - now fetches from Shopify
export async function getProductsByCollection(collectionSlug: string) {
  const allProducts = await getProducts(50)
  
  if (collectionSlug === 'all' || collectionSlug === undefined) {
    return allProducts
  }
  
  return allProducts.filter((product: Product) => {
    const productCategory = product.category?.toLowerCase() || ''
    const productType = product.type || 'diy'
    
    if (collectionSlug === 'diy') {
      return productType === 'diy'
    }
    if (collectionSlug === 'professional') {
      return productType === 'professional'
    }
    
    return productCategory.includes(collectionSlug.toLowerCase())
  })
}
