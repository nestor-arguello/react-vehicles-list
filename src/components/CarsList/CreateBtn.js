import React from 'react';
import { Button } from 'antd';

const CreateBtn = ({ onClick, ...props }) => {
  const handleClick = event => {
    event.preventDefault();
    onClick();
  }
  return (
    <Button type="primary" size="default" icon="form" onClick={handleClick}>
      Crear vehículo
    </Button>
  );
};

export default CreateBtn;
