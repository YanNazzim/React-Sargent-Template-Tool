import React from 'react';
import './style/HeaderFooter.css';
import logo from '../images/Sargent Logo.jpg'; // Import image
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

function Header() {
  const navigate = useNavigate();

  const handleButtonClickBack = () => {
    navigate(-1); // Navigate back one page in history
  };

  const handleButtonClickHome = () => {
    navigate("/"); // Navigate to the home page
  };

  const handleButtonClickLogo = () => {
    window.open("https://www.sargentlock.com/en", "_blank"); // Open in a new tab
  };

  return (
    <header className='header'>
      <img src={logo} alt='Sargent Logo' className='SargentLogo' onClick={handleButtonClickLogo}/>
      <button className="Home" onClick={handleButtonClickHome}>Templates Home Page</button>
      <button className="Home" onClick={handleButtonClickBack}>Previous Page</button>
    </header>
  );
}

export default Header;
