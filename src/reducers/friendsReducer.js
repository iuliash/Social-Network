const firstState = {
  friends: [
    {id: 1}, 
    {id: 2}, 
    {id: 4}
  ]
}

export default function Friends (state = firstState, action) {
  switch (action.type) {
      case 'DELETE_FRIEND':
        return  action.array 
      default: return state
  }
}