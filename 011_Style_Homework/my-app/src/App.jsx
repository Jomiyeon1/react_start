import './app.css';
import Navbar from './Components/Navbar'
import Contents from './Components/Contents'
import MainDetail from './Components/MainDetail';
import { mainDetail } from "./data/mainDetail.js"
import React, { Fragment } from 'react';

function DetailContents({item}){
  const result = [];
  item.forEach(item => {
    result.push(<MainDetail content={item} key={item.id} />)
  });
  return(
    <>
      {result}
    </>
  )
}

function App() {
  return (
    <>
    <Navbar/>
    <Contents/>
     <DetailContents item={mainDetail}/> 
    </>
  );
}

export default App;
