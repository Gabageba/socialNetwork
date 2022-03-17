import React from 'react';
import style from './PostBlock.module.css'
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const PostBlock = (props) => {

  let postsElements = props.profilePage.postData.map(p => (
    <Post message={p.message}
          name={p.name}
          likeCounter={p.likesCount}
          avatar={p.avatar} />
  ))

  return (
    <div>
      <NewPost newPostText={props.profilePage.newPostText}
               dispatch={props.dispatch}/>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default PostBlock