const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 3001

// Turn off all CORS problems with Request on server
app.use(cors())
//  чтобы прочитать request от клиента
app.use(bodyParser())

const chatRooms = {
  // room1: {
  //   user1: {
  //     name: 'Kostya Filimonov',
  //     password: '1234',
  //     email: '@sobaka',
  //     messages: ['Hello Julia'],
  //   },
  //   user2: {
  //     name: 'Julia',
  //     password: 'school',
  //     email: '@queen',
  //     messages: ['Hello Kostya', 'How are you ?'],
  //   },
  // },
}

// Url for registration user
app.post('/registration', (req, res) => {
  const request = req.body
  console.log('request', request)
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
    roomUsers: chatRooms['room1'][req.body.email],
    allChats: chatRooms,
    status: 'OK',
  })
})

// Url for receive messages from user
app.post('/sendMessage', (req, res) => {
  const request = req.body

  console.log('request message', request)
  console.log('Chat room BEFORE 😊😊😊😊😊😊', chatRooms)

  // Added message in chatRooms
  chatRooms['room1'][request.user].messages.push(request.message)

  console.log('Chat room AFTER 😊', chatRooms)


  console.log('ChatRoom messages', chatRooms['room1'][request.user])

  const result = chatRooms['room1'][request.user].messages

  return  res.send({ status: 'Message was received', messages: result })
})

app.listen(port, () => {
  console.log(`🚀   Server is working on ${port} port`)
})
