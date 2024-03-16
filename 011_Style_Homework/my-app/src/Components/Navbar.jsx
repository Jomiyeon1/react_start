import styled from 'styled-components';
import React, { Fragment } from 'react';

import logo from '../../src/img/logo.svg';
import search from '../../src/img/search.svg';
import translate from '../../src/img/translate.svg';

// main Style
const NavStyle = styled.div`
    background-color: rgb(32, 35, 42);
    vertical-align: middle;
    color: aqua;
    height: 50px;
    font-weight: bolder;
    font-size: 2rem;
`
//ReactLogo Style
const LogoStyle = styled.img`
  height: 32px;
  vertical-align: middle;
`

const MenuStyle = styled.h2`
    text-align: center;
    font-size: 20px;
    color: white;
    font-weight: lighter;
    height: 32px;
    display: inline;
    margin-left: 7.5rem;
`
//SubText style
const SubText = styled.h4`
    color: white;
    display: inline;
    /* margin-left: 5rem; */
    font-size: .8rem;
`
const SearchTextStyle = styled.input`
    background-color:rgb(32, 35, 42); 
    /* margin-left: 7rem; */
`
const SearchImgStyle = styled.img`
  margin-left: 5rem;
`
const TranslateStyle = styled.img`
  margin-left: 5rem;
`
export default function navbar() {
  return (
    <>
      <NavStyle>
        <LogoStyle src={logo}/>
        React
        <MenuStyle> 문서 자습서 블로그 커뮤니티 </MenuStyle>
        <SearchImgStyle src={search}/>
        <SearchTextStyle type='text' placeholder='검색'/>
        <SubText>v17.0.2</SubText>
        <TranslateStyle src={translate}/> <SubText>Languasges</SubText>
      </NavStyle>
    </>
  )
}
