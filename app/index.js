import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Hello from './hello';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(Hello);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./hello', () => {
    const NextApp = require('./hello').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}

