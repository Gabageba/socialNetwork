import React from 'react';
import style from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={style.dialogsItem}>
      <img className={style.avatar} src={props.avatar} alt={props.id}/>
      <NavLink className={style.name} to={'/messages/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem