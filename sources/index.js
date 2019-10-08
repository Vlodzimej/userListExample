import Axios from 'axios';

import { GuidGenerator } from 'helpers';

const getUsers = () => Axios.get('/users');
const createUser = user =>
    Axios.post('/user', { ...user, id: GuidGenerator() });
const deleteUser = id => Axios.delete('/user', { params: { id } });

export { getUsers, createUser, deleteUser };
