const firstState = {
  posts: [
    {
      id: 7,
      id_user: 1,
      content: {
        image: '#', 
        text:'TextTextText'
      }
    }, 
    {
      id: 8,
      id_user: 2,
      content: {
        image: '#', 
        text:'Teeeeeeeeeeeeeeeeext'
      }
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
