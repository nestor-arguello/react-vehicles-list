import React, { useState } from 'react';
import { useStateValue } from './globalState';
import Login from './components/Login';
import CarList from './components/CarsList';
import { getUsersById } from './selectors';
import { setActualUserId } from './actions';

/*******************
 *  user: nes      *
 *  password: 123  *
 *******************/

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [notMatched, setNotMatched] = useState(null);

  const [{ users }, dispatch] = useStateValue();

  const handleLogin = ({ username, password }) => {
    getUsersById(users).some(user => {
      if (user.username === username && user.password === password) {
        setIsLogged(true);
        dispatch(setActualUserId(user.id));
        // setNotMatched(null);
        return true;
      }
      setNotMatched(true);
      return false;
    });
  };

  return isLogged ? (
    <CarList />
  ) : (
    <Login handleLogin={handleLogin} notMatched={notMatched} />
  );
};

export default App;
