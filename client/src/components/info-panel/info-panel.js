import React from 'react';

import './info-panel.scss';
import SiteLogoSVG from '../../assets/site-logo-full';

const InfoPanel = ({ name, room }) => {
  return(
    <div id='info-panel'>
      <div className='info-panel__header'>
        <SiteLogoSVG/>
      </div>
      <div className='info-panel__content'>
        <h1 className='info-panel__name'>Hi {name}!</h1>
        <div className='info-panel__desc'></div>
      </div>
    </div>
  );
};

export default InfoPanel;