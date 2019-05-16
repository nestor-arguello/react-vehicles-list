import React from 'react';
import { Modal } from 'antd';

const CreateModal = ({ show, ...props }) => {
  const handleOk = () => {
    console.log('Ok pressed')  
  }
  
  const handleCancel = () => {
    console.log('Cancel pressed')  
  }
  
  return (
    <Modal
      title="Creación de Vehículos"
      visible={show}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      Creación de Vehículos
    </Modal>
  );
};

export default CreateModal;
