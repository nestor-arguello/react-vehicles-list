const initialState = {
  showCreateModal: false,
  showDetailModal: false,
  actualCarId: null,
  actualUserId: null,
  users: {
    allIds: [],
    byId: {}
  },
  cars: {
    allIds: [],
    byId: {}
  }
};

export default initialState;
