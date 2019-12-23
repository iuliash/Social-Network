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
            <div>
                <div>
                    <img src={user.photo}/>
                </div>
                <div>
                    <div>
                        <p>{user.name}</p>
                        <p>{user.personalInfo.status}</p>
                    </div>
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