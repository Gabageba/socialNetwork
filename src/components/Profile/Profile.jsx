import React from 'react';
import style from './Profile.module.css'
import LeftProfileColumn from './LeftProfileColumn/LeftProfileColumn';
import RightProfileColumn from './RightProfileColumn/RightProfileColumn';


const Profile = (props) => {
  return (
    <div className={style.profile}>
      <LeftProfileColumn profilePage={props.profilePage}/>
      <RightProfileColumn profilePage={props.profilePage}
                          dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile