const firstState = {
  posts: [
          {
            id: 1,
            user: {
              photo: '#', 
              name: 'Ivanov Ivan'},
            content: {
              image: '#', 
              text:'TextTextText'
            },
            date: '12.12.12'
          }, 
          {
            id: 2,
            user: {
              photo: '#', 
              name: 'Petrov Petr'},
            content: {
              image: '#', 
              text:'Teeeeeeeeeeeeeeeeext'
            },
            date: '21/21/21'
          }
  ]
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
