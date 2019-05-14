const initialState = {
  users: {
    allIds: [1],
    byIds: {
      1: {
        username: 'nes',
        password: '123',
        cars: [
          {
            brand: 'Ferrari',
            year: '1950',
            madein: 'Italia',
            maxspeed: '150',
            active: true
          },
          {
            brand: 'Porsche',
            year: '1988',
            madein: 'Alemania',
            maxspeed: '154',
            active: false
          },
          {
            brand: 'Subaru',
            year: '1977',
            madein: 'Japón',
            maxspeed: '120',
            active: false
          }
        ]
      }
    }
  }
};

export default initialState;