import * as types from './types';
import { browserHistory } from 'react-router';

export function signinUser({ email, password}) {
  return function (dispatch) {
    console.log("in auth actions", { email, password });
    fetch('http://exygy-challenge-backend.herokuapp.com/users/login', {
      method: "POST",
      headers: {
                //'Accept': 'application/json',
                'Content-Type': 'application/json',
                //'Access-Control-Request-Headers': 'X-Custom-Header'
            },
      body: (JSON.stringify({ email: "me@me.me", password: "password" }))
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      //If request is good...Update state to indicate user is authenticated
      dispatch({ type: types.AUTH_USER });
      //localStorage.setItem('token', json.data.token);
      browserHistory.push('/profile');
    })
    .catch((error) => {
      //If request is bad...Show an error to the user
      console.log(error);
      dispatch(authError(error));
    });
  }
}

export function authError(error) {
  return {
    type: types.AUTH_ERROR,
    payload: error
  };
}
