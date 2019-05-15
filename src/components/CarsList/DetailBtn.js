import React from 'react';
import { Button } from 'antd';
import { useStateValue } from '../../globalState';
import { openDetailModal } from '../../actions';

const DetailBtn = ({ record, ...props }) => {
  const [state, dispatch] = useStateValue();
  const handleClick = event => {
    event.preventDefault();
    console.log(record);
    dispatch(openDetailModal());
  };

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
