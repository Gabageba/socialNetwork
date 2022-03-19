import React from 'react';
import style from './FriendsBlock.module.css'



const FriendsBlock = (props) => {

  let friend = props.friendsData.map(p => (
    <div className={style.friendCard}>
      <img src={p.avatar} alt={p.id}/>
      <div className={style.name}>{p.name}</div>
    </div>
  ))

  return (
    <div className={style.friendsBlock}>
      <div className={style.header}>Друзья:</div>
      <div className={style.friendsList}>
        {friend}
      </div>
    </div>
  )
}

export default FriendsBlock