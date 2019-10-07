/* eslint-disable indent */
import * as types from '../Types';

const initialState = {
  vehicles: [],
  selectedVehicles: [],
  loading: null,
  error: ''
};

const VehicleReducer = (state = initialState, action) => {
  let result;
  switch (action.type) {
    case types.LOAD_VEHICLES_DATA:
      return {
        ...state,
        vehicles: [],
        selectedVehicles: [],
        loading: true
      };

    case types.LOAD_VEHICLES_DATA_SUCCESS: {
      result = action.result || [];
      return {
        ...state,
        vehicles: result,
        loading: false
      };
    }

    case types.LOAD_VEHICLES_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error.message
      };

    case types.CLEAR_VEHICLE_ITEMS:
      return {
        ...state,
        vehicles: [],
        selectedVehicles: []
      };

    default:
      return state;
  }
};

export default VehicleReducer;
