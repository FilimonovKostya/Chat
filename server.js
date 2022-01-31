const express = require('express');
const app = express();

const port = 8888;

const chanels = new Map([
 
])

app.get('/rooms', (req, res) => {
    console.log('Request on rooms')
    res.json(chanels)
})

app.listen(port, (err) => {
    if(err){
        throw Error(err)
    }
    console.log('Server is runing');
})

