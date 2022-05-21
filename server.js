const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 3001

// Turn off all CORS problems with Request on server
app.use(cors())
//  чтобы прочитать request от клиента
app.use(bodyParser())

app.get('/', (req, res) => {
  res.send('Hello my dear Friend')
})

// Url for registration user
app.post('/registration', (req, res) => {
  console.log('Request 😈 ---->', req.body)

  res.send('Request OK')
})

app.listen(port, () => {
  console.log(`🚀   Server is working on ${port} port`)
})
