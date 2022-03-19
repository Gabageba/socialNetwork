import React from 'react';
import style from './DialogSearch.module.css'

const DialogSearch = () => {
  return (
    <div className={style.dialogSearch}>
      <span className={style.searchIcon}>🔎</span>
      <input className={style.searchBar} type="text" placeholder='Поиск'/>
    </div>
  )
}

export default DialogSearch