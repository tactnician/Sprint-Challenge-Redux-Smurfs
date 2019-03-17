import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';

import {getSmurfs} from '../actions';




class App extends Component {


  render() {
    return (
      <div className="App">
        <header>SMURFS! 2.0 W/ Redux</header>
        <h3>Smurf It Up</h3>
          <SmurfForm />
        <h3>Smurfs</h3>
        <Smurfs smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {rootReducer} = state;
  console.log(state)
  return{}
}

export default connect(mapStateToProps, {getSmurfs})(App);
