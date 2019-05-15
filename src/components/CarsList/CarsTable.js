import React from 'react';
import { Table } from 'antd';
import { useStateValue } from '../../globalState';
import columns from './columns';
import { getCarsColumnsData } from '../../selectors';
import DetailModal from './DetailModal';

const CarsTable = ({ ...props }) => {
  const [{ cars, actualUserId, showDetailModal }] = useStateValue();
  const data = getCarsColumnsData(cars.byId, actualUserId);

  return (
    <div>
      <DetailModal show={showDetailModal} />
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default CarsTable;
