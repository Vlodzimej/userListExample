import Axios from 'axios';

import { GuidGenerator } from 'helpers';

const getUsers = () => Axios.get('/users');
const createUser = user =>
    Axios.post('/user', { ...user, id: GuidGenerator() });
const deleteUser = id => Axios.delete('/user', { params: { id } });
const editUser = user => Axios.put('/user', { params: user});
export { getUsers, createUser, deleteUser, editUser };
