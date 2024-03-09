import './app.css';
import Navbar from './Components/Navbar'
import Contents from './Components/Contents'
import MainDetail from './Components/MainDetail';
import { data } from "./data/mainDetail.js"
import React, { Fragment } from 'react';

function App() {
  return (
    <>
    <Navbar/>
    <Contents/>
    </>
  );
}

export default App;
