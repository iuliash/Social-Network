import React from 'react';

import UserPageMini from '../User/UserPageMini';


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
            <div>
                <UserPageMini/>
                <form onSubmit={this.addPost}>
                    <textarea 
                        playceholder="Write post"
                        onChange={e => {this.setState({text: e.target.value})}} 
                        value={this.state.text}
                    />
                    <button>Add post</button>
                </form> 
            </div>
            
        )
    }
}

export default WriterPosts;