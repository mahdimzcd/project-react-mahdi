import React from 'react'
import { Outlet } from 'react-router-dom'

const ProductsLayout = () => {

  return (
    <div>        
        <h1 style={{fontSize:"35px"}}>  لیست محصولات  </h1>
        <Outlet/>
    </div>
  )
  
}

export default ProductsLayout