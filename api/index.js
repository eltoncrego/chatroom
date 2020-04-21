const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;
const router = require('./router');

const handler = express();
const server = http.createServer(handler);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log(socket);
  socket.on('disconnect', () => {
    console.log('User has disconnected');
  });
});

handler.use(router);
server.listen(PORT, () => console.log(`Troop server has started. Listening on port ${PORT}`))