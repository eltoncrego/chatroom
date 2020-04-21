import React from 'react';

import './message.scss';

const Message = ({ message, isUser }) => {
  return(
    <div className={`message__wrapper ${isUser ? 'message--current-user' : null}`}>
      <div className='message__user-label text--label'>{message.user}</div>
      <div className='message'>
        <div className='message__content'>{message.text}</div>
      </div>
    </div>
  );
};

export default Message;