import React, { useState, useEffect } from 'react';

import './join.scss';
import SiteLogoSVG from '../../assets/site-logo-full';

const Join = ({ onSubmit }) => {
  const name = useFormInput('');
  const room = useFormInput('');

  useEffect(() => {
    document.title = `Troop • Join a Room`;
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
            placeholder='John Snow'
            {...name}/>
        </label>
        <label className='form__label'>
          Room:
          <input 
            className='form__text-input'
            type='text'
            name='room'
            placeholder='Winterfell'
            {...room}/>
        </label>
        <input 
          className='form__btn'
          type='submit'
          value='sign in'
          onClick={(event) => {
            event.preventDefault();
            onSubmit(name.value, room.value);
          }}/>
      </form>
    </div>
  );
}

const useFormInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  }
}

export default Join;