import React, { Component } from 'react';
import {connect} from 'react-redux';

import {deleteSmurf, updateSmurf, toggleShowUpdate} from '../actions';

class Smurfs extends Component {
    
    handleShowSmurf = smurf => {
        this.props.updateSingleSmurf(smurf);
    };
    
    
    render() {
        return (
        <div>
            <ul className="smurf-List">
                {this.props.smurfs.map(smurf => {
                    return (
                        <li onClick={() => this.handleShowSmurf(smurf)} key={smurf.id}>
                            {smurf.name}
                        </li>
                        );
                    })}
            </ul>
        </div>
        )
    }
}




export default connect(()=>{}, {deleteSmurf, updateSmurf,toggleShowUpdate})(Smurfs);