import React from 'react';
import { Checkbox, Button } from 'antd';

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
        <Checkbox defaultChecked={active} />
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

export default columns;