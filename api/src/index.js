const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;
const router = require('./router');
const { addUser, getUser, removeUser, getUsersInRoom} = require('./users');

const handler = express();
const server = http.createServer(handler);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log(`${socket.id}: New Connection Instance`);

  socket.on('join', ({ name, room }, callback) => {
    if (!name || !room) {
      callback({ error: `${socket.id}: Either Name of User or Room is Undefined on Server-Side`});
      return;
    }
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) {
      callback(error);
      return;
    }
    socket.emit('message', { user: 'Troop Coordinator', text: `Welcome, ${user.name}, to ${user.room}`});
    socket.broadcast.to(user.room).emit('message', { user: 'Troop Coordinator', text: `${user.name}, has joined the troop!`});
    socket.join(user.room);
    io.emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })
    callback();
  });
  
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit('message', { user: user.name, text: message });
    callback();
  });

  socket.on('disconnect', () => {
    const user = getUser(socket.id);
    removeUser(socket.id);
    console.log(`${socket.id}: A Connection Instance Has Ended`);
    io.to(user.room).emit('message', { user: 'Troop Coordinator', text: `${user.name}, has left the troop!`});
    io.emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
  });
});

handler.use(router);
server.listen(PORT, () => console.log(`Troop server has started. Listening on port ${PORT}`));