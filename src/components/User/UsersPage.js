import React from 'react';


export default function UsersPage(props) {
    return(
        <div className="users-page">
            <img alt="Proglem with pictire" src={props.user.photo} className="users-page__img"/>
            <div>
                <p className="users-page__name">{props.user.name}</p>
            </div>
        </div>
    )
}