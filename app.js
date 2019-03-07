// initialize express
const express = require('express')
const server = express()

// parse incoming application/json request
server.use(express.json())

// GET http://localhost:3000
server.get('/', (req, res) => {
  res.send('Hello world!')
})

// GET http://localhost:3000/1
server.get('/:id', (req, res) => {
  const id = req.params.id
  console.log('id', id)
  res.send('Hello world! ' + id)
})

// POST http://localhost:3000
server.post('/', (req, res) => {
  const body = req.body
  console.log('body', body)
  res.status(201).send()
})

// express listen on port 3000 for any incoming request
server.listen(3000, () => {
  console.log(`server is listening on port 3000`)
})
