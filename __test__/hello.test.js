import React from 'react';
import Hello from '../app/hello';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Hello>Facebook</Hello>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});