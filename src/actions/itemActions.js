import * as types from './types';

export function loadItemsSuccess(items) {
  return { type: types.LOAD_ITEMS_SUCCESS, items};
}

export function loadItems() {
  return function(dispatch) {
    fetch(`http://exygy-challenge-backend.herokuapp.com/documents?api_key=123`)
    .then(response => response.json())
    .then(items => {
      dispatch(loadItemsSuccess(items));
    }).catch(error => {
      throw(error);
    });
  };
}

export function searchItems(query) {
  return function(dispatch) {
    console.log("actions", query);
    fetch(`http://exygy-challenge-backend.herokuapp.com/documents?search=${query}&api_key=123`)
    .then(response => response.json())
    .then(items => {
      dispatch(loadItemsSuccess(items));
    }).catch(error => {
      throw(error);
    });
  }
}
