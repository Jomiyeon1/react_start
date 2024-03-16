import { createGlobalStyle, ThemeProvider } from "styled-components";

import Navbar from './Components/Navbar'
import Contents from './Components/Contents'
import MainDetail from './Components/MainDetail';
import { mainDetail } from "./data/mainDetail.js"
import React, { Fragment } from 'react';

// 전역 스타일
const GlobalStyle = createGlobalStyle`

 body {
  background-color: rgb(40, 44, 52);
}
`

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
   <ThemeProvider theme={{}}>
      <GlobalStyle/>
        <Navbar/>

        <Contents/>

        <DetailContents item={mainDetail}/> 
      </ThemeProvider>
    </>
  );
}

export default App;
