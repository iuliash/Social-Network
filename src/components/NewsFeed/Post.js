import React from 'react';

import UsersPage from '../User/UsersPage'

export default function Post(props){
        return(
            <div className="post">
                <UsersPage  user = {props.user}/>
                <div className="post-content">
                    <img alt="Proglem with pictire" src={props.post.content.image} className="post-content__img"/>
                    <p className="post-content__text" >{props.post.content.text}</p>
                </div>
            </div>
        )
    
}