const users = [
  {
    name: 'Grandmaster Flash',
    photo: require('../images/flash.jpg'),
    rating: 4,
    song: 'https://mp3l.jamendo.com/?trackid=1378575&format=mp31',
    messages: [
      {
        _id: 1,
        text: 'I\'ve a beautiful voice',
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://randomuser.me/api/portraits/women/90.jpg',
        },
      }
    ]
  },
  {
    name: 'Mylene Cruz',
    photo: require('../images/mylene.jpg'),
    rating: 3,
    song: 'https://mp3l.jamendo.com/?trackid=1414987&format=mp31',
    messages: [
      {
        text: '',
        time: '',
        owner: 'you'
      }
    ]
  },
  {
    name: ' Yolanda Kipling',
    photo: require('../images/girl1.jpg'),
    rating: 3,
    song: 'https://mp3l.jamendo.com/?trackid=1414987&format=mp31',
    messages: [
      {
        text: '',
        time: '',
        owner: 'you'
      }
    ]
  },
  {
    name: 'Marcus "Dizzee" Kipling',
    photo: require('../images/jayden.jpg'),
    rating: 3,
    song: 'https://mp3l.jamendo.com/?trackid=1414987&format=mp31',
    messages: [
      {
        text: '',
        time: '',
        owner: 'you'
      }
    ]
  },
  {
    name: 'Regina',
    photo: require('../images/girl2.jpg'),
    rating: 3,
    song: 'https://mp3l.jamendo.com/?trackid=1414987&format=mp31',
    messages: [
      {
        text: '',
        time: '',
        owner: 'you'
      }
    ]
  }
];

export default users;
