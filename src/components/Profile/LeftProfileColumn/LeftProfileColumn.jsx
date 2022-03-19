import React from 'react';
import style from './LeftProfileColumn.module.css'
import PhotoBlock from './PhotoBlock/PhotoBlock';
import FriendsBlock from './FriendsBlock/FriendsBlock';

const LeftProfileColumn = (props) => {
  return (
      <div className={style.leftColumn}>
        <PhotoBlock profileData={props.profilePage.profileData}/>
        <FriendsBlock friendsData={props.profilePage.friendsData}/>
      </div>
    )
}

export default LeftProfileColumn