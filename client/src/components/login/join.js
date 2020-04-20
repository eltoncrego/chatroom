import React, { useEffect } from 'react';

import './join.scss';

const Join = () => {

  useEffect(() => {
    document.title = `Bloop • Join a Room`;
  });
  
  return(
    <div id='login'>
      <svg className='login__site-logo' width="180px" height="64px" viewBox="0 0 180 64" version="1.1">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M30,60 C14.536027,60 2,47.463973 2,32 C2,16.536027 14.536027,4 30,4 C45.463973,4 58,16.536027 58,32 C58,47.463973 45.463973,60 30,60 Z M30,52 C41.045695,52 50,43.045695 50,32 C50,20.954305 41.045695,12 30,12 C18.954305,12 10,20.954305 10,32 C10,43.045695 18.954305,52 30,52 Z" id="site-logo" fill="#CE796B" fill-rule="nonzero"></path>
          <text font-family="Poppins-Bold, Poppins" font-size="40" font-weight="bold" fill="#495867">
            <tspan x="62" y="46">bloop</tspan>
          </text>
        </g>
      </svg>
      <form className='login__form'>
        <label className='form__label'>
          Your Name:
          <input 
            className='form__text-input'
            type='text'
            name='name'
            placeholder='Huge Jackedman'/>
        </label>
        <label className='form__label'>
          Room:
          <input 
            className='form__text-input'
            type='text'
            name='room'
            placeholder='Wolver-in Here'/>
        </label>
        <input 
          className='form__btn'
          type='submit'
          value='sign in'/>
      </form>
    </div>
  );
}

export default Join;