/*
  App bootstraps from this file
  Redux store is passed into the main Component
*/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { AppContainer } from 'react-hot-loader';

import store from 'redux/store';

import Main from 'containers/main';

import 'styles/main.scss';

const renderRoot = (Component) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component/>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

// Renders the main component
renderRoot(Main);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('containers/main', () => {
    const NextApp = require('containers/main').default;
    render(
      <AppContainer>
        <Provider store={store}>
         <NextApp />
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}

