import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'
import { createProduct, getAllProducts, findUserById } from '@/lib/db'

export async function POST(request) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { name, description, price, image } = body

    // Validate required fields
    if (!name || !description || !price) {
      return NextResponse.json(
        { message: 'Name, description, and price are required' },
        { status: 400 }
      )
    }

    // Validate price
    if (typeof price !== 'number' || price < 0) {
      return NextResponse.json(
        { message: 'Price must be a positive number' },
        { status: 400 }
      )
    }

    // Create product in database
    const product = await createProduct({
      name,
      description,
      price,
      image: image || '/next.svg', // Default image if none provided
      userId: session.user.id,
    })

    return NextResponse.json(product, { status: 201 })

  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Get all products (public endpoint)
    const products = await getAllProducts()

    // Add user information to each product
    const productsWithUsers = await Promise.all(
      products.map(async (product) => {
        const user = await findUserById(product.userId)
        return {
          ...product,
          user: user ? {
            name: user.name,
            email: user.email,
          } : null
        }
      })
    )

    return NextResponse.json(productsWithUsers)

  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
