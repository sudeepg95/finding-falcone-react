import * as types from '../Types';

const API_URL =
  process.env.REACT_APP_API_BASE_URL !== ''
    ? process.env.REACT_APP_API_BASE_URL
    : window.location.hostname;
const urlProtocol = 'https:';
const VEHICLES_API_URL = `${API_URL}/vehicles`;

export function fetchVehiclesData() {
  return {
    types: [
      types.LOAD_VEHICLES_DATA,
      types.LOAD_VEHICLES_DATA_SUCCESS,
      types.LOAD_VEHICLES_DATA_FAILURE
    ],
    promise: client => client.get(`${urlProtocol}${VEHICLES_API_URL}`)
  };
}

export function clearVehicleItems() {
  return {
    type: types.CLEAR_PLANET_ITEMS
  };
}
