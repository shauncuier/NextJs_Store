import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// Mock product data - same as products page
const products = [
  {
    id: "1",
    name: "Premium Headphones",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.",
    fullDescription: "Experience exceptional audio quality with our Premium Headphones. Featuring advanced noise cancellation technology, these wireless headphones deliver crystal-clear sound reproduction across all frequencies. The comfortable over-ear design ensures hours of listening pleasure, while the long-lasting battery provides up to 30 hours of playback time. Perfect for commuting, working, or enjoying your favorite music at home.",
    price: 199.99,
    image: "/next.svg",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Wireless Bluetooth 5.0",
      "Premium audio drivers",
      "Comfortable over-ear design",
      "Quick charge feature"
    ],
    specifications: {
      "Driver Size": "40mm",
      "Frequency Range": "20Hz - 20kHz",
      "Battery Life": "30 hours",
      "Charging Time": "2 hours",
      "Weight": "250g",
      "Connectivity": "Bluetooth 5.0, 3.5mm jack"
    }
  },
  {
    id: "2", 
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health monitoring, GPS tracking, and long-lasting battery life.",
    fullDescription: "Stay connected and healthy with our advanced Smart Watch. This feature-packed wearable device combines style with functionality, offering comprehensive health monitoring, GPS tracking, and seamless smartphone integration. Track your fitness goals, monitor your heart rate, and receive notifications right on your wrist.",
    price: 299.99,
    image: "/vercel.svg",
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water resistant (50m)",
      "Sleep tracking",
      "Smartphone notifications",
      "7-day battery life"
    ],
    specifications: {
      "Display": "1.4 inch AMOLED",
      "Battery Life": "7 days",
      "Water Rating": "5ATM",
      "Connectivity": "Bluetooth, WiFi",
      "Sensors": "Heart rate, GPS, Accelerometer",
      "Compatibility": "iOS, Android"
    }
  },
  {
    id: "3",
    name: "Laptop Stand",
    description: "Ergonomic aluminum laptop stand for better posture and improved workspace organization.",
    fullDescription: "Improve your workspace ergonomics with our premium aluminum laptop stand. Designed to reduce neck strain and improve posture, this adjustable stand elevates your laptop to the perfect viewing angle. The sleek aluminum construction provides excellent heat dissipation while maintaining a professional appearance.",
    price: 49.99,
    image: "/window.svg",
    features: [
      "Adjustable height and angle",
      "Premium aluminum construction",
      "Heat dissipation design",
      "Non-slip rubber pads",
      "Portable and lightweight",
      "Compatible with all laptop sizes"
    ],
    specifications: {
      "Material": "Aluminum alloy",
      "Weight": "1.2kg",
      "Compatibility": "11-17 inch laptops",
      "Adjustment Range": "15-45 degrees",
      "Dimensions": "26 x 23 x 15 cm",
      "Load Capacity": "10kg"
    }
  },
  {
    id: "4",
    name: "Wireless Mouse",
    description: "Precision wireless mouse with ergonomic design and long battery life for productivity.",
    fullDescription: "Enhance your productivity with our precision wireless mouse. Featuring an ergonomic design that fits comfortably in your hand, this mouse offers accurate tracking and responsive performance. The long-lasting battery ensures weeks of use on a single charge.",
    price: 79.99,
    image: "/globe.svg",
    features: [
      "Ergonomic design",
      "Precision optical sensor",
      "6-month battery life",
      "Wireless 2.4GHz connection",
      "Silent click technology",
      "3 adjustable DPI settings"
    ],
    specifications: {
      "Sensor": "Optical",
      "DPI": "800/1200/1600",
      "Battery": "AA x 1",
      "Range": "10 meters",
      "Compatibility": "Windows, Mac, Linux",
      "Dimensions": "12 x 6 x 4 cm"
    }
  },
  {
    id: "5",
    name: "USB-C Hub",
    description: "Multi-port USB-C hub with HDMI, USB 3.0, and power delivery for modern laptops.",
    fullDescription: "Expand your laptop's connectivity with our versatile USB-C hub. Featuring multiple ports including HDMI, USB 3.0, and power delivery, this compact hub transforms your single USB-C port into a complete workstation. Perfect for professionals who need to connect multiple devices.",
    price: 89.99,
    image: "/file.svg",
    features: [
      "4K HDMI output",
      "USB 3.0 ports (x3)",
      "100W power delivery",
      "SD card reader",
      "Ethernet port",
      "Compact aluminum design"
    ],
    specifications: {
      "HDMI": "4K@60Hz",
      "USB Ports": "3 x USB 3.0",
      "Power Delivery": "100W",
      "Ethernet": "Gigabit",
      "Card Reader": "SD/microSD",
      "Material": "Aluminum"
    }
  },
  {
    id: "6",
    name: "Keyboard",
    description: "Mechanical keyboard with RGB backlighting and premium switches for gaming and typing.",
    fullDescription: "Experience superior typing and gaming performance with our mechanical keyboard. Featuring premium mechanical switches, customizable RGB backlighting, and a durable aluminum frame, this keyboard is built for both productivity and gaming excellence.",
    price: 129.99,
    image: "/next.svg",
    features: [
      "Mechanical switches",
      "RGB backlighting",
      "Aluminum frame",
      "Hot-swappable keys",
      "Programmable macros",
      "USB-C connectivity"
    ],
    specifications: {
      "Switch Type": "Mechanical Blue",
      "Layout": "Full size (104 keys)",
      "Backlighting": "RGB",
      "Connection": "USB-C",
      "Key Rollover": "N-Key",
      "Material": "Aluminum + ABS"
    }
  }
]

export default function ProductDetailPage({ params }) {
  const product = products.find(p => p.id === params.id)
  
  if (!product) {
    notFound()
  }

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
                {product.fullDescription}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
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
              {Object.entries(product.specifications).map(([key, value], index) => (
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
