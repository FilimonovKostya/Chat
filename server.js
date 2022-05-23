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
  console.log('request',request)
  if (!chatRooms.hasOwnProperty(request.chatRoom)) {
    chatRooms[request.chatRoom] = {
      [request.email]: {
        name: request.name,
        password: request.password,
        messages: [request.message],
      },
    }

    return res.send({ message: 'Room was created', status: 'OK', chatRooms })
  }

  return res.send({message: 'Room already exists', status:'Exists', chatRooms})
})

// Url for logIn user
app.post('/login', (req, res) => {})

app.listen(port, () => {
  console.log(`🚀   Server is working on ${port} port`)
})
