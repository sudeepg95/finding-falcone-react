import * as types from '../Types';

const PLANETS_API_URL = '/planets';

export function fetchPlanetsData() {
  return {
    types: [
      types.LOAD_PLANETS_DATA,
      types.LOAD_PLANETS_DATA_SUCCESS,
      types.LOAD_PLANETS_DATA_FAILURE
    ],
    promise: client => client.get(`${PLANETS_API_URL}`)
  };
}

export function clearPlanetItems() {
  return {
    type: types.CLEAR_PLANET_ITEMS
  };
}
