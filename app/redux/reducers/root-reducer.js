import { combineReducers } from 'redux';

import quotes from './quotes';
import loading from './loading';
import backup from './backup';

export default combineReducers({
	quotes,
	loading,
  backup
});
