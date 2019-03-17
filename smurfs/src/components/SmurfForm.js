import React, { Component } from 'react'
import {connect} from 'react-redux';

class SmurfForm extends Component {
    state = {
        name:'',
        age: '',
        height: '',
    }
    
    render() {
        return (
        <div>
            
        </div>
        )
    }
}

export default connect(mapStateToProps, {})(FriendForm);