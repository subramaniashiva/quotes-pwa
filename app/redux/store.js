import { createStore } from 'redux';

import { devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer from './reducers/root-reducer';

export default createStore(rootReducer, undefined, devToolsEnhancer(
  // Specify here name, actionsBlacklist, actionsCreators and other options if needed
));