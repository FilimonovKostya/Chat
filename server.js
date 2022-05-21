const express = require('express')
const { response } = require('express')
const app = express()
const port = 3001

const channels = {}

app.get('/', (req, res) => {
  res.send('Hello my dear Friend')
})

// Url for registration user
app.post('/registration', (req, res) => {
  // console.log('Request', req)
  console.log('response', res)
})

app.listen(port, () => {
  console.log(`🚀 Server is working on ${port} port`)
})
