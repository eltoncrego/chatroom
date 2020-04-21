import React from 'react';

const SiteLogoSVG = ({ className }) => (
  <svg 
    className={className} 
    width="180px" height="64px" viewBox="0 0 180 64" version="1.1">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(8.000000, 8.000000)" fill="#7DAA92">
        <path d="M42.9242052,34.5 L46,46 L35.0113307,42.6183169 C31.515399,44.7632759 27.4021257,46 23,46 C10.2974508,46 0,35.7025492 0,23 C0,10.2974508 10.2974508,0 23,0 C35.7025492,0 46,10.2974508 46,23 C46,27.1890886 44.8800799,31.1166058 42.9233088,34.4994826 Z" id="Combined-Shape"></path>
      </g>
      <text fontFamily="Poppins-Bold, Poppins" fontSize="40" fontWeight="bold" fill="#7DAA92">
        <tspan x="59" y="46">troop</tspan>
      </text>
    </g>
  </svg>
);

export default SiteLogoSVG;