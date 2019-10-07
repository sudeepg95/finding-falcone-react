import * as types from '../Types';

const initialState = {
  planets: [],
  loading: null,
  error: ''
};

const PlanetReducer = (state = initialState, action) => {
  let result;
  switch (action.type) {
    case types.LOAD_PLANETS_DATA:
      return {
        ...state,
        planets: [],
        loading: true,
        error: ''
      };

    case types.LOAD_PLANETS_DATA_SUCCESS: {
      result = action.result || [];
      return {
        ...state,
        planets: result,
        loading: false
      };
    }

    case types.LOAD_PLANETS_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error.message
      };

    case types.CLEAR_PLANET_ITEMS:
      return {
        ...state,
        planets: []
      };

    default:
      return state;
  }
};

export default PlanetReducer;
