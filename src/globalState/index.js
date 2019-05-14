import React, {
  createContext,
  useContext,
  useReducer
} from 'react';

const StateContext = createContext();

export const StateProvider = ({
  reducer,
  initialState,
  children
}) => {
  const { Provider } = StateContext;

  return (
    <Provider value={useReducer(reducer, initialState)}>
      {children}
    </Provider>
  );
};

export const useStateValue = () => useContext(StateContext);