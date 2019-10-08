import * as types from '../Types';

const VEHICLES_API_URL = '/vehicles';

export function fetchVehiclesData() {
  return {
    types: [
      types.LOAD_VEHICLES_DATA,
      types.LOAD_VEHICLES_DATA_SUCCESS,
      types.LOAD_VEHICLES_DATA_FAILURE
    ],
    promise: client => client.get(`${VEHICLES_API_URL}`)
  };
}

export function clearVehicleItems() {
  return {
    type: types.CLEAR_PLANET_ITEMS
  };
}
