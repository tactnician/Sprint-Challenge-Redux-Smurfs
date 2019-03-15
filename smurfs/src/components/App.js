import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import {connect} from 'react-redux';

import {getSmurf} from '../actions';

// class App extends Component {

//   componentDidMount(){
//     this.props.getSmurf();
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <div>Welcome to your Redux version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//       </div>
//     );
//   }
// }

const App = props => {

  return(
    <div>
      <h1>Get Smurfed</h1>
      <div className='underline' />
      <h3></h3>
    </div>
  )

}

const mapStateToProps = state => {
  // const {rootReducer} = state;
  return{
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {getSmurf})(App);
