import { SET_ACTUAL_CAR_ID } from '../actionTypes';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ACTUAL_CAR_ID: {
      return payload;
    }
    default:
      return state;
  }
};
