import React from 'react';
import logo from '../../images/logo-phinx-cool.svg';
import { Card } from 'antd';
import CarsTable from './CarsTable';

const CarsList = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Card
        style={{
          width: '90%',
          maxWidth: 1024,
          height: 510,
          boxShadow:
            '0px 2px 8px 0px rgba(0, 0, 0, 0.1)'
        }}
        extra={
          <img
            alt="example"
            src={logo}
            style={{ height: 40, width: 120 }}
          />
        }
        title={
          <h3
            style={{
              margin: 0,
              padding: 0,
              fontWeight: '600'
            }}
          >
            Listado de Vehículos
          </h3>
        }
      >
        <CarsTable />
        {console.log('[CarsList rendered!]')}
      </Card>
    </div>
  );
};

export default CarsList;
