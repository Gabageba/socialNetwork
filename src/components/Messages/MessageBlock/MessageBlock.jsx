import React from 'react';
import style from './MessageBlock.module.css'
import MessageItem from './MessageItem/MessageItem';
import NewMessageContainer from './NewMessage/NewMessageContainer';

const MessageBlock = (props) => {

  let messagesElements = props.messagesData.map((m) => (
    <MessageItem message={m.message}/>
  ))

  return (
    <div>
      <div className={style.messageItem}>
        {messagesElements}
      </div>
      <NewMessageContainer/>
    </div>
  )
}

export default MessageBlock