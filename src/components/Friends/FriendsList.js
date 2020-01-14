import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Friend from './Friend';

import {deleteFriend} from '../../actions';

class FriendsList extends React.Component {
    constructor(){
        super();
        this.state = {
            friends: []
        }
    }

    async componentDidMount(){
        let friendsID = [ {id: 2}, {id: 3}, {id: 5} ];
        let friends = [];
        const url ='http://social-network.com/wp-json/wp/v2/';
        let response = await fetch(url + 'users/');
        const users = await response.json();
        response = await fetch(url + 'media');
        const photos = await response.json();
        friendsID.forEach(friend => {
            let _photo = photos[photos.map(photo => photo.title.rendered).indexOf('u' + friend.id)];
            let _user = users[users.map(user => user.id).indexOf(friend.id)];
            let user = {
                id: _user.id, 
                name: _user.name, 
                photo: _photo.guid.rendered
            }
            friends.push(user);
        })
        this.setState({friends: friends});
    }

    deleteFriend = key => {
        let friendsList = this.state.friends;
        const index = friendsList.map(friend => friend.id).indexOf(key);
        friendsList.splice(index, 1);
        this.setState({friends: friendsList});
        this.forceUpdate();
    }
    
    render(){
        return(
            <div className="friends">
                {this.state.friends.map(friend => (
                    <Friend 
                        user = {friend} 
                        key = {friend.id}
                        delelteFriend = {() => this.deleteFriend(friend.id)}
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        _user: state.MainUser.user
    }
}

export default connect(mapStateToProps)(FriendsList);