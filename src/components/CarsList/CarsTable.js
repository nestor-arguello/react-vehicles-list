import React from 'react';
import { Table, Checkbox, Divider } from 'antd';
import testData from '../../testData'

const data = testData.byIds[1].cars
  .map((car, index) => {
    const { brand, year, madein, maxspeed, active } = car;
    return (
      {
        key: index,
        brand,
        year,
        madein,
        maxspeed,
        active
      }
    )
  })
console.log(data);

const columns = [
  {
    title: 'Marca',
    dataIndex: 'brand',
    key: 'brand'
  },
  {
    title: 'Año de fabricación',
    dataIndex: 'year',
    key: 'year'
  },
  {
    title: 'Origen (País)',
    dataIndex: 'madein',
    key: 'madein'
  },
  {
    title: 'Velocidad máxima',
    dataIndex: 'maxspeed',
    key: 'maxspeed'
  },
  {
    title: 'Activo',
    dataIndex: 'active',
    key: 'active',
    render: active => <Checkbox checked={active} />
  }
];

const CarsTable = ({ ...props }) => {
  return (
    <div>
      <Table
        dataSource={data}
        columns={columns}
      />
      ;
    </div>
  );
};

export default CarsTable;
