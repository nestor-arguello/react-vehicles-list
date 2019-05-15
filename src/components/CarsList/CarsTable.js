import React, { useState } from 'react';
import { Table } from 'antd';
import { useStateValue } from '../../globalState';
import columns from './columns';
import DetailModal from './DetailModal';

const CarsTable = ({ ...props }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [{ cars, actualUserId }] = useStateValue();
  const carsObjects = cars.byIds;

  const data = Object.keys(carsObjects)
    .reduce((cars, id) => {
      if (carsObjects[id].userId === actualUserId) {
        cars.push(carsObjects[id]);
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
      <DetailModal show={showDetail} />
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default CarsTable;
