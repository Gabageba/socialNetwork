import React from 'react';
import style from './NewMessage.module.css'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../../../redux/messagesReducer';

const NewMessage = (props) => {

  let addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }

  let onMessageChange = (event) => {
    let text = event.target.value
    props.dispatch(updateNewMessageTextActionCreator(text))
  }

  return (
    <div className={style.newMessage}>
      <input className={style.messageText}
             type="text"
             placeholder='Напишите сообщение...'
             onChange={onMessageChange}
             value={props.newMessageText}/>
      <button onClick={addMessage}
              className={style.sendButton}>▶</button>
    </div>
  )
}

export default NewMessage