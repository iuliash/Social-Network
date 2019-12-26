import React from 'react'
import {connect} from 'react-redux';


class UserPage extends React.Component {
    
    render() {
        const user = this.props._user;
        console.log(this.props._user);
        return (
            <div className ="user-page">
                    <img alt="Proglem with pictire" className="user-photo" src={user.photo}/>
                <div className="user-info">
                    <div className="user-info__text">
                        <p className="user-info__name" >{user.name}</p>
                        <p className="user-info__status" >{user.personalInfo.status}</p>
                    </div>
                    <br />
                    <div>
                        <p className="user-info__type">Birthday</p>
                        <p className="user-info__value">{user.personalInfo.birthday}</p>
                    </div>
                    <div>
                        <p className="user-info__type">Work</p>
                        <p className="user-info__value">{user.personalInfo.workPlace}</p>
                    </div>
                    <div>
                        <p className="user-info__type">Interests</p>
                        <p className="user-info__value">{user.personalInfo.interests}</p>
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