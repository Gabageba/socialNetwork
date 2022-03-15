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
      message: 'Hi how are you',
      likesCount: 3,
      avatar: 'https://shapka-youtube.ru/wp-content/uploads/2020/12/ava-anime-1.jpg'
    },
    {
      id: 2,
      message: 'It\'s my first post',
      likesCount: 56,
      avatar: 'https://avatars.mds.yandex.net/i?id=a3863d37caad9303f87326aaac594681-5874987-images-thumbs&n=13&exp=1'
    },
    {
      id: 3,
      message: 'Fuck you',
      likesCount: 100,
      avatar: 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkW6oS2kKn63RiJTxk6T6xGqaKTM5SRkZCeTgDn6uOyic&fn=sqr_288'
    },
    {
      id: 4,
      message: 'Motherfucker',
      likesCount: 999,
      avatar: 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkW6oS2kKn63RiJTxk6T6xGqaKTM5SRkZCeTgDn6uOyic&fn=sqr_288'
    }
  ]
}

const profileReducer = (state = initialState, action) => {
  return state
}

export default profileReducer