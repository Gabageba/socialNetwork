const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
  messagesData: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How your mom'},
    {id: 3, message: 'Fuck'},
    {id: 4, message: 'Fuck?'},
    {id: 5, message: 'Fuck'}
  ],
  dialogsData: [
    {
      id: 1,
      name: 'Полина Свиридова',
      avatar: 'https://avatars.yandex.net/get-music-content/103235/8f49549f.a.7117216-1/m1000x1000?webp=false'
    },
    {
      id: 2,
      name: 'Николай Смирнов',
      avatar: 'https://pixelbox.ru/wp-content/uploads/2022/01/avatar-estetik-krasota-pixelbox.ru-35.jpg'},
    {
      id: 3,
      name: 'Фёдор Ковалев',
      avatar: 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkW6oS2kKn63RiJTxk6T6xGqaKTM5SRkZCeTgDn6uOyic&fn=sqr_288'
    },
    {
      id: 4,
      name: 'Арина Краснова',
      avatar: 'https://cdn.gambit-rp.ru/wcloud/upload/photos/2021/06/tI6kadAf4MHf4dxdAZMa_02_dbfc189506cbde866d0fd368286e2e23_avatar_full.jpg'
    },
    {
      id: 5,
      name: 'Екатерина Пантелеева',
      avatar: 'https://i.pinimg.com/originals/df/e6/88/dfe6884bd1495822988c898a6d51ccd5.jpg'
    },
    {
      id: 6,
      name: 'Полина Рудакова',
      avatar: 'https://yt3.ggpht.com/ytc/AKedOLTW1fMWITyyGs63ci43zTCkK9kDLEyAKFUTLShGUw=s900-c-k-c0x00ffffff-no-rj'
    }
  ],
  newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = state.newMessageText
      state.messagesData.push({id:6, message: newMessage})
      state.newMessageText = ''
      return state
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText
      return state
    default:
      return state
  }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT, newText: text
})

export default messagesReducer