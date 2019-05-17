import React, { useState } from 'react';
import firebase from 'firebase';
import { useStateValue } from './globalState';
import Login from './components/Login';
import CarList from './components/CarsList';
import { getUsersById } from './selectors';
import { setActualUserId } from './actions';

const firebaseConfig = {
  apiKey: 'AIzaSyBEHzJ-j2slStAwaWJi-cVUwtTKbWsn-zg',
  authDomain: 'phinx-tp-nestor.firebaseapp.com',
  databaseURL: 'https://phinx-tp-nestor.firebaseio.com',
  projectId: 'phinx-tp-nestor',
  storageBucket: 'phinx-tp-nestor.appspot.com',
  messagingSenderId: '584405729890',
  appId: '1:584405729890:web:654858e05a24ffeb'
};

firebase.initializeApp(firebaseConfig);

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
