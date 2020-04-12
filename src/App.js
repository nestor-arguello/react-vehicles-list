import React from 'react';
import CarList from './components/CarsList';

const App = () => {
  // const [isLogged, setIsLogged] = useState(false);
  // const [notMatched, setNotMatched] = useState(null);

  // const [{ users }, dispatch] = useStateValue();

  // const handleLogin = ({ username, password }) => {
  //   getUsersById(users).some(user => {
  //     if (user.username === username && user.password === password) {
  //       setIsLogged(true);
  //       dispatch(setActualUserId(user.id));
  //       return true;
  //     }
  //     setNotMatched(true);
  //     return false;
  //   });
  // };

  return <CarList />;
};

export default App;
