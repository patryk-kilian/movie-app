import { FETCH_MOVIES, GET_DETAILS } from "../actions/types";

const initialState = {
  items: {},
  details: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        items: action.payload
      };
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload
      };
    default:
      return state;
  }
}
