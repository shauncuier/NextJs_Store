import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'

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
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        image: image || '/next.svg', // Default image if none provided
        userId: session.user.id,
      },
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
    const products = await prisma.product.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(products)

  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
