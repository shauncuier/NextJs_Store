import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'
import { getProductById } from '@/lib/db'
import { ObjectId } from 'mongodb'
import clientPromise from '@/lib/mongodb.js'

// Get single product
export async function GET(request, { params }) {
  try {
    const product = await getProductById(params.id)
    
    if (!product) {
      return NextResponse.json(
        { message: 'Product not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(product)

  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Delete product
export async function DELETE(request, { params }) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: 401 }
      )
    }

    // Get the product first to check ownership
    const product = await getProductById(params.id)
    
    if (!product) {
      return NextResponse.json(
        { message: 'Product not found' },
        { status: 404 }
      )
    }

    // Check if the user owns this product
    if (product.userId !== session.user.id) {
      return NextResponse.json(
        { message: 'You can only delete your own products' },
        { status: 403 }
      )
    }

    // Delete the product
    const client = await clientPromise
    const db = client.db('productstore')
    const result = await db.collection('products').deleteOne({ 
      _id: new ObjectId(params.id) 
    })

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: 'Product not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { message: 'Product deleted successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error deleting product:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Update product
export async function PUT(request, { params }) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: 401 }
      )
    }

    // Get the product first to check ownership
    const product = await getProductById(params.id)
    
    if (!product) {
      return NextResponse.json(
        { message: 'Product not found' },
        { status: 404 }
      )
    }

    // Check if the user owns this product
    if (product.userId !== session.user.id) {
      return NextResponse.json(
        { message: 'You can only update your own products' },
        { status: 403 }
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

    // Update the product
    const client = await clientPromise
    const db = client.db('productstore')
    const result = await db.collection('products').updateOne(
      { _id: new ObjectId(params.id) },
      { 
        $set: {
          name,
          description,
          price,
          image: image || '/next.svg',
          updatedAt: new Date()
        }
      }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: 'Product not found' },
        { status: 404 }
      )
    }

    // Get updated product
    const updatedProduct = await getProductById(params.id)

    return NextResponse.json(updatedProduct)

  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
