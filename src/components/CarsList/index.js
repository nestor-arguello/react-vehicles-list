import React from 'react';
import logo from '../../images/20170420_React_logo_wordmark.png';
import { Card } from 'antd';
import CarsTable from './CarsTable';
import BackPortfolioBtn from '../back-portfolio-btn/back-portfolio-btn.component';

const CarsList = () => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <BackPortfolioBtn />
      <Card
        style={{
          width: '90%',
          maxWidth: 1024,
          height: 630,
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
      </Card>
    </div>
  );
};

export default CarsList;
