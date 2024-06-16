import {useState, useEffect} from 'react'
import {product} from '../../data/product'
import './homepage.css'
import ProductCard from '../../components/ProductCard/procudctCard'


export default function Homepage() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const[item, setItem] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try{
        const res = await fetch('https://test.api.weniv.co.kr/mall');
        const result = await res.json();
        setItem(result);
        setIsLoaded(true);
      }catch (error){
        setError(error);
      }
    }
    getProduct();
  }, [])

  if(error){
    return <div>ERROR!! {error.message}</div>
  }else if(!isLoaded){
      return <div> 로딩 중 </div>
  }else{
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
 
}
