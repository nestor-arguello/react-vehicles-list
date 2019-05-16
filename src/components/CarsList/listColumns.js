import React from 'react';
import RemoveBtn from './RemoveBtn';
import DetailBtn from './DetailBtn';
import ActiveCarCheckbox from './ActiveCarCheckbox';

const listColumns = [
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
    render: (active, record) => {
      return (
        <>
          <span>Activo &nbsp;</span>
          <ActiveCarCheckbox isActive={active} record={record} />
        </>
      );
    }
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

export default listColumns;
