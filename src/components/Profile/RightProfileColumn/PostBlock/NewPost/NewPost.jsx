import React from 'react';
import style from './NewPost.module.css'

const NewPost = (props) => {

  let onAddPostClick = () => {
    props.addPost()
  }

  let onPostChange = (event) => {
    let text = event.target.value
    props.updatePostText(text)
  }

  return (
    <div className={style.newPost}>
      <input className={style.postText}
             type="text"
             placeholder='Что нового чел?'
             onChange={onPostChange}
             value={props.newPostText}/>
      <button className={style.sendButton}
              onClick={onAddPostClick}>Опубликовать</button>
    </div>
  )
}

export default NewPost