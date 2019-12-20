import React from 'react'

export default function UserPageInPost(props){
    return (
        <div>
            <img href={props.userInfo.photo} />
            <p>{props.userInfo.name}</p>
            <p>{props.date}</p>
        </div>
    )
}