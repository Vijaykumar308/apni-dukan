import React from 'react'
import Header from '../../public/components/header/Header'
import homepageImage from "../../public/assets/homepageImage.png";
import Image from 'next/image';

function Index() {
  return (
    <div>
      <Header />
      <div className='w-full h-max bg-amber-800'>
        {/* <p>dsfs</p> */}
        <Image className='w-full' src={homepageImage} alt='image' />
      </div>
    </div>
  )
}

export default Index