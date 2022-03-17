import React from 'react';
import style from './RightColumn.module.css'
import InfoBlock from './InfoBlock/InfoBlock';
import PostBlock from './PostBlock/PostBlock';

const RightColumn = (props) => {
  return (
    <div className={style.rightColumn}>
      <InfoBlock profileData={props.profilePage.profileData}/>
      <PostBlock profilePage={props.profilePage}
                 dispatch={props.dispatch}/>
    </div>
  )
}

export default RightColumn