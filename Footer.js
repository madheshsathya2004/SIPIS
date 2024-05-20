import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.facebook.com/ifp.pondichery" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        </a>
        <a href="https://x.com/ifp_india" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
