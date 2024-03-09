import style from './mainDetail.module.css'
import React, { Fragment } from 'react';

export default function MainDetail({content}) {
  return (
    <>
      <h2>{content.title}</h2>
        <h3>{content.content}</h3>
        <h3>{content.summary}</h3>      
    </>
  )
}
