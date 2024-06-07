import React from 'react';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../contextProvider/AuthContextProvider.jsx';
import { useNavigate } from 'react-router-dom';
import { MdLogout } from "react-icons/md";

export default function Logout() {
    const {setToken} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        setToken("");

        localStorage.removeItem("token");

        navigate("/login");
    }
  return (
    <Button variant='danger' className='rounded-circle mx-4 px-1 py-0' onClick={handleLogout}> <MdLogout /> </Button>
  )
}
