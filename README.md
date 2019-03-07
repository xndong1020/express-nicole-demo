# Create an Express project from scratch

## step 01: init project

create a package.json
```
npm init -y //这里加-y就可以使用default setting创建package.json，否则要手动一项一项填写创建
```

install express
```js
npm i express
//这里使用-D表示只在develope env里面有效。上production的时候可以不使用它；
//nodemon是在你make changes的时候帮你自动刷新page
npm i -D nodemon 
```

## step 02: create our server file
./app.js

create an instance of express
```js
const express = require('express')
const server = express()
```

add bodyParser middleware, in order to parse incoming application/json request
```
server.use(express.json())
```

## step 03: express listen on a port number for accepting incoming request
```js
server.listen(3000, () => {
  console.log(`server is listening on port 3000`)
})

```


## step 04: add our route handler/controller
```js
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
```

## step 05. add application start script to package.json
```js
...
"scripts": {
    "start": "nodemon ./app.js"
  },
...
```
