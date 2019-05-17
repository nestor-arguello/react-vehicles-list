const initialState = {
  showCreateModal: false,
  showDetailModal: false,
  actualCarId: null,
  actualUserId: null,
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
    allIds: ['1', '2', '3', '4', '7', '8', '9'],
    byId: {
      '1': {
        id: '1',
        userId: '1',
        brand: 'Ferrari',
        year: '1950',
        madein: 'Italia',
        maxspeed: '150',
        active: true,
        description:
          'Posee un motor V8 de 3,9 litros, más pequeño en desplazamiento y de más alta potencia que el del 458.',
        colors: 'Rojo, negro y gris',
        doors: '2'
      },
      '2': {
        id: '2',
        userId: '1',
        brand: 'Porsche',
        year: '1988',
        madein: 'Alemania',
        maxspeed: '154',
        active: false,
        description:
          'Es impulsado por un motor V10 de 5,7 litros y 612 DIN (605 SAE) caballos de potencia (450 kW).',
        colors: 'Amarillo, rojo, azul y negro',
        doors: '2'
      },
      '3': {
        id: '3',
        userId: '1',
        brand: 'Subaru',
        year: '1977',
        madein: 'Japón',
        maxspeed: '120',
        active: false,
        description:
          '2.0 FB20 atmosférico 150cv y FB25 atmosférico ambos con cambio manual de 6 marchas o CVT.',
        colors: 'Gris, azul y negro',
        doors: '5'
      },
      '7': {
        id: '7',
        userId: '1',
        brand: 'Ford',
        year: '1960',
        madein: 'USA',
        maxspeed: '140',
        active: false,
        description:
          'Los motores disponibles eran los ya conocidos SEFI de 1.9 Litros.',
        colors: 'Gris, amarillo, rojo y negro',
        doors: '5'
      },
      '8': {
        id: '8',
        userId: '1',
        brand: 'Fiat',
        year: '1969',
        madein: 'Italia',
        maxspeed: '85',
        active: false,
        description:
          'Los motores disponibles seguirán siendo los bicombustibles 1.0 8v FIRE, 1.4 8v FIRE de 107cv.',
        colors: 'Dorado, azul, rojo y amarillo',
        doors: '3'
      },
      '9': {
        id: '9',
        userId: '1',
        brand: 'Chrysler',
        year: '1980',
        madein: 'USA',
        maxspeed: '110',
        active: false,
        description:
          'Motor 1.4L de 95 caballos de fuerza y 94 pies por libra de torque con trasmisión manual.',
        colors: 'Rojo, verde, negro',
        doors: '4'
      },
      '4': {
        id: '4',
        userId: '2',
        brand: 'Chevrolet',
        year: '1972',
        madein: 'USA',
        maxspeed: '110',
        active: false,
        description:
          'Cuatro en línea (I4) Ecotec, de 1796 cc. de cilindraje, LUW.',
        colors: 'Blanco, negro, azul y rojo',
        doors: '4'
      }
    }
  }
};

export default initialState;
