const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 3001

// Turn off all CORS problems with Request on server
app.use(cors())
//  чтобы прочитать request от клиента
app.use(bodyParser())

const chatRooms = {}

// Url for registration user
app.post('/registration', (req, res) => {
  const request = req.body

  if (!chatRooms.hasOwnProperty(request.chatRoom)) {
    chatRooms[request.chatRoom] = {
      [request.email]: {
        name: request.email,
        password: request.password,
        messages: [],
      },
    }

    return res.send({ status: 'OK' })
  }

  if (
    chatRooms.hasOwnProperty(request.chatRoom) &&
    Object.keys(chatRooms[request.chatRoom]).length >= 1
  ) {
    chatRooms[request.chatRoom] = {
      ...chatRooms[request.chatRoom],
      [request.email]: {
        name: request.email,
        password: request.password,
        messages: [],
      },
    }

    return res.send({
      status: 'OK',
      message: `New user was added in ${request.chatRoom}`,
    })
  }

  res.send({ status: 'Error in registration' })
})

// Url for logIn user
app.post('/login', (req, res) => {
  const request = req.body

  if (!chatRooms[request.chatRoom].hasOwnProperty(request.email)) {
    return res.send({ status: 'Not found the user', chatRooms })
  }

  if (chatRooms[request.chatRoom][request.email].password !== request.password) {
    return res.send({ status: 'Incorrect password', chatRooms })
  }

  res.send({
    roomUsers: chatRooms[request.chatRoom][request.email],
    allChats: chatRooms,
    status: 'OK',
  })
})

// Url for receive messages from user
app.post('/messages', (req, res) => {
  const request = req.body
  const room = chatRooms[request.chatRoom][request.user]

  // Added message in chatRooms
  room.messages.push(request.message)

  const result = room.messages[room.messages.length - 1]

  res.send({ messages: [result] })
})

// Url from getting messages on client
app.get('/messages', (req, res) => {
  const request = req.query

  const result = chatRooms[request.chatRoom][request.user.replaceAll(' ', '')].messages

  res.send({ result })
})

app.listen(port, () => {
  console.log(`🚀   Server is working on ${port} port`)
})
