import React from 'react';
import style from './MainInfo.module.css'

const MainInfo = (props) => {
  return (
    <div className={style.mainInfo}>
      <p>Дата рождения:</p>
      <p>{props.state.birthTime}</p>
      <p>Город</p>
      <p>{props.state.city}</p>
    </div>
  )
}

export default MainInfo