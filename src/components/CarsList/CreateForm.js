import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';

const CreateForm = Form.create({ name: 'form_in_modal' })(
  class extends Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Crear vehículo nuevo"
          okText="Guardar"
          cancelText="Cancelar"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Marca">
              {getFieldDecorator('brand', {
                rules: [
                  {
                    required: true,
                    message: 'Campo obligatorio'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Año de fabrición">
              {getFieldDecorator('year', {
                rules: [
                  {
                    required: true,
                    message: 'Campo obligatorio'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Origen (País)">
              {getFieldDecorator('madein', {
                rules: [
                  {
                    required: true,
                    message: 'Campo obligatorio'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Velocidad máxima">
              {getFieldDecorator('maxspeed', {
                rules: [
                  {
                    required: true,
                    message: 'Campo obligatorio'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Descripción">
              {getFieldDecorator('description', {
                rules: [
                  {
                    required: true,
                    message: 'Campo obligatorio'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Colores disponibles">
              {getFieldDecorator('colors', {
                rules: [
                  {
                    required: true,
                    message: 'Campo obligatorio'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Cantidad de puertas">
              {getFieldDecorator('doors', {
                rules: [
                  {
                    required: true,
                    message: 'Campo obligatorio'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            
          </Form>
        </Modal>
      );
    }
  }
);

export default CreateForm;

// class CollectionsPage extends React.Component {
//   state = {
//     visible: false
//   };

//   render() {
//     return (
//       <div>
//         <Button type="primary" onClick={this.showModal}>
//           New Collection
//         </Button>
//         <CollectionCreateForm
//           wrappedComponentRef={this.saveFormRef}
//           visible={this.state.visible}
//           onCancel={this.handleCancel}
//           onCreate={this.handleCreate}
//         />
//       </div>
//     );
//   }
// }
