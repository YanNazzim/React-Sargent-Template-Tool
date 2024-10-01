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

  return (
    <header className='header'>
      <img src={logo} alt='Sargent Logo' className='SargentLogo'/>
      <button className="Home" onClick={handleButtonClickHome}>Testing change on netlify app</button>
      <button className="Home" onClick={handleButtonClickBack}>Previous Page</button>
    </header>
  );
}

export default Header;
