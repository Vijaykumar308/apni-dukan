import Image from 'next/image'
import React from 'react'
import { Star, ShoppingCart } from 'lucide-react';

const getProject = async () => {
  const response = await fetch('https://api.escuelajs.co/api/v1/products');
  const data = await response.json();
  return data;
}

async function productCard() {
  const data = await getProject();
  console.log(data);

  return (

    data.map((item, index) => (

      <div key={index} className='card flex flex-col max-w-[16%]'>
        <div className='card_image flex justify-center items-center'>
          <Image className='w-1/3' src={item?.images.pop()} alt='addfds' width={200} height={200} />
        </div>

        <div className='px-3'>
          <div className='py-3 text-md text-gray-600 font-semibold'>
            <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
          </div>

          <div className='flex justify-between items-center pt-3'>
            <p className='price'><span className='text-2xl text-[#6477f2] font-bold mr-2 text-shadow-amber-950'>$109.95</span><span className='text-sm line-through'>219.99</span></p>
            <span className='bg-green-400 text-green-800 text-sm px-2 text-white'>-50%</span>
          </div>

          <p className='text-xs text-gray-500 py-1'>Eligible for free shipping</p>
          <div className='rating py-3'>
            <div className='flex'>
              <p className='flex space-x-1 items-center'>
                {Array(4).fill().map((_, index) => <Star key={index} fill='orange' stroke='orange' size={15} />)} <span className='text-sm ml-3'>4</span>
              </p>
            </div>
          </div>

          <button className='bg-orange-600 py-2 px-2 rounded-sm text-sm text-white w-full flex justify-center cursor-pointer'> <span className='mr-3'> <ShoppingCart /></span> Add to Cart</button>
        </div>
      </div>

    ))
  )

}

export default productCard