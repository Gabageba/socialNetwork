import React from 'react';
import style from './NewPost.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../../redux/ProfileReducer';

const NewPost = (props) => {

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = (event) => {
    let text = event.target.value
    props.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <div className={style.newPost}>
      <input className={style.postText}
             type="text"
             placeholder='Что нового чел?'
             onChange={onPostChange}
             value={props.newPostText}/>
      <button className={style.sendButton}
              onClick={addPost}>Опубликовать</button>
    </div>
  )
}

export default NewPost