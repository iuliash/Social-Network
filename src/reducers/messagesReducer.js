const firstState = {
    messages: [
      {
        id_user: 1,
        message: 'Hello', 
        isReading: false
      }, 
      {
        id_user: 2,
        message: 'Bye', 
        isReading: true
      }, 
      {
        id_user: 4,
        message: 'Ok', 
        isReading: true
      }
    ]
}

export default function Messages (state = firstState, action) {
    switch (action.type) {
        case 'WRITE_MESSAGE':
          return  action.array
        default: return state
    }
  }