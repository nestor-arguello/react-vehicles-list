import React, { useState } from 'react';
import Login from './components/Login';
import testData from './testData';

/*******************
 *  user: nes      *
 *  password: 123  *
 *******************/

const users = testData;

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [notMatched, setNotMatched] = useState(null);

  const handleLogin = ({ username, password }) => {
    users.some(user => {
      if (
        user.username === username &&
        user.password === password
      ) {
        setIsLogged(true);
        setNotMatched(null);
        return true;
      }
      setNotMatched(true);
      return false;
    });
  };

  return isLogged ? (
    <p>CarsList</p>
  ) : (
    <Login
      handleLogin={handleLogin}
      notMatched={notMatched}
    />
  );
};

export default App;
