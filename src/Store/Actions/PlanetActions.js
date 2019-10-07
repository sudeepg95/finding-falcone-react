import * as types from '../Types';

const API_URL =
  process.env.REACT_APP_API_BASE_URL !== ''
    ? process.env.REACT_APP_API_BASE_URL
    : window.location.hostname;
const urlProtocol = 'https:';
const PLANETS_API_URL = `${API_URL}/planets`;

export function fetchPlanetsData() {
  return {
    types: [
      types.LOAD_PLANETS_DATA,
      types.LOAD_PLANETS_DATA_SUCCESS,
      types.LOAD_PLANETS_DATA_FAILURE
    ],
    promise: client => client.get(`${urlProtocol}${PLANETS_API_URL}`)
  };
}

export function clearPlanetItems() {
  return {
    type: types.CLEAR_PLANET_ITEMS
  };
}
