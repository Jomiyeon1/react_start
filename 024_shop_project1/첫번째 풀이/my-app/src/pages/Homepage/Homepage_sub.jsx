import {useState, useEffect, useContext} from 'react'
import {product} from '../../data/product'
import './homepage.css'
import ProductCard from '../../components/ProductCard/procudctCard'


export default function Homepage() {

const [loadData, setLoadData] = useState(null);

  useEffect(() => {
    console.log('로딩중');
  },[])

  useEffect(() => {
    if(loadData == null){
      return;
    }else{
      console.log('로딩완료 ~.~');
      console.log(loadData);
    }
  },[loadData])

  useContext(product).then(d => {
    console.log('데이터 세팅');
    console.log(d);
    setLoadData(d);
  })


    return (
      <>
          <div className='navbar'>reactShop</div>
          <main className='product'>
              <ul className="product-list">
                {loadData !== null ? 
                  loadData.map(item => 
                      <ProductCard
                          key={item.id}
                          productName={item.productName}
                          price={item.price}
                          thumbnailImg={item.thumbnailImg}
                      />
                      ) : <h2> 로딩 중 입니다.</h2>
                    }
              </ul>
          </main>
      </>
    )
 
}
