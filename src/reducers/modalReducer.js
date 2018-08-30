import { OPEN_MODAL, CLOSE_MODAL } from "../actions/types";

const initialState = {
  isOpen: false,
  movieID: undefined
};

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true,
        movieID: action.movieID
      };
    case CLOSE_MODAL:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
