import userReducer from './userReducer';

const mainReducer = ({ user }, action) => ({
  user: userReducer(user, action)
});

export default mainReducer;
