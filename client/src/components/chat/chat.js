import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import './chat.scss';
import formUtils from './../../utils/form-utls';
import Message from './../message/message';

let socket;
const ENDPOINT = 'localhost:5000';

const Chat = ({name, room}) => {
  const draft = formUtils.useFormInput('');
  const [messages, setMessages] = useState([]);
  
  useConnection(name, room);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const sendMessage = () => {
    if (draft.value !== '') {
      let dummyEvent = {};
      dummyEvent.target = {};
      dummyEvent.target.value = ''
      socket.emit('sendMessage', draft.value, () => draft.onChange(dummyEvent));
    }
  };

  let uiMessages = messages.map((message, index) => (
    <Message 
      key={index} 
      message={message}
      isUser={message.user === name}/>
  ));

  return (
    <div id='chat'>
      <h1 className='chat__title'>{room}</h1>
      <div className='chat__messages'>
        {uiMessages}
      </div>
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

function useConnection(name, room) {
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('join', { name, room }, (error) => {
      console.error(error);
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [name, room]);
}

export default Chat;