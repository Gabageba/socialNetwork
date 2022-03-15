import React from 'react';
import style from './InfoBlock.module.css'
import MainInfo from './MainInfo/MainInfo';

const InfoBlock = (props) => {
  return (
    <div className={style.infoBlock}>
      <h1 className={style.name}>{props.state.name}</h1>
      <p className={style.status}>{props.state.status}</p>
      <div className={style.line}/>
      <MainInfo state={props.state}/>
    </div>
  )
}

export default InfoBlock