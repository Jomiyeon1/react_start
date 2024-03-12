import styled from 'styled-components';
import React, { Fragment } from 'react';

// Main Style
const BackColor = styled.body`
    background-color: white;
    display: block;
    width: 32%;
    height: 380px;
    float: right; 
`

export default function MainDetail({content}) {
  return (
    <>
      <BackColor>
        <h2>{content.title}</h2>
        <h3>{content.content}</h3>
        <h3>{content.summary}</h3>      
      </BackColor>
    </>
  )
}
