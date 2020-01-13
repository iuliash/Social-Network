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

    return(
        <div className="story">
            <div className="messages">
                {props.story.map(message => (
                    <div className="message">
                        <div className="message__user">
                            <UsersPage 
                                id_user = {message.id_user}     
                            />
                        </div>
                        <p className="message__text">{message.text}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage} className="send">
                <input 
                    playceholder="New message"
                    onChange={e => {setMessage(e.target.value)}} 
                    value={massage}
                    className="send__inp"
                />
                <button className="send__btn">Send</button>
            </form>
        </div>
    )
}
