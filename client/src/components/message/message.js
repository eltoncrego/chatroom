import React from 'react';

import './message.scss';

const Message = ({ text }) => {
  return(
    <div className='message'>
      {text}
    </div>
  );
};

export default Message;