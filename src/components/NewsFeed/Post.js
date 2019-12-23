import React from 'react';

import UsersPageInPost from '../User/UsersPageInPost'

export default function Post(props){
        return(
            <div>
                <UsersPageInPost  user = {props.user}/>
                <p>{props.post.content.text}</p>
            </div>
        )
    
}