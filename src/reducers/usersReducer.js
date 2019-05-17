export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_USER_FROM_REF': {
      return payload;
    }
    default:
      return state;
  }
};
