import React from 'react';
import { Button } from 'antd';

const RemoveBtn = ({ ...props }) => {
  return (
    <Button
      icon="delete"
      style={{ margin: 5 }}
      type="danger"
    >
      <span style={{ fontSize: 12 }}>Eliminar</span>
    </Button>
  );
};

export default RemoveBtn;
