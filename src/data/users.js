const users = [
    {
        name: 'John Ferguson',
        photo: 'https://randomuser.me/api/portraits/men/51.jpg',
        rating: 3,
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
        name: 'Marie Ferguson',
        photo: 'https://randomuser.me/api/portraits/women/90.jpg',
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