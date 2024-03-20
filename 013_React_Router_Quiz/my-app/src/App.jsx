import { Fragment } from 'react';

import Home from "./Component/Home";
import User from "./Component/User";
import Products from './Component/Products';
import Cart from './Component/Cart';

function App() {
  return (
    <>
      <Home/>
      <User/>
      <Cart/>
      <Products/>
    </>
  );
}

export default App;