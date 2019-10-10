import React, { Fragment, useState } from 'react';
import EditForm from './EditForm';

const UsersList = ({ data, deleteUser, editUser }) => {
    const [editedUser, setEditedUser] = useState(null);

    const selectEditedUser = id => {
        const user = data !== undefined && data.find(x => x.id === id);
        setEditedUser(user);
    };

    return (
        <>
            {data.length !== 0 ? (
                <ul className="list-container">
                    {data.map((item, index) => (
                        <li key={index} className="list-item">
                            <p className="list-item__string">{`First name: ${item.firstName}`}</p>
                            <p className="list-item__string">{`Second name: ${item.secondName}`}</p>
                            <p className="list-item__string">{`Email: ${item.email}`}</p>
                            <div className="list-item__divider "></div>
                            <button
                                className="list-item__button"
                                onClick={deleteUser(item.id)}
                            >
                                Удалить
                            </button>
                            <button
                                className="list-item__button"
                                onClick={() => selectEditedUser(item.id)}
                            >
                                Изменить
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <h4>Нет данных</h4>
            )}
            <EditForm
                data={editedUser}
                editUser={editUser}
            ></EditForm>
        </>
    );
};

export default UsersList;
