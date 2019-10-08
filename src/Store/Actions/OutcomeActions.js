import * as types from '../Types';

const TOKEN_API_URL = '/token';
const FIND_API_URL = '/find';

export function selectPlanet(planet) {
  return {
    type: types.CHOOSE_PLANET,
    result: {
      ...planet
    }
  };
}

export function selectVehicle(vehicle, planet) {
  return {
    type: types.CHOOSE_VEHICLE,
    result: {
      planet: { ...planet },
      vehicle: { ...vehicle }
    }
  };
}

export function fetchToken() {
  return {
    types: [
      types.LOAD_OUTCOME_TOKEN,
      types.LOAD_OUTCOME_TOKEN_SUCCESS,
      types.LOAD_OUTCOME_TOKEN_FAILURE
    ],
    promise: client => client.post(`${TOKEN_API_URL}`, {})
  };
}

export function findFalcone() {
  return {
    types: [
      types.FETCH_OUTCOME_RESULT,
      types.FETCH_OUTCOME_RESULT_SUCCESS,
      types.FETCH_OUTCOME_RESULT_FAILURE
    ],
    promise: (client, { outcome: { token, selectedPlanets, selectedVehicles } }) => {
      const planetNames = selectedPlanets.map(planet => planet.name);
      const vehicleNames = Object.values(selectedVehicles).map(vehicle => vehicle.name);
      const payload = {
        token,
        planet_names: planetNames,
        vehicle_names: vehicleNames
      };
      return client.post(`${FIND_API_URL}`, payload);
    }
  };
}

export function clearOutcome() {
  return {
    type: types.CLEAR_OUTCOME_CHOICES
  };
}
