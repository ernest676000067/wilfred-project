'use client';
import { Truck, Shield, RefreshCw } from 'lucide-react';

export default function HeaderComponent() {
  return (
    <header className="relative  overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
            Season Sale
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#A1D99B] mb-4">
            MEN'S FASHION
          </h1>
          <p className="text-xl text-gray-700 mb-8">Min.35-70% Off</p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#A1D99B] text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors cursor-pointer">
              SHOP NOW
            </button>
            <button className="border-2 border-black px-6 py-3 rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
              READ MORE
            </button>
          </div>
        </div>

        {/* Image Placeholder - Replace with your actual image */}
        <div className="md:w-1/2 flex justify-center">
          <div>
            <img
              src="/blog-1.jpg" 
              alt="mobutu"
            />
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free Shipping */}
          <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="bg-blue-100 p-3 rounded-full  cursor-pointer">
              <Truck className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Free Shipping</h3>
              <p className="text-sm text-gray-600">On all orders over $50</p>
            </div>
          </div>

          {/* Secure Payment */}
          <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="bg-green-100 p-3 rounded-full cursor-pointer">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Secure Payment</h3>
              <p className="text-sm text-gray-600">100% protected payments</p>
            </div>
          </div>

          {/* Money Back */}
          <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="bg-purple-100 p-3 rounded-full cursor-pointer">
              <RefreshCw className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">100% Money Back</h3>
              <p className="text-sm text-gray-600">Easy return policy</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}