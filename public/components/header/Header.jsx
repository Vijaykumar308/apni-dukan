'use client';

import Link from 'next/link'
import React from 'react'
import "./header.css";
import { ShoppingBag, ShoppingCart } from "lucide-react"
import {usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b fixed bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-10">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-6 w-6 text-green-500" />
          <span className="text-lg font-bold">Apni Dukhan</span>

          <nav className="ml-5 hidden md:block">
            <ul className="flex space-x-8">
              <li className="relative">
                <Link href="/" className={` ${pathname === '/' ? 'active' : ''} text-sm font-medium`}>
                  Home
                </Link>
                <div className="active"></div>
              </li>
              <li>
                <Link href="/products" className={` ${pathname === '/products' ? 'active' : ''} text-sm font-medium text-gray-600 hover:text-orange-600`}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/orders" className={`  ${pathname === '/orders' ? 'active' : ''} text-sm font-medium text-gray-600 hover:text-orange-600`}>
                  Orders
                </Link>
              </li>
            </ul>
          </nav>
        </div>


        {/* <div className="flex items-center gap-3">
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
            href="/login"
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
        </div> */}

        <div className=''>
          <p className='cursor-pointer relative'>{<ShoppingCart />} 
          {
            <span className='absolute -top-[13px] left-[18px] bg-[#f54900] text-white rounded-full w-[22px] h-[22px] flex justify-center items-center text-[13px]'>0</span>
          }
          </p>
        </div>
      </div>
    </header>
  )
}


export default Header