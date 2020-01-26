import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';
//import { hashHistory } from 'react-router';

import UsersPage from '../User/UsersPage'
import Post from './Post';

import {setPosts} from '../../actions';

class News extends React.Component {


    async componentDidMount(){
        let _posts = [];
        const url ='http://social-network.com/wp-json/wp/v2/';
        let response = await fetch(url + 'posts');
        const posts = await response.json();
        response = await fetch(url + 'media');
        const photos = await response.json();
        console.log(posts);
        console.log(photos);
        posts.forEach(post => {
            let _post = {
                id: post.id, 
                id_author: post.author,
                title: post.title.rendered, 
                excerpt: post.excerpt.rendered, 
                photo: photos[photos.map(photo => photo.id).indexOf(post.featured_media)].guid.rendered,
            }
            _posts.push(_post);
        })
        this.props.set({posts: _posts});
        console.log(this.props._posts)
    }
    
    render(){
        let posts = this.props._posts;
        return(
            <div className="posts">
                <button className="posts__btn"><Link className="link-btn" to={'/new-post'}>New Post</Link></button>
                {posts.map(post => 
                    <div className="post" key={post.id}>
                        <UsersPage  id_user = {post.id_author}/>
                        <Post 
                            post = {post}
                        />
                    </div>
                )}    
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        _posts: state.Posts.posts
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        set: setPosts
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(News);