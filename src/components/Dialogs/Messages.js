import React from 'react';

import UsersPage from '../User/UsersPage'

export default class Messages extends React.Component {
    constructor(props){
        super(props); 

        this.state = {
            messages: {
                mess: []
            }, 
            new_message: {
                text: ''
            }
        }
    }
    
    sendMessage = (e) => {
        e.preventDefault();
        let new_mess = this.state.new_message.text;
        if (new_mess !== '') {
            let mess = this.state.messages.mess;
            this.props.sendMessage(new_mess);
            this.setState({messages: {mess: mess}, new_message:{text : ''}})
        }
    }

    async componentDidMount(){
        let messagesID = this.props.story.split(', ');
        let _messages = [];
        const url ='http://social-network.com/wp-json/wp/v2/';
        let response = await fetch(url + 'messages');
        const messages = await response.json();
        messagesID.forEach(id => {
            let message = messages[messages.map(mess => mess.id).indexOf(parseInt(id))];
            let mess = {
                id: message.id,
                id_user: message.user_id,
                text: message.text_message
            }
            _messages.push(mess);
        })
        this.setState({messages: {mess: _messages}, new_message:{text: ''}});
    }

    render(){
        const messages = this.state.messages.mess;
        return(
            <div className="story">
                <div className="messages">
                    {messages.map(message => (
                        <div className="message" key={message.id}> 
                            <div className="message__user">
                                <UsersPage 
                                    id_user = {message.id_user}     
                                />
                            </div>
                            <p className="message__text">{message.text}</p>
                        </div>
                    ))}
                </div>
                <form onSubmit={this.sendMessage} className="send">
                    <input 
                        playceholder="New message"
                        onChange={e => {this.setState({new_message : {text: e.target.value}})}}
                        value = {this.state.new_message.text}
                        className="send__inp"
                    />
                    <button className="send__btn">Send</button>
                </form>
            </div>
        )
    }
}
