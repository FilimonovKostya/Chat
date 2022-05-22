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

  users[user.email] = {
    email: user.email,
    password: user.password,
  }

  return users
}

app.get('/', (req, res) => {
  res.send('Hello my dear Friend')
})

// Url for registration user
app.post('/registration', (req, res) => {
  console.log('Request 😈 ---->', req.body)

  const result = checkUser(req.body)

  res.send({ result })
})

app.listen(port, () => {
  console.log(`🚀   Server is working on ${port} port`)
})
