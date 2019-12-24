import React from 'react';
import { useState } from 'react';
import UserPageMini from '../User/UserPageMini';


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
        <div>
            <UserPageMini/>
            <form onSubmit={addPost}>
                <textarea 
                    playceholder="Write post"
                    onChange={e => {setPostText(e.target.value)}} 
                    value={postText}
                />
                <button>Add post</button>
            </form> 
        </div>
    )
}
