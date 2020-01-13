import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setMainUser} from '../../actions';


class UserPageMini extends React.Component {
    
    componentDidMount(){
        this.forceUpdate();
    }

    async componentWillUpdate(){
        const url ='http://social-network.com/wp-json/wp/v2/';
        let response = await fetch(url + 'users/4');
        const user = await response.json();
        response = await fetch(url + 'media/17');
        const photo = await response.json();
        let mainUser = {
            id: user.id, 
            name: user.name, 
            photo: photo.guid.rendered, 
            friends: [ {id: 2}, {id: 3}, {id: 5} ]
        }
        this.props.set({user: mainUser});
    }
    
    render(){
        return(
            <div className="userPage_mini">
                <img alt="Proglem with pictire" className="userPage__photo_mini" src={this.props._user.photo} />
                <div className="userPage__txt_mini">
                    <p className="userPage__name_mini">{this.props._user.name}</p>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserPageMini);

