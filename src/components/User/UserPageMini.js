import React from 'react'
import {connect} from 'react-redux';


class UserPageMini extends React.Component {
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

export default connect(mapStateToProps)(UserPageMini);

