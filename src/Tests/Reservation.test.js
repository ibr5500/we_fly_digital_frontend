import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';

import Reservations from '../Components/Reservations';

it('renders reservations page correctly', () => {
  const tree = renderer.create(<Provider store={store}><Reservations /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
