import React from 'react';
import Logo from './Logo';

const LogoGrid = props =>
  <div className='logo-grid'>
    {props.logos.map((logo, index) => <Logo key = {index} {...logo} />)}
  </div>

export default LogoGrid;