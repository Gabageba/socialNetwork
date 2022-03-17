import React from 'react';
import style from './LeftColumn.module.css'
import PhotoBlock from './PhotoBlock/PhotoBlock';
import FriendsBlock from './FriendsBlock/FriendsBlock';

const LeftColumn = (props) => {
  return (
      <div className={style.leftColumn}>
        <PhotoBlock profileData={props.profilePage.profileData}/>
        <FriendsBlock friendsData={props.profilePage.friendsData}/>
      </div>
    )
}

export default LeftColumn