import * as types from '../actions/types';
import initialState from './initialState';

export default function(state = {}, action) {
  switch(action.type) {
    case types.AUTH_USER:
      //return { ...state, error: '', authenticated: true };
    case types.AUTH_ERROR:
      //return {...state, error: action.payload };
  }
  return state;
}
