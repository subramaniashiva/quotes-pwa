import { combineReducers } from 'redux';

import quotes from './quotes';
import loading from './loading';

export default combineReducers({
	quotes,
	loading
});