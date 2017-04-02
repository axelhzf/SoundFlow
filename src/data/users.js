const users = [
  {
    name: 'Grandmaster Flash',
    photo: require('../images/flash.jpg'),
    rating: 4,
    song: 'https://mp3l.jamendo.com/?trackid=1018445&format=mp31',
    messages: [
      {
        _id: 3,
        text: 'I think your voice is perfect for a song I have in mind',
        createdAt: new Date(Date.UTC(2017, 4, 2, 17, 22, 0)),
        user: {},
      },
      {
        _id: 2,
        text: 'I am looking for a singer',
        createdAt: new Date(Date.UTC(2017, 4, 2, 17, 21, 0)),
        user: {},
      },
      {
        _id: 1,
        text: 'Hi! My name is Grandmaster Flash',
        createdAt: new Date(Date.UTC(2017, 4, 2, 17, 20, 0)),
        user: {},
      }
    ]
  },
  {
    name: 'Mylene Cruz',
    photo: require('../images/mylene.jpg'),
    rating: 3,
    song: 'https://mp3l.jamendo.com/?trackid=1180593&format=mp31',
    messages: [
      {
        _id: 3,
        text: 'are you interested?',
        createdAt: new Date(Date.UTC(2017, 4, 2, 17, 22, 0)),
        user: {},
      },
      {
        _id: 2,
        text: 'I can create some lyrics and sing with your music',
        createdAt: new Date(Date.UTC(2017, 4, 2, 17, 21, 0)),
        user: {},
      },
      {
        _id: 1,
        text: 'Hello! I really like your music',
        createdAt: new Date(Date.UTC(2017, 4, 2, 17, 20, 0)),
        user: {},
      }
    ]
  },
  {
    name: 'Yolanda Kipling',
    photo: require('../images/girl1.jpg'),
    rating: 3,
    song: 'https://mp3l.jamendo.com/?trackid=1421134&format=mp31',
    messages: [
      {
        _id: 3,
        text: 'Your music is really professional',
        createdAt: new Date(Date.UTC(2017, 4, 2, 17, 22, 0)),
        user: {},
      },
      {
        _id: 1,
        text: 'I am looking for someone like your for a collaboration',
        createdAt: new Date(Date.UTC(2017, 4, 2, 17, 20, 0)),
        user: {},
      }
    ]
  },
  {
    name: 'Marcus "Dizzee" Kipling',
    photo: require('../images/jayden.jpg'),
    rating: 3,
    song: 'https://mp3l.jamendo.com/?trackid=1364755&format=mp31',
    messages: [
      {
        _id: 2,
        text: 'I really enjoy the last song we made together',
        createdAt: new Date(Date.UTC(2017, 4, 2, 17, 21, 0)),
        user: {},
      },
      {
        _id: 1,
        text: 'Hi man! how are you? do you wanna make another song together?',
        createdAt: new Date(Date.UTC(2017, 4, 2, 17, 20, 0)),
        user: {},
      }
    ]
  },
  {
    name: 'Regina',
    photo: require('../images/girl2.jpg'),
    rating: 3,
    song: 'https://mp3l.jamendo.com/?trackid=1180599&format=mp31',
    messages: [
      {
        _id: 3,
        text: 'I think we can make something big',
        createdAt: new Date(Date.UTC(2017, 4, 2, 17, 22, 0)),
        user: {},
      },
      {
        _id: 1,
        text: 'Your music is awesome! Do you want to create something together?',
        createdAt: new Date(Date.UTC(2017, 4, 2, 17, 20, 0)),
        user: {},
      }
    ]
  }
];

export default users;
