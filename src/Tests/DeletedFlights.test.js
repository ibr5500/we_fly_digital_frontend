import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';

import DeletedFlights from '../Components/DeletedFlights';

it('renders deleted page correctly', () => {
  const tree = renderer.create(<Provider store={store}><DeletedFlights /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
