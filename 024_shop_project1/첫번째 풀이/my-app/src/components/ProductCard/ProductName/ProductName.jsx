import React from 'react'
import './productName.css'
export default function ProductName({ productName }) {
  return (
    <div className='product-name'>
      {productName}
    </div>
  )
}
