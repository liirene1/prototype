import * as types from '../actions/types';
import initialState from './initialState';

export default function itemReducer(state=initialState.items, action) {
  switch (action.type) {
    case types.LOAD_ITEMS_SUCCESS:
      return action.items;

    default:
      return state;
  }
}
