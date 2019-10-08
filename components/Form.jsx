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
        <form onSubmit={onSubmit}>
            <label>
                Имя
                <input type="text" onChange={changeValue('firstName')} />
            </label>
            <label>
                Фамилия
                <input type="text" onChange={changeValue('secondName')} />
            </label>
            <label>
                Email
                <input type="email" onChange={changeValue('email')} />
            </label>
            <button>Сохранить</button>
        </form>
    );
};

export default Form;
