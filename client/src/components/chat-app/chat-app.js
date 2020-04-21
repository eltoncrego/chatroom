import React, { useState, useEffect } from 'react';

import './global-styles.scss'
import Join from '../join/join';
import Chat from '../chat/chat';

const ChatApp = function() {
  const [room, setRoom] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const user = fetchQueryParams(window.location.href);
    if (user.name) {
      setName(user.name);
    }
    if (user.room) {
      setRoom(user.room);
    }
  }, []);

  return (
    <div id='chat-app'>
      {room === '' || name === '' ? <Join nameProp={name} roomProp={room}/> : <Chat name={name} room={room}/>}
    </div>
  );
};

function fetchQueryParams(url) {
  const validParams = ['name', 'room'];

  let userObject = {};
  const queryString = url.split('?')[1];
  if (queryString) {
    const params = queryString.split('&');
    if (params.length) {
      params.forEach((param) => {
        param = param.split('=');
        if (validParams.includes(param[0])) {
          userObject[param[0]] = decodeURIComponent(param[1]).replace(/\+/g, ' ');
        }
      });
    }
  }
  return userObject;
}

export default ChatApp;