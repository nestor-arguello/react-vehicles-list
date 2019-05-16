import React, { useRef } from 'react';
import { Table } from 'antd';
import { useStateValue } from '../../globalState';
import listColumns from './listColumns';
import { getCarsColumnsData } from '../../selectors';
import DetailModal from './DetailModal';
import CreateBtn from './CreateBtn';
import CreateForm from './CreateForm';
import { openCreateModal, closeCreateModal, saveCar } from '../../actions';

const CarsTable = ({ ...props }) => {
  const [
    { cars, actualUserId, showDetailModal, showCreateModal },
    dispatch
  ] = useStateValue();
  const data = getCarsColumnsData(cars.byId, actualUserId);

  const saveFormRef = useRef(null);
  
  const handleOpenCreateModal = () => {
    dispatch(openCreateModal());
  };

  const handleCancel = () => {
    dispatch(closeCreateModal());
  };

  const handleCreate = () => {
    const form = saveFormRef.current.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      form.resetFields();
      dispatch(saveCar(actualUserId, values));
      dispatch(closeCreateModal());      
    });
  };

  return (
    <div>
      <DetailModal show={showDetailModal} />
      <CreateForm
        wrappedComponentRef={saveFormRef}
        visible={showCreateModal}
        onCancel={handleCancel}
        onCreate={handleCreate}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: 10
        }}
      >
        <CreateBtn onClick={handleOpenCreateModal} />
      </div>
      <Table
        dataSource={data}
        columns={listColumns}
        pagination={{ defaultPageSize: 5 }}
        scroll={{ x: 700, y:350 }}
      />
    </div>
  );
};

export default CarsTable;
