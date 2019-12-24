export function addPost(array){
    return ({type: 'ADD_POST', array});
}

export function deleteFriend(array){
    return ({type: 'DELETE_FRIEND', array}); 
}

export function sendMessage(array){
    return ({type: 'SEND_MESSAGE', array}); 
}