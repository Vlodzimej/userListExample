import React from 'react';

const UsersList = ({ data, deleteUser }) => (
    <div>
        {data.length !== 0 ? (
            <ul className="list">
                {data.map((item, index) => (
                    <li key={index} className="list-item">
                        <p className="list-item__string">{`First name: ${item.firstName}`}</p>
                        <p className="list-item__string">{`Second name: ${item.secondName}`}</p>
                        <p className="list-item__string">{`Email: ${item.email}`}</p>
                        <button onClick={deleteUser(item.id)}>Удалить</button>
                        <button>Изменить</button>
                    </li>
                ))}
            </ul>
        ) : (
            <h4>Нет данных</h4>
        )}
    </div>
);

export default UsersList;
