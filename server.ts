const express = require('express')

const app = express()

const rooms = new Map()


app.get('/rooms', (req, res) => {
})

app.listen(9999, (error:string) => {
    if (error) {
        throw Error(error)
    }

    console.log('Server is running')
})