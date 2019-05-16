export const getUsersById = users => {
  return users.allIds.map(id => {
    return users.byId[id];
  });
};

export const getCarsColumnsData = (carsById, actualUserId) => {
  return Object.keys(carsById)
    .reduce((cars, id) => {
      if (carsById[id].userId === actualUserId) {
        cars.push(carsById[id]);
      }
      return cars;
    }, [])
    .map(car => {
      const { id, brand, year, madein, maxspeed, active } = car;

      return {
        key: id,
        brand,
        year,
        madein,
        maxspeed,
        active
      };
    });
};

export const getDetailsColumnsData = (carsById, carId) => {
  if (carId) {
    const {
      id,
      brand,
      year,
      madein,
      maxspeed,
      active,
      description,
      colors,
      doors
    } = carsById[carId];

    return [
      {
        key: id,
        brand,
        year,
        madein,
        maxspeed,
        active,
        description,
        colors,
        doors
      }
    ];
  }
};
