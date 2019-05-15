import React from 'react';
import { Table } from 'antd';
import { useStateValue } from '../../globalState';
import columns from './columns';

const CarsTable = ({ ...props }) => {
  const [{ cars, actualUserId }] = useStateValue();
  const carsObject = cars.byIds;

  console.log(carsObject['1'].userId);

  const data = Object.keys(carsObject)
    .reduce((cars, id) => {
      if (carsObject[id].userId === actualUserId) {
        cars.push(carsObject[id]);
      }
      return cars;
    }, [])
    .map(car => {
      const {
        id,
        brand,
        year,
        madein,
        maxspeed,
        active
      } = car;
      return {
        key: id,
        brand,
        year,
        madein,
        maxspeed,
        active
      };
    });

  return (
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default CarsTable;
