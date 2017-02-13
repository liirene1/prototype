import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import items from './itemReducer';
import auth from './authReducer';

export default combineReducers({
  form,
  items,
  auth
});
