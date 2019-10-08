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

app.delete('/user', (req, res) => {
    console.log('req', req.query.id);
    users = users.filter(user => user.id !== req.query.id);
    res.sendStatus(200);
});

app.listen(3000, () => console.log('port 3000'));
