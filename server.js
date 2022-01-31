const express = require('express');
const app = express();
const cors = require('cors');
const socket = require('socket.io');

const port = 8888;

app.use(cors());

const chanels = new Map([
    ['rooms', []],
    ['messages', []],
]);

app.get('/', (req, res) => {
    res.json([...chanels.values()])
})

const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

const io = socket.listen(server);

io.on('connection', (socket) => {
    console.log(socket)
    socket.send('Hello!');
})