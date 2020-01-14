import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { hashHistory } from 'react-router';

import WriterPosts from './WriterPosts';
import UsersPage from '../User/UsersPage'
import Post from './Post';

import {addPost, setPosts} from '../../actions';

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

    async componentDidMount(){
        let _posts = [];
        const url ='http://social-network.com/wp-json/wp/v2/';
        let response = await fetch(url + 'posts');
        const posts = await response.json();
        response = await fetch(url + 'media');
        const photos = await response.json();
        posts.forEach(post => {
            let _post = {
                id: post.id, 
                id_user: post.author,
                title: post.title.rendered, 
                excerpt: post.excerpt.rendered, 
                photo: photos[photos.map(photo => photo.id).indexOf(post.featured_media)].guid.rendered,
            }
            _posts.push(_post);
        })
        this.props.set({posts: _posts});
    }
    
    render(){
        let posts = this.props._posts;
        return(
            <div>
                <WriterPosts 
                    addPost = {this._addPost}
                    id_user = {this.props._mainUser.id}
                />
                <div className="posts">
                    {posts.map(post => 
                        <div className="post" key={post.id}>
                            <UsersPage  id_user = {post.id_user}/>
                            <Post 
                                post = {post}
                            />
                        </div>
                    )}    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        _posts: state.Posts.posts, 
        _mainUser: state.MainUser.user
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        add: addPost, 
        set: setPosts
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(News);