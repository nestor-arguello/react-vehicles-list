import React from 'react';
import logo from '../../images/logo-phinx.svg';
import './index.css';
import { Card } from 'antd';
import LoginForm from './LoginForm';

const Login = ({
  handleLogin,
  notMatched,
  ...props
}) => {
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
        style={{
          width: 350,
          height: 510,
          boxShadow:
            '0px 2px 8px 0px rgba(0, 0, 0, 0.1)'
        }}
        cover={
          <img
            alt="example"
            src={logo}
            style={{ height: 120 }}
          />
        }
      >
        <LoginForm
          handleLogin={handleLogin}
          notMatched={notMatched}
        />
      </Card>
    </div>
  );
};

export default Login;
