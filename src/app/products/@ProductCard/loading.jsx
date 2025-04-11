import { Divide } from 'lucide-react'
import React from 'react';
import "../@ProductCard/loadingCss.css";

function ProductLoading() {
  return (
    <div className='h-[calc(100vh-40px)] flex justify-center items-center'>
      <div class="boxes">
        <div class="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default ProductLoading