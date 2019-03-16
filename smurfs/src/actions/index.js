/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURF = 'GET_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const ERR = 'ERR';

/*
  For this project you'll need at least 2 action creators for the main portion,
  and 2 more for the stretch problem.
  Be sure to include action types for each type of action creator. Also, be sure to mind
  the "pending" states like, fetching, creating, updating and deleting.
  C - addSmurf
  R - getSmurfs
  U - updateSmurf
  D - deleteSmurf
*/

export const getSmurf = () => dispatch => {
  dispatch({type: GET_SMURF});
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data)
      dispatch({type: GET_SMURF, payload: res.data })
    }
    )
    .catch(err => dispatch({type: ERR, payload: err}))
}

export const addSmurf = () => dispatch => {
  dispatch({type: ADD_SMURF});
  axios
    .post('http://localhost:3333/smurfs')
    .then(({data}) => {
      dispatch({type: ADD_SMURF, payload: data})
    })
    .catch(err => dispatch({type: ERR, payload: err}))
}

// export const updateSmurf = () => {}

// export const deleteSmurf = () => {}