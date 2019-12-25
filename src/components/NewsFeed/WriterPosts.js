import React from 'react';
import { useState } from 'react';
import UsersPage from '../User/UsersPage'


export default function WriterPosts(props) {
    
    const [postText, setPostText] = useState('');

    const addPost = e => {
        e.preventDefault();
        if (postText) {
            props.addPost(postText);
            setPostText('')
        }
        return postText;
    }

    return(
        <div className="writer-post">
            <UsersPage  user = {props.user} />
            <form onSubmit={addPost} className="post-form">
                <textarea className="post-form__input"
                    onChange={e => {setPostText(e.target.value)}} 
                    value={postText}
                />
                <button className="post-form__btn">Add post</button>
            </form> 
        </div>
    )
}
