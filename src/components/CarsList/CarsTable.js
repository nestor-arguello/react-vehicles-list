import React, {useRef} from 'react';
import { Table } from 'antd';
import { useStateValue } from '../../globalState';
import listColumns from './listColumns';
import { getCarsColumnsData } from '../../selectors';
import DetailModal from './DetailModal';
import CreateBtn from './CreateBtn';
import CreateForm from './CreateForm'
import { openCreateModal, closeCreateModal } from '../../actions';

const CarsTable = ({ ...props }) => {
  const [{ cars, actualUserId, showDetailModal, showCreateModal }, dispatch] = useStateValue();
  const data = getCarsColumnsData(cars.byId, actualUserId);

  const handleOpenCreateModal = () => {
    dispatch(openCreateModal());
  };

  const handleCancel = () => {
    dispatch(closeCreateModal());
  };

  const saveFormRef = useRef(null);

  const handleCreate = () => {
    const form = saveFormRef.current.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      // this.setState({ visible: false });
    });
  };


  return (
    <div>
      {console.log(saveFormRef)}
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
      <Table dataSource={data} columns={listColumns} />
    </div>
  );
};

export default CarsTable;
