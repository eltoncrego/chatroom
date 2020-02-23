import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return(
    <div className='join'>
      <div className='join-container'>
        <svg className='join__heading' width="45px" height="41px" viewBox="0 0 45 41" version="1.1">
          <g transform="translate(-434.000000, -1268.000000)" fill="#5BC8AF">
              <g transform="translate(434.000000, 1268.000000)">
                  <path d="M35.72,3.4 C39.0337085,3.4 41.72,6.0862915 41.72,9.4 L41.72,25.4 C41.72,28.7137085 39.0337085,31.4 35.72,31.4 L17.47,31.4 L10.72,37.4 L10.72,31.4 L9.72,31.4 C6.4062915,31.4 3.72,28.7137085 3.72,25.4 L3.72,9.4 C3.72,6.0862915 6.4062915,3.4 9.72,3.4 L35.72,3.4 L35.72,3.4 Z M35.72,0.4 L9.72,0.4 C4.74943725,0.4 0.72,4.42943725 0.72,9.4 L0.72,25.4 C0.717649135,29.6018973 3.62316593,33.2462455 7.72,34.18 L7.72,37.4 C7.71844756,38.5837664 8.41314863,39.6577653 9.49345862,40.1417441 C10.5737686,40.625723 11.8376728,40.4291793 12.72,39.64 L18.62,34.4 L35.72,34.4 C40.6905627,34.4 44.72,30.3705627 44.72,25.4 L44.72,9.4 C44.72,4.42943725 40.6905627,0.4 35.72,0.4 L35.72,0.4 Z" id="Shape"></path>
                  <circle cx="22.72" cy="17.4" r="1.5"></circle>
                  <circle cx="32.72" cy="17.4" r="1.5"></circle>
                  <circle cx="12.84" cy="17.4" r="1.5"></circle>
              </g>
          </g>
        </svg>
        <div className='join__form'>
          <div>
            <input 
              placeholder="What's your name?"
              className='join__input' 
              type='text' 
              onChange={(event) => {
                setName(event.target.value);
              }}
              autoFocus
            />
          </div>
          <div>
            <input 
              placeholder='What room do you want to join?' 
              className='join__input' 
              type='text'
              onChange={(event) => {
                setRoom(event.target.value);
              }}/>
          </div>
        </div>
        <Link 
          onClick={event => (!name || !room) ? event.preventDefault() : null}
          to={`/chat?name=${name}&room=${room}`}
          className="button__container--join"
        >
          <button className="button button--join" type="submit">Sign In!</button>
        </Link>
      </div>
    </div>
  );
}

export default Join;