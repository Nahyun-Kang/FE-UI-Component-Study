import { createContext, useContext, useReducer } from 'react';

import toastReducer from './toastReducer';

const ToastContext = createContext();

export const useToastContext = () => {
  return useContext(ToastContext);
};

const ToastProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, false);

  return (
    <ToastContext.Provider value={{ state, dispatch }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
