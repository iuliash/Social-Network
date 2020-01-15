import React from 'react';
import { Link } from 'react-router-dom';
import { hashHistory } from 'react-router';

import UsersPage from '../User/UsersPage'


class PostFull extends React.Component {
    constructor(){
        super();

        this.state = {
            post : {}
        }
    }
    
    async componentDidMount(){
        let path = hashHistory.getCurrentLocation().pathname;
        let id_post = path.slice(6);
        console.log(id_post);
        
        const url ='http://social-network.com/wp-json/wp/v2/';
        let response = await fetch(url + 'posts/' + id_post);
        const post = await response.json();
        response = await fetch(url + 'media');
        const photos = await response.json();
        this.setState({
            post: {
                id: post.id, 
                id_author: post.author,
                title: post.title.rendered, 
                content: post.content.rendered,
                photo: photos[photos.map(photo => photo.id).indexOf(post.featured_media)].guid.rendered, 
            }
        }) 
    }

    render(){
        return(
            <div className="full-post">
                <div className="full-post__info">
                    <UsersPage  id_user = {this.state.post.id_author}/>
                    <div>
                        <h1 className="full-post__title">{this.state.post.title}</h1>
                    </div>
                </div>
                <img alt="Proglem with picrure" src={this.state.post.photo} className="full-post__img"/>
                <div className="full-post__content" dangerouslySetInnerHTML={{__html: this.state.post.content}}></div>
                <button className="full-post__btn"><Link className="link-btn" to='/news'>Back</Link></button>
            </div>
        )
    }
}

export default PostFull