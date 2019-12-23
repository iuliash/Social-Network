import React from 'react';


export default function UsersPageInPost(props) {
    return(
        <div>
            <img src={props.user.photo} />
            <p>{props.user.name}</p>
        </div>
    )
}