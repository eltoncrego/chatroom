import React from 'react';

import './multiview.scss';
import Chat from '../chat/chat';
import InfoPanel from '../info-panel/info-panel';

const MultiView = (user) => {
  return(
    <div id='multiview'>
      <div className='multiview__info-panel'>
        <InfoPanel {...user}/>
      </div>
      <div className='multiview__chat-panel'>
        <Chat {...user}/>
      </div>
    </div>
  );
}

export default MultiView;