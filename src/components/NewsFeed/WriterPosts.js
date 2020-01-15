import React from 'react';
import {connect} from 'react-redux';

import UsersPage from '../User/UsersPage'


class WriterPosts extends React.Component {
    constructor(){
        super();

        this.state = {
            title: '',
            excerpt: '',
            content: ''
        }
    }

    addPost = (e) => {
        let post = {
            id: Math.floor(Math.random() * 100),
            status: "publish",
            type: "post",
            title: {
                rendered: this.state.title
            },
            content: {
                rendered: this.state.content,
                protected: false
            },
            excerpt : {
                rendered: this.state.excerpt,
                protected: false
            },
            author: this.props._mainUser.id,
            featured_media: 12, 
            comment_status: "open",
            ping_status: "open",
            sticky: false,
            template: "",
            format: "standard"
        }
        const url = 'http://social-network.com/wp-json/wp/v2/posts';
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(post), 
                headers: {
                  'Content-Type': 'application/json'
                }
            })
                .then (response => {
                    if (response.status !== 200 ) {
                        throw new Error ('Error code: ', response.status);
                    }
                response.json()
                    .then (posts => {
                        console.log(posts);
                    })
                })
            .catch(err => {
            console.log('Error: ', err);
        })
    }

    render(){
        return(
            <div className="writerPost">
                <UsersPage  id_user = {this.props._mainUser.id} />
                <form className="postForm" onSubmit={this.addPost}>
                <input 
                    className="postForm__title"
                    onChange={e => {this.setState({title: e.target.value})}} 
                    value={this.state.title}
                    placeholder = "Title"
                />
                <textarea className="postForm__excerpt"
                    onChange={e => {this.setState({excerpt: e.target.value})}} 
                    value={this.state.excerpt}
                    placeholder = "Post excerpt"
                />
                <textarea className="postForm__content"
                    onChange={e => {this.setState({content: e.target.value})}} 
                    value={this.state.content}
                    placeholder = "Post content"
                />
                <button className="postForm__btn">Add post</button>
            </form> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        _mainUser: state.MainUser.user
    }
}

export default connect(mapStateToProps)(WriterPosts);

