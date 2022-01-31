const express = require('express');
const http = require('http')
const app = express();
const server = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        credentials: true
    }
})

const rooms = new Map()

app.get('/rooms', (req, res) => {
    console.log('Request on rooms')
    res.json(rooms)
})

io.on('connection', socket => {
    console.log('socket connected')
})

server.listen('8080', (err) => {
    if(err){
        throw Error(err)
    }
    console.log('Server is runing');
})

