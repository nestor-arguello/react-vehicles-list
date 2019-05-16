import React from 'react';
import { Button } from 'antd';
import { useStateValue } from '../../globalState';
import { removeCar } from '../../actions';

const RemoveBtn = ({ record, ...props }) => {
  const dispatch = useStateValue()[1];
  const handleClick = event => {
    event.preventDefault();
    dispatch(removeCar(record.key));
  };

  return (
    <Button
      icon="delete"
      style={{ margin: 5 }}
      type="danger"
      onClick={handleClick}
    >
      <span style={{ fontSize: 12 }}>Eliminar</span>
    </Button>
  );
};

export default RemoveBtn;
