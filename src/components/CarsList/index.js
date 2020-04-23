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
        alignItems: 'center',
      }}
    >
      <Card
        style={{
          height: '100%',
          boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.1)',
          margin: '0 auto',
          width: '100%'
        }}
        extra={
          <div style={{ display: 'flex' }}>
            <img alt="example" src={logo} style={{ height: 40, width: 120 }} />
          </div>
        }
        title={
          <BackPortfolioBtn />
        }
      >
        <CarsTable />
      </Card>
    </div>
  );
};

export default CarsList;
