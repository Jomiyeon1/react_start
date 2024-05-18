import React from 'react'
import ProductImage from './ProductImage/ProductImage'
import ProductName from'./ProductName/ProductName'
import ProductPrice from './ProductPrice/ProductPrice'
import './procductCard.css'
export default function procudctCard({ productName, price, thumbnailImg }) {
  return (
    <li className='product-item'>
        <div className='product-img'>
          <ProductImage thumbnailImg={thumbnailImg} productName={productName}/>
        </div>
        <div>
          <ProductName productName={productName}/>
          <button className='like-btn'></button>
        </div>
        <div className='product-price'>
          <ProductPrice productPrice= {price}/>
        </div>
    </li>
  )
}
