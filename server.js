const { join } = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data');

const app = express();

let users = data.users;

app.use(bodyParser());

app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/user', (req, res) => {
    users.push(req.body);
    res.sendStatus(200);
});

app.put('/user', (req, res) => {
    const editedUser = req.body.params;
    const userIndex = users.findIndex(user => user.id === editedUser.id);
    if (userIndex > -1) {
        users[userIndex] = editedUser;
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    }
});

app.delete('/user', (req, res) => {
    users = users.filter(user => user.id !== req.query.id);
    res.sendStatus(200);
});

app.listen(3000, () => console.log('port 3000'));
