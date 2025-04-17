import React from 'react'

function ProductLayout({children, ProductCard}) {
  return (
    <>
      {children}
      <div>{ProductCard}</div>
    </>
  )
}

export default ProductLayout