import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setDialogs} from '../../actions';

import Dialog from './Dialog'


class Dialogs extends React.Component {
    
    async componentDidMount(){
        let _dialogs = [];
        const url ='http://social-network.com/wp-json/wp/v2/';
        let response = await fetch(url + 'dialogs');
        const dialogs = await response.json();
        dialogs.forEach(dialog => {
            let _dialog = {
                id: dialog.id, 
                id_user: dialog.id_user,
                message_story: dialog.message_story,
                last_message: dialog.last_message,
                is_reading: dialog.is_reading,
            }
            _dialogs.push(_dialog);
        })
        this.props.set({dialogs: _dialogs});
    }
    
    render(){
        let dialogs = this.props._dialogs; 
        return(
            <div className="dialogs">
                {dialogs.map(dialog => 
                    <Dialog 
                    index={dialogs.map(dialog => dialog.id).indexOf(dialog.id)}
                    key = {dialog.id}
                    last_message = {dialog.last_message}
                    />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        _dialogs: state.Dialogs.dialogs
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        set: setDialogs
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);