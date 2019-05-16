import {
  CLOSE_DETAIL_MODAL,
  OPEN_DETAIL_MODAL,
  SET_ACTUAL_CAR_ID,
  REMOVE_CAR,
  SET_CAR_ACTIVE
} from '../actionTypes';

export const closeDetailModal = () => ({
  type: CLOSE_DETAIL_MODAL,
  payload: false
});

export const openDetailModal = () => ({
  type: OPEN_DETAIL_MODAL,
  payload: true
});

export const setActualCarId = id => ({
  type: SET_ACTUAL_CAR_ID,
  payload: id
});

export const removeCar = id => ({
  type: REMOVE_CAR,
  payload: id
});

export const setCarActive = (id, isActive) => ({
  type: SET_CAR_ACTIVE,
  payload: {
    id,
    isActive
  }
});
