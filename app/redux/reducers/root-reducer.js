/*
  Root reducer. Combines all the reducer
  This files gives the structure of the state tree of the application
*/
import { combineReducers } from 'redux';

import quotes from './quotes';
import loading from './loading';
import backup from './backup';

export default combineReducers({
	quotes,
	loading,
  backup
});
