import { CLOSE_DETAIL_MODAL, OPEN_DETAIL_MODAL,SET_ACTUAL_CAR_ID } from '../actionTypes';

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