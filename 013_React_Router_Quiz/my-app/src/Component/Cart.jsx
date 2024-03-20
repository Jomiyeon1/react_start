import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//  /cart
export default function Cart() {
  return (
    <BrowserRouter>
      <br/>
      <Link to="/cart">Cart Page</Link>
      <Routes>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

function CartPage(){
  return(
    <>
      <h1>MiYeon Homepage</h1>
      <h2>CartPage</h2>
      <h2>장바구니</h2>
    </> 
  )
}
