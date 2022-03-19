import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
  return (
    <div className={style.post}>
      <div className={style.profile}>
        <img className={style.avatar} src={props.avatar} alt="Ava"/>
        <span className={style.name}>{props.name}</span>
      </div>
      <div className={style.message}>{props.message}</div>
      <div className={style.likes}>
        <span className={style.heart}>🤍</span>
        <span className={style.counter}>{props.likeCounter}</span>
      </div>
    </div>
  )
}

export default Post