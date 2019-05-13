import React from 'react';
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox
} from 'antd';

const SimpleLoginForm = ({
  form: { validateFields, getFieldDecorator },
  handleLogin,
  notMatched,
  ...props
}) => {
  const handleSubmit = event => {
    event.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        handleLogin(values);
      }
    });
  };

  return (
    <Form
      onSubmit={handleSubmit}
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
              message:
                '¡Por favor ingresa tu Contraseña!'
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
      {notMatched && (
        <Form.Item>
          Usuario o Contraseña inválido
        </Form.Item>
      )}
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
          Ingresar
        </Button>
      </Form.Item>
      <Form.Item>
        ¿No tienes cuenta?{' '}
        <a href="/">¡Regístrate ahora!</a>
      </Form.Item>
    </Form>
  );
};

const LoginForm = Form.create({
  name: 'normal_login'
})(SimpleLoginForm);

export default LoginForm;
