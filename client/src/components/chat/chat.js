import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

import './chat.scss';
import formUtils from './../../utils/form-utls';
import Message from './../message/message';

let socket;
const ENDPOINT = 'localhost:5000';

const Chat = ({name, room}) => {
  const draft = formUtils.useFormInput('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const messagesBottomRef = useRef(null);
  
  useConnection(name, room);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const scrollToBottom = () => {
    messagesBottomRef.current.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(scrollToBottom, [messages]);

  const sendMessage = () => {
    if (draft.value !== '') {
      let dummyEvent = {};
      dummyEvent.target = {};
      dummyEvent.target.value = ''
      socket.emit('sendMessage', draft.value, () => draft.onChange(dummyEvent));
    }
  };

  let chatMembers = users.length > 5 ? (<span>You, 5+ others</span>) : users.map((user, index) => {
    if (index === 0) {
      return (<span key={index}>{user.name}</span>);
    } else if (index === users.length - 1) {
      return (<span key={index}>, and {user.name}</span>);
    }
    return (<span key={index}>, {user.name}</span>)
  });

  return (
    <div id='chat'>
      <div className='chat__header'>
        <h1 className='header__title'>{room}</h1>
        <div className='header__members'>{chatMembers}</div>
      </div>
      <div className='chat__content'>
        <div className='chat__messages'>
          {renderMessages(messages, name)}
          <div ref={messagesBottomRef}></div>
        </div>
        <form 
          className='chat__new-message-form'
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage();
          }}
        >
          <input
            className='new-message-form__input'
            type='text'
            name='user-message'
            placeholder='What do you want to say?'
            {...draft}
          />
          <input 
            className='btn btn--send-message'
            type='submit' 
            value='send'
          />
        </form>
      </div>
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

function renderMessages(messages, name) {
  let lastUser = '';
  let continuation = false;
  return messages.map((message, index) => {
    if (message.user === lastUser) {
      continuation = true;
    } else {
      continuation = false;
    }
    lastUser = message.user;
    return (
      <Message 
      key={index} 
      message={message}
      isUser={message.user === name}
      continuation={continuation}/>
    );
  });
}

export default Chat;