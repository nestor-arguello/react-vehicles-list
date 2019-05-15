import React from 'react';
import './detailModal.css';
import { useStateValue } from '../../globalState/';
import { Modal } from 'antd';
import { closeDetailModal } from '../../actions';
import { Table } from 'antd';
import detailColumns from './detailColumns'
import { getDetailsColumnsData } from '../../selectors';

const DetailModal = ({ show, ...props }) => {
  const [state, dispatch] = useStateValue();
  const {cars, actualCarId} = state;

  const data = getDetailsColumnsData(cars.byId, actualCarId);

  const handleClose = event => {
    event.preventDefault();
    dispatch(closeDetailModal());
  };

  return (
    <Modal
      className="detail-modal"
      title="Detalle de vehículo"
      width={'95%'}
      visible={show}
      onOk={handleClose}
      onCancel={handleClose}
      maskClosable
    >
      <Table
        dataSource={data}
        columns={detailColumns}
        pagination={false}
      />
    </Modal>
  );
};

export default DetailModal;
