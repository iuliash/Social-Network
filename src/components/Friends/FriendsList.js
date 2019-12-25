import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Friend from './Friend';

import {deleteFriend} from '../../actions';

class FriendsList extends React.Component {
    
    deleteFriend = key => {
        let friendsList = this.props._friends;
        const index = friendsList.map(friend => friend.id).indexOf(key);
        friendsList.splice(index, 1);
        this.props.delete({friends: friendsList});
        this.forceUpdate();
    }
    
    render(){
        const friends = this.props._friends;
        const users = this.props._users;
        return(
            <div className="friends-list">
                {friends.map(friend => (
                    <Friend 
                        user = {users[users.map(user => user.id).indexOf(friend.id)]} 
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
        _friends: state.Friends.friends, 
        _users: state.Users.users
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        delete: deleteFriend
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);