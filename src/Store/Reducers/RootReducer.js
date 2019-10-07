/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import PlanetReducer from './PlanetReducer';
import VehicleReducer from './VehicleReducer';
import OutcomeReducer from './OutcomeReducer';
import history from '../../Router/History';

const appReducer = combineReducers({
  planet: PlanetReducer,
  vehicle: VehicleReducer,
  outcome: OutcomeReducer,
  router: connectRouter(history)
});

const RootReducer = (state, action) => {
  if (action.type === 'DESTROY_SESSION') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default RootReducer;
