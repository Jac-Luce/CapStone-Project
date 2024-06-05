import React from 'react';
import { createContext } from 'react';
import { useState, useEffect } from 'react';

export const AuthContext = createContext(null);
//export const AuthContext = createContext();

export default function AuthContextProvider({children}) {

  const [token, setToken] = useState(localStorage.getItem("token" || ""));
  //const [token, setToken] = useState(null);
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    setAuthenticated(token !== "");
  }, [token]); 

    const value = {token, setToken , authenticated };

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  )
}
