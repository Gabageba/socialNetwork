import React from 'react';
import style from './RightProfileColumn.module.css'
import InfoBlock from './InfoBlock/InfoBlock';
import PostBlock from './PostBlock/PostBlock';

const RightProfileColumn = (props) => {
  return (
    <div className={style.rightColumn}>
      <InfoBlock profileData={props.profilePage.profileData}/>
      <PostBlock postData={props.profilePage.postData}/>
    </div>
  )
}

export default RightProfileColumn