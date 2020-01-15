export default function Posts (state = { posts: [] }, action) {
  switch (action.type) {
      case 'ADD_POST':
        return  action.array; 
      case 'SET_POSTS': 
        return  action.array; 
      default: return state
  }
}
