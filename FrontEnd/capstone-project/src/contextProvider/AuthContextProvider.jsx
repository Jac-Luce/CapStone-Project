import React from 'react';
import { createContext } from 'react';
import { useState, useEffect } from 'react';

export const AuthContext = createContext(null);
//export const AuthContext = createContext();

export default function AuthContextProvider({children}) {

  const [token, setToken] = useState(localStorage.getItem("token" || ""));
  
  const [authenticated, setAuthenticated] = useState(true);
  //Stato per lista prenotazioni
  const [myBookingList, setMyBookingList] = useState([]);
  //Funzione che riporta la lista delle prenotazioni
  const getMyBooking = async () => {
    try {
        const response = await fetch(`http://localhost:3001/user/myBooking`, {
            method: "GET",
            headers: {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'}
        });
        //console.log(response.status);
        if(response.ok) {
            const result = await response.json();
            //console.log(result);
            setMyBookingList(result);
        } else {
            console.error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
};

  useEffect(() => {
    setAuthenticated(token !== "");
  }, [token]); 

    const value = {token, setToken , authenticated, myBookingList, getMyBooking };

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  )
}
