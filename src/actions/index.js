import {
  OPEN_DETAIL_MODAL,
  CLOSE_DETAIL_MODAL,
  SET_ACTUAL_CAR_ID,
  REMOVE_CAR,
  SET_CAR_ACTIVE,
  OPEN_CREATE_MODAL,
  CLOSE_CREATE_MODAL,
  SAVE_CAR
} from '../actionTypes';

export const openDetailModal = () => ({
  type: OPEN_DETAIL_MODAL,
  payload: true
});

export const closeDetailModal = () => ({
  type: CLOSE_DETAIL_MODAL,
  payload: false
});

export const setActualCarId = id => ({
  type: SET_ACTUAL_CAR_ID,
  payload: id
});

export const removeCar = id => ({
  type: REMOVE_CAR,
  payload: id
});

export const saveCar = (actualUserId, newCar) => ({
  type: SAVE_CAR,
  payload: {
    newCar,
    actualUserId
  }
});

export const setCarActive = (id, isActive) => ({
  type: SET_CAR_ACTIVE,
  payload: {
    id,
    isActive
  }
});

export const openCreateModal = () => ({
  type: OPEN_CREATE_MODAL,
  payload: true
});

export const closeCreateModal = () => ({
  type: CLOSE_CREATE_MODAL,
  payload: false
});
