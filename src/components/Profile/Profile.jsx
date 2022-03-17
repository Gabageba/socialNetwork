import React from 'react';
import style from './Profile.module.css'
import LeftColumn from './LeftColumn/LeftColumn';
import RightColumn from './RightColumn/RightColumn';


const Profile = (props) => {
  return (
    <div className={style.profile}>
      <LeftColumn profilePage={props.profilePage}/>
      <RightColumn profilePage={props.profilePage}
                   dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile