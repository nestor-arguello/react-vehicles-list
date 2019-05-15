import React from 'react';
import { Button } from 'antd';

const DetailBtn = ({ record, ...props }) => {
  const handleClick = event => {
    event.preventDefault();
    console.log(record);
  }

  return (
    <Button
      icon="file-search"
      style={{ margin: 5 }}
      type="default"
      onClick={handleClick}
    >
      <span style={{ fontSize: 12 }}>Detalle</span>
    </Button>
  );
};

export default DetailBtn;
