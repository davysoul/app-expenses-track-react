import React from 'react'
import s from './style.module.css';
const Logo = ({title,subtitle}) => {
  return (
    <div>
       <div className={s.container}>
        <h1 className={s.title}>{title}</h1>
      </div>
      <h2 className={s.subtitle}>{subtitle}</h2>
    </div>
  )
}

export default Logo