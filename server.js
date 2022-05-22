const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 3001

// Turn off all CORS problems with Request on server
app.use(cors())
//  чтобы прочитать request от клиента
app.use(bodyParser())

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

  return { message: 'User was created', newUser, status: 'OK' }
}

const logInUser = (user) => {
  if (users.hasOwnProperty(user.email)) {
    return { status: 'OK' }
  }

  return { error: 'Not information about this user' }
}

// Url for registration user
app.post('/registration', (req, res) => {
  const result = checkUser(req.body)
  res.send(result)
})

// Url for logIn user
app.post('/login', (req, res) => {
  const result = logInUser(req.body)
  res.send(result)
})

app.listen(port, () => {
  console.log(`🚀   Server is working on ${port} port`)
})
