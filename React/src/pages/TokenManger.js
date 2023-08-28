import React, { createContext, useState } from 'react';

export const TokenContext = createContext(); // TokenContext를 createContext로 생성합니다.

const TokenManager = ({ children }) => {
  const [token, setToken] = useState('');

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenManager;
