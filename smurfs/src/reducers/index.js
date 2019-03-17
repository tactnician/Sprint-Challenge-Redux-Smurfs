/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  ERROR,
  GET_SMURFS,
  GETTING_SMURFS,
  CREATING_SMURF,
  CREATE_SMURF,
  UPDATE_SMURF,
  DELETE_SMURF,
  UPDATING_SMURF,
  DELETING_SMURF,
  SINGLE_SMURF,
} from '../actions'

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

const initalState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const rootReducer = (state = initalState, action) => {}