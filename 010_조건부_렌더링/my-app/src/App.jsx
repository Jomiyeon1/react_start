//about, product, contact 메뉴 3개를 만들고, 메뉴를 눌렀을때 해당 글이 보여지도록 작성
import { useState } from "react";
import About from "./Components/About";
import Product from "./Components/Product";
import Contact from "./Components/Contact";

function ShowDetail ({menulist}){
  if(menulist === 'about'){
    return <About/>
  }else if(menulist === 'product'){
    return <Product/>
  }else if(menulist === 'contact'){
    return <Contact/>
  }
                        
}

function App() {
  const [menulist, setMenuList] = useState("");
  const handleClickEvent = (e) => {
    setMenuList(e.target.id);
  }

  return (
    <>
      <menu>
        <li
        id='about'
        onClick={handleClickEvent}
        style = { menulist === 'about' ? {color:'blue'} : {color:'black'}}
        >
        about</li>
        <li
        id='product'
        onClick={handleClickEvent}
        style = { menulist === 'product' ? {color:'blue'} : {color:'black'}}
        >
        product</li>
        <li
        id='contact'
        onClick={handleClickEvent}
        style = { menulist === 'contact' ? {color:'blue'} : {color:'black'}}
        >
        contact</li>
      </menu>
      <ShowDetail menulist ={menulist}/>
    </>  
  );
}

export default App;