// Header.js
import React from 'react';
import './style/HeaderFooter.css';
import logo from '../images/Sargent Logo.jpg'; // Import image

function Header() {
  return (
    <header className='header'>
      <img src={logo} alt='Sargent Logo' className='SargentLogo'/>
      <h1>Templates Tool</h1>
    </header>
  );
}

export default Header;
