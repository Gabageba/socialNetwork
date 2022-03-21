import React from 'react';
import style from './PostBlock.module.css'
import Post from './Post/Post';
import NewPostContainer from './NewPost/NewPostContainer';

const PostBlock = (props) => {

  let postsElements = props.postData.map(p => (
    <Post message={p.message}
          name={p.name}
          likeCounter={p.likesCount}
          avatar={p.avatar} />
  ))

  return (
    <div>
      <NewPostContainer/>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default PostBlock