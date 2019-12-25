import React from 'react';

export default function Friend(props){
    return(
        <div className="friend">
            <img alt="Problem with picrure" src={props.user.photo} className="friend__img"/>
            <div className="friend-active">
                <p className="friend-active__txt">{props.user.name}</p>
                <button onClick={props.delelteFriend} className="friend-active__btn">Delete</button>
            </div>
        </div>
    )
}