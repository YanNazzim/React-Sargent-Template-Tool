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
        
        <div className="footer-section contact-info">
          <p className="section-title">Technical Support</p>
          <a 
            href="tel:1-800-727-5477" 
            onClick={handlePhoneClick}
            className="contact-phone"
            title="Call Technical Support"
          >
            1-800-727-5477
          </a>
          <p className="contact-options">
            Customer Support - Option 1 | Technical Support - Option 2
          </p>
        </div>

        <div className="footer-section contact-email">
          <p className="section-title">Get in Touch</p>
          <a 
            href="mailto:techsupport.sargent@assaabloy.com" 
            onClick={handleEmailClick}
            className="contact-email-link"
            title="Email Technical Support"
          >
            techsupport.sargent@assaabloy.com
          </a>
          <p className="copyright">
            © {new Date().getFullYear()} Sargent Manufacturing. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;