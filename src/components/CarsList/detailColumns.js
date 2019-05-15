import React from 'react';

const detailColumns = [
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
    render: active => (active ? <span>Activo</span> : <span>Inactivo</span>)
  },
  {
    title: 'Descripción',
    dataIndex: 'description',
    key: 'description'
  },
  {
    title: 'Colores disponibles',
    dataIndex: 'colors',
    key: 'colors'
  },
  {
    title: 'Cantidad de puertas',
    dataIndex: 'doors',
    key: 'doors'
  }
];

export default detailColumns;
