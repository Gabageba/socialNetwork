import React from 'react';
import style from './NewMessage.module.css'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../../../redux/messagesReducer';

const NewMessage = (props) => {

  let onAddMessageClick = () => {
    props.sendMessage()
  }

  let onMessageChange = (event) => {
    let body = event.target.value
    props.updateNewMessageText(body)
  }

  return (
    <div className={style.newMessage}>
      <input className={style.messageText}
             type="text"
             placeholder='Напишите сообщение...'
             onChange={onMessageChange}
             value={props.newMessageText}/>
      <button onClick={onAddMessageClick}
              className={style.sendButton}>▶</button>
    </div>
  )
}

export default NewMessage