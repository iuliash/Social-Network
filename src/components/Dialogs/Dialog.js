import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {sendMessage, readMessage} from '../../actions';

import UsersPage from '../User/UsersPage'
import Messages from './Messages'

class Dialog extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isVisibleMessages: false
        }
    }

    sendMessage = (text) => {
        let dialogs = this.props._dialogs;
        dialogs[this.props.index].messageStory.push({id_user: this.props._mainUser.id, text: text});
        this.props.send({dialogs: dialogs});
        this.forceUpdate();
    }

    showMessages =() => {
        let isVisible = this.state.isVisibleMessages;
        this.setState({isVisibleMessages: !isVisible});
        let dialogs = this.props._dialogs;
        dialogs[this.props.index].isReading = true;
        this.props.read({dialogs: dialogs});
        this.forceUpdate();
    }

    render(){
        const dialogs = this.props._dialogs;
        const dialog = dialogs[this.props.index];
        const users = this.props._users;
        return(
            <div className="dialog">  
                <div className="message-srory">
                    {this.state.isVisibleMessages && <Messages 
                        story={dialog.messageStory} 
                        sendMessage={this.sendMessage}
                        users = {users}
                    />}
                </div>
                <div onClick={this.showMessages} className={this.state.isVisibleMessages ? "dialog-with-user open" : "dialog-with-user"}>
                    <div className="dialog__user">
                        <UsersPage  user = {users[users.map(user => user.id).indexOf(dialog.id_user)]}/>
                    </div>
                    <p className={dialog.isReading ? "dialog__message" : "dialog__message not-read"}>
                        {dialog.messageStory[dialog.messageStory.length - 1].text}
                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        _dialogs: state.Dialogs.dialogs,
        _users: state.Users.users, 
        _mainUser: state.MainUser.user,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        send: sendMessage, 
        read: readMessage
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Dialog);