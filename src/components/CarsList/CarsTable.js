import React from 'react';
import { Table } from 'antd';
import { useStateValue } from '../../globalState';
import listColumns from './listColumns';
import { getCarsColumnsData } from '../../selectors';
import DetailModal from './DetailModal';
import CreateBtn from './CreateBtn';

const CarsTable = ({ ...props }) => {
  const [{ cars, actualUserId, showDetailModal }] = useStateValue();
  const data = getCarsColumnsData(cars.byId, actualUserId);

  return (
    <div>
      <DetailModal show={showDetailModal} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: 10
        }}
      >
        <CreateBtn />
      </div>
      <Table dataSource={data} columns={listColumns} />
    </div>
  );
};

export default CarsTable;
