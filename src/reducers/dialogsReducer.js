const firstStateDialog = { 
    dialogs: [
      {
        id: 1,
        id_user: 2, 
        messageStory: [
          {id_user: 4, text: 'Hello'}, 
          {id_user: 2, text:'How are you?'}
        ], 
        isReading: false
      }, 
      {
        id: 2,
        id_user: 3, 
        messageStory: [
          {id_user: 4, text: 'See you late'}, 
          {id_user: 3, text:'Ok'}
        ], 
        isReading: true
      }, 
      {
        id: 3,
        id_user: 5, 
        messageStory: [
          {id_user: 5, text: 'How much?'}, 
          {id_user: 4, text:'7'},
          {id_user: 5, text: 'Good'}, 
        ], 
        isReading: false
      }
    ], 
}

export default function Dialogs (state = firstStateDialog, action) {
    switch (action.type) {
        case 'SEND_MESSAGE':
          return  action.array
        default: return state
    }
  }

