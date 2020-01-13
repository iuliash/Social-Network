/* don't used */
import u1 from '../img/u1.jpg';
import u2 from '../img/u2.jpg';
import u3 from '../img/u3.jpg';
import u4 from '../img/u4.jpg';

const firstState = {
    users: [
    {
        id: 2,
        photo: u1,
        name: 'Ivanov Ivan'
    }, 
    {
        id: 3,
        photo: u2, 
        name: 'Petrov Petr'
    },
    {
        id: 4,
        photo: u3, 
        name: 'Kazakov Vasya'
    },
    {
        id: 5,
        photo: u4, 
        name: 'Smirnov Ivan'
    }
    ]
}

export default function Users (state = { users: [] }, action) {
    switch (action.type) {
        case 'SET_USERS':
            return  action.array;
        default: return state
    }
  }