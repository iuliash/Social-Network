import React from 'react'
import {connect} from 'react-redux';


class UserPage extends React.Component {
    constructor(){
        super();
    }
    render() {
        const user = this.props._user;
        console.log(this.props._user);
        return (
            <div className ="user-page">
                <div className="user-main-info">
                    <img className="user-main-info__photo" src={user.photo}/>
                    <div className="user-main-info__text">
                        <p className="user-main-info__name" >{user.name}</p>
                        <p className="user-main-info__status" >{user.personalInfo.status}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Birthday</p>
                        <p>{user.personalInfo.birthday}</p>
                    </div>
                    <div>
                        <p>Work</p>
                        <p>{user.personalInfo.workPlace}</p>
                    </div>
                    <div>
                        <p>Interests</p>
                        <p>{user.personalInfo.interests}</p>
                    </div>
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


export default connect(mapStateToProps)(UserPage);