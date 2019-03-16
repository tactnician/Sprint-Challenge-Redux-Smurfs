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

class App extends Component {
  

  componentDidMount(){
    
    const smurfThing = this.props.getSmurf();
    this.setState({smurfThing})
    console.log(smurfThing);
  }

  

  addSmurf = () => {
    const { name, age, height } = this.state;
    this.props.addSmurf({ name, age, height });
    this.setState({ name: '', age: '', height: '' });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {console.log(this.state)}
        <h3>Smurf Me!</h3>
        {/* {this.state.smurfs.map(smurf => {
          return(
            <div>
            <h4>{smurf.name}</h4>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
            </div>
          )
        })} */}


        
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
