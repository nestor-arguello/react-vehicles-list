import usersReducer from './usersReducer';
import carsReducer from './carsReducer';
import detailModalReducer from './detailModalReducer';
import actualCarReducer from './actualCarReducer';
import createModalReducer from './createModalReducer';

const mainReducer = (state, action) => {
  const { users, cars, showDetailModal, actualCarId, showCreateModal } = state;

  return {
    ...state,
    users: usersReducer(users, action),
    cars: carsReducer(cars, action),
    showDetailModal: detailModalReducer(showDetailModal, action),
    actualCarId: actualCarReducer(actualCarId, action),
    showCreateModal: createModalReducer(showCreateModal, action)
  };
};

export default mainReducer;
