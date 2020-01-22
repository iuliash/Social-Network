export function addPost(array){
    return ({type: 'ADD_POST', array});
}

export function deleteFriend(obj){
    return ({type: 'DELETE_FRIEND', obj}); 
}

export function setDialogs(obj) {
    return ({type: 'SET_DIALOGS', obj})
}

export function sendMessage(array){
    return ({type: 'SEND_MESSAGE', array}); 
}

export function readMessage(array){
    return ({type: 'READ_MESSAGE', array}); 
}

export function setMainUser(obj) {
    return ({type: 'SET_MAIN_USER', obj})
}

export function setPosts(array) {
    return ({type: 'SET_POSTS', array})
}

export function setPost(array) {
    return ({type: 'SET_POST', array})
}
