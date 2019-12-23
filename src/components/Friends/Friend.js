import React from 'react';

export default function Friend(props){
    return(
        <div>
            <img src={props.user.photo}/>
            <div>
                <p>{props.user.name}</p>
                <button onClick={props.delelteFriend}>Delete</button>
            </div>
        </div>
    )
}