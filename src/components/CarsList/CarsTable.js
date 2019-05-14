import React from 'react';
import { Table } from 'antd';
import { useStateValue } from '../../globalState';
import columns from './columns';

const CarsTable = ({ ...props }) => {
  const [{ users }] = useStateValue();
  const data = users.byIds[1].cars.map((car, index) => {
    const {
      brand,
      year,
      madein,
      maxspeed,
      active
    } = car;
    return {
      key: index,
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
