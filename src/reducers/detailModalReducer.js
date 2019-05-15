import { CLOSE_DETAIL_MODAL, OPEN_DETAIL_MODAL } from '../actionTypes';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CLOSE_DETAIL_MODAL: {
      return payload;
    }
    case OPEN_DETAIL_MODAL: {
      return payload;
    }
    default:
      return state;
  }
};
