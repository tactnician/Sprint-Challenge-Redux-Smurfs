import React, { Component } from 'react';
import './App.css';

import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import {connect} from 'react-redux';



class App extends Component {
  

  componentDidMount(){
    
    const smurfThing = this.props.getSmurf();
    this.setState({smurfThing})
    console.log(smurfThing);
  }

  

  

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {console.log(this.state)}
        <h3>Smurf Me!</h3>
        
        <SmurfList />
        <SmurfForm />
        
      </div>
    );
  }
}

// const App = props => {

//   return(
//     <div>
//       <h1>Get Smurfed</h1>
//       <div className='underline' />
//       <h3></h3>
//     </div>
//   )

// }

const mapStateToProps = state => {
  // const {rootReducer} = state;
  console.log(state)
  return{
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {getSmurf})(App);
