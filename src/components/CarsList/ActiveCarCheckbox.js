import React from 'react';
import { Checkbox } from 'antd';
import { setCarActive } from '../../actions';
import { useStateValue } from '../../globalState';

const ActiveCarCheckbox = ({ isActive, record, ...props }) => {
  const dispatch = useStateValue()[1];
  const handleActiveChange = (recordId, event) => {
    dispatch(setCarActive(recordId, event.target.checked));
  };

  return (
    <Checkbox
      defaultChecked={isActive}
      onChange={handleActiveChange.bind(null, record.key)}
    />
  );
};

export default ActiveCarCheckbox;
