import React from 'react';
import { Button } from 'antd';

const CreateBtn = ({ ...props }) => {
  const handleClick = event => {
    event.preventDefault();
    console.log(event.target)
  }
  return (
    <Button type="primary" size="default" icon="form" onClick={handleClick}>
      Crear vehículo
    </Button>
  );
};

export default CreateBtn;
