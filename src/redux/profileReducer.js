const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
  profileData: {
    id: 1,
    name: 'Александр Пантелеев',
    status: '🤟',
    birthTime: '13 апреля 2002 г',
    city: 'Новосибирск',
    friends: 78,
    subscribers: 140,
    avatar: 'https://i.pinimg.com/originals/4c/17/b9/4c17b92e5557adb7279e9d8754d33279.jpg'
  },
  postData: [
    {
      id: 1,
      name: 'Полина Свиридова',
      message: 'Hi how are you',
      likesCount: 3,
      avatar: 'https://avatars.yandex.net/get-music-content/103235/8f49549f.a.7117216-1/m1000x1000?webp=false'
    },
    {
      id: 2,
      name: 'Николай Смирнов',
      message: 'It\'s my first post',
      likesCount: 56,
      avatar: 'https://pixelbox.ru/wp-content/uploads/2022/01/avatar-estetik-krasota-pixelbox.ru-35.jpg'
    },
    {
      id: 3,
      name: 'Фёдор Ковалев',
      message: 'Fuck you',
      likesCount: 100,
      avatar: 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkW6oS2kKn63RiJTxk6T6xGqaKTM5SRkZCeTgDn6uOyic&fn=sqr_288'
    },
    {
      id: 4,
      name: 'Фёдор Ковалев',
      message: 'Motherfucker',
      likesCount: 999,
      avatar: 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkW6oS2kKn63RiJTxk6T6xGqaKTM5SRkZCeTgDn6uOyic&fn=sqr_288'
    }
  ],
  friendsData: [
    {
      id: 1,
      name: 'Юра',
      avatar: 'https://pictures.telegram-store.com/channels/feiaqrcz18ttfdrjjfdergcjjl/1569_2021_06_24_1_.jpg'
    },
    {
      id: 2,
      name: 'Екатерина',
      avatar: 'https://i.pinimg.com/736x/66/47/e9/6647e94ebc652c4505b493cd6c27f791.jpg'
    },
    {
      id: 3,
      name: 'Влад',
      avatar: 'https://hypeava.ru/uploads/posts/2021-10/1635541683_1.jpg'
    },
    {
      id: 4,
      name: 'Сергей',
      avatar: 'https://sun9-80.userapi.com/sun9-9/s/v1/if1/qPJ6NOpBJZiYtXt7wuOhhH2OvhgtLPJtU0qmbuPAdw-N5DS_3-AMf3s87GWNHwsk1kbxlo80.jpg?size=200x200&quality=96&crop=2,2,1195,1195&ava=1'
    },
    {
      id: 5,
      name: 'Никита',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ2rBd9ntr2k4eZm6dCWjyAMOXVCH29KZi1g&usqp=CAU'
    },
    {
      id: 6,
      name: 'Мария',
      avatar: 'http://pristor.ru/wp-content/uploads/2018/07/%D0%9A%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D0%B0%D0%BD%D0%B8%D0%BC%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%B5%D0%BA-%D0%B8-%D0%B4%D0%B5%D0%B2%D0%BE%D1%87%D0%B5%D0%BA-%D0%BB%D1%83%D1%87%D1%88%D0%B0%D1%8F-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-5.jpg'
    }
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        name: 'Александр Пантелеев',
        message: state.newPostText,
        likesCount: 0,
        avatar:
          'https://i.pinimg.com/originals/4c/17/b9/4c17b92e5557adb7279e9d8754d33279.jpg'
      }
      state.postData.push(newPost)
      state.newPostText = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state
    default:
      return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export default profileReducer