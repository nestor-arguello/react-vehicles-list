import React, { useState } from 'react';
import { StateProvider } from './globalState';
import Login from './components/Login';
import CarList from './components/CarsList';
import initialState from './globalState/initialState';
import mainReducer from './reducers/index';

/*******************
 *  user: nes      *
 *  password: 123  *
 *******************/

// const users = initialState;

const App = () => {
  // const [isLogged, setIsLogged] = useState(false);
  // const [notMatched, setNotMatched] = useState(null);

  // const handleLogin = ({ username, password }) => {
  //   users.some(user => {
  //     if (
  //       user.username === username &&
  //       user.password === password
  //     ) {
  //       setIsLogged(true);
  //       setNotMatched(null);
  //       return true;
  //     }
  //     setNotMatched(true);
  //     return false;
  //   });
  // };

  // return isLogged ? (
  return (
    <StateProvider
      reducer={mainReducer}
      initialState={initialState}
    >
      <CarList />
    </StateProvider>
  );
  // ) : (
  // <Login
  //   handleLogin={handleLogin}
  //   notMatched={notMatched}
  // />
  // );
};

export default App;
