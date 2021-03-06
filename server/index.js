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
app.get('/join', (req, res) => {
  const indexPath = path.resolve(__dirname, '../', 'client/join.html');
  res.sendFile(indexPath);
});
app.get('/snapshot', (req, res) => {
  const indexPath = path.resolve(__dirname, '../', 'client/snapshot.html');
  res.sendFile(indexPath);
});

app.ws('/', (ws, req) => {
  ws.on('message', message => {
    instance.getWss().clients.forEach(client => {
      if (client !== ws) {
        client.send(message);
      }
    });
  });
});


app.listen(8000, () => {
  console.log('listening 8000!');
});
