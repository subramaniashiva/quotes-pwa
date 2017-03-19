import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import Main from 'containers/main';
import store from 'redux/store';

describe('Main container', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Main />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});