'use client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Star, ShoppingCart } from 'lucide-react';


function productCard() {
  const [products, setProducts] = useState([]);
  
  const getProject = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    // const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    console.log(data);
    return data;
  }

  useEffect(() => {

    const fetchData = async () => {
      const data = await getProject();
      setProducts(data); // This now runs *after* data is fetched
    };

    fetchData(); 
  }, [])

  const handlerAddToCart = () => {
    console.log('clicked..');
  }

  return (
    <div className='mt-20 mx-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
      {
        products?.map((item, index) => (
          <div key={index} className='card flex flex-col pb-5 rounded-md' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
            <div className='card_image flex justify-center items-center'>
              <Image src={item?.images[0]} alt='addfds' width={200} height={200} />
            </div>

            <div className='px-3'>
              <div className='py-3 text-md text-gray-600 font-semibold'>
                <p>{item?.title}</p>
                <p className='mt-4 font-light text-gray-600'>{item?.description?.length > 100
                  ? `${item.description.slice(0, 100)}...`
                  : item?.description}</p>
              </div>


              <div className='flex justify-between items-center pt-3'>
                <p className='price'><span className='text-2xl text-[#6477f2] font-bold mr-2 text-shadow-amber-950'>${item?.price}</span><span className='text-sm line-through'>219.99</span></p>
                <span className='bg-green-400 text-green-800 text-sm px-2 text-white'>-50%</span>
              </div>

              <p className='text-xs text-gray-500 py-1'>Eligible for free shipping</p>
              <div className='rating py-3'>
                <div className='flex'>
                  <p className='flex space-x-1 items-center'>
                    {Array(item?.rating | 4).fill().map((_, index) => <Star key={index} fill='orange' stroke='orange' size={15} />)} <span className='text-sm ml-3'>{item?.rating || 4}</span>
                  </p>
                </div>
              </div>

              <button className='bg-orange-600 py-2 px-2 rounded-sm text-sm text-white w-full flex justify-center cursor-pointer'> <span className='mr-3' onClick={() => handlerAddToCart()}> <ShoppingCart /></span> Add to Cart</button>
            </div>
          </div>
        ))
      }
    </div>
  )

}

export default productCard