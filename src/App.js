import React from 'react';
import './App.css';
import logo from './images/logo-phinx.svg';

import {
  Card,
  Form,
  Icon,
  Input,
  Button,
  Checkbox
} from 'antd';

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(
          'Received values of form: ',
          values
        );
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="login-form"
      >
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '¡Por favor ingresa tu Usuario!'
              }
            ]
          })(
            <Input
              prefix={
                <Icon
                  type="user"
                  style={{ color: 'rgba(0,0,0,.25)' }}
                />
              }
              placeholder="Usuario"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '¡Por favor ingresa tu Contraseña!'
              }
            ]
          })(
            <Input
              prefix={
                <Icon
                  type="lock"
                  style={{ color: 'rgba(0,0,0,.25)' }}
                />
              }
              type="password"
              placeholder="Contraseña"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Recuérdame</Checkbox>)}
          <a className="login-form-forgot" href="/">
            Olvidé mi contraseña
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Siguiente
          </Button>
        </Form.Item>
        <Form.Item>
          ¿Eres nuevo usuario? <a href="/">¡regístrate ahora!</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({
  name: 'normal_login'
})(NormalLoginForm);

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Card
        style={{ width: 350, height: 450 }}
        cover={
          <img
            alt="example"
            src={logo}
            style={{ height: 120 }}
          />
        }
      >
        <WrappedNormalLoginForm />
      </Card>
    </div>
  );
};

export default App;
