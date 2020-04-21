import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import './chat.scss';
import formUtils from './../../utils/form-utls';

let socket;
const Chat = ({name, room}) => {
  const ENDPOINT = 'localhost:5000';
  const [messages, setMessages] = useState([]);
  const draft = formUtils.useFormInput('');

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('join', { name, room }, (error) => {
      console.error(error);
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [ENDPOINT, name, room]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]); // TODO: FIX THIS BUG

  const sendMessage = () => {
    let dummyEvent = {};
    dummyEvent.target = {};
    dummyEvent.target.value = ''
    socket.emit('sendMessage', draft, () => draft.onChange(dummyEvent));
  };

  console.log(messages);

  return (
    <div id='chat'>
      <h1>{room}</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        sendMessage();
      }}>
        <input
          type='text'
          name='user-message'
          placeholder='What do you want to say?'
          {...draft}
        ></input>
        <input type='submit' value='send'></input>
      </form>
    </div>
  );
};

export default Chat;