import React from 'react';
import style from './CountsBlock.module.css'

const CountsBlock = (props) => {
  return (
    <div className={style.countsBlock}>
      <div>
        <div className={style.count}>{props.profileData.friends}</div>
        <div className={style.countName}>Друзей</div>
      </div>
      <div>
        <div className={style.count}>{props.profileData.subscribers}</div>
        <div className={style.countName}>Подписчиков</div>
      </div>
    </div>
  )
}

export default CountsBlock
