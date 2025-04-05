import React from 'react'
import Header from '../../public/components/header/Header'
import homepageImage from "../../public/assets/homepageImage.png";
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Linkedin, ShoppingBag, Twitter, TwitterIcon, Youtube } from 'lucide-react';

function Index() {
  return (
    <div>
        <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src={homepageImage}
            alt="Modern clothing store interior"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative flex h-full flex-col items-start justify-center px-6 pt-16 md:px-12 lg:px-24">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">Shop Smarter, Live Better</h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">
            Discover the perfect blend of style, quality, and convenience for your everyday needs.
          </p>
          <Link
            href="/products"
            className="mt-8 rounded-md bg-orange-600 px-6 py-3 font-medium text-white hover:bg-orange-700"
          >
            Start Shopping
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        {/* Newsletter */}
        <div className="border-b border-gray-800 py-10">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-lg font-medium">Subscribe to our newsletter</h3>
            <div className="mx-auto mt-4 flex max-w-md flex-col items-center justify-center gap-2 sm:flex-row">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Input your email"
                  className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                />
              </div>
              <button className="whitespace-nowrap rounded-md bg-orange-600 px-4 py-2 font-medium text-white hover:bg-orange-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-orange-500" />
              <span className="text-xl font-bold">ModernShop</span>
            </div>

            <nav>
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-white">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-sm text-gray-400 md:flex-row">
            <div className="flex items-center gap-1">
              <span>© 2024 ModernShop, Inc.</span>
              <span>•</span>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
              <span>•</span>
              <Link href="/settings" className="hover:text-white">
                Settings
              </Link>
            </div>

            <div className="flex gap-4">
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://facebook.com" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index