import React from 'react'
import {product} from '../../data/product'
import './homepage.css'
import ProductCard from '../../components/ProductCard/procudctCard'


export default function Homepage() {
  return (
    <>
        <div className='navbar'>reactShop</div>
        <main className='product'>
            <ul className="product-list">
                {product.map(item => 
                    <ProductCard
                        key={item.id}
                        productName={item.productName}
                        price={item.price}
                        thumbnailImg={item.thumbnailImg}
                    />
                    )}
            </ul>
        </main>
    </>
  )
}
