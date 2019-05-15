import usersReducer from './usersReducer';
import carsReducer from './carsReducer';
import detailModalReducer from './detailModalReducer';

const mainReducer = (state, action) => {
  const { users, cars, showDetailModal } = state;

  return {
    ...state,
    users: usersReducer(users, action),
    cars: carsReducer(cars, action),
    showDetailModal: detailModalReducer(showDetailModal, action)
  };
};

export default mainReducer;
