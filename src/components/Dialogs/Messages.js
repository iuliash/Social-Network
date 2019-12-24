import React from 'react';
import { useState } from 'react';

import UsersPage from '../User/UsersPage'

export default function Messages(props){
    const [massage, setMessage] = useState('');
    
    const sendMessage = e => {
        e.preventDefault();
        if (massage) {
            props.sendMessage(massage);
            setMessage('')
        }
        return massage;
    }
    
    const users = props.users;

    return(
        <div>
            <div>
                {props.story.map(message => (
                    <div>
                        <UsersPage user = {users[users.map(user => user.id).indexOf(message.id_user)]} />
                        <p>{message.text}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage}>
                <input 
                    playceholder="New message"
                    onChange={e => {setMessage(e.target.value)}} 
                    value={massage}
                />
                <button>Send</button>
            </form>
        </div>
    )
}
