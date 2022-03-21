import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../../../redux/messagesReducer';
import {connect} from 'react-redux';
import NewMessage from './NewMessage';

let mapStateToProps = (state) => {
  return {
    newMessageText: state.messagesPage.newMessageText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(addMessageActionCreator()),
    updateNewMessageText: body => dispatch(updateNewMessageTextActionCreator(body))
  }
}

const NewMessageContainer = connect(mapStateToProps,mapDispatchToProps)(NewMessage)

export default NewMessageContainer