import React, { useState } from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [context, setContext] = useState('api');

  return (
    <AppContext.Provider value={{ context, setContext }}>
      {children}
    </AppContext.Provider>
  );
};