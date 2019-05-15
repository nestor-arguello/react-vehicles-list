import React from 'react';
import { Checkbox } from 'antd';
import RemoveBtn from './RemoveBtn';
import DetailBtn from './DetailBtn';

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
    render: (text, record) => (
      <span>
        <DetailBtn record={record} />
        <RemoveBtn record={record} />
      </span>
    )
  }
];

export default columns;
