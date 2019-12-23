import u1 from '../img/u1.jpg';
import u2 from '../img/u2.jpg';
import u3 from '../img/u3.jpg';
import u4 from '../img/u4.jpg';

const firstState = {
    users: [
    {
        id: 1,
        photo: u1,
        name: 'Ivanov Ivan'
    }, 
    {
        id: 2,
        photo: u2, 
        name: 'Petrov Petr'
    },
    {
        id: 3,
        photo: u3, 
        name: 'Kazakov Vasya'
    },
    {
        id: 4,
        photo: u4, 
        name: 'Smirnov Ivan'
    }
    ]
}

export default function Users (state = firstState, action) {
    switch (action.type) {
        default: return state
    }
  }