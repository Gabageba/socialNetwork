import React from 'react';
import style from './InfoBlock.module.css'
import MainInfo from './MainInfo/MainInfo';
import CountsBlock from './CountsBlock/CountsBlock';

const InfoBlock = (props) => {
  return (
    <div className={style.infoBlock}>
      <h1 className={style.name}>{props.profileData.name}</h1>
      <p className={style.status}>{props.profileData.status}</p>
      <div className={style.line}/>
      <MainInfo profileData={props.profileData}/>
      <div className={style.line}/>
      <CountsBlock profileData={props.profileData}/>
    </div>
  )
}

export default InfoBlock