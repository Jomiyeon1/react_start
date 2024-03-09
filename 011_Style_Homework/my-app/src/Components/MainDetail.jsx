import style from './mainDetail.module.css'
import React, { Fragment } from 'react';

export default function MainDetail({id, title, content, sursummary}) {
  return (
    <>
      <ul>{title}
        <li>{content}</li>
        <li>{sursummary}</li>
      </ul>
    </>
  )
}
