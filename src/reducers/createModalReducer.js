import { OPEN_CREATE_MODAL, CLOSE_CREATE_MODAL } from '../actionTypes';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case OPEN_CREATE_MODAL: {
      return payload;
    }
    case CLOSE_CREATE_MODAL: {
      return payload;
    }
    default:
      return state;
  }
};
