const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const { addUser, removeUser, getUser, getUsersForRoom } = require('./users.js');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const user = addUser({ id: socket.id, name, room });

    if (user.error) {
      return callback(user.error);
    }
    console.log(`New client, ${user.name} connected to room: ${user.room}!`);
    socket.join(user.room);
  });
  
  socket.on('disconnect', () => {
    console.log(`Client has disconnected!`);
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));