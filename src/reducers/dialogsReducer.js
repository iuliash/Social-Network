const firstStateDialog = {
    dialogs: [
      {
        id: 1,
        id_user: 1, 
        messageStory: [
          {id_user: 3, text: 'Hello'}, 
          {id_user: 1, text:'How are you?'}
        ], 
        isReading: false
      }, 
      {
        id: 2,
        id_user: 2, 
        messageStory: [
          {id_user: 3, text: 'See you late'}, 
          {id_user: 2, text:'Ok'}
        ], 
        isReading: true
      }, 
      {
        id: 3,
        id_user: 4, 
        messageStory: [
          {id_user: 4, text: 'How much?'}, 
          {id_user: 3, text:'7'},
          {id_user: 4, text: 'Good'}, 
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

