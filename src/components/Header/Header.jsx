import React from 'react';
import style from './Header.module.css'
import logo from './../../img/logo.png'

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt="Gabageba"/>
    </header>
  )
}

export default Header