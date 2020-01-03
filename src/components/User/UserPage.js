import React from 'react'
import {connect} from 'react-redux';


class UserPage extends React.Component {
    
    render() {
        const user = this.props._user;
        return (
            <div className ="userPage">
                    <img alt="Proglem with pictire" className="photo" src={user.photo}/>
                <div className="info">
                    <div className="info__text">
                        <p className="info__name" >{user.name}</p>
                        <p className="info__status" >{user.personalInfo.status}</p>
                    </div>
                    <br />
                    <div>
                        <p className="info__type">Birthday</p>
                        <p className="info__value">{user.personalInfo.birthday}</p>
                    </div>
                    <div>
                        <p className="info__type">Work</p>
                        <p className="info__value">{user.personalInfo.workPlace}</p>
                    </div>
                    <div>
                        <p className="info__type">Interests</p>
                        <p className="info__value">{user.personalInfo.interests}</p>
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