import React from 'react';
import {connect} from 'react-redux';

import Dialog from './Dialog'


class Dialogs extends React.Component {
    render(){
        let dialogs = this.props._dialogs; 
        return(
            <div className="dialogs">
                {dialogs.map(dialog => 
                    <Dialog 
                    index={dialogs.map(dialog => dialog.id).indexOf(dialog.id)}
                    key = {dialog.id}
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

export default connect(mapStateToProps)(Dialogs);