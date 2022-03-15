import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

const SelectedLink = () => {
  return (
    select => select.isActive ? style.activeLink : style.item
  )
}

const Navbar = () => {
  return (
    <div>
      <nav className={style.nav}>
        <div className={style.navButton}>
          <NavLink to="/profile" className={SelectedLink()}>Профиль</NavLink>
        </div>
        <div className={style.navButton}>
          <NavLink to="/messages/" className={SelectedLink()}>Сообщения</NavLink>
        </div>
        <div className={style.navButton}>
          <NavLink to="/news" className={SelectedLink()}>Новости</NavLink>
        </div>
        <div className={style.navButton}>
          <NavLink to="/music" className={SelectedLink()}>Музыка</NavLink>
        </div>
        <div className={style.navButton}>
          <NavLink to="/settings" className={SelectedLink()}>Настройки</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar