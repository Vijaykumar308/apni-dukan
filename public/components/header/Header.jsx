import Link from 'next/link'
import React from 'react'
import logo from "../../assets/logo.png";
import Image from 'next/image';
import "./header.css";

function Header() {
  return (
    <div className='container flex items-center justify-between px-10'>
        <div className='logo flex items-center space-x-6'>
            <Link href="#"> <Image className='remove-bg' src={logo} alt="logo" /> </Link>
            <ul className='flex space-x-8'>
                <li><Link href="#" className='text-sm hover:border-b-orange-400'>Home </Link></li>
                <li><Link href="#" className='text-sm' >Products </Link></li>
                <li><Link href="#" className='text-sm' >Orders </Link></li>
            </ul>
        </div>
        <div className='registra-buttons space-x-12'>
          
            <button> Sign Up</button>
            <button> Sign In</button>
        </div>
    </div>
  )
}

export default Header