import React, { Fragment } from 'react';

const UsersList = ({ data, deleteUser }) => (
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
                        <button className="list-item__button">Изменить</button>
                    </li>
                ))}
            </ul>
        ) : (
            <h4>Нет данных</h4>
        )}
    </>
);

export default UsersList;
