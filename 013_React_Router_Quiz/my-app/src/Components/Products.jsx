import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

// /products/:id
// ex) /products/1 , /products/2, /products/3, /products/4

// ProductPage에 한번에 만들어도 될듯
// - Product Detail Page : /products/:id
//     - ex) /products/1 , /products/2, /products/3, /products/4
// - Product Detail Notice Page : /products/:id/notice
//     - ex) /products/1/notice , /products/2/notice…

export default function Products() {
  return (
    <BrowserRouter>
      <br/>
      <Link to="/products/1">ProductsDetail </Link>
      <Link to="/products/1/notice">ProductsNotice </Link> 
      <Routes>
          <Route path="/products/:id" element={<ProductsDetail/>}/>
          <Route path="/products/:id/notice" element={<ProductsNotice/>}/>
      </Routes>
    </BrowserRouter>
  )
}


function ProductsDetail(){
  const location = useLocation();  
  return(
    <>
    <h1>MiYeon Hompage</h1>
    <h2>ProductDetail location : {location.pathname}</h2>
    </>
  )
}

function ProductsNotice(){
  const location = useLocation();

  return(
    <>
    <h1>MiYeon Hompage</h1>
    <h2>ProductNotice location : {location.pathname}</h2>
    </>
  )
}