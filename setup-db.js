import { config } from 'dotenv'
import { findUserByEmail, createUser, createProduct } from './src/lib/db.js'
import bcrypt from 'bcryptjs'

// Load environment variables
config({ path: '.env.local' })

async function main() {
  try {
    console.log('🔄 Setting up database...')
    
    // Check if demo user exists
    const existingUser = await findUserByEmail('demo@example.com')

    if (!existingUser) {
      // Create demo user
      const hashedPassword = await bcrypt.hash('demo123', 12)
      
      const user = await createUser({
        name: 'Demo User',
        email: 'demo@example.com',
        password: hashedPassword,
      })

      console.log('✅ Demo user created:', user.email)
      
      // Create some demo products
      const products = [
        {
          name: 'Demo Laptop',
          description: 'High-performance laptop for development',
          price: 1299.99,
          image: '/next.svg',
          userId: user._id.toString(),
        },
        {
          name: 'Demo Smartphone',
          description: 'Latest smartphone with amazing features',
          price: 899.99,
          image: '/vercel.svg',
          userId: user._id.toString(),
        }
      ]

      for (const productData of products) {
        await createProduct(productData)
      }

      console.log('✅ Demo products created')
    } else {
      console.log('ℹ️  Demo user already exists')
    }

    console.log('🎉 Database setup complete!')
  } catch (error) {
    console.error('❌ Error setting up database:', error)
  }
}

main()
