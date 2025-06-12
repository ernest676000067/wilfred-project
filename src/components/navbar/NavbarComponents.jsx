'use client';

import Link from 'next/link';
import {
  ChevronDown,
  ShoppingCart,
  Search,
  User,
  Globe,
  Heart,
} from 'lucide-react';
import { ModeToggle } from './../toggle/ModeToggle';
import { useAppContext } from '../context/AppContext';
import { useRouter } from 'next/navigation';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';

export default function Navbar() {
  const { favoritesCount, searchQuery, setSearchQuery } = useAppContext();
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-50 dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3 border-b dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-2xl font-bold text-[#C7E9C0] dark:text-[#A1D99B]"
            >
              PressMart.
            </Link>

            <nav className="hidden md:flex space-x-6">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium flex items-center"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium flex items-center"
              >
                Shop <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href="/pages"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium flex items-center"
              >
                Pages <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium flex items-center"
              >
                Blog
              </Link>
              <Link
                href="/elements"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium flex items-center"
              >
                Elements <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium flex items-center"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer">
              <Globe className="h-5 w-5 mr-1" />
              <span>English</span>
            </button>
            <span className="hidden md:block text-gray-500 dark:text-gray-400">|</span>
            <span className="text-gray-700 dark:text-gray-300">$ USD</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between py-4">
          <button className="md:hidden text-gray-700 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <form
            onSubmit={handleSearch}
            className="relative flex-1 max-w-xl mx-4"
          >
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-4 pr-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </button>
          </form>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white relative cursor-pointer">
              <User className="h-6 w-6" />
            </button>
            <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white relative cursor-pointer">
              <Heart className="h-6 w-6" />
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>
            <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white relative cursor-pointer">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
            <ModeToggle />
            <button className="hidden md:block bg-black dark:bg-[#A1D99B] text-white px-4 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-[#C7E9C0] transition-colors cursor-pointer">
              Buy
            </button>

            {/* Clerk Buttons */}
            <SignedOut>
              <SignInButton>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}
