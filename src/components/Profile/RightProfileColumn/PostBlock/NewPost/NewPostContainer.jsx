import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../../redux/profileReducer';
import {connect} from 'react-redux';
import NewPost from './NewPost';

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    updatePostText: text => dispatch(updateNewPostTextActionCreator(text))
  }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer