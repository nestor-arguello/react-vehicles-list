import React from 'react';
import { Button } from 'antd';
import { useStateValue } from '../../globalState';
import { openDetailModal, setActualCarId } from '../../actions';

const DetailBtn = ({ record, ...props }) => {
  const dispatch = useStateValue()[1];

  const handleClick = event => {
    event.preventDefault();
    dispatch(setActualCarId(record.key));
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
