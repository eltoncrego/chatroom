import React, { useEffect } from 'react';
import io from 'socket.io-client';

import './chat.scss';

let socket;
const Chat = ({name, room}) => {
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    socket = io(ENDPOINT);
    console.log(socket);
  }, []);

  return (
    <div id='chat'>
      <h1>{room}</h1>
      <span>Welcome {name} to {room}!</span>
    </div>
  );
};

export default Chat;