import React from 'react';

import UserPageInPost from '../User/UserPageInPost'

export default function Post(props){
    
    
        return(
            <div>
                <UserPageInPost
                    userInfo = {props.post.user}
                    date = {props.post.date}
                />
                <p>{props.post.content.text}</p>
            </div>
        )
    
}