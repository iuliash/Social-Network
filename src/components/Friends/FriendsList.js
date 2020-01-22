import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Friend from './Friend';

import {setMainUser} from '../../actions';



class FriendsList extends React.Component {
    constructor(){
        super();
        this.state = {
            friends: []
        }
    }

    async componentDidMount(){
        
        let response = await fetch('http://social-network.com/wp-json/wp/v2/users/4');
        const user = await response.json();
        this.props.set({user: user});
        let friendsID = user.friends.split(', ');
        let friends = [];
        const url ='http://social-network.com/wp-json/wp/v2/';
        response = await fetch(url + 'users/');
        const users = await response.json();
        response = await fetch(url + 'media');
        const photos = await response.json();
        friendsID.forEach(id => {
            let _photo = photos[photos.map(photo => photo.title.rendered).indexOf('u' + parseInt(id))];
            let _user = users[users.map(user => user.id).indexOf(parseInt(id))];
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
        let friends_id = '';
        let friends_length = this.state.friends.length - 1;
        this.state.friends.forEach(elem => {
            let index = this.state.friends.indexOf(elem);
            if (index === friends_length) {
                friends_id += elem.id;
            } else {
                friends_id += elem.id + ', ';
            }
        });
        let user = this.props._user;
        user.friends = friends_id;
        this.props.set({user: user});

        /* изменение на сервере */
        fetch('http://social-network.com/wp-json/wp/v2/users/4', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                //'Authorization': /*'Basic ' . base64_encode( */'iulia:12345' 
            },
            body: JSON.stringify(this.props._user),
        })
        .then(response => response.json()); 

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

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        set: setMainUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);