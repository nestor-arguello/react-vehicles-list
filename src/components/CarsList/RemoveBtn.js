import React from 'react';
import { Button, Modal } from 'antd';
import { useStateValue } from '../../globalState';
import { removeCar } from '../../actions';

const RemoveBtn = ({ record, ...props }) => {
  const dispatch = useStateValue()[1];
  const confirm = Modal.confirm;
  const showConfirmRemove = () => {
    confirm({
      title: '¿Deseas eliminar este vehículo?',
      content: 'Se eliminará permanentemente de tu registro',
      okText: 'Eliminar',
      okType: 'danger',
      okButtonProps: {
        disabled: false
      },
      autoFocusButton: 'cancel',
      maskClosable: true,
      cancelText: 'Cancelar',
      onOk() {
        dispatch(removeCar(record.key));
      },
      onCancel() {
        return;
      }
    });
  };
  const handleClick = event => {
    event.preventDefault();
    showConfirmRemove();
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
