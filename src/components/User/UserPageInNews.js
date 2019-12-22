import React from 'react'

export default function UserPageInNews(props){
    return (
        <div>
            <img src={props.userInfo.photo} />
            <p>{props.userInfo.name}</p>
        </div>
    )
}