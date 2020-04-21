import React from 'react';

import './message.scss';

const Message = ({ message, isUser, continuation}) => {
  return(
    <div className={`message__wrapper ${isUser ? 'message--current-user' : null}`}>
      {continuation ? null : <div className='message__user-label text--label'>{isUser ? 'You' : message.user}</div>}
      <div className='message'>
        <div className='message__content'>{message.text}</div>
      </div>
    </div>
  );
};

export default Message;