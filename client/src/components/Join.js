import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return(
    <div className='join'>
      <div className='join-container'>
        <h1 className='join__heading'>Join</h1>
        <div>
          <input 
            placeholder='' 
            className='join__input' 
            type='text' 
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <input 
            placeholder='' 
            className='join__input element--margin-16' 
            type='text'
            onChange={(event) => {
              setRoom(event.target.value);
            }}/>
        </div>
        <Link 
          onClick={event => (!name || !room) ? event.preventDefault() : null}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button element--margin-16" type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default Join;