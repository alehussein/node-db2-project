const express = require("express")
const carRouter = require('./cars/cars-router')
const server = express()



server.use(express.json()) ///eye

server.use('/api/cars', carRouter)

// DO YOUR MAGIC


server.get('/', (req, res) => {
    res.send(`<h1>Hello</h1>`)
})

module.exports = server
