import React from 'react';
import style from './Profile.module.css'
import PhotoBlock from './PhotoBlock/PhotoBlock';
import InfoBlock from './InfoBlock/InfoBlock';

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <PhotoBlock state={props.state.profileData}/>
      <InfoBlock state={props.state.profileData}/>
    </div>
  )
}

export default Profile