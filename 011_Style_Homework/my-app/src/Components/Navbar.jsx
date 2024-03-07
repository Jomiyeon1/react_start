import style from './navbar.module.css'
import logo from '../../src/logo.svg';
import React, { Fragment } from 'react';

export default function navbar() {
  return (
    <>
      <div className={style.black_navbar}>
        <img className={style.logo} src={logo}/>
        React
        <h2 className={style.nav_center}> 문서 자습서 블로그 커뮤니티 </h2>
        <input className={style.nav_search} type='text' placeholder='검색'/>
        <h4 className={style.nav_version}>v17.0.2</h4>
      </div> 
    </>
  )
}
