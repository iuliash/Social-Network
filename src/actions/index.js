export function addPost(array){
    return ({type: 'ADD_POST', array});
}

export function deletePost(array){
    return ({type: 'DELETE_POST', array}); 
}

export function deleteFriend(array){
    return ({type: 'DELETE_FRIEND', array}); 
}