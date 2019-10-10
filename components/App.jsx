import React, { useState, useEffect } from 'react';

import Form from './Form';
import UsersList from './UsersList';

import { getUsers, deleteUser } from 'source';

import { showError } from 'utils';
import '../css/style.css';

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            let result = await getUsers()
                .then(response => response.data)
                .catch(showError);
            setUsers(result);
        })();
    }, []);

    const updateUsersList = () => {
        getUsers()
            .then(({ data }) => setUsers([...data]))
            .catch(showError);
    };

    const handleDeleteUser = id => () => {
        deleteUser(id)
            .then(() => {
                updateUsersList();
            })
            .catch(showError);
    };

    //const { updateUsersList, deleteUser } = this;
    //const { users } = this.state;
    console.log('users', users);
    return (
        <div className="container">
            <Form updateUsersList={updateUsersList} />
            <UsersList data={users} deleteUser={handleDeleteUser} />
        </div>
    );
};

export default App;
