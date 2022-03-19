import React from 'react';
import style from './Messages.module.css'
import DialogSearch from './DialogSearch/DialogSearch';
import DialogItem from './DialogItem/DialogItem';
import MessageTittle from './MessageTittle/MessageTittle';
import MessageBlock from './MessageBlock/MessageBlock';

const Messages = (props) => {

  let dialogsElements = props.messagesPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name}
                id={dialog.id}
                avatar={dialog.avatar}/>
  ))


  return (
    <div className={style.messages}>
      <DialogSearch/>
      <MessageTittle/>
      <div className={style.dialog}>
        {dialogsElements}
      </div>
      <MessageBlock messagesPage={props.messagesPage}
                    dispatch={props.dispatch}/>
    </div>
  )
}

export default Messages