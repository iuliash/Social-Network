const firstState = {
    user: {
        id: 23,
        photo: '/public/img/u1.jpg',  //разберись с путем 
        name: 'Ivanov Ivan'
    }
}

export default function News (state = firstState, action) {
    switch (action.type) {
        case 'ADD_POST':
          return  action.array
        case 'DELETE_POST':
          return action.array
        default: return state
    }
  }