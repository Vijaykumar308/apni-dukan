'use client';
import React, { useState } from 'react'
import SearchInput from '../../../public/components/searchbar/SearchInput'
import ProductCard from "./@ProductCard/page";

function Products() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='mt-10 mx-10'> 
      <SearchInput setSearchTerm={setSearchTerm}/> 
      <ProductCard searchTerm={searchTerm} />
    </div>
  )
}

export default Products