import { OPEN_MODAL, CLOSE_MODAL } from "./types";

export const openModal = movieID => {
  return {
    type: OPEN_MODAL,
    movieID
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
