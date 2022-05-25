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

    return res.send({ message: 'Room was created', status: 'OK', chatRooms })
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
      message: `New user was added in ${request.chatRoom}`,
      status: 'OK',
      chatRooms,
    })
  }
})

// Url for logIn user
app.post('/login', (req, res) => {
  return res.send({
    roomUsers: chatRooms[req.body.chatRoom][req.body.email],
    allChats: chatRooms,
    status: 'OK',
  })
})

// Url for receive messages from user
app.post('/messages', (req, res) => {
  const request = req.body

  // Added message in chatRooms
  chatRooms[request.chatRoom][request.user].messages.push(request.message)

  const result =
    chatRooms[request.chatRoom][request.user].messages[
      chatRooms[request.chatRoom][request.user].messages.length - 1
    ]

  return res.send({ status: 'Message was received', messages: [result], chatRooms })
})

// Url from getting messages on client
app.get('/messages', (req, res) => {
  const request = req.query

  const result = chatRooms[request.chatRoom][request.user].messages

  res.send({ result, request, message: 'get messages' })
})

app.listen(port, () => {
  console.log(`🚀   Server is working on ${port} port`)
})
