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
        // setNotMatched(null);
        return true;
      }
      setNotMatched(true);
      return false;
    });
  };

  // useEffect(() => {
  //   const usersRef = firebase.database().ref('users');
  //   usersRef.on('value', (snapshot) => {
  //     let usersSnapshot = snapshot.val();

  //     const setUsersRef = users => {
  //       return {
  //         type: 'SET_USER_FROM_REF',
  //         payload: users
  //       };
  //     }
  //     dispatch(setUsersRef(usersSnapshot));

  //   })

  //   const carsRef = firebase.database().ref('cars');
  //   carsRef.on('value', (snapshot) => {
  //     let carsSnapshot = snapshot.val();

  //     const setCarsRef = cars => {
  //       return {
  //         type: 'SET_CAR_FROM_REF',
  //         payload: cars
  //       };
  //     }
  //     dispatch(setCarsRef(carsSnapshot));
  //   })

  //   console.log(users, cars)
  // }, [users, cars])

  return isLogged ? (
    <CarList />
  ) : (
    <Login handleLogin={handleLogin} notMatched={notMatched} />
  );
};

export default App;
