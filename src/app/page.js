import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 199.99,
      image: "/next.svg",
      description: "High-quality wireless headphones with noise cancellation"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 299.99,
      image: "/vercel.svg",
      description: "Feature-rich smartwatch with health monitoring"
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: 49.99,
      image: "/window.svg",
      description: "Ergonomic aluminum laptop stand for better posture"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                ProductStore
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/products" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Products
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Amazing Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Find the perfect products for your needs. Browse our curated collection of high-quality items.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Shop Now
              </Link>
              <Link 
                href="/login" 
                className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Check out our most popular items
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6 flex flex-col items-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="mb-4 dark:invert"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-2xl font-bold text-blue-600">
                      ${product.price}
                    </span>
                    <Link 
                      href={`/products/${product.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">ProductStore</h3>
              <p className="text-gray-300 mb-4">
                Your one-stop destination for amazing products. We curate the best items to help you find exactly what you need.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="text-gray-300 hover:text-white transition-colors">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-300">
                Email: support@productstore.com<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 ProductStore. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
