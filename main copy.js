
// server.mjs
import { createServer } from 'node:http';
import fs from 'fs'

const server = createServer((req, res) => {
  if (req.url == "/style.css") {
    
  var value = fs.readFileSync("./style.css")
  res.writeHead(200, { 'Content-Type': 'text/css' });
  res.write(value)
  res.end();
  return

  }

    
  var value = fs.readFileSync("./index.html")
  res.writeHead(200, { 'content-type': 'text/html' });
  res.write(value)
  res.end();
});
// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})