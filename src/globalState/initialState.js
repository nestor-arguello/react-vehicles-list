const initialState = {
  showDetailModal: true,
  actualUserId: '1',
  users: {
    allIds: ['1', '2'],
    byId: {
      '1': {
        id: '1',
        username: 'nes',
        password: '123',
        cars: ['1', '2', '3']
      },
      '2': {
        id: '2',
        username: 'leia',
        password: '123',
        cars: ['4']
      }
    }
  },
  cars: {
    allIds: ['1', '2', '3', '4'],
    byId: {
      '1': {
        id: '1',
        userId: '1',
        brand: 'Ferrari',
        year: '1950',
        madein: 'Italia',
        maxspeed: '150',
        active: true
      },
      '2': {
        id: '2',
        userId: '1',
        brand: 'Porsche',
        year: '1988',
        madein: 'Alemania',
        maxspeed: '154',
        active: false
      },
      '3': {
        id: '3',
        userId: '1',
        brand: 'Subaru',
        year: '1977',
        madein: 'Japón',
        maxspeed: '120',
        active: false
      },
      '4': {
        id: '4',
        userId: '2',
        brand: 'Chevrolet',
        year: '1972',
        madein: 'USA',
        maxspeed: '110',
        active: false
      }
    }
  }
};

export default initialState;
