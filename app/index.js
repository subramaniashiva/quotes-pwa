import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

//import { AppContainer } from 'react-hot-loader';

import store from './redux/store';

import Hello from './hello';

import 'styles/main.scss';

/*const renderRoot = (Component) => {
  render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  );
};

//render(Hello);

// Hot Module Replacement API
/*if (module.hot) {
  module.hot.accept('./hello', () => {
    const NextApp = require('./hello').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}*/




render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('app')
)

