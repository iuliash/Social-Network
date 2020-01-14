import React from 'react'
import {connect} from 'react-redux';


class UserPage extends React.Component {
    
    render() {
        return (
            <div className ="userPage">
                <img alt="Proglem with picrure" className="photo" src={this.props._user.photo}/>
                <div className="info">
                    <div className="info__text">
                        <p className="info__name" >{this.props._user.name}</p>
                        <p className="info__status" >Some kind status</p>
                    </div>
                    <br />
                    <div>
                        <p className="info__type">Birthday</p>
                        <p className="info__value">05/24/2000</p>
                    </div>
                    <div>
                        <p className="info__type">Work</p>
                        <p className="info__value">Workplace</p>
                    </div>
                    <div>
                        <p className="info__type">Interests</p>
                        <p className="info__value">Some interests</p>
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