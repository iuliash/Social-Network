import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { hashHistory } from 'react-router';

import WriterPosts from './WriterPosts';
import Post from './Post';

import {addPost} from '../../actions';

import p4 from '../../img/p4.jpg'

class News extends React.Component {

    _addPost = (text) => {
        let posts = this.props._posts;
        let id = Math.floor(Math.random() * (300 - 1)) + 1;
        posts.push({
            id: id,
            id_user: this.props._mainUser.id,
            content: {
                image: p4, 
                text: text
            }
        })
        this.props.add({posts: posts});
        hashHistory.push('/news/' + id);
        this.forceUpdate();
    }
    
    render(){
        let posts = this.props._posts;
        console.log(this.props._mainUser);
        return(
            <div>
                <WriterPosts 
                    addPost = {this._addPost}
                    id_user = {this.props._mainUser.id}
                />
                <div className="posts">
                    {posts.map(post => 
                        <Post 
                        post = {post}
                        id_user={post.id_user}
                        key={post.id}
                        />
                    )}    
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        _posts: state.News.posts, 
        _mainUser: state.MainUser.user
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        add: addPost
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(News);