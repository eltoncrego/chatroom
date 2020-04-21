import React, { useEffect } from 'react';

import './join.scss';
import SiteLogoSVG from '../../assets/site-logo-full';

const Join = () => {

  const getMessages = () => {
    console.log('Getting the messages');
    fetch('/join/messages').then((resp) => {
      resp.text().then((respText) => {
        // alert(respText);
      });
    });
  };

  useEffect(() => {
    document.title = `Bloop • Join a Room`;
    getMessages();
  }, []);
  
  return(
    <div id='login'>
      <SiteLogoSVG className='login__site-logo'/>
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