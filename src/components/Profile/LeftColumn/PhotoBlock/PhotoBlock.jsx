import React from 'react';
import style from './PhotoBlock.module.css'

const PhotoBlock = (props) => {
  return (
    <div className={style.photoBlock}>
      <img src={props.profileData.avatar} alt="Ava"/>
      <button className={style.editButton}>Редактировать</button>
    </div>
  )
}

export default PhotoBlock