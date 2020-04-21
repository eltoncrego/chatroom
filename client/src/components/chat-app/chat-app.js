import React, { useState } from 'react';

import './global-styles.scss'
import Join from '../login/join';
import Chat from '../chat/chat';

const ChatApp = function() {
  const [room, setRoom] = useState('');
  const [name, setName] = useState('');

  const handleJoin = (name, room) => {
    setRoom(room);
    setName(name);
  };

  return (
    <div id='chat-app'>
      {room === ''? <Join onSubmit={handleJoin}/> : <Chat name={name} room={room}/>}
    </div>
  );
};

export default ChatApp;