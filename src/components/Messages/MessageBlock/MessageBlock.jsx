import React from 'react';
import style from './MessageBlock.module.css'
import MessageItem from './MessageItem/MessageItem';
import NewMessage from './NewMessage/NewMessage';

const MessageBlock = (props) => {

  let messagesElements = props.messagesPage.messagesData.map((m) => (
    <MessageItem message={m.message}/>
  ))

  return (
    <div>
      <div className={style.messageItem}>
        {messagesElements}
      </div>
      <NewMessage newMessageText={props.messagesPage.newMessageText} dispatch={props.dispatch}/>
    </div>
  )
}

export default MessageBlock