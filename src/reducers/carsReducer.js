import { REMOVE_CAR, SET_CAR_ACTIVE, SAVE_CAR } from '../actionTypes';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CAR_FROM_REF': {
      return payload;
    }
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
      };
    }
    case SET_CAR_ACTIVE: {
      const { id, isActive } = payload;

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            active: isActive
          }
        }
      };
    }
    case SAVE_CAR: {
      const { newCar, actualUserId } = payload;
      // ******* only for internal state management ****
      const newId = String(state.allIds.length + 100);
      // ***************** ####### **************
      return {
        ...state,
        allIds: [...state.allIds, newId],
        byId: {
          ...state.byId,
          [newId]: {
            ...newCar,
            id: newId,
            userId: actualUserId,
            active: false
          }
        }
      };
    }
    default:
      return state;
  }
};
