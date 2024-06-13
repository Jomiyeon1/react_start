import { useRef } from 'react'
import ProductImage from './ProductImage/ProductImage'
import ProductName from'./ProductName/ProductName'
import ProductPrice from './ProductPrice/ProductPrice'
import './procductCard.css'
export default function ProcudctCard({ productName, price, thumbnailImg }) {
  const likeBtn = useRef();

  function handleLikeClick (e){
    // console.log(e);
    // console.log(e.currentTarget.classList);
    e.currentTarget.classList.toggle('on');
  }
  return (
    <li className='product-item'>
        <div className='product-img'>
          <ProductImage thumbnailImg={thumbnailImg} productName={productName}/>
        </div>
        <div>
          <ProductName productName={productName}/>
          <button ref={likeBtn} onClick={handleLikeClick} className='like-btn'></button>
        </div>
        <div className='product-price'>
          <ProductPrice productPrice= {price}/>
        </div>
    </li>
  )
}
