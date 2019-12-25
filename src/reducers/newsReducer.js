import p1 from '../img/p1.jpg';
import p2 from '../img/p2.jpg';


const firstState = {
  posts: [
    {
      id: 7,
      id_user: 1,
      content: {
        image: p1,
        text:'TextTextText'
      }
    }, 
    {
      id: 8,
      id_user: 2,
      content: {
        image: p2, 
        text:'Teeeeeeeeeeeeeeeeext'
      }
    }
  ]
}

export default function News (state = firstState, action) {
  switch (action.type) {
      case 'ADD_POST':
        return  action.array  
      default: return state
  }
}
