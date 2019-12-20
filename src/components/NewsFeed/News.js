import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import WriterPosts from './WriterPosts'
import Post from './Post'

import {addPost} from '../../actions';

class News extends React.Component {
    
    _addPost = (text) => {
        let {posts} = this.props._posts;
        let id = Math.random(100);
        posts.push({
            id: id,
            user: {
                photo: '#', 
                name: 'Valilyev Vasya'
            },
            content: {
                image: '#', 
                text:'Txt'
            },
                date: Date.now()
        })
        this.props.add(posts);
    }
    
    render(){
        //const {posts} = this.props._posts;
        return(
            <div>
                <WriterPosts addPost = {this._addPost} />
                {this.props._posts.map(post => (
                    <Post 
                    post = {post}
                    key={post.id}
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        _posts: state.News.posts
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        add: addPost
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(News);