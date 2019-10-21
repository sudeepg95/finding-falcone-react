import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAtrr, storeFactory } from '../../Services/TestsUtils';

import AppComponent from './AppComponent';

describe('AppComponent', () => {
  let wrapper;
  beforeEach(() => {
    const store = storeFactory({});
    wrapper = shallow(<AppComponent store={store} />).dive();
    console.log(wrapper.debug());
  });
  it('renders without crashing', () => {
    const component = findByTestAtrr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });
});
