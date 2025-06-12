'use client';
import { ArrowRight } from 'lucide-react';

export default function FooterComponent() {
  return (
    <footer className="bg-primary py-12">
      <div className="container  mx-auto px-4">
        {/* Weekend Sale Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Fashion Style */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Weekend Sale</h3>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Fashion Style</h4>
            <p className="text-red-500 font-semibold mb-6">Flat 70% Off</p>
            <a href="#" className="inline-flex items-center text-gray-800 font-medium hover:text-red-500 transition-colors">
              Shop Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Men's Fashion */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Weekend Sale</h3>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Men's Fashion</h4>
            <p className="text-red-500 font-semibold mb-6">Min.35-70% Off</p>
            <a href="#" className="inline-flex items-center text-gray-800 font-medium hover:text-red-500 transition-colors">
              Shop Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Women's Wear */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Weekend Sale</h3>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Women's Wear</h4>
            <p className="text-red-500 font-semibold mb-6">Min.35-70% Off</p>
            <a href="#" className="inline-flex items-center text-gray-800 font-medium hover:text-red-500 transition-colors">
              Shop Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Featured Categories Title */}
        <h3 className="text-2xl font-bold text-center mb-8 text-[#C7E9C0]">Featured Categories</h3>

        {/* Footer Links */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">© {new Date().getFullYear()} PressMart. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Terms</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}