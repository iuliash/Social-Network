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
        return(
            <div>  
                <div className="messageStory">
                    {this.state.isVisibleMessages && <Messages 
                        story={dialog.messageStory} 
                        sendMessage={this.sendMessage}
                    />}
                </div>
                <div onClick={this.showMessages} className={this.state.isVisibleMessages ? "userDialog userDialog_open" : "userDialog"}>
                    <div className="user">
                        <UsersPage  id_user = {dialog.id_user}/>
                    </div>
                    <div>
                        <p className={dialog.isReading ? "msg" : "msg msg_notRead"}>
                            {dialog.messageStory[dialog.messageStory.length - 1].text}
                        </p>
                    </div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        _dialogs: state.Dialogs.dialogs,
        _mainUser: state.MainUser.user
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        send: sendMessage, 
        read: readMessage
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Dialog);