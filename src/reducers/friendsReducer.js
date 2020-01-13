/* don't used */
const firstState = {
  friends: [
    {id: 2}, 
    {id: 3}, 
    {id: 5}
  ]
}

export default function Friends (state = firstState, action) {
  switch (action.type) {
      case 'DELETE_FRIEND':
        return  action.array 
      default: return state
  }
}