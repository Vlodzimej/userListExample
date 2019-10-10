import React, { useState } from 'react';

import { createUser } from 'source';

import { showError } from 'utils';

const Form = props => {
    const [user, setUser] = useState({
        firstName: '',
        secondName: '',
        email: '',
    });

    const changeValue = field => ({ target }) =>
        setUser({ ...user, [field]: target.value });

    const onSubmit = e => {
        e.preventDefault();

        const { updateUsersList } = props;

        createUser(user)
            .then(() => {
                updateUsersList();
            })
            .catch(showError);
    };

    return (
        <form onSubmit={onSubmit} className="form-container">
            <label className="input-container">
                <span className="input-container__name">Имя</span>
                <input
                    type="text"
                    onChange={changeValue('firstName')}
                    className="input-container__field"
                />
            </label>
            <label className="input-container">
                <span className="input-container__name">Фамилия</span>
                <input
                    type="text"
                    onChange={changeValue('secondName')}
                    className="input-container__field"
                />
            </label>
            <label className="input-container">
                <span className="input-container__name">Email</span>
                <input
                    type="email"
                    onChange={changeValue('email')}
                    className="input-container__field"
                />
            </label>
            <button className="form-container__submit">Сохранить</button>
        </form>
    );
};

export default Form;
