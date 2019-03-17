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
                        <div>
                            <div onClick={() => this.handleShowSmurf(smurf)} key={smurf.id}>
                            {smurf.name}
                            </div>
                            <div>{smurf.age}</div>
                            <div>{smurf.height}</div>
                        </div>
                        
                        );
                    })}
            </ul>
        </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        deletingSmurf: state.smurfsReducer.deletingSmurf,
        error: state.smurfsReducer.error,
        showUpdate: state.smurfReducer.showUpdate,
        smurfSelected: state.smurfReducer.smurfSelected
    };
};

export default connect(mapStateToProps, {deleteSmurf, updateSmurf,toggleShowUpdate})(Smurfs);