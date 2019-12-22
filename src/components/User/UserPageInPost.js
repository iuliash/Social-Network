import React from 'react'

export default function UserPageInPost(props){
    return (
        <div>
            <img src={props.userInfo.photo} />
            <p>{props.userInfo.name}</p>
            <p>{props.date}</p>
        </div>
    )
}