import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';

import Home from '../Components/Home';

it('renders home page correctly', () => {
  const tree = renderer.create(<Provider store={store}><Home /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
