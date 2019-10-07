import * as types from '../Types';

const initialState = {
  selectedPlanets: [],
  selectedVehicles: {},
  token: null,
  loading: null,
  aftermath: null,
  totalTime: 0.0,
  error: ''
};

const checkIfPlanetAlreadySelected = (incomingPlanet, selectedPlanets) => {
  const newSelectedPlanets = [...selectedPlanets];
  const existingItemIndex = selectedPlanets.findIndex(
    planet => planet.name === incomingPlanet.name
  );
  if (existingItemIndex > -1) {
    newSelectedPlanets.splice(existingItemIndex, 1);
    return [...newSelectedPlanets];
  }
  if (selectedPlanets.length < 4) {
    return [...selectedPlanets, { ...incomingPlanet }];
  }
  return [...selectedPlanets];
};

const updateTotalExpeditionTime = (selectedPlanets, selectedVehicles) => {
  let newTimeTaken = 0.0;
  selectedPlanets.forEach(item => {
    const expectedSpeedOfExpedition = selectedVehicles[item.name]
      ? selectedVehicles[item.name].speed
      : Number.POSITIVE_INFINITY;
    newTimeTaken += item.distance / expectedSpeedOfExpedition;
  });
  return newTimeTaken;
};

const OutcomeReducer = (state = initialState, action) => {
  let result;
  switch (action.type) {
    case types.LOAD_OUTCOME_TOKEN:
      return {
        ...state,
        token: null,
        loading: true,
        error: ''
      };

    case types.LOAD_OUTCOME_TOKEN_SUCCESS: {
      result = action.result || [];
      return {
        ...state,
        token: result.token,
        loading: false
      };
    }

    case types.LOAD_OUTCOME_TOKEN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error.message
      };

    case types.CLEAR_OUTCOME_CHOICES:
      return {
        ...state,
        selectedPlanets: [],
        selectedVehicles: {},
        token: null,
        aftermath: null
      };

    case types.CHOOSE_PLANET: {
      result = action.result || { name: '', distance: 0 };
      const newSelectedPlanets = checkIfPlanetAlreadySelected(result, state.selectedPlanets);
      return {
        ...state,
        selectedPlanets: newSelectedPlanets
      };
    }

    case types.CHOOSE_VEHICLE: {
      result = action.result || { planet: {}, vehicle: {} };
      const planetName = result.planet.name || '';
      const vehicleObj = result.vehicle || {};
      const newSelectedVehicles = {
        ...state.selectedVehicles
      };
      const currentVehicleUsedCount = Object.values(newSelectedVehicles)
        .map(selectedVehicle => selectedVehicle.name)
        .filter(selectedVehicleName => selectedVehicleName === vehicleObj.name).length;
      if (
        currentVehicleUsedCount + 1 <= vehicleObj.total_no ||
        (newSelectedVehicles[planetName] &&
          newSelectedVehicles[planetName].name === vehicleObj.name)
      )
        newSelectedVehicles[planetName] = vehicleObj;
      return {
        ...state,
        selectedVehicles: newSelectedVehicles,
        totalTime: updateTotalExpeditionTime(state.selectedPlanets, newSelectedVehicles)
      };
    }

    case types.FETCH_OUTCOME_RESULT:
      return {
        ...state,
        aftermath: null,
        loading: true,
        error: ''
      };

    case types.FETCH_OUTCOME_RESULT_SUCCESS: {
      result = action.result || [];
      return {
        ...state,
        aftermath: result,
        loading: false
      };
    }

    case types.FETCH_OUTCOME_RESULT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error.message
      };

    default:
      return state;
  }
};

export default OutcomeReducer;
