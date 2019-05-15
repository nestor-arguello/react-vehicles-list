import React from 'react';
import { useStateValue } from '../../globalState/';
import { Modal } from 'antd';
import { closeDetailModal } from '../../actions';

const DetailModal = ({ show, ...props }) => {
  const [state, dispatch] = useStateValue();

  const handleOk = event => {
    event.preventDefault();
    dispatch(closeDetailModal());
  };

  return (
    <Modal
      title="Detail Modal"
      visible={show}
      onOk={handleOk}
      // onCancel={handleCancel}
    >
      <p>Detalles</p>
    </Modal>
  );
};

export default DetailModal;
