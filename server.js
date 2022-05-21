const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello my dear Friend')
})

app.listen(port, () => {
  console.log(`Server is working on ${port} port`)
})
