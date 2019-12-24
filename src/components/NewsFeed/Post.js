import React from 'react';

import UsersPage from '../User/UsersPage'

export default function Post(props){
        return(
            <div>
                <UsersPage  user = {props.user}/>
                <p>{props.post.content.text}</p>
            </div>
        )
    
}