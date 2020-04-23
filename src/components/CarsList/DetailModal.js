import React from 'react';
import './detailModal.css';
import { useStateValue } from '../../globalState/';
import { Modal } from 'antd';
import { closeDetailModal, setActualCarId } from '../../actions';
import { Table } from 'antd';
import detailColumns from './detailColumns';
import { getDetailsColumnsData } from '../../selectors';

const DetailModal = ({ show, ...props }) => {
  const [state, dispatch] = useStateValue();
  const { cars, actualCarId } = state;

  const data =
    cars && cars.byId ? getDetailsColumnsData(cars.byId, actualCarId) : null;

  const handleClose = event => {
    event.preventDefault();
    dispatch(setActualCarId(null));
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
      <div className="table-container">
        <Table
          dataSource={data}
          columns={detailColumns}
          pagination={false}
          size="small"
          scroll={{
            x: 'true',
          }}
        />
      </div>
    </Modal>
  );
};

export default DetailModal;
