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
        <div className="writerPost">
            <UsersPage  user = {props.user} />
            <form onSubmit={addPost} className="postForm">
                <textarea className="postForm__input"
                    onChange={e => {setPostText(e.target.value)}} 
                    value={postText}
                />
                <button className="postForm__btn">Add post</button>
            </form> 
        </div>
    )
}
