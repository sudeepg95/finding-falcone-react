import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import RootReducer from '../Store/Reducers/RootReducer';

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const { componentPropTypes } = component;
  const propsErr = checkPropTypes(componentPropTypes, expectedProps, 'props', component.name);
  return propsErr;
};

export const storeFactory = initialState => {
  return createStore(RootReducer, initialState);
};
