import React from 'react'
import {connect} from 'react-redux';


class UserPageMini extends React.Component {
    render(){
        return(
            <div className="user-page-mini">
                <img alt="Proglem with pictire" className="user-page-mini__photo" src={this.props._user.photo} />
                <div className="user-page-mini__txt">
                    <p className="user-page-mini__name">{this.props._user.name}</p>
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

export default connect(mapStateToProps)(UserPageMini);

