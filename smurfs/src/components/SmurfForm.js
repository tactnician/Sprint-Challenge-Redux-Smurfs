import React, { Component } from 'react'
import {connect} from 'react-redux';

import {addSmurf} from '../actions';

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

const mapStateToProps = state => {
    return{
        error: state.error,
        addingSmurf: state.addingSmurf
    }
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);