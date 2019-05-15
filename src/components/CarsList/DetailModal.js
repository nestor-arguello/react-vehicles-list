import React, {useState} from 'react';
import { Modal } from 'antd';

const DetailModal = ({ show, ...props }) => {
  const [visible, setVisible] = useState(show)
  
  const handleOk = event => {
    
  }
  
  return (
    <Modal
      title="Detail Modal"
      visible={show}
      // onOk={handleOk}
      // onCancel={handleCancel}
    >
      <p>Detalles</p>
    </Modal>
  );
};

export default DetailModal;
