/*
  Redux store file.
  Combines the root reducer, thunk middleware (for API requests)
*/
import { createStore,  applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/';

import rootReducer from './reducers/root-reducer';

export default createStore(rootReducer, {}, composeWithDevTools(
	applyMiddleware(thunkMiddleware)
));
