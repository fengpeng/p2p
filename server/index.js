const http = require('http');
const path = require('path');
const express = require('express');
const expressWs = require('express-ws');

const app = express();
const instance = expressWs(app);


app.get('/', (req, res) => {
  const indexPath = path.resolve(__dirname, '../', 'client/index.html');
  res.sendFile(indexPath);
});

app.ws('/', (ws, req) => {
  ws.on('message', message => {
    console.log(message);
  });
});


app.listen(8000, () => {
  console.log('listening 3000!');
});