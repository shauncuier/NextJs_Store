import Link from 'next/link'
import Image from 'next/image'

// Mock product data - in a real app, this would come from your database
const products = [
  {
    id: "1",
    name: "Premium Headphones",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.",
    price: 199.99,
    image: "/next.svg"
  },
  {
    id: "2", 
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health monitoring, GPS tracking, and long-lasting battery life.",
    price: 299.99,
    image: "/vercel.svg"
  },
  {
    id: "3",
    name: "Laptop Stand",
    description: "Ergonomic aluminum laptop stand for better posture and improved workspace organization.",
    price: 49.99,
    image: "/window.svg"
  },
  {
    id: "4",
    name: "Wireless Mouse",
    description: "Precision wireless mouse with ergonomic design and long battery life for productivity.",
    price: 79.99,
    image: "/globe.svg"
  },
  {
    id: "5",
    name: "USB-C Hub",
    description: "Multi-port USB-C hub with HDMI, USB 3.0, and power delivery for modern laptops.",
    price: 89.99,
    image: "/file.svg"
  },
  {
    id: "6",
    name: "Keyboard",
    description: "Mechanical keyboard with RGB backlighting and premium switches for gaming and typing.",
    price: 129.99,
    image: "/next.svg"
  }
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                ProductStore
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link 
                href="/login" 
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Products
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              Discover our amazing collection of products
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="dark:invert"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    ${product.price}
                  </span>
                  <Link 
                    href={`/products/${product.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to Add Your Own Products?
          </h2>
          <p className="text-xl mb-8">
            Sign in to access our product management dashboard
          </p>
          <Link 
            href="/login" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-300">
              © 2024 ProductStore. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
