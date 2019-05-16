import { REMOVE_CAR, SET_CAR_ACTIVE } from '../actionTypes';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case REMOVE_CAR: {
      const newIds = state.allIds.filter(id => {
        return id !== payload;
      });
      const newCars = newIds.reduce((acc, id) => {
        acc[id] = state.byId[id];

        return acc;
      }, {});

      return {
        ...state,
        allIds: newIds,
        byId: newCars
      }
    }
    case SET_CAR_ACTIVE: {
      const {id, isActive} = payload;

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            active: isActive
          } 
        }
      }
    }
    default:
      return state;
  }
};
