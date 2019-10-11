import React, { Fragment, useState, useEffect } from 'react';

import editUser from 'source';

const EditForm = ({ data, editUser }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(data);
    }, [data]);

    const onSubmit = e => {
        e.preventDefault();
        editUser(user);
        setUser(null);
    };

    const onClose = () => {
        setUser(null);
    };

    const changeValue = field => ({ target }) =>
        setUser({ ...user, [field]: target.value });

    return (
        <>
            {user !== null && (
                <div className="edit-form-container">
                    <div className="edit-form">
                        <form onSubmit={onSubmit} className="form-container">
                            <label className="input-container">
                                <span className="input-container__name">
                                    Имя
                                </span>
                                <input
                                    type="text"
                                    onChange={changeValue('firstName')}
                                    className="input-container__field"
                                    value={user.firstName}
                                />
                            </label>
                            <label className="input-container">
                                <span className="input-container__name">
                                    Фамилия
                                </span>
                                <input
                                    type="text"
                                    onChange={changeValue('secondName')}
                                    className="input-container__field"
                                    value={user.secondName}
                                />
                            </label>
                            <label className="input-container">
                                <span className="input-container__name">
                                    Email
                                </span>
                                <input
                                    type="email"
                                    onChange={changeValue('email')}
                                    className="input-container__field"
                                    value={user.email}
                                />
                            </label>
                            <button className="form-container__button">
                                Изменить
                            </button>
                            <button
                                className="form-container__button"
                                onClick={onClose}
                            >
                                Закрыть
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default EditForm;
