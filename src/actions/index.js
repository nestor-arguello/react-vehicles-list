import { CLOSE_DETAIL_MODAL, OPEN_DETAIL_MODAL } from '../actionTypes';

export const closeDetailModal = () => ({
  type: CLOSE_DETAIL_MODAL,
  payload: false
});

export const openDetailModal = () => ({
  type: OPEN_DETAIL_MODAL,
  payload: true
});
