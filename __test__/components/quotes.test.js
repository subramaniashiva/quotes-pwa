import React from 'react';
import renderer from 'react-test-renderer';

import Quotes from 'components/quotes';

let testQuote = {
  value: 'Test',
  author: 'Siva'
}
it('renders correctly', () => {
  const tree = renderer.create(
      <Quotes quote={testQuote}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});