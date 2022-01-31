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

app.use(express.json())

const rooms = new Map([])

app.get('/rooms', (req, res) => {
    console.log('Request on rooms')
})

app.post('/rooms', (req, res) => {
    const {roomId, userName} = req.body

    if (!rooms.has(roomId)) {
        rooms.set(roomId,
            new Map([
                ['users', new Map()],
                ['messages', []],
            ]))
    }

    res.send()
})

io.on('connection', socket => {
    console.log('socket connected')
})

server.listen('8080', (err) => {
    if (err) {
        throw Error(err)
    }
    console.log('Server is runing');
})

