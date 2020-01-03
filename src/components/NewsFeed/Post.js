import React from 'react';

import UsersPage from '../User/UsersPage'

export default function Post(props){
        return(
            <div className="post">
                <UsersPage  user = {props.user}/>
                <div className="content">
                    <img alt="Proglem with pictire" src={props.post.content.image} className="content__img"/>
                    <p className="content__text" >{props.post.content.text}</p>
                </div>
            </div>
        )
    
}