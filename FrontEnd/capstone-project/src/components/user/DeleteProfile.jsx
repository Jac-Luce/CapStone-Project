import React from 'react';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contextProvider/AuthContextProvider.jsx';
import { useNavigate } from 'react-router-dom';

export default function DeleteProfile({id}) {
    const {token} = useContext(AuthContext);

    const navigate = useNavigate();

    const deleteMyProfile = async () => {
        try {
            const response = await fetch(`http://localhost:3001/user/delete`, {
                method: 'DELETE',
                headers: {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'}
            });

            if(response.ok){
                alert('Account eliminato!')
            } else {
                alert('Riprova! Il tuo account non è stato eliminato!')
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if(token === "")
        navigate("/");
    }, []);

  return (
    <button className='btn btn-link' style={{color: 'red'}} onClick={deleteMyProfile}>Elimina il tuo account</button>
  )
}
