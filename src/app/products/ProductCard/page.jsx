import Image from 'next/image'
import React from 'react'
import { Star } from 'lucide-react';

function productCard() {
  return (
    <div className='card flex flex-col'>
        <div className='card_image'>
          <Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt='addfds' width={200} height={200} />
        </div>

        <div>
          <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
        </div>
        
        <div className='flex'>
          <p className='price'>$109.95 <span>219.99</span></p>
          <span className='bg-green-400'>-50%</span>
        </div>
        <div><p>Eligible for free shipping</p></div>
        <div className='rating'> <p className='flex'>
           {Array(4).fill().map((_, index) => <Star key={index} />)} 4
           </p> </div>
    </div>
  )
}

export default productCard