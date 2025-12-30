// src/components/Footer.js
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
      <div className="footer-content-wrapper">
        
        {/* Tech Support Section */}
        <div className="footer-section glass-panel">
          <div className="icon-wrapper">📞</div>
          <p className="section-title">Technical Support</p>
          <a 
            href="tel:1-800-727-5477" 
            onClick={handlePhoneClick}
            className="contact-highlight"
          >
            1-800-727-5477
          </a>
          <p className="contact-subtext">
            Option 1: Customer Support <br/> Option 2: Technical Support
          </p>
        </div>

        {/* Email Section */}
        <div className="footer-section glass-panel">
          <div className="icon-wrapper">✉️</div>
          <p className="section-title">Email Support</p>
          <a 
            href="mailto:techsupport.sargent@assaabloy.com" 
            onClick={handleEmailClick}
            className="contact-highlight email-text"
          >
            techsupport.sargent@assaabloy.com
          </a>
          <p className="contact-subtext">
            We aim to respond within 4 hours.
          </p>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p className="copyright">
          © {new Date().getFullYear()} Sargent Manufacturing. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;