import React, { useState, useEffect } from 'react';

import './global-styles.scss'
import Join from '../join/join';
import MultiView from '../multiview/multiview';

const ChatApp = function() {
  const user = useUserInfo('', '');
  return (
    <div id='chat-app'>
      {user.room === '' || user.name === '' ? <Join nameProp={user.name} roomProp={user.room}/> : <MultiView {...user}/>}
    </div>
  );
};

function useUserInfo(initialName, initialRoom) {
  const [name, setName] = useState(initialName);
  const [room, setRoom] = useState(initialRoom);
  useEffect(() => {
    const user = fetchQueryParams(window.location.href);
    if (user.name) {
      setName(user.name);
    }
    if (user.room) {
      setRoom(user.room);
    }
  }, []);
  
  return {name, room}
}

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