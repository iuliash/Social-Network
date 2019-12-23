import React from 'react'
import {connect} from 'react-redux';


class UserPageMini extends React.Component {
    render(){
        return(
            <div>
                <img src={this.props._user.photo} />
                <p>{this.props._user.name}</p>
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

