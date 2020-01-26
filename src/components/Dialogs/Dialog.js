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
        let message = {
            id: Math.floor(Math.random() * 100), 
            id_user: this.props._mainUser.id, 
            text: text
        }
        dialogs[this.props.index].message_story += ', ' + message.id;
        dialogs[this.props.index].last_message = message.text;
        this.props.send({dialogs: dialogs});
        
        /* отправка на сервер */

        /*fetch('http://social-network.com/wp-json/wp/v2/dialogs/' + dialogs[this.props.index].id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': 'iulia:12345' 
            },
            body: JSON.stringify(dialogs[this.props.index]),
        })
        .then(response => response.json()); 

        fetch('http://social-network.com/wp-json/wp/v2/messages/' + message.id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                //'Authorization': /*'Basic ' . base64_encode( 'iulia:12345' 
            },
            body: JSON.stringify(message),
        })
        .then(response => response.json()); //not found*/

        /*var WPAPI = require( 'wpapi' );
        
        var wp = new WPAPI({
            endpoint: 'http://social-network.com/wp-json',
            username: 'Kazakov Vasya',
            password: 'k09r yGLm LqWL 3puK SDxr mkNZ'
        });
        wp.dialogs().update({
            last_message: this.props._mainUser.id, 
            message_story: text, 
            dialog_id: this.props.key,
            status: 'publish'
        }).then(function( response ) {
            console.log( response.id );
        })
        
        var wp1 = new WPAPI({
            endpoint: 'http://social-network.com/wp-json',
            username: 'Kazakov Vasya',
            password: 'k09r yGLm LqWL 3puK SDxr mkNZ'
        });
        wp1.messages().create({
            user_id: this.props._mainUser.id, 
            text_message: text, 
            dialog_id: this.props.key,
            status: 'publish'
        }).then(function( response ) {
            console.log( response.id );
        })*/
        
        this.forceUpdate();
    }

    showMessages =() => {
        let isVisible = this.state.isVisibleMessages;
        this.setState({isVisibleMessages: !isVisible});
        let dialogs = this.props._dialogs;
        dialogs[this.props.index].is_reading = "1";
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
                        index={dialog.id} 
                        sendMessage={this.sendMessage}
                        story = {dialog.message_story}
                    />}
                </div>
                <div onClick={this.showMessages} className={this.state.isVisibleMessages ? "userDialog userDialog_open" : "userDialog"}>
                    <div className="user">
                        <UsersPage  id_user = {dialog.id_user}/>
                    </div>
                    <div>
                        <p className={dialog.is_reading === '1' ? "msg" : "msg msg_notRead"}>
                            {this.props.last_message}
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