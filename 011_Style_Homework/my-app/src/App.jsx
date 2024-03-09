import './app.css';
import Navbar from './Components/Navbar'
import Contents from './Components/Contents'
import Contents from './Components/MainDetail'
import { data } from "./data/data.js"
import React, { Fragment } from 'react';
import MainDetail from './Components/MainDetail';

function App() {
  return (
    <>
    <Navbar/>
    <Contents/>
    </>
  );
}

export default App;
