import Link from 'next/link'
import React from 'react'
import logo from "../../assets/logo.png";
import Image from 'next/image';
import "./header.css";
import { ShoppingBag } from "lucide-react"

function Header() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-6 w-6 text-green-500" />
          <span className="text-lg font-bold">Apni Dukhan</span>

          <nav className="ml-5 hidden md:block">
            <ul className="flex space-x-8">
              <li className="relative">
                <Link href="/" className="text-sm font-medium text-orange-600">
                  Home
                </Link>
                <div className="absolute bottom-[-17px] left-0 h-[2px] w-full bg-orange-600"></div>
              </li>
              <li>
                <Link href="/products" className="text-sm font-medium text-gray-600 hover:text-orange-600">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/orders" className="text-sm font-medium text-gray-600 hover:text-orange-600">
                  Orders
                </Link>
              </li>
            </ul>
          </nav>
        </div>


        <div className="flex items-center gap-3">
          <Link
            href="/signup"
            className="rounded-full border border-orange-500 px-4 py-1.5 text-sm font-medium text-orange-500 hover:bg-orange-50"
          >
            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" x2="19" y1="8" y2="14" />
                <line x1="22" x2="16" y1="11" y2="11" />
              </svg>
              Sign Up
            </span>
          </Link>
          <Link
            href="/signin"
            className="rounded-full bg-orange-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-orange-700"
          >
            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" x2="3" y1="12" y2="12" />
              </svg>
              Sign In
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}


export default Header