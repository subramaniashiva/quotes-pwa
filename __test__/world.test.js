import React from 'react';
import World from '../app/hello';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <World></World>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});