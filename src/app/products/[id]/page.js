import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProductById } from '@/lib/db'

export default async function ProductDetailPage({ params }) {
  const product = await getProductById(params.id)
  
  if (!product) {
    notFound()
  }

  // Default features and specifications if not in database
  const defaultFeatures = [
    "High quality construction",
    "Excellent performance", 
    "User-friendly design",
    "Reliable warranty",
    "Expert customer support"
  ]

  const defaultSpecs = {
    "Brand": "ProductStore",
    "Warranty": "1 Year",
    "Support": "24/7 Customer Service",
    "Quality": "Premium Grade"
  }

  const features = product.features || defaultFeatures
  const specifications = product.specifications || defaultSpecs
  const fullDescription = product.fullDescription || product.description

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

      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/products" className="text-blue-600 hover:text-blue-800">Products</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-500">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="dark:invert"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-blue-600 mb-6">
                ${product.price}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {fullDescription}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Features
              </h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
                Add to Cart
              </button>
              <Link 
                href="/products"
                className="border border-gray-300 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium text-center"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Specifications
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {Object.entries(specifications).map(([key, value], index) => (
                <div 
                  key={key} 
                  className={`p-4 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
                >
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900 dark:text-white">{key}:</span>
                    <span className="text-gray-600 dark:text-gray-300">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
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
