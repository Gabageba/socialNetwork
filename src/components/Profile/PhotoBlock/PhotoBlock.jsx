import React from 'react';
import style from './PhotoBlock.module.css'

const PhotoBlock = (props) => {
  return (
    <div className={style.photoBlock}>
      <img src={props.state.avatar} alt="Ava"/>
      <button className={style.editButton}>Редактировать</button>
    </div>
  )
}

export default PhotoBlock