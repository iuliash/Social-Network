import React from 'react';

import UserPageInPost from '../User/UserPageInNews';


class WriterPosts extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            text: ''
        }
    }

    addPost = e => {
        e.preventDefault();
        const {text} = this.state;
        if (text) {
            this.props.addPost(text);
            this.setState({text : ''});
        }
        return text;
    }
    
    render(){
        return(
            <UserPageInPost
                
            />
            <form onSubmit={this.addPost}>
                <textarea 
                    playceholder="Write post"
                    onChange={e => {this.setState({text: e.target.value})}} 
                    value={this.state.text}
                />
                <button>Add post</button>
            </form>
        )
    }
}

export default WriterPosts;