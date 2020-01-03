import React from 'react';


export default function UsersPage(props) {
    return(
        <div className="usersPage">
            <img 
                alt="Proglem with pictire" 
                src={props.user.photo} 
                className="usersPage__img"
            />
            <div>
                <p className="usersPage__name">{props.user.name}</p>
            </div>
        </div>
    )
}