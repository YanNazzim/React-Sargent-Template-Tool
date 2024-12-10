// Footer.js
import React from 'react';
import "./style/HeaderFooter.css"

function Footer() {
  const handlePhoneClick = (e) => {
    e.preventDefault();
    window.open("tel:1-800-727-5477", "_blank");
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.open("mailto:techsupport.sargent@assaabloy.com", "_blank");
  };

  return (
    <footer className='footer'>
      <a href="tel:1-800-727-5477" onClick={handlePhoneClick}>
        Need Support? <br /> Call 1-800-727-5477 
      </a>
      <p>
        Customer Support - Option 1 <br />
        Technical Support Option 2
      </p>
      <p>
        For Questions/Feedback Email us! <a href="mailto:techsupport.sargent@assaabloy.com" onClick={handleEmailClick}>techsupport.sargent@assaabloy.com</a>
      </p>
    </footer>
  );
}

export default Footer;
