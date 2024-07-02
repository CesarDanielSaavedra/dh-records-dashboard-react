import React from 'react';
import { useState, useEffect } from 'react';
import CardUsers from '../Components/CardUsers';
import './UsersList.css';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:3030/apis/users';

const UsersList = () => {

    const [users, setUsers] = useState(null);

    useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                if(!response.ok) {                                              // ok = Indica si la solicitud fue exitosa o no
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data.users);

            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();

    }, []);

        if(!users) {
            return <p>No hay usuarios disponibles.</p>;
        }

        return(
            <section className='Lista-usuario__contenedor-general'>
                {users.map((user) => (
                    <Link to={`/users/${user.id}`} key={user.id}>   
                        <CardUsers data={user}/>
                    </Link>                                                  //link = crea enlaces navegables sin recargar la página.
                ))}  
                </section>

        )

}

export default UsersList;