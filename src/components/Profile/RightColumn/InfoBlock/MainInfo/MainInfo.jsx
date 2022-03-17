import React from 'react';
import style from './MainInfo.module.css'

const MainInfo = (props) => {
  return (
    <div>
      <div className={style.mainInfo}>
        <p className={style.infoHead}>День рождения:</p>
        <p className={style.infoData}>{props.profileData.birthTime}</p>
        <p className={style.infoHead}>Город:</p>
        <p className={style.infoData}>{props.profileData.city}</p>
        </div>
      <button className={style.moreInfoButton}>Показать больше информации</button>
    </div>
  )
}

export default MainInfo