import React from 'react';
import { Table, Checkbox, Button } from 'antd';
import testData from '../../testData';

const data = testData.byIds[1].cars.map(
  (car, index) => {
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
  }
);

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
    title: 'Estado',
    dataIndex: 'active',
    key: 'active',
    render: active => (
      <>
        <span>Activo &nbsp;</span>{' '}
        <Checkbox checked={active} />
      </>
    )
  },
  {
    title: 'Acciones',
    key: 'action',
    render: record => (
      <span>
        {console.log(record)}
        <Button
          icon="file-search"
          style={{ margin: 5 }}
          type="default"
        >
          <span style={{ fontSize: 12 }}>Detalle</span>
        </Button>
        <Button
          icon="delete"
          style={{ margin: 5 }}
          type="danger"
        >
          <span style={{ fontSize: 12 }}>Eliminar</span>
        </Button>
      </span>
    )
  }
];

const CarsTable = ({ ...props }) => {
  return (
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default CarsTable;
