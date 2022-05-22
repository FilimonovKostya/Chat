const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { v1 } = require('uuid')

const app = express()
const port = 3001

// Turn off all CORS problems with Request on server
app.use(cors())
//  чтобы прочитать request от клиента
app.use(bodyParser())

// Logic

const users = {}

const checkUser = (user) => {
  for (let key in users) {
    if (key === user.email) {
      return 'This user already exist'
    }
  }

  const newUser = (users[user.email] = {
    email: user.email,
    password: user.password,
  })

  return { message: 'User was created', newUser }
}

const logInUser = (user) => {
  if (users.hasOwnProperty(user.email)) {
    return { status: 'OK' }
  }

  return { error: 'Not information about this user' }
}

app.get('/', (req, res) => {
  res.send('Hello my dear Friend')
})

// Url for registration user
app.post('/registration', (req, res) => {
  console.log('Request registration page 😈 ---->', req.body)

  console.log('ALL USERS', users)

  const result = checkUser(req.body)

  res.send({ result })
})

// Url for logIn user
app.post('/login', (req, res) => {
  console.log('Request login page 😈 ---->', req.body)

  const result = logInUser(req.body)

  res.send({ result })
})

app.listen(port, () => {
  console.log(`🚀   Server is working on ${port} port`)
})
