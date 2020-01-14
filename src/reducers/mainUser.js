export default function MainUser(state = { user: {} }, action){
    switch (action.type) {
        case 'SET_MAIN_USER':
            return  action.obj;  
        case 'DELETE_FRIEND':
            return  action.obj;
        default: return state
    }
}