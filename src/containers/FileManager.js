import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class FileManager extends React.Component {
    render() {
        return (
            <div>RR File Manager</div>
        );
    }
}

export default connect(
    state => {
        return {
            state: state
        }
    },
    dispatch => {
        return {
            actions: bindActionCreators({}, dispatch)
        }
    }
)(FileManager);
