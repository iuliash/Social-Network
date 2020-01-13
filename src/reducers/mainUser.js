/*import u3 from '../img/u3.jpg';

const firstState = {
    user: {
        id : 3, 
        photo: u3, 
        name: 'Kazakov Vasya', 
        personalInfo : {
            status: 'Some kind status',
            birthday: 'April 27, 1998',
            workPlace: 'Some kind work place',
            interests: 'Some kind interests'
        }
    }
    
}*/

export default function MainUser(state = { user: {} }, action){
    switch (action.type) {
        case 'SET_MAIN_USER':
            return  action.obj;  
        case 'DELETE_FRIEND':
            return  action.obj;
        default: return state
    }
}