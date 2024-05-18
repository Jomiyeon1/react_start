import React from 'react'
import './productImage.css'

export default function ProductImage({ thumbnailImg, productName}) {
    const imgurl = 'http://test.api.weniv.co.kr/' + thumbnailImg;
  return (
      <img className='product-img' scr={imgurl} alt={productName}/>
  )
}
