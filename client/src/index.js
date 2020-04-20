import React from 'react';
import ReactDom from 'react-dom';

import ChatApp from './components/chat-app';

ReactDom.render(<ChatApp/>, document.querySelector('#client-root'));