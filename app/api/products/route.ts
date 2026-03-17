import { NextResponse } from 'next/server'
import { products } from '@/lib/products'

export async function GET() {
  try {
    // Return products from local database
    // In the future, this can connect to Airtable for easy management
    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}
