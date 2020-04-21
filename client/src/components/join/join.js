import React, { useEffect } from 'react';

import './join.scss';
import SiteLogoSVG from '../../assets/site-logo-full';
import formUtils from '../../utils/form-utls';

const Join = ({ nameProp, roomProp }) => {
  const name = formUtils.useFormInput(nameProp);
  const room = formUtils.useFormInput(roomProp);

  useEffect(() => {
    document.title = `Troop • Join a Room`;
  }, []);

  return(
    <div id='login'>
      <SiteLogoSVG className='login__site-logo'/>
      <form className='login__form'>
        <label className='form__label text--label'>
          Your Name:
          <input 
            className='form__text-input'
            type='text'
            name='name'
            placeholder='John Snow'
            {...name}/>
        </label>
        <label className='form__label text--label'>
          Room:
          <input 
            className='form__text-input'
            type='text'
            name='room'
            placeholder='Winterfell'
            {...room}/>
        </label>
        <input 
          className='btn'
          type='submit'
          value='sign in'/>
      </form>
    </div>
  );
}

export default Join;