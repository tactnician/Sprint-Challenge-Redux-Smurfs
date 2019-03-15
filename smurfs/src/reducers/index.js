/*
  Be sure to import in all of the action types from `../actions`
*/

import { ADD_SMURF } from '../actions'
import { GET_SMURF } from '../actions'
import { UPDATE_SMURF } from '../actions'
import { DELETE_SMURF } from '../actions'
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const intialState = {
  smurfs: [],
  fetchingSmurfs: false,
  // addingSmurf: false,
  // updatingSmurf: false,
  // deletingSmurf: false,
  // error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const rootReducer = (state = intialState, action) => {
  console.log('rootReducer', action)
  switch(action.type){
    case GET_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: true,
      }
    case ADD_SMURF:
      return{
        ...state,

      }
    case UPDATE_SMURF:
      return {
        ...state,
      }
    case DELETE_SMURF:
      return{
        ...state,
      }
    default: {
      return{
        ...state,
      }
    }
  }
}

export default rootReducer;